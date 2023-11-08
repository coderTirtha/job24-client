import { useState } from "react";

const Sidebar = () => {
    const [open, setOpen] = useState(true);
    return (
        <div>
            <div className={`${open ? 'w-64': 'w-16'} bg-black h-screen relative`}>

            </div>
        </div>
    );
};

export default Sidebar;