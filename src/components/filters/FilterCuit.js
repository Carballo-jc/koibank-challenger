import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getOrderCuit } from "../../actions/index";
import styles from "./styles.module.css";

const FilterCuit = () => {
  const [cuit, setCuit] = useState();
  const handleFilter = (e) => {
    setCuit(e.target.value);
  };
  const dispatch = useDispatch();
  const getCuit = () => {
    dispatch(getOrderCuit(cuit));
  };
  useEffect(() => {
    getCuit();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cuit]);
  return (
    <select
      className={styles.filter_select}
      name="cuit"
      onChange={(e) => handleFilter(e)}
    >
      <option>CUIT</option>
      <option value="MAYOR">Mayor</option>
      <option value="MENOR">Menor</option>
    </select>
  );
};

export default FilterCuit;
