import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Loader from '../Components/Loader'
import ProductCard from '../Components/ProductCard'

function Home() {
    const url = `https://5f5cf66e5e3a4d0016249bcb.mockapi.io/products?page=1&limit=10`
    const [products, setProducts] = useState({
        loading: false,
        data: null,
        error: false,
    })
console.log(products.data)

    useEffect(() => {
        setProducts({
            loading: true,
            data: null,
            error: false,
        })



        axios.get(url)
            .then(response => {
                setProducts({
                    loading: false,
                    data: response.data,
                    error: false,
                })
            })
            .catch(() => {
                setProducts({
                    loading: false,
                    data: null,
                    error: true,
                })
            })
    }, [url])

    let content = null

    if (products.error) {
        content = <p>
            There was an error, please refresh or try again later.
                  </p>
    }

    if (products.loading) {
        content = <Loader />
    }


    if (products.data) {
        content =
            products.data.map((product, key) =>
                <div>
                    <ProductCard
                        product={product}
                    />
                </div>
            )
    }

    return (

        <div>
            <h1 className="font-bold text-2xl mn-3">
                Best Sellers
            </h1>

            {content}

        </div>
    )
}
export default Home