//Components Link Up Here
import Header from "~/Components/Header";
import Footer from "~/Components/Footer";
import { Outlet } from "react-router";

// All Components Calling Here
export default function PincipalLayout() {
    return (
        <>
            <Header></Header> 
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
}