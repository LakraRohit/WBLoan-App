import React, { useState } from 'react';
import { FaHome, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import Giff3 from '../../assets/giff3.gif';

const EMIcalculator = () => {
    const [principal, setPrincipal] = useState('');
    const [rate, setRate] = useState('');
    const [tenure, setTenure] = useState('');
    const [emi, setEmi] = useState(null);

    const calculateEMI = (e) => {
        e.preventDefault();
        const r = rate / (12 * 100); // Monthly interest rate
        const n = tenure * 12; // Number of months
        const emiAmount = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        setEmi(emiAmount.toFixed(2));
    };

    const resetForm = () => {
        setPrincipal('');
        setRate('');
        setTenure('');
        setEmi(null);
    };


    const navigate = useNavigate();

    const handleGoBack = () => {
      navigate(-1); // Navigate back to the previous page
    };








    return (
        <div 
        className='w-full flex justify-center items-center flex-col'>
            <div className='w-full h-20 bg-yellow-500 flex justify-between items-center p-5'>
                <div className='font-sans font-bold text-white text-4xl sm:text-6xl pl-3 sm:pl-5'>
                    <span className='text-blue-700'>W</span>B.
                </div>
                <div>
                    <FaHome onClick={handleGoBack}
                     className='text-white text-4xl hover:cursor-pointer' />
                </div>
            </div>

            {/* Emi Calculator  */}
            <div 
                      style={{
                        backgroundImage: `url(${Giff3})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        width: '100%',
                        height: '600px',
                        display: 'flex',             // Use flexbox to center content
                        justifyContent: 'center',    // Center horizontally
                        alignItems: 'center'         // Center vertically
                      }}
            className='w-full flex justify-center items-center flex-col my-10 shadow-2xl'>
                <h2 className='md:text-4xl text-2xl font-bold mb-4 text-yellow-500'>EMI Calculator</h2>
                <form className='w-full max-w-md bg-white/70 shadow-md rounded px-8 pt-6 pb-8 mb-4' onSubmit={calculateEMI}>
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2'>Principal Amount</label>
                        <input
                            type='number'
                            value={principal}
                            onChange={(e) => setPrincipal(e.target.value)}
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            placeholder='Enter principal amount'
                            required
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2'>Annual Interest Rate (%)</label>
                        <input
                            type='number'
                            value={rate}
                            onChange={(e) => setRate(e.target.value)}
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            placeholder='Enter interest rate'
                            required
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2'>Tenure (Years)</label>
                        <input
                            type='number'
                            value={tenure}
                            onChange={(e) => setTenure(e.target.value)}
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            placeholder='Enter tenure in years'
                            required
                        />
                    </div>
                    <div className='flex items-center justify-between'>
                        <button
                            type='submit'
                            className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                        >
                            Calculate EMI
                        </button>
                        <button
                            type='button'
                            onClick={resetForm}
                            className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2'
                        >
                            Reset
                        </button>
                    </div>
                </form>

                {emi && (
                    <div className='mt-4 p-4 bg-yellow-100 text-yellow-800 rounded'>
                        <h3 className='font-semibold'>Your Monthly EMI is: <span className='text-lg font-bold'>₹ {emi}</span></h3>
                    </div>
                )}
            </div>

      {/* footer  */}
      <div className=' md:mt-44  w-full bg-yellow-500 md:h-[400px] flex md:flex-row flex-col justify-center item-center'>

<div className='h-full w-full md:w-1/3 flex flex-col justify-start text-white p-5 space-y-3'>
<h1 className='font-semibold text-2xl text-white/70 '>
THE COMPANY
</h1>
<p  className='hover:cursor-pointer'>About</p>
<p className='hover:cursor-pointer'>Founding Member:WB</p>
<p className='hover:cursor-pointer'>Security</p>
<p className='hover:cursor-pointer'>Careers</p>
<h1 className='font-semibold text-2xl text-white/70 '>Resources</h1>
<p className='hover:cursor-pointer'>Blogs</p>
<p className='hover:cursor-pointer'>Media Coverage</p>
</div>

<div className='h-full w-full md:w-1/3 flex flex-col justify-start text-white p-5 space-y-3'>
<h1 className='font-semibold text-2xl text-white/70 '>
PRODUCTS
</h1>
<p className='hover:cursor-pointer' >Personal Loan</p>
<p className='hover:cursor-pointer'>Credit Tracker</p>
<p className='hover:cursor-pointer'>Business Loan</p>
<p className='hover:cursor-pointer'>Smart Pay</p>
<p className='hover:cursor-pointer'>Credit Card</p>
<p className='hover:cursor-pointer'>Home Loan</p>
<p className='hover:cursor-pointer'>Loan Against Property</p>
<p className='hover:cursor-pointer'>FD Select</p>
</div>

<div className='h-full w-full md:w-1/3 flex flex-col justify-start text-white p-5 space-y-3'>
<h1 className='font-semibold text-2xl text-white/70 '>
CONTACT US
</h1>
<p className='hover:cursor-pointer' >WB@Loan.in</p>
<p className='hover:cursor-pointer'>9999999999</p>
<p className='hover:cursor-pointer'>Customer Support</p>
<h1 className='font-semibold text-2xl text-white/70 '>Social Medial</h1>
<div  className='flex flex-row space-x-3 text-3xl md:text-4xl'>
<FaInstagramSquare className='hover:cursor-pointer' />
<FaTwitter className='hover:cursor-pointer' />
<IoLogoFacebook className='hover:cursor-pointer' />
</div>
</div>
</div>


<div className='w-full h-10  flex justify-center items-center '>
All Copy rights reserved to  WB 
</div>
        </div>
    );
}

export default EMIcalculator;
