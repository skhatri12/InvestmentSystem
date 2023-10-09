import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import Navbar from '../HomePage/Navbar';
const SipCalculator = () => {
  const [installment, setInstallment] = useState('');
  const [rate, setRate] = useState('');
  const [years, setYears] = useState('');
  const [result, setResult] = useState({
    totalInvested: 0,
    finalValue: 0,
    wealthGained: 0
  });

  const calculateResult = () => {
    const monthlyRate = parseFloat(rate) / 100 / 12;
    const months = parseFloat(years) * 12;

    const totalInvested = parseFloat(installment) * months;
    let finalValue = parseFloat(installment) * (Math.pow(1 + monthlyRate, months) - 1) / monthlyRate;
    finalValue = parseInt(finalValue.toFixed(0));
    const wealthGained = finalValue - totalInvested;

    setResult({
      totalInvested: isNaN(totalInvested) ? 0 : totalInvested,
      finalValue: isNaN(finalValue) ? 0 : finalValue,
      wealthGained: isNaN(wealthGained) ? 0 : wealthGained
    });
  };

  const handleInstallmentChange = (e) => {
    const { value } = e.target;
    setInstallment(value);
  };

  const handleRateChange = (e) => {
    const { value } = e.target;
    setRate(value);
  };

  const handleYearsChange = (e) => {
    const { value } = e.target;
    setYears(value);
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-200 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <div>
            <h2 className="mt-3 text-center text-3xl leading-9 font-extrabold text-gray-900">
              SIP Calculator
            </h2>
          </div>
          <div className="mt-8 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div className="mt-6">
              <div className="text-sm leading-5 text-gray-900">
                <label htmlFor="installment" className="font-medium text-gray-700">
                  Monthly Installment
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    id="installment"
                    type="text"
                    value={installment}
                    onChange={handleInstallmentChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>
              <div className="mt-6">
                <div className="text-sm leading-5 text-gray-900">
                  <label htmlFor="rate" className="font-medium text-gray-700">
                    Annual Interest Rate (%)
                  </label>
                  <div className="mt-1 rounded-md shadow-sm">
                    <input
                      id="rate"
                      type="text"
                      value={rate}
                      onChange={handleRateChange}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <div className="text-sm leading-5 text-gray-900">
                  <label htmlFor="years" className="font-medium text-gray-700">
                    Number of Years
                  </label>
                  <div className="mt-1 rounded-md shadow-sm">
                    <input
                      id="years"
                      type="number"
                      value={years}
                      onChange={handleYearsChange}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <span className="inline-flex rounded-md shadow-sm">
                <button
                  type="button"
                  onClick={calculateResult}
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition ease-in-out duration-150"
                >
                  Calculate
                </button>
              </span>
            </div>
            <div className="mt-8">
              <div className="flex">
                <div className="mr-8">
                  <div className="text-sm leading-5 text-gray-700">Total Invested</div>
                  <div className="mt-2">
                    <span className="text-xl leading-7 font-semibold text-gray-900">
                      &nbsp;{result.totalInvested}
                    </span>
                  </div>
                </div>
                <div className="mr-8">
                  <div className="text-sm leading-5 text-gray-700">Expected Amount</div>
                  <div className="mt-2">
                    <span className="text-xl leading-7 font-semibold text-gray-900">
                      &nbsp;{result.finalValue}
                    </span>
                  </div>
                </div>
                <div>
                  <div className="text-sm leading-5 text-gray-700">Wealth Gained</div>
                  <div className="mt-2">
                    <span className="text-xl leading-7 font-semibold text-gray-900">
                      &nbsp;{result.wealthGained}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SipCalculator;
