import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Error from "../pages/error/Error";
import Home from "../pages/home/Home";
import DonationDetails from "../pages/donation-details/DonationDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/donation",
                // element: <Home />
            },
            {
                path: "/donation-details/:id",
                element: <DonationDetails />
            }
        ]
    },
]);

export default router