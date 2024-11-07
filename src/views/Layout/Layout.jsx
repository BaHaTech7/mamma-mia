import React from 'react'
import {Outlet} from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const Layout = () => {

    return (
        <div className="container-xxl">
            <header>
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )

}

export default Layout