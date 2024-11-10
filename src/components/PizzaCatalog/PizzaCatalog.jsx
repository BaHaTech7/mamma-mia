import React from 'react'
import "./pizza_catalog.scss"
import Ingredients from "../Ingredients/Ingredients";

const PizzaCatalog = () => {
    return (
        <div className="row mt-5">
            <article className="col-12 col-md-6 col-lg-4 col-xl-3 mb-3">
                <div className="card">
                    <img src="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h3 className="card-title">Pizza Genérica</h3>
                            <hr />
                            <h5 className="card-title">Ingredientes</h5>
                            <Ingredients />
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <h2 className="my-3">$ 5.000</h2>
                                <div className="mb-2">
                                    <button className="btn btn-info color-info">
                                        👀 Ver Más
                                    </button>
                                    &nbsp; &nbsp; &nbsp; &nbsp;
                                    <button className="btn btn-danger">
                                        <i className="icono-carro fa-solid fa-cart-shopping"></i> Añadir
                                    </button>
                                </div>
                            </li>
                        </ul>
                </div>
            </article>
        </div>
    )
}

export default PizzaCatalog