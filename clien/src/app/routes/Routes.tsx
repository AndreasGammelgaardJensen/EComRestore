import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import { Catalog } from "../../features/catalog/catalog";
import { HomePage } from "../../features/home/HomePage";
import { ProdoctsDetails } from "../../features/catalog/ProductDetails";
import { AboutPage } from "../../features/about/AboutPage";
import ContactPage from "../../features/contact/ContactPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {path: '', element: <HomePage />},
            {path: '/catalog', element: <Catalog />},
            {path: '/catalog/:id', element: <ProdoctsDetails />},
            {path: '/about', element: <AboutPage />},
            {path: '/contact', element: <ContactPage />},
        ]
    }
]);