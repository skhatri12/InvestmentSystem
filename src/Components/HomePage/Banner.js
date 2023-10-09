import React from 'react'

const Banner = () => {
  return (
    <div className='relative'>
      <img src="bannera.jpg" className='h-[65vh] w-full object-cover' alt="" />
      <div className='absolute bottom-[35%] left-[10%]' >
        <h4 className='text-white text-3xl font-semibold ' >Systematic Investment Plan</h4>
        <h4 className='text-white text-2xl font-normal ' > "Invest a fixed amount of money <br /> regularly in various mutual funds <br /> schemes depending on your financial <br /> goals."</h4>
      </div>
    </div>
  )
}

export default Banner
