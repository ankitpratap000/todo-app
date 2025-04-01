import React from "react";
import {Link,Outlet} from "react-router-dom";
function Product(){
    return (
        <div>
            <h2>🛒 Products Page</h2>
            <nav>
                <ul>
                <li><Link to="laptops">💻 Laptops</Link></li>
                <li><Link to="mobiles">📱 Mobiles</Link></li>
                </ul>
            </nav>
            <Outlet/>
        </div>
    );
}
export default Product;