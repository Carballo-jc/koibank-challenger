import React from "react";

const TableRow = ({ data }) => {
    return (
        <tr>
            <td>{data.id}</td>
            <td>{data.comercio}</td>
            <td>{data.cuit}</td>
            <td>{data.concepto}</td>
            <td>{data.balance}</td>
            <td>{data.status}</td>
        </tr>
    );
};

export default TableRow;