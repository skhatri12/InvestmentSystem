import React from 'react'
import Navbar from '../HomePage/Navbar'
import Banner from '../HomePage/Banner'
import Firstbody from '../HomePage/Firstbody'
import Secondbody from '../HomePage/Secondbody'
import Footer from '../HomePage/Footer'
const Home = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <Banner />
      <Firstbody />
      <Secondbody />
      <Footer />
    </>

  )
}

export default Home
