const Firstbody = () => {
  return (
    <div className="flex p-12 mt-4 ">
      <div className='w-[30%] ml-28 flex'>
        <img src="bodya.png" alt="" className="h-10" />
        <div className='ml-3'>
          <h4 style={{ color: '#2588be' }} className='font-semibold' >Rupee Cost Averaging</h4>
          <p>When the markets rise, you get fewer<br></br> units, and when the markets fall, you<br></br> receive more units.</p>
        </div>

      </div>
      <div className='w-[30%] flex'>
        <img src="bodyb.jpg" alt="" className="h-10 w-14" />
        <div className='ml-3'>
          <h4 style={{ color: '#2588be' }} className='font-semibold' >Compounding</h4>
          <p>Involves earning returns on both your original investment and on returns you received previously and need to reinvest returns back  into your account.  </p>
        </div>

      </div>
      <div className='w-[30%] mr-24 ml-14 flex '>
        <img src="bodyc.jpg" alt="" className="h-10" />
        <div className='ml-3'>
          <h4 style={{ color: '#2588be' }} className='font-semibold' >Financial Discipline</h4>
          <p>Regularity of SIPs breeds financial discipline, encourages forced savings and helps you build a corpus without cramping your lifestyle.</p>
        </div>
      </div>
    </div>
  )
}

export default Firstbody
