import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setOrderAZ } from "../../actions/index";
import styles from "./styles.module.css";

const FilterComercio = () => {
  const [commerce, setCommerce] = useState();
  const handleFilter = (e) => {
    setCommerce(e.target.value);
  };
  const dispatch = useDispatch();
  const allOrder = () => {
    dispatch(setOrderAZ(commerce));
  };
  useEffect(() => {
    allOrder();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [commerce]);
  return (
    <select
      className={styles.filter_select}
      name="filter"
      onChange={(e) => handleFilter(e)}
    >
      <option>Comercio</option>
      <option value='A-Z'>ordenar A-Z</option>
      <option value='Z-A'>ordenar Z-A</option>
    </select>
  );
};

export default FilterComercio;
