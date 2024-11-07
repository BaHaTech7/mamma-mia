import React from 'react'
import {Route, Routes} from "react-router-dom";
import Layout from "./views/Layout/Layout";
import Home from "./views/Home/Home";
import PizzaDetail from "./views/PizzaDetail/PizzaDetail";
import Cart from "./views/Cart/Cart";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>

                <Route index element={<Home />} />

                <Route path="/home"  element={<Home />} />
                <Route path="/pizza/:id" element={<PizzaDetail />} />
                <Route path="/carrito" element={<Cart />} />
            </Route>
        </Routes>
    )
}

export default App