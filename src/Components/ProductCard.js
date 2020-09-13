import React from 'react'
// will the pass the product object in as a prop
function ProductCard(props) {
    return (
        <div className="border mb-4 rounded overflow-hidden">
            <div
            // style is taking in an object, hence the double curly braces
                style={{
                    'backgroundImage': `url('${props.product.images[0].imageUrl}')`,
                }}
                className="w-full h-64 bg-blue bg-cover"
            >

            </div>
        </div>
    )
}
export default ProductCard