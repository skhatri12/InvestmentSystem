import React from 'react'
import Navbar from '../HomePage/Navbar'
import Footer from '../HomePage/Footer'
import { useEffect, useState, useCallback } from 'react'
import axios from 'axios'
import toast from "react-hot-toast";

import { useNavigate } from 'react-router-dom'
const Sippayment = () => {
  const navigate = useNavigate();
  const [sipData, setSipData] = useState({});
  const [selectedCheckboxIndex, setSelectedCheckboxIndex] = useState(-1);

  // const [totalAmount, setTotalAmount] = useState(0);
  // const { sipemail } = useParams();



  const handleCheckboxChange = (index) => {
    setSelectedCheckboxIndex(index);
  };

  const proceedBtn = () => {
    // Check if at least one checkbox is selected
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    let isSelected = false;
    let isFirstChecked = false;
    let prevChecked = -1; // Initializing with -1 as the first checkbox will have index 0

    checkboxes.forEach((checkbox, index) => {
      if (checkbox.checked) {
        isSelected = true;
        if (!isFirstChecked) {
          isFirstChecked = index === 0; // Check if the first checkbox is selected
        }
        if (index <= prevChecked) {
          // Check if the checkboxes are in ascending order
          isFirstChecked = false;
        }
        prevChecked = index;
      }
    });

    if (isSelected && isFirstChecked) {
      navigate('/payment', {
        state: {
          "amount": sipData.installamt
        }
      });
    } else if (!isFirstChecked) {
      toast.error('Please select the first installment before proceeding with rest of the payment.');
    } else {
      toast.error('Please select at least one checkbox.');
    }
  };

  const fetchData = useCallback(async () => {
    try {
      const userData = JSON.parse(localStorage.getItem('auth'));
      const response = await axios.get(`http://localhost:5000/auth/sippayment?sipemail=${userData.user.email}`).then(response => { return response.data });
      // const { installamt, registerStartdate, installno } = response.sipuserData;
      const data = response.sipuserData;
      console.log("data: ", data);
      // console.log(data);
      setSipData(data);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  });

  // useEffect(() => {
  // });


  useEffect(() => {
    const storedData = localStorage.getItem('sipData');
    if (storedData !== "undefined") {
      setSipData(JSON.parse(storedData));
    } else {
      fetchData();
    }
  }, []);

  function FormatDate(date) {
    if (date === undefined || date === null) {
      return 'error';
    }
    let d = new Date(date),
      year = d.getFullYear(),
      month = d.getMonth() + 1,
      day = d.getDate();
    return [year, month, day].join('/')
  }

  const SipUserData = () => {
    let total = 0;
    return (
      <>
        <tr>
          {
            Array.from({ length: sipData.sipinterval * (12) }).map((_, index) => {
              index += 0;
              const registerStartDate = new Date(sipData.registerstartdate);
              registerStartDate.setMonth(registerStartDate.getMonth() + index);
              total += sipData.installamt;
              return (
                <div className='bg-slate-400 text-black ml-20 flex px-6 font-medium' >
                  <td><input type="checkbox" className='ml-5' onChange={() => handleCheckboxChange(index)}
                    checked={selectedCheckboxIndex === index} /></td>
                  <td className='px-10 ml-20 text-center'>{index + 1}</td>
                  {/* <td className='px-10 ml-14 text-xs'>{sipData.schemename}</td> */}
                  <td className='px-10 ml-32 '>{sipData.schemename.substring(sipData.schemename.indexOf("(") + 1, sipData.schemename.indexOf(")"))}</td>
                  <td className='px-10 ml-20 '>{sipData.installamt}</td>
                  <td className='px-10 ml-16'>{FormatDate(registerStartDate)}</td>
                  {/* <td className='px-10 ml-16'>{FormatDate(sipData.registerstartdate)}</td> */}

                </div>
              )

            }
            )

          }
          <div className='font-semibold' style={{ marginLeft: "590px" }} >
            <tr>
              <td>Total Amount:  {total}</td>
            </tr>
          </div>
        </tr>

      </>

    )
  }

  const NoData = () => {
    return (
      <tr className='text-center'>No Sip payment found</tr>
    )
  }


  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className='ml-28' >
        <div className='mt-3 text-center' >
          <h1 className='text-3xl font-medium -ml-36' >SIP Installment Payment</h1>
          <h1 className='text-2xl font-medium -ml-36'>[ किस्ता भुक्तानी ]</h1>
        </div>
        <div className=' bg-slate-800  text-white my-3 mr-14  ml-14 rounded' >
          <table>
            <tr>
              <div className='ml-20' >
                <th className='font-light text-xl px-10 ' >Select</th>
                <th className='font-light text-xl px-10 ' >Installment No</th>
                <th className='font-light text-xl px-10 '>Scheme Name</th>
                <th className='font-light text-xl px-10 '>SIP Amount</th>
                <th className='font-light text-xl px-10 '>SIP Payable Date</th>

              </div>
            </tr>
            {sipData !== null ? SipUserData() : NoData()}

          </table>
        </div>

        <div className='grid grid-cols-2 gap-2'></div>
        <button className='bg-blue-500 text-white rounded-lg w-52 ml-36' onClick={proceedBtn} >Proceeed for Payment</button>
      </div>


      <div className='mt-[71vh]'  >
        <Footer />
      </div>


    </>
  )
}

export default Sippayment
