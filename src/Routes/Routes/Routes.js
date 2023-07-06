import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSelers from "../../Pages/Dashboard/AllSelers/AllSelers";
import Payment from "../../Pages/Dashboard/Dashboard/Payment/Payment";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyProduct from "../../Pages/Dashboard/MyProduct/MyProduct";
import ReportedItems from "../../Pages/Dashboard/ReportedItems/ReportedItems";
import Home from "../../Pages/Home/Home/Home";
import Crt from "../../Pages/Home/ProductCategories/Crt/Crt";
import Led from "../../Pages/Home/ProductCategories/Led/Led";
import ProductCategories from "../../Pages/Home/ProductCategories/ProductCategories";
import Smart from "../../Pages/Home/ProductCategories/Smart/Smart";
import Login from "../../Pages/Login/Login";
import PageNotFound from "../../Pages/PageNotFound/PageNotFound";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import BuyersRoute from "../BuyersRoute/BuyersRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellersRoute from "../SellersRoute/SellersRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/categories',
                element: <ProductCategories></ProductCategories>
            },
            {
                path: '/crt',
                element: <PrivateRoute><Crt></Crt></PrivateRoute>
            },
            {
                path: '/led',
                element: <PrivateRoute><Led></Led></PrivateRoute>
            },
            {
                path: '/smart',
                element: <PrivateRoute><Smart></Smart></PrivateRoute>
            }
        ]
    },
    {
        path: '*',
        element: <PageNotFound></PageNotFound>
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard/myorders',
                element: <BuyersRoute><MyOrders></MyOrders></BuyersRoute>
            },
            {
                path: '/dashboard/reporteditems',
                element: <AdminRoute><ReportedItems></ReportedItems></AdminRoute>
            },
            {
                path: '/dashboard/buyers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: '/dashboard/selers',
                element: <AdminRoute><AllSelers></AllSelers></AdminRoute>
            },
            {
                path: '/dashboard/myproduct',
                element: <SellersRoute><MyProduct></MyProduct></SellersRoute>
            },
            {
                path: '/dashboard/addproduct',
                element: <SellersRoute><AddProduct></AddProduct></SellersRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <BuyersRoute><Payment></Payment></BuyersRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/bookings/${params.id}`)
            },
        ]
    }
])

export default router;