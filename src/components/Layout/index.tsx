//import { createContext, useState } from 'react';
import { Outlet } from "react-router-dom";
import Header from "../Header"
import Footer from "../Footer";
import "../../index.css";




const Layout = () => {

    return (
        <>
            <Header />
            
                <main className="container">
                    <Outlet />
                </main>
           
            <Footer />
        </>
    );
}

export default Layout;