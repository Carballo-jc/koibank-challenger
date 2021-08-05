import React from "react";
import FilterCommerce from "../filters/FilterCommerce";
import FilterCuit from "../filters/FilterCuit";
import Filters from '../filters/Filters';

import styles from './styles.module.css'

const TableHeadItem = ({ item}) => {
 
  
    return (
        <td title={item}  className={styles.td} >
            
        {
            item === "Activo" ? <Filters /> :
            item === "CUIT" ? <FilterCuit /> : 
            item === "Comercio" ? <FilterCommerce   />:
            item
        }
        </td>
    );
};

export default TableHeadItem;