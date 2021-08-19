const Product = ({product, selectProduct}) => {
    return (
        <div className='listCard'>
            <p>{product.name} <button onClick={() => selectProduct()}>View <i className="fa fa-eye"></i></button></p>
        </div>
    )
}

export default Product;