import React from 'react';
import Navbar from '../HomePage/Navbar';

const Portfolio = () => {
  const storedPaymentData = JSON.parse(localStorage.getItem('paymentData'));

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className='p-5 justify-center items-center h-screen'>
        <table className='border-2 ml-5'>
          <thead>
            <tr>
              <th>Installment No.</th>
              <th>Scheme Name</th>
              <th>SIP Amount</th>
            </tr>
          </thead>
          <tbody>
            {storedPaymentData ? (
              <tr>
                <td>{storedPaymentData.installmentNumber}</td>
                <td>{storedPaymentData.schemename}</td>
                <td>{storedPaymentData.installamt}</td>
              </tr>
            ) : (
              <tr>
                <td colSpan="3">Payment not done</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Portfolio;
