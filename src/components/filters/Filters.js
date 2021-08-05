import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getOrderStatus } from "../../actions/index";
import styles from "./styles.module.css";

const Filters = () => {
  const [filter, setFilter] = useState();
  // console.log(filter);
  const handleFilter = (e) => {
    setFilter(e.target.value);
  };
  const dispatch = useDispatch();
  const getActive = () => {
    dispatch(getOrderStatus(filter));
  };
  useEffect(() => {
    getActive();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);
  return (
    <select
      className={styles.filter_select}
      name="filter"
      onChange={(e) => handleFilter(e)}
    >
      <option>Activo/Inactivo</option>
      <option value={1}>Activos</option>
      <option value={0}>Inactivos</option>
    </select>
  );
};

export default Filters;
