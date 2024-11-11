import React, {useContext, useEffect} from 'react'
import {Outlet} from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import {PizzeriaContext} from "../../context/PizzeriaProvider";
import axios from "axios";
import {config} from "../../services/catalogo";

const Layout = () => {

    const {setCatalogo} = useContext(PizzeriaContext)

    useEffect( () => {
        const asignarCatalogoContexto = async() => {
            try {
                const {data} = await axios.get(config.url)
                setCatalogo(data)
            }
            catch (error) {

            }
        }
        asignarCatalogoContexto()
    }, [])

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