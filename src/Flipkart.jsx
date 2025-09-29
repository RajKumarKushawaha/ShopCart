import React, { useEffect, useState } from "react";
import './Flipkart.css'

function Flipkart() {

    let [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            let res = await fetch("http://localhost:1000/products")
            let data = await res.json();
            setProducts(data);
        }
        fetchData()
    }, [])


    return (
        <>
            <div className="flipkart">

                {products.map((items) => {
                    return (
                        <div className="details">
                            <div className="thumbnail">
                                <img src={items.image} />
                            </div>

                            <div className="detailsitem">
                                <p><b>ID:</b> {items.id}</p>
                                <p><b>Name:</b> {items.name}</p>
                                <p><b>Model:</b> {items.model}</p>
                                <p><b>Price:</b> ₹{items.price}</p>
                                <p><b>Rating:</b> {items.rating} ⭐</p>

                            </div>
                        </div>
                    )
                })}
            </div>

        </>
    )
}

export default Flipkart