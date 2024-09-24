import { Outlet, Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Layout = () => {
    const [productId, setProductId] = useState('');
    const navigate = useNavigate();

    const handleLinkProduct = ()=>{
        if (productId){
            navigate(`/product/${productId}`);
        };
    };

    return (
        <>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
            <li>
                <div>
                    <input 
                        type="text" 
                        value={productId} 
                        onChange={(e) => setProductId(e.target.value)} 
                        placeholder="ID" 
                    />
                    <button onClick={handleLinkProduct}>Show Product</button>
                </div>
            </li>
        </ul>

        <Outlet />
      </>
    );
}
export default Layout;