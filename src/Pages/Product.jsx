import { AppBar } from "@mui/material";
import SideNav from "../Sidenav";
import Navbar from "../Components/Navbar";
import ProductList from "../Product/ProductList";

const Product=()=> {
    return(
        <>
        <div className="bgcolor">
            <Navbar/>
            <Box height={100}/>
            <Box sx={{display:"flex"}}>
                <SideNav/>
            <Box component="main" sx={{flexGrow:1,p:3}}>
                <ProductList/>
                <h2>Product</h2>

            </Box>

            </Box>
        </div>
        </>
    )
}

export default Product;