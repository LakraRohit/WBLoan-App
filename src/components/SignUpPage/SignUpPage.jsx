import React, { useState } from 'react';
import { FaHome, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import Bg2 from '../../assets/Bg2.jpg';
import Giff10 from '../../assets/giff10.gif';

const SignUpPage = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [aadhar, setAadhar] = useState('');
  
    const handleSignup = (e) => {
      e.preventDefault();
  
      // Check if any of the fields are empty
      if (!name || !email || !aadhar) {
        alert('Please fill out all fields');
        return;
      }
  
      // Process the signup (you can replace this with actual logic)
      alert('We are proceeding with your Loan');
  
      // Clear the input fields
      setName('');
      setEmail('');
      setAadhar('');
    };


    const gotoApp=()=>{
        alert("Get App Button is")
    }


    const navigate = useNavigate();

    const handleGoBack = () => {
      navigate(-1); // Navigate back to the previous page
    };



  return (
    <div>
      <div className='w-full flex justify-center items-center flex-col'>
        
        <div className='w-full h-20 bg-green-500 flex justify-between items-center p-5'>
          <div className='font-sans font-bold text-white text-4xl sm:text-6xl pl-3 sm:pl-5'>
            <span className='text-blue-700'>W</span>B.
          </div>
          <div
          className='hover:cursor-pointer' 
          onClick={handleGoBack}>
            <FaHome className='text-white text-4xl' />
          </div>
        </div>

        <div
          style={{
            backgroundImage: `url(${Bg2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '600px',
            display: 'flex',             // Use flexbox to center content
            justifyContent: 'center',    // Center horizontally
            alignItems: 'center'         // Center vertically
          }}
        >
          <div
            style={{
              backgroundImage: `url(${Giff10})`,
              backgroundSize: '350px 350px',
              backgroundPosition: 'right bottom',
              backgroundRepeat: 'no-repeat'
            }}
            className='md:mr-5 w-8/12 h-5/6 border-4 border-white rounded-3xl p-5 shadow-md bg-[length:200px_200px] md:bg-[length:350px_350px]'
          >
            <h1 className='md:text-5xl lg:text-6xl text-2xl text-white font-extrabold'>
              Let begin !
            </h1>
            <h1 className='text-white mt-2 md:text-2xl flex'>
              <p>One Solution, for  all your Financial Problems.</p>
            </h1>
            <input
            value={name}
            onChange={(e) => setName(e.target.value)} 
            className='w-11/12 h-11 bg-white/50 rounded-lg mt-2 md:mt-5 pl-3 placeholder:text-black focus:outline-none focus:border-b-2 focus:border-white' placeholder='Enter Name...' />
            <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type='email' // Optional: for better email input handling
            className='w-11/12 h-11 bg-white/50 rounded-lg mt-2 md:mt-5 pl-3 placeholder:text-black focus:outline-none focus:border-b-2 focus:border-white' placeholder='Enter E-mailId...' />
            <input
                    value={aadhar}
                    onChange={(e) => setAadhar(e.target.value)}
                    type='text' // You can also validate Aadhar format if needed
             className='w-11/12 h-11 bg-white/50 rounded-lg mt-2 md:mt-5 pl-3 placeholder:text-black focus:outline-none focus:border-b-2 focus:border-white' type='text' placeholder='Enter Aadhar Number...' />
            <div className='w-11/12 h-10 mt-8 flex justify-between items-center space-x-2 md:p-3'>
              <button           onClick={handleSignup}
               className='w-24 h-10 text-[12px] md:text-lg md:w-48 md:h-10 rounded-md text-white bg-blue-500 active:bg-blue-600 active:scale-95 duration-100 shadow-blue-800 shadow-md'>
                Proceed and SignUp
              </button>
              <button
              onClick={gotoApp} 
              className='w-24 h-10 text-[12px] md:text-lg md:w-32 md:h-10 rounded-md text-white bg-blue-500 active:bg-blue-600 active:scale-95 duration-100 shadow-blue-800 shadow-md'>
                Get the App 
              </button>
            </div>
          </div>
        </div>
      </div>


      {/* footer  */}
  <div className=' md:mt-44 mt-20 w-full bg-green-500 md:h-[400px] flex md:flex-row flex-col justify-center item-center'>

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

export default SignUpPage;
