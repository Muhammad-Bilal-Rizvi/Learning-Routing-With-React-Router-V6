import React from 'react';
//import { useParams, Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

function Product() {
    // const {productId} = useParams();
    return (
        <div>
            {/* Hello Product Component {productId} */}

            <h1>Hello Product</h1>
            
            <hr />
            <div>
                <Outlet />
            </div>

            {/* <Link to="mobile">Mobile</Link> {' '} */}
            {/* <Link to="laptop">Laptop</Link> */}
        </div>
    );
}
export default Product;

// Hello Product Component {productId}
