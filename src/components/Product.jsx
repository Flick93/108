import "./Product.css"
import QuantityPicker from "./QuantityPicker";


function Product(props){
    function addValue(){
        console.log("adding to cart")
    }


    return(
        <div className="product">
            <img src={props.data.image} alt=""></img>

            <h5>{props.data.title}</h5>
            <label>{props.data.price}</label>
            
            <div className="controls">
                <QuantityPicker></QuantityPicker>

            <button className="btn btn-sm btn-danger" onClick={addValue}>Cart</button>
            </div>
            
        </div>
    );
}

export default Product;