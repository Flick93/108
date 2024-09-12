import Product from '../components/Product';
import "./Catalog.css";


function Catalog(){
    return(
        <div className="catalog">
            <h1>Our amazing catalog</h1>
            
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
        </div>
    );
}

export default Catalog;