import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Loader from '../Components/Loader'

function Product() {
    const { id } = useParams()
    const url = `https://5f5cf66e5e3a4d0016249bcb.mockapi.io/products/${id}`
    const [product, setProduct] = useState({
        loading: false,
        data: null,
        error: false,
    })
    //product defaults to null, but after our get request using axios, we set product to the response data
    let content = null

    useEffect(() => {
        setProduct({
            loading: true,
            data: null,
            error: false,
        })

        axios.get(url)
            .then(response => {
                setProduct({
                    loading: false,
                    data: response.data,
                    error: false,
                })
            })
            .catch(() => {
                setProduct({
                    loading: false,
                    data: null,
                    error: true,
                })
            })
    }, [url])
    //first parameter is a function, second is dependency (url in this case) if url changes (dependency) the code within the effect will rerun
    if (product.error) {
        content = <p>
            There was an error, please refresh or try again later.
                  </p>
    }

    if (product.loading) {
        content = <Loader />
    }

    //if we leave the axios method within the product function it has requests every second (see network tab under development tools)
    if (product.data) {
        content =
            <div>
                <h1 className="text-2xl font-bold mb-3">
                    {product.data.name}
                </h1>
                <div>
                    <img
                        src={product.data.images[0].imageUrl}
                        alt={product.data.name}
                    />
                </div>
                <div className="font-bold text=sl mb-3">
                    $ {product.data.price}
                </div>
                <div>
                    {product.data.description}
                </div>
            </div>
    }
    return (
        <div>
            {content}
        </div>

    )
}
export default Product