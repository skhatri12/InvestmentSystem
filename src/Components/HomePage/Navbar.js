import React from 'react'
import { NavLink } from "react-router-dom";

const items = [

  {
    label: "Home",
    to: "/"
  },
  {
    label: "Company",
    to: "/company"
  },
  {
    label: "Portfolio",
    to: "/portfolio"
  },
  {
    label: "SIP Registration",
    to: "/sipregister"
  },
  {
    label: "SIP Payment",
    to: "/sippayment"
  },
  {
    label: "SIP Calculator",
    to: "/calculator"
  },
];

const item = [
  {
    label: "My profile",
    to: "/profile"
  },
  {
    label: "Logout",
    to: "/logout"
  },
];
const Navbar = () => {
  return (
    <>

      <div className='flex items-center' >

        <div className='bg-zinc-800 text-white h-8 w-full text-center justify-between ' >


          {items.map((navItem) => (
            <NavLink
              key={navItem.to}
              to={navItem.to} className='align-middle items-center ml-6 hover:bg-slate-500  ' >
              {navItem.label}
            </NavLink>
          ))
          }
        </div>
        <div className='bg-zinc-800 text-white h-8 w-full text-end justify-between' >
          {item.map((navItem) => (
            <NavLink
              key={navItem.to}
              to={navItem.to} className='align-middle items-end  mr-10' >
              {navItem.label}
            </NavLink>
          ))
          }
        </div>
      </div>
    </>
  )
}

export default Navbar
