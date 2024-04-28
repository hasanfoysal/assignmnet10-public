/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import ErrorPage from './components/Root/ErrorPage/ErrorPage';
import Home from './components/Root/Home/Home';



import Register from './components/Root/Register/Register';
import AuthProvider from './components/Root/Provider/AuthProvider';
import Login from './components/Root/Login/Login';
import AllTouristsSpot from './components/Root/All Tourists Spot/AllTouristsSpot';
import AddTouristsSpot from './components/Root/Add Tourists Spot/AddTouristsSpot';
import MyList from './components/My List/MyList';
import PrivateRoute from './components/Root/Route/PrivateRoute';
import Update from './components/Update/Update';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: "/",
        element:<Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: "/allSpot",
        element: <AllTouristsSpot></AllTouristsSpot>
      },
      {
        path: "/addSpot",
        element: <PrivateRoute> <AddTouristsSpot></AddTouristsSpot></PrivateRoute>
      },
      {
        path: "list",
        element: <PrivateRoute><MyList></MyList></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/travel')
      },
      {
        path: "/update/:id",
        element: <PrivateRoute><Update></Update></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/travel/${params.id}`)
      }
   
    ]
    

  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
