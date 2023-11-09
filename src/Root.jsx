import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Shared/Sidebar/Sidebar';
import Footer from './Shared/Footer/Footer';

const Root = () => {
    return (
        <div>
            <div className='flex'>
                <Sidebar></Sidebar>

                <div>
                    <Outlet></Outlet>
                    <Footer></Footer>
                </div>
            </div>
        </div>
    );
};

export default Root;