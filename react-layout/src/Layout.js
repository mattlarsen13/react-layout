import {Outlet, Link} from "react-router-dom";
import Header from "./components/Header";


const Layout = () => {
    return(
        <>
            <Header />

            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/pictures">Pictures</Link>

            <Outlet />

            <p>This is my footer</p>
        </>
    );
};

export default Layout;