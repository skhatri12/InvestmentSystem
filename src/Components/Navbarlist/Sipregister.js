import React, { useEffect, useState } from 'react'
import Navbar from '../HomePage/Navbar'
import toast from "react-hot-toast";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Footer from '../HomePage/Footer';


const Sipregister = () => {
  const [schemename, setSchemename] = useState('');
  const [depositoryparticipant, setDepositoryparticipant] = useState('');
  const [boidno, setBoidno] = useState('');
  const [sipemail, setsipEmail] = useState('');
  const [contactno, setContactno] = useState('');
  const [dateofbirth, setDOB] = useState('');
  const [citizenshipno, setCitizenshipNo] = useState('');
  const [image, setImage] = useState('');
  const [installamt, setInstallamt] = useState('');
  const [registerstartdate, setRegisterstart] = useState('');
  // const [paymentmode, setPaymentmode] = useState('');
  const [sipinterval, setSipinterval] = useState('');
  const navigate = useNavigate();
  const paymentmode = "Stripe";
  const siphandleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/auth/sipregister`,
        { schemename, depositoryparticipant, boidno, sipemail, contactno, dateofbirth, citizenshipno, installamt, registerstartdate, paymentmode, sipinterval }
      );

      if (res.data.success) {
        toast.success(res.data && res.data.message);
        navigate(`/sippayment`);
        // navigate(`/sippayment/${sipemail}`);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong..");
    }
    // toast.success("Register Successfully");
  };

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('auth'));
    setsipEmail(userData.user.email);

    const todaysDate = new Date().toISOString().split('T')[0];
    setRegisterstart(todaysDate);

    // const currentDate = new Date();
    // const minDate = new Date();
    // minDate.setFullYear(currentDate.getFullYear() - 16);
    // setDOB(minDate)
  }, [])


  return (
    <div className='' >
      <Navbar />
      <div className='ml-28' >
        <div className='mt-3 text-center' >
          <h1 className='text-3xl font-medium -ml-36' >SIP Registration Form</h1>
          <h1 className='text-2xl font-medium -ml-36'>[ व्यवस्थित लगानी योजना दर्ता फारम ]</h1>
        </div>
        <form onSubmit={siphandleSubmit}>
          <div className=''>
            <h1 className='font-medium' >Scheme Name [ योजनाको नाम ]</h1>
            <select className='border-2' value={schemename} onChange={(e) => setSchemename(e.target.value)} >
              <option value="" selected disabled hidden>Select Scheme</option>
              <input type="text" name="" id="" className='border-2 w-72' />
              <option value="NIBL Sahabhagita Fund(NIBLSF)" >NIBL Sahabhagita Fund (NIBLSF)</option>
              <option value="NIC Asia Dynamic Debt Fund (NADDF)" >NIC Asia Dynamic Debt Fund (NADDF)</option>
              <option value="Siddhartha Systematic Investment Scheme  (SSIS)" >Siddhartha Systematic Investment Scheme (SSIS)</option>
              <option value="NMB Saral Bachat Fund - E (NMBSBF)" >NMB Saral Bachat Fund - E (NMBSBF)</option>
              <option value="Shubha Laxmi Kosh (SLK)" >Shubha Laxmi Kosh (SLK)</option>
              <option value="Nabil Flexi Cap Fund (NFCF)" >Nabil Flexi Cap Fund 	(NFCF)</option>
              <option value="Kumari Sunaulo Lagani Yojana (KSLY)" >Kumari Sunaulo Lagani Yojana (KSLY)</option>

            </select>
          </div>

          <div className='text-center bg-slate-800 text-white font-medium my-3 mr-40'>
            <h1 >Applicant Details  [ आवेदकको विवरणहरु ]</h1>
          </div>
          <div className='grid grid-cols-2 gap-2' >
            <div className='' >
              <h1 className='font-medium'>Depository Participants  [ निक्षेप सदस्य ]</h1>
              <select className='border-2 w-72' value={depositoryparticipant} onChange={(e) => setDepositoryparticipant(e.target.value)} >
                <option value="" selected disabled hidden>Select Depository Participants</option>
                <input type="text" placeholder='Select Depository Participants' className='border-2 w-72' />
                <option value="NABIL BANK LIMITED (16800)" >NABIL BANK LIMITED (16800)</option>
                <option value="SHREE KRISHNA SECURITIES LIMITED(12900)">SHREE KRISHNA SECURITIES LIMITED(12900)</option>
                <option value="NIC ASIA BANK LIMITED (13700)" >NIC ASIA BANK LIMITED (13700)</option>
                <option value="ONLINE SECURITIES LIMITED (11800)" >ONLINE SECURITIES LIMITED (11800)</option>
                <option value="PRABHU BANK LIMITED (13900)" >PRABHU BANK LIMITED (13900)</option>
              </select>
            </div>

            <div className='-ml-80' >
              <h1 className='font-medium'>BOID No.  [ हितग्राही खाता नम्बर ]</h1>
              <input type="text" placeholder='Enter your boid no.' value={boidno} onChange={(e) => setBoidno(e.target.value)} className='border-2 w-72' />
            </div>

            <div className='' >
              <h1 className='font-medium'>Email [ ईमेल ]</h1>
              <input type="text" placeholder='Enter your email' disabled value={sipemail} onChange={(e) => setsipEmail(e.target.value)} className='border-2 w-72' />
            </div>

            <div className='-ml-80' >
              <h1 className='font-medium'>Contact No. [ सम्पर्क नम्बर ]</h1>
              <input type="text" placeholder='Enter your contact no.' value={contactno} onChange={(e) => setContactno(e.target.value)} className='border-2 w-72' />
            </div>

            <div className='' >
              <h1 className='font-medium'>Date of Birth </h1>
              <input type="date" value={dateofbirth} onChange={(e) => setDOB(e.target.value)} className='border-2 w-72' />
            </div>
            <div className='-ml-80' >
              <h1 className='font-medium'>Citizenship No. </h1>
              <input type="text" placeholder='Enter your citizenship no.' value={citizenshipno} onChange={(e) => setCitizenshipNo(e.target.value)} className='border-2 w-72' />
            </div>
            <div className='' >
              <h1 className='font-medium'>Proof of citizenship </h1>
              <input type="file" placeholder='Enter your citizenship no.' value={image} onChange={(e) => setImage(e.target.value)} className='border-2 w-72' />
            </div>

          </div>
          <div className='text-center bg-slate-800 text-white font-medium my-3 mr-40'>
            <h1 >Application Details [ दर्ता विवरणहरू ]</h1>
          </div>
          <div className='grid grid-cols-2 gap-2'>


            <div className=''>
              <h1 className='font-medium'>SIP Installment Amount [ किस्ता रकम ] </h1>
              <input type="text" placeholder='Enter installment amount eg. 1000' value={installamt} onChange={(e) => setInstallamt(e.target.value)} className='border-2 w-72' />
            </div>
            <div className='-ml-80' >
              <h1 className='font-medium'>SIP Registration/Start Date [ दर्ता मिति/सुरुवात मिति ]</h1>
              <input type="date" className='border-2 w-72' disabled value={registerstartdate} />
            </div>
            {/* <input type={currentDate()} className='border-2 w-72' value={registerstartdate} onChange={(e) => setRegisterstart(e.target.value)} */}
            <div className=''>
              <h1 className='font-medium'>Payment Mode [ भुक्तानीको किसिम ] </h1>
              {/* <input type="text" placeholder='Select Payment Mode' className='border-2 w-72' value={paymentmode} onChange={(e) => setPaymentmode(e.target.value)} /> */}
              <input type="text" className='border-2 w-72' disabled value={paymentmode} />
            </div>
            <div className='-ml-80'>
              <h1 className='font-medium'>SIP Interval (In Years) [ अन्तराल ] </h1>
              <input type="text" placeholder='Choose SIP interval time eg. 10' className='border-2 w-72' value={sipinterval} onChange={(e) => setSipinterval(e.target.value)} />
            </div>
          </div>
          <button type="submit" className="text-white mt-2 bg-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-20 h-8 text-center" >Register</button>
        </form>
      </div>
      <div className='' style={{ "margin-top": "142px" }} >
        <Footer />
      </div>
    </div>
  )
}
export default Sipregister





