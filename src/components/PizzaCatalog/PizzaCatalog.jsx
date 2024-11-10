import React from 'react'
import "./pizza_catalog.scss"

const PizzaCatalog = () => {
    return (
        <div className="row mt-5">
            <article className="col-12">
                <div className="card">
                    <img src="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h2 className="card-title">Pizza Genérica</h2>
                            <hr />
                            <h5 className="card-title">Ingredientes</h5>
                            <p className="card-text text-danger">Iteración componente ingrediente</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <button className="btn btn-primary">Bella SAPBE 1</button> &nbsp; &nbsp; &nbsp; &nbsp;
                                <button className="btn btn-primary">Bella SAPBE 2</button>
                            </li>
                        </ul>
                </div>
            </article>
        </div>
    )
}

export default PizzaCatalog