import DashboardLayout from "../../Layout/DashboardLayout";
import Blog from "../../Pages/Blog/Blog";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import AllBuyer from "../../Pages/Dashboard/AllBuyer/AllBuyer";
import AllSeller from "../../Pages/Dashboard/AllSeller/AllSeller";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import MyBookings from "../../Pages/Dashboard/MyBookings/MyBookings";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import CategoryDetails from "../../Pages/Home/Catagories/CategoryDetails";
import Home from "../../Pages/Home/Home/Home";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import Signup from "../../Pages/Signup/Signup";
import AdminRoute from "../AdminRoute/AdminRoute";
import SellerRoute from "../SellerRoute/SellerRoute";


const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");
const { default: Login } = require("../../Pages/Login/Login");

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
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/categoryDetails/:id',
                loader: ({ params }) => fetch(`https://lovin-book-store-server.vercel.app/categoryDetails/${params.id}`),
                element: <CategoryDetails></CategoryDetails>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }

        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashboard',
                element: <MyBookings></MyBookings>
            },
            {
                path: '/dashboard/allUsers',
                element: <AdminRoute> <AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/addProduct',
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: '/dashboard/allBuyers',
                element: <SellerRoute><AllBuyer></AllBuyer></SellerRoute>
            },
            {
                path: '/dashboard/allSellers',
                element: <AdminRoute><AllSeller></AllSeller></AdminRoute>
            },
            {
                path: '/dashboard/myProducts',
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({ params }) => fetch(`https://lovin-book-store-server.vercel.app/bookings/${params.id}`)
            }
        ]
    }
])

export default router;