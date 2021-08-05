import React, { useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllData } from "../../actions";
import Paginate from "../../paginate/Paginate";
import TableHeadItem from "./TableHeadItem";
import TableRow from "./TableRow";
import styles from "./styles.module.css";

const TableInfo = () => {
  const theadData = [
    "ID",
    "Comercio",
    "CUIT",
    "Concepto",
    "Balance actual",
    "Activo",
    "Ultima Venta",
  ];
  const tbodyData = useSelector((state) => state.allData);

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(20);
  const dispatch = useDispatch();

  let totalPages = Math.ceil(tbodyData.length / 20);
  let pages = [];
  for (let index = 1; index <= totalPages; index++) {
    pages.push(index);
  }
  const handleClick = (e) => {
    e.preventDefault();
    setMin((e.target.id - 1) * 20);
    setMax(e.target.id * 20);
  };

  
  const getTableData = () => {
    dispatch(getAllData());
  };

  useEffect(() => {
    getTableData();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
      <div className={styles.container}>
    <table className={styles.table}>
      <thead>
        <tr className={styles.tr}>
          {theadData?.map((item, index) => {
            return (
              <TableHeadItem key={index} item={item} className={styles.td} />
            );
          })}
        </tr>
      </thead>
      <tbody>
        {tbodyData?.map((item) => {
          return <TableRow key={item.id} data={item} />;
        }).slice(min, max)}
      </tbody>
    </table>
      <Paginate pages={pages} handleClick={handleClick} />
</div>
  );
};

export default TableInfo;
