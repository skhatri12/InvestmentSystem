import React, { useState, useEffect } from 'react';
import KhaltiCheckout from 'khalti-checkout-web';
import toast from 'react-hot-toast';
import Navbar from './Components/HomePage/Navbar';
import './App.css';
import { useLocation } from 'react-router-dom';

const Payment = ({ cart, auth }) => {
  const [paymentmethod, setpaymentmethod] = useState('');
  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [installAmt, setInstallAmt] = useState(0);
  const state = useLocation();
  // useEffect(() => {
  //   const storedAmount = localStorage.getItem('paymentAmount');
  //   if (storedAmount) {
  //     setInstallAmt(JSON.parse(storedAmount));
  //     localStorage.removeItem('paymentAmount');
  //   }
  // }, []);

  const handleOpen = () => {
    setShowPaymentOptions(true);
  };

  const config = {
    publicKey: 'test_public_key_aaa0a9bd8ee44a60866a50373668c077',
    productIdentity: '1234567890',
    productName: 'Drogon',

    productUrl: 'http://gameofthrones.com/buy/Dragons',
    eventHandler: {
      onSuccess(payload) {
        postOrders('khaltiPayment');
        console.log(payload);
      },
      onError(error) {
        console.log(error);
      },
    },
    paymentPreference: [
      'MOBILE_BANKING',
      'KHALTI',
      'EBANKING',
      'CONNECT_IPS',
      'SCT',
    ],
  };

  const checkout = new KhaltiCheckout(config);

  const postOrders = async (payment) => {
    try {
      const res = await fetch('http://localhost:8080/api/v1/auth/postorder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          amount: state.state.amount,
          products: cart,
          buyer: auth.user._id,
          status: 'Not Process',
          payment: payment,
        }),
      });

      console.log(res.body);

      if (res.status === 200) {
        toast.success('Order successfully');
      } else {
        toast.error('Something went wrong');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="App">
        <button className="btn btn-success" onClick={handleOpen}>
          Make Payment
        </button>

        {showPaymentOptions && (
          <div>

            <div>
              <label
                htmlFor="khaltiPayment"
                onClick={() => {
                  setpaymentmethod('khaltiPayment');
                }}
              >
                <input type="radio" id="" name="paymentOption" />
                <span>Khalti Payment</span>
              </label>
            </div>
            <div>
              <span>Payment Amount: {state.state.amount}</span>
            </div>
            <button
              className="btn btn-danger"
              onClick={() => {
                if (paymentmethod === 'khaltiPayment') {
                  checkout.show({ amount: state.state.amount * 100 });
                } else {
                  toast.error('Choose the payment method');
                }
              }}
            // onClick={() => {

            //   checkout.show({ amount: state.state.amount * 100 });

            // }}
            >
              Done
            </button>
          </div>
        )}
      </div >
    </>
  );
};

export default Payment;