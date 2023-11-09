import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Shared/Sidebar/Sidebar';
import Footer from './Shared/Footer/Footer';

const Root = () => {
    const [open, setOpen] = useState(true);
    return (
        <div>
            <div className='flex'>
                <div className={`${open ? 'w-64' : 'w-20'}`}>
                    <Sidebar open={open} setOpen={setOpen}></Sidebar>
                </div>
                <div className='flex-1'>
                    <Outlet></Outlet>
                    <Footer></Footer>
                </div>
            </div>
        </div>
    );
};

export default Root;