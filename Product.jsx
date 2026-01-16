import React from 'react'   
import { Link, Outlet } from 'react-router-dom'    
export default function Product() {     
return (       
<div>         
<h1>Product</h1>          
<div>           
        
<Link to="jewellery">Jewellery</Link>        
<Link to="men">Men</Link>         
</div>          
<Outlet />       
</div>     
)   
}