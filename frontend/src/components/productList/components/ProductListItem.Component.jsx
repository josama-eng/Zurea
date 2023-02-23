import {useEffect} from "react";


const ProductListItemComponent = (props) => {
    const {product} = props

    useEffect(() => {
        // console.log(product);
    }, [product])

    //todo: on click redirect to /product/:id
    return (
        <div className="col-3 zu-product-item-wrapper">
            <img className="img img-fluid" src="https://www.ipcc.ch/site/assets/uploads/sites/3/2019/10/img-placeholder.png" alt="placeholder img"/>
            <p className="zu-product-item-name">{product.title}</p>
            <p className="zu-product-item-price">${product.price}</p>
            <button className="zu-product-item-btn">add to cart</button>
        </div>
    )
}

export default ProductListItemComponent