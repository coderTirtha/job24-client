import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Shared/Sidebar/Sidebar';
import Footer from './Shared/Footer/Footer';

const Root = () => {
    return (
        <div>
            <div>
                <Sidebar></Sidebar>
            </div>
            <div>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Root;