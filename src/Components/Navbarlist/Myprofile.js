import React from 'react'
import Navbar from '../HomePage/Navbar'
import { useState, useEffect } from 'react';
const Myprofile = () => {
  const [fname, setfName] = useState('');
  const [lname, setlName] = useState('');
  const [sipemail, setsipEmail] = useState('');
  // const [contactno, setContactno] = useState('');

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('auth'));
    // const sipuserData = JSON.parse(localStorage.getItem('sipuser'));
    setsipEmail(userData.user.email);
    setfName(userData.user.firstname);
    setlName(userData.user.lastname);
    // setContactno(sipuserData.sipuser.contactno);
  }, [])
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className='mt-52' style={{ "marginLeft": "500px" }} >
        <table className='border-2 shadow-lg' >


          <div>
            <td>
              <label htmlFor="">Name</label>
              <input type="text" className='ml-20 bg-white' disabled value={fname + " " + lname} onChange={(e) => setfName(e.target.value) + setlName(e.target.value)} />
            </td>
          </div>
          <div >
            <td>
              <label htmlFor="">Email</label>
              <input type="text" className='bg-white' disabled style={{ "marginLeft": "85px" }} value={sipemail} onChange={(e) => setsipEmail(e.target.value)} />
            </td>
          </div>

          <div >
            <td>
              <label htmlFor="">Citizenship No.</label>
              <input type="text" disabled style={{ "marginLeft": "16px" }} />
            </td>
          </div>
          <div>
            <td>
              <label htmlFor="">Contact No.</label>
              <input type="text" style={{ "marginLeft": "37.5px" }} disabled />
            </td>
          </div>
        </table>
      </div>

    </>
  )
}

export default Myprofile
