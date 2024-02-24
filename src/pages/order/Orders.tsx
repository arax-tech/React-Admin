import { Column } from "react-table";
import { ReactElement, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import TableHOC from "../components/TableHOC";

interface DataType {
    user: string;
    amount: number;
    discount: number;
    quantity: number;
    status: ReactElement;
    action: ReactElement;
}

const columns: Column<DataType>[] = [
    {
        Header: "Avatar",
        accessor: "user",
    },
    {
        Header: "Amount",
        accessor: "amount",
    },
    {
        Header: "Discount",
        accessor: "discount",
    },
    {
        Header: "Quantity",
        accessor: "quantity",
    },
    {
        Header: "Status",
        accessor: "status",
    },
    {
        Header: "Action",
        accessor: "action",
    },
];

const arr: DataType[] = [
    {
        user: "Charas",
        amount: 4500,
        discount: 400,
        quantity: 3,
        status: <span className="red">Processing</span>,
        action: <Link to="/admin/order/1">View</Link>,
    },
    {
        user: "Xavirors",
        amount: 6999,
        discount: 400,
        status: <span className="green">Shipped</span>,
        quantity: 6,
        action: <Link to="/admin/order/1">View</Link>,
    },
    {
        user: "Xavirors",
        amount: 6999,
        discount: 400,
        status: <span className="purple">Delivered</span>,
        quantity: 6,
        action: <Link to="/admin/order/1">View</Link>,
    },
];

const Orders = () => {
    const [data] = useState<DataType[]>(arr);

    const Table = useCallback(
        TableHOC<DataType>(
            columns,
            data,
            "dashboard-product-box",
            "Orders",
            true
        ),
        []
    );

    return (
        <>
            {Table()}
        </>
    );
};

export default Orders;
