import React from 'react'
import { Routes, Route } from 'react-router-dom'
// import { useNavigate } from "react-router-dom";
import Register from './Components/Pages/Auth/Register'
import Login from './Components/Pages/Auth/Login'
import Home from './Components/Pages/Home'
import Sipregister from './Components/Navbarlist/Sipregister'
import Sippayment from './Components/Navbarlist/Sippayment'
import Calculator from './Components/Navbarlist/Calculator'
import Myprofile from './Components/Navbarlist/Myprofile'
import Company from './Components/Navbarlist/Company'
import Portfolio from './Components/Navbarlist/Portfolio'
import "./App.css";
import Payment from "./Payment";
import Completion from "./Completion";
import { Toaster } from 'react-hot-toast';

const App = () => {
  const userdata = localStorage.getItem('user');
  console.log("user: ", userdata)
  const isLoggedIn = userdata !== null
  // const navigate = useNavigate();
  return (
    <>

      <div>
        <Toaster />
        <Routes>
          {!isLoggedIn && <Route path="/login" element={<Login />} />}
          {isLoggedIn && <Route path="/" element={<Home />} />}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path='/profile' element={<Myprofile />} />
          <Route path="/sipregister" element={<Sipregister />} />
          <Route path="/sippayment" element={<Sippayment />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/company" element={<Company />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/logout" element={<Login />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/completion" element={<Completion />} />

          {isLoggedIn && <Route path="/logout" element={<Login />} />}
          {!isLoggedIn && <Route path="*" element={<Route to="/login" replace />} />}
        </Routes>
      </div>

    </>
  )
}

export default App

// import React from 'react'
// import { Routes, Route, Navigate } from 'react-router-dom'
// import Register from './Components/Pages/Auth/Register'
// import Login from './Components/Pages/Auth/Login'
// import Home from './Components/Pages/Home'
// import Sipregister from './Components/Navbarlist/Sipregister'
// import Sippayment from './Components/Navbarlist/Sippayment'
// import Calculator from './Components/Navbarlist/Calculator'
// import Myprofile from './Components/Navbarlist/Myprofile'

// const PrivateRoute = ({ element: Element, isLoggedIn, ...rest }) => {
//   return isLoggedIn ? (
//     <Element {...rest} />
//   ) : (
//     <Navigate to="/login" replace state={{ from: rest.location }} />
//   )
// }

// const App = () => {
//   const userdata = localStorage.getItem('user')
//   const isLoggedIn = userdata !== null

//   return (
//     <div>
//       <Routes>
//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login />} />
//         <Route
//           path="/"
//           element={
//             <PrivateRoute
//               element={<Home />}
//               isLoggedIn={isLoggedIn}
//             />
//           }
//         />
//         <Route
//           path="/profile"
//           element={
//             <PrivateRoute
//               element={<Myprofile />}
//               isLoggedIn={isLoggedIn}
//             />
//           }
//         />
//         <Route
//           path="/sipregister"
//           element={
//             <PrivateRoute
//               element={<Sipregister />}
//               isLoggedIn={isLoggedIn}
//             />
//           }
//         />
//         <Route
//           path="/sippayment"
//           element={
//             <PrivateRoute
//               element={<Sippayment />}
//               isLoggedIn={isLoggedIn}
//             />
//           }
//         />
//         <Route
//           path="/calculator"
//           element={
//             <PrivateRoute
//               element={<Calculator />}
//               isLoggedIn={isLoggedIn}
//             />
//           }
//         />
//         <Route path="/logout" element={<Login />} />
//       </Routes>
//     </div>
//   )
// }

// export default App
