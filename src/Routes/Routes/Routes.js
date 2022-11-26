import DashboardLayout from "../../Layout/DashboardLayout";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import MyBookings from "../../Pages/Dashboard/MyBookings/MyBookings";
import CategoryDetails from "../../Pages/Home/Catagories/CategoryDetails";
import Home from "../../Pages/Home/Home/Home";
import Signup from "../../Pages/Signup/Signup";
import AdminRoute from "../AdminRoute/AdminROute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");
const { default: Login } = require("../../Pages/Login/Login");
const { default: ErrorPage } = require("../../Pages/Shared/ErrorPage/ErrorPage");

const router = createBrowserRouter([
    {
        path: '/',
        errorPage: <ErrorPage></ErrorPage>,
        element: <Main></Main>,
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
                loader: ({ params }) => fetch(`http://localhost:5000/categoryDetails/${params.id}`),
                element: <CategoryDetails></CategoryDetails>
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
            }
        ]
    }
])

export default router;