import { ReactElement, useCallback, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom"
import TableHOC from "../components/TableHOC";
import { Column } from "react-table";



interface DataType {
    photo: ReactElement;
    name: string;
    price: number;
    stock: number;
    action: ReactElement;
}

const columns: Column<DataType>[] = [
    {
        Header: "Photo",
        accessor: "photo",
    },
    {
        Header: "Name",
        accessor: "name",
    },
    {
        Header: "Price",
        accessor: "price",
    },
    {
        Header: "Stock",
        accessor: "stock",
    },
    {
        Header: "Action",
        accessor: "action",
    },
];

const img =
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804";

const img2 = "https://m.media-amazon.com/images/I/514T0SvwkHL._SL1500_.jpg";

const arr: DataType[] = [
    {
        photo: <img src={img} alt="Shoes" />,
        name: "Puma Shoes Air Jordan Cook Nigga 2023",
        price: 690,
        stock: 3,
        action: <>
            <Link to="/admin/product/edit/1">Update</Link>
            <Link to="/admin/product/sajknaskd">Delete</Link>
        </>,
    },

    {
        photo: <img src={img2} alt="Shoes" />,
        name: "Macbook",
        price: 232223,
        stock: 213,
        action: <>
            <Link to="/admin/product/edit/1">Update</Link>
            <Link to="/admin/product/sajknaskd">Delete</Link>
        </>,
    }
];
const Product = () => {
    const [data] = useState<DataType[]>(arr);

    const Table = useCallback(
        TableHOC<DataType>(
            columns,
            data,
            "dashboard-product-box",
            "Products",
            true
        ),
        []
    );

    return (
        <>
            {Table()}
            <Link to="/admin/product/create" className="create-product-btn">
                <FaPlus />
            </Link>
        </>
    )
}

export default Product
