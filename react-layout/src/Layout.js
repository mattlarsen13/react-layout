import {Outlet, Link} from "react-router-dom";
import Header from "./components/Header";


const Layout = () => {
    return(
        <>
            <Header />

            <Outlet />

            <p>This is my footer</p>
        </>
    );
};

export default Layout;