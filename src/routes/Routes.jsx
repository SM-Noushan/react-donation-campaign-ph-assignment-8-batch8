import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Error from "../pages/error/Error";
import Home from "../pages/home/Home";
import DonationDetails from "../pages/donation-details/DonationDetails";
import Donation from "../pages/donation/Donation";

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
                element: <Donation />
            },
            {
                path: "/donation-details/:id",
                element: <DonationDetails />
            },
            {
                path: "/statistics",
                element: <Home />
            },
        ]
    },
]);

export default router