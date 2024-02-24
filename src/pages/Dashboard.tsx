import CategoryItem from "./components/CategoryItem";
import { BarChart, DoughnutChart } from "./components/Charts";
import WidgetItem from "./components/WidgetItem";

import { BiMaleFemale } from "react-icons/bi";
import data from "../assets/data.json";
import DataTable from "./components/DataTable";
const Dashboard = () => {
    return (
        <>
            <section className="widget-container">
                <WidgetItem
                    percent={40}
                    amount={true}
                    value={340000}
                    heading="Revenue"
                    color="rgb(0,115,255)"
                />
                <WidgetItem
                    percent={-14}
                    value={400}
                    heading="Users"
                    color="rgb(0 198 202)"
                />
                <WidgetItem
                    percent={80}
                    value={23000}
                    heading="Transactions"
                    color="rgb(255 196 0)"
                />
                <WidgetItem
                    percent={30}
                    value={1000}
                    heading="Products"
                    color="rgb(76 0 255)"
                />
            </section>

            <section className="graph-container">
                <div className="revenue-chart">
                    <h2>Revenue & Transaction</h2>
                    {/* Grapph here */}
                    <BarChart
                        data_2={[300, 144, 433, 655, 237, 755, 190]}
                        data_1={[200, 444, 343, 556, 778, 455, 990]}
                        title_1="Revenue"
                        title_2="Transaction"
                        bgColor_1="rgb(0,115,255)"
                        bgColor_2="rgba(53,162,235,0.8)"
                    />
                </div>

                <div className="dashboard-categories">
                    <h2>Inventory</h2>
                    <div>
                        {data.categories.map((i) => (
                            <CategoryItem
                                key={i.heading}
                                heading={i.heading}
                                value={i.value}
                                color={`hsl(${i.value * 4},${i.value}%,50%)`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section className="transaction-container">
                <div className="gender-chart">
                    <h2>Gender Ratio</h2>

                    <DoughnutChart
                        labels={["Female", "Male"]}
                        data={[12, 19]}
                        backgroundColor={["hsl(340,82%,56%)", "rgba(53,162,235,0.8)"]}
                        cutout={90}
                    />

                    <p>
                        <BiMaleFemale />
                    </p>
                </div>

                <DataTable data={data.transaction} />
            </section>
        </>
    );
}

export default Dashboard


