import { createBrowserRouter } from "react-router-dom";
import Error from "../Pages/Error/Error";
import Root from "../Root";
import Home from "../Pages/Home/Home";
import AddJob from "../Pages/AddJobs/AddJobs";
import PostedJobs from "../Pages/PostedJobs/PostedJobs";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addJob',
                element: <AddJob></AddJob>
            },
            {
                path: '/postedJobs',
                element: <PostedJobs></PostedJobs>
            }
        ]
    }
]);

export default router;