/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
// import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
// import Home from "../Pages/Home";
// import About from "../Pages/About";
// import Navbar from "../Components/Navbar";
// import Error from "../Pages/Error";

// const Roots = () => {
//     return (
//         <>
//         <Navbar/>
//         <div>
//             <Outlet/>
//         </div>
//         </>
//     )
// }

// const router = createBrowserRouter(
//     createRoutesFromElements(
//         <Route path="/" element={<Roots/>}>

//             <Route index element={<Home/>}/>
//             <Route path="/about" element={<About/>}/>
//             <Route path="*" element={<Error/>}/>
//         </Route>
//     )
// )

// function AppRouter() {
//     return <RouterProvider router={router} />;
// }

// export default AppRouter

import { createBrowserRouter,Outlet, RouterProvider  } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Error from "../Pages/Error";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";
const MainRoots = () => {
    return (
        <>
        <Navbar/>
        <div className="container flex"> 
            <Sidebar/>
            <div className="content flex-1 p-5">
            <Outlet/>
            </div>
        </div>
        </>
    )
}

const routes = [
    {path:"" , element: <Home/>},
    {path:"/about" , element: <About/>},
]


const router = createBrowserRouter([
    {
        element: <MainRoots/>,
        errorElement: <Error />,
        children: routes
    }
])


function AppRouter() {
    return <RouterProvider router={router}/>
}
export default AppRouter