import React from 'react'
import Ingredients from "../Ingredients/Ingredients";
import "./pizza_detail_card.scss"

const PizzaDetailCard = () => {
    return (
        <div className="card mb-3 mt-5">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c" className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h3 className="card-title">Pizza Genérica</h3>
                        <hr />
                        <p className="card-text">La pizza es una preparación culinaria que consiste en un pan plano, habitualmente de forma circular, elaborado con harina de trigo, levadura, agua y sal (a veces aceite de oliva) que comúnmente se cubre con salsa de tomate, queso y otros muchos ingredientes, y que se hornea a alta temperatura, tradicionalmente en un horno de leña.</p>
                        <h5 className="card-title">Ingredientes:</h5>
                        <Ingredients />
                        <div className="operaciones mt-4">
                            <h2>Precio: $5.990</h2>
                            <button className="btn btn-danger">
                                <i className="icono-carro fa-solid fa-cart-shopping"></i> Añadir
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PizzaDetailCard