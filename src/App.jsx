/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
// import Navbar from "./Components/Navbar"
// import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from "react-router-dom"
// import Home from "./Pages/Home"
// import About from "./Pages/About"

// const Root = () => {
//   return (
//     <>
//       <Navbar />
//       <div>
//         <Outlet />
//       </div>
//     </>
//   );
// };

// const router =createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Root />}>
//       <Route index element= {<Home/>}/>
//       <Route path="/about" element= {<About/>}/>
//     </Route>
//   )
// )



// function App() {

//   return (
//     <>
//     <RouterProvider router={router}/>
//     </>
//   )
// }

// export default App

import React from 'react'
import AppRouter from './Routers/Router'

const App = () => {
  return (
    <div><AppRouter/></div>
  )
}

export default App