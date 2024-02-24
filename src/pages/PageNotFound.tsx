import { Link } from "react-router-dom";
const PageNotFound = () => {
    return (
        <>
            <section className="widget-container">
                <h2>404 - Page Not Found...<br /><Link className="btn" to='/admin/dashboard'>Back</Link></h2>

            </section>

        </>
    );
}

export default PageNotFound


