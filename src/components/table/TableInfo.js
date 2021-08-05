import React,{useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getAllData } from '../../actions';
import TableHeadItem from   './TableHeadItem'
import TableRow from './TableRow'
import styles from './styles.module.css'

const TableInfo = () => {
    const dispatch = useDispatch();
    const getTableData = () =>{
        dispatch(getAllData())
    }

    useEffect(() => {
      getTableData();
      //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const theadData = ["ID", "Comercio", "CUIT","Concepto","Balance actual","Activo","Ultima Venta"];
    const tbodyData = useSelector((state) => state.allData);
  
    return (
        <table className={styles.table} >
            <thead>
                <tr className={styles.tr}>
                    {theadData?.map((item,index) => {
                        return <TableHeadItem key={index} item={item}  className={styles.td}  />;
                    })}
                </tr>
            </thead>
            <tbody>
                {tbodyData?.map((item) => {
                    return <TableRow key={item.id} data={item} />;
                })}
            </tbody>
        </table>
    );
}

export default TableInfo;
