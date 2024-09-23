import React, { useEffect, useState } from 'react';
import { BiSolidOffer } from "react-icons/bi";
import { FaChartBar, FaChartLine } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa6";
import { HiOutlineLightBulb } from "react-icons/hi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoDocumentsOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import Bg1 from '../../assets/Bg1.jpg';
import GiffEli from '../../assets/giff0.gif';
import GifHb from '../../assets/giff11.gif';
import GiffCdt from '../../assets/giff12.gif';
import GiffEmi from '../../assets/giff14.gif';
import GiffCup from '../../assets/giff15.gif';
import GiffStR from '../../assets/giff16.gif';
import GiffQry from '../../assets/giff4.gif';
import GiffAt from '../../assets/giff5.gif';
import GiffVd from '../../assets/giff7.gif';
import GiffGt from '../../assets/giff9.gif';
// import Giff17 from '../../assets/giff17.gif';
import { FaHamburger, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { Link } from 'react-router-dom';
import Giff18 from '../../assets/giff18.gif';







const HomePage = () => {

  // personal loan four toggling items 
  const [activeStep, setActiveStep] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prevStep) => (prevStep + 1) % 4); // Loops from 0 to 3 and back to 0
    }, 2500); // Change step every 1 second

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const steps = [
    "Check Eligibility",
    "Select Amount and Tenure",
    "Verify the documents",
    "Get the loan",
  ];
    // personal loan four toggling items ends here



    //Images in the Personal loan slider
    const [currentGif, setCurrentGif] = useState(0); // To track the currently visible GIF
    const gifs = [GiffEli, GiffAt, GiffVd, GiffGt]; // Array of GIFs

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentGif((prevGif) => (prevGif + 1) % gifs.length); // Loop through GIFs
      }, 2500); // Change GIF every 2 seconds
  
      return () => clearInterval(interval); // Clean up the interval on component unmount
    }, [gifs.length]);
    //Images in the Personal loan slider ends here 


    // DropDown Mennu 
    const [isOpen, setIsOpen] = useState(false);
    const [showSideMenu, setShowSideMenu] = useState(false);
  
    // Toggle dropdown for the "More" option
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    // Toggle side menu for small and medium screens
    const toggleSideMenu = () => {
      setShowSideMenu(!showSideMenu);
    };


    // GetAppClickFunction 
    const getApp =()=>{
      alert("Get App Button is Clicked")
    }


    // LogIn Function 
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
      e.preventDefault();
  
      // Check if any of the fields are empty
      if (!name || !email || !password) {
        alert('Fill the form');
        return;
      }
  
      // Proceed with login (you can replace this with actual login logic)
      alert('You are logged in');
  
      // Clear the form
      setName('');
      setEmail('');
      setPassword('');
    };


    // CREDIT sCORE bUTTON 
    const [mobileNumber, setMobileNumber] = useState('');

    const handleCheckCredit = (e) => {
      e.preventDefault();
  
      // Check if the input field is empty
      if (!mobileNumber) {
        alert('Enter your mobile number');
        return;
      }
  
      // Proceed with checking the credit score (you can replace this with actual logic)
      alert('Your Credit Score will be available soon');
  
      // Clear the input
      setMobileNumber('');
    };


    // Querries button 
    const [qname, qsetName] = useState('');
    const [qemail, qsetEmail] = useState('');
    const [query, setQuery] = useState('');
  
    const handleSendQuery = (e) => {
      e.preventDefault();
  
      // Check if any of the fields are empty
      if (!qname || !qemail || !query) {
        alert('Please fill out all fields');
        return;
      }
  
      // Process the query (you can replace this with actual logic)
      alert('We have received your query and will contact you soon');
  
      // Clear the input fields
      qsetName('');
      qsetEmail('');
      setQuery('');
    };






  
  return (
    <div className='w-full flex justify-center items-center flex-col'>

       {/* Nav Bar */}
       <div className='w-full h-20 bg-blue-400 flex justify-between items-center'>
        
        {/* Logo */}
        <div className='font-sans font-bold text-white text-4xl sm:text-6xl pl-3 sm:pl-5'>
          <span className='text-blue-700'>W</span>B.
        </div>

        {/* Nav Bar Items (hidden on small and medium screens) */}
        <div className='hidden lg:flex flex-col sm:flex-row text-white gap-3 sm:gap-5 '>
          <div className='hover:scale-105 cursor-pointer duration-300' ><a href='#PL'>Personal Loan</a></div>
          <div className='hidden sm:block'>|</div>
          <div className='hover:scale-105 cursor-pointer duration-300'> <a href="#CD">Credit Tracker</a> </div>
          <div className='hidden sm:block'>|</div>
          <div className='hover:scale-105 cursor-pointer duration-300'> <Link to="/emi-calculator">EMI Calculator</Link></div>
          <div className='hidden sm:block'>|</div>
          <div className="relative">
            {/* More Button */}
            <div 
              className='hover:scale-105 cursor-pointer duration-300 flex flex-row items-center gap-1'
              onClick={toggleDropdown}
            >
              More
              {isOpen ? (
                <IoIosArrowUp className='sm:block hidden' />
              ) : (
                <IoIosArrowDown className='sm:block hidden' />
              )}
              
            </div>
            

            {/* Dropdown Menu */}
            {isOpen && (
              <div className="absolute top-8 right-0 bg-white shadow-md rounded-md w-48">
                <ul className="text-gray-800">
                  <li className="hover:bg-blue-400 hover:text-white px-4 py-2 cursor-pointer">Credit Card</li>
                  <li className="hover:bg-blue-400 hover:text-white px-4 py-2 cursor-pointer">Home Loans</li>
                  <li className="hover:bg-blue-400 hover:text-white px-4 py-2 cursor-pointer">Loan Against Property</li>
                  <li className="hover:bg-blue-400 hover:text-white px-4 py-2 cursor-pointer">FD Select</li>
                  <li className="hover:bg-blue-400 hover:text-white px-4 py-2 cursor-pointer">Motor Insurance</li>
                  <li className="hover:bg-blue-400 hover:text-white px-4 py-2 cursor-pointer">WB Gold Loans</li>
                </ul>
              </div>
            )}
          </div>
          <div className='hidden sm:block'>|</div>
          <div className='hover:scale-105 cursor-pointer duration-300'><a href="#CS">Contact Us</a></div>
        </div>

        
        <Link to="/signup">
        <button className=' hidden lg:block mr-5 w-28 h-10 text-white bg-blue-500 rounded-md active:bg-blue-600 active:scale-95 duration-100 shadow-blue-800 shadow-md'>
        SignUp Now
        </button>
        </Link>


        {/* Hamburger Icon (shown on small and medium screens) */}
        <div className='block lg:hidden pr-3 sm:pr-5'>
          <button onClick={toggleSideMenu}>
            <FaHamburger className='text-white w-10 h-10' />
          </button>
        </div>
      </div>

      {/* Side Menu (visible only when Hamburger is clicked) */}
      {showSideMenu && (
        <div className='fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 p-5'>
          {/* X Button inside the side menu */}
          <div className='flex justify-end mb-5'>
            <button onClick={toggleSideMenu} className='text-blue-800 text-3xl'>
              X
            </button>
          </div>
          <ul className='text-blue-800'>
            <li className='hover:bg-blue-100 px-4 py-2 cursor-pointer'>Personal Loan</li>
            <li className='hover:bg-blue-100 px-4 py-2 cursor-pointer'>Credit Tracker</li>
            <li className='hover:bg-blue-100 px-4 py-2 cursor-pointer'>EMI Calculator</li>
            <li className='hover:bg-blue-100 px-4 py-2 cursor-pointer'>Credit Card</li>
            <li className='hover:bg-blue-100 px-4 py-2 cursor-pointer'>Home Loans</li>
            <li className='hover:bg-blue-100 px-4 py-2 cursor-pointer'>Loan Against Property</li>
            <li className='hover:bg-blue-100 px-4 py-2 cursor-pointer'>FD Select</li>
            <li className='hover:bg-blue-100 px-4 py-2 cursor-pointer'>Motor Insurance</li>
            <li className='hover:bg-blue-100 px-4 py-2 cursor-pointer'>WB Gold Loans</li>
            <li className='mt-5'>
              <button className='w-full h-10 text-white bg-blue-500 rounded-md active:bg-blue-600 active:scale-95 duration-100 shadow-blue-800 shadow-md'>
              <Link to="/signup">SignUp Now</Link>
              </button>
            </li>
          </ul>
        </div>
      )}
      {/* Nav Bar ends Here */}





      {/* Home Page Banner */}
      <div
        style={{ backgroundImage: `url(${Bg1})`}}  
        className='w-full  md:h-[600px] h-[550px] md:bg-center bg-cover shadow-black/70 shadow-2xl flex justify-center md:justify-end items-center'>
          <div
                style={{ 
                  backgroundImage: `url(${GifHb})`, 
                  // backgroundSize: '350px 350px' , // Size of the GIF
                  backgroundPosition: 'right bottom', // Position it at the bottom-right corner
                  backgroundRepeat: 'no-repeat' // Prevent the GIF from repeating
                }} 
          className='md:mr-5 w-8/12 h-5/6 border-4 border-white rounded-3xl p-5 shadow-md bg-[length:200px_200px] md:bg-[length:350px_350px] '>
            <h1 className='md:text-5xl lg:text-6xl text-2xl text-white font-extrabold' >
              Let not money, Limit your Dreams.
            </h1>
            <h1 className='text-white mt-2 md:text-2xl flex'>
              <p className=''>You don't chase  money, you only chase your dreams. We got your back.</p>
            </h1>
            <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
             className='w-11/12 h-11 bg-white/20 rounded-lg mt-2 md:mt-5 pl-3 placeholder:text-white focus:outline-none focus:border-b-2 focus:border-white' placeholder='Ente Name...'></input>
            <input
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
            className='w-11/12 h-11 bg-white/20 rounded-lg mt-2 md:mt-5 pl-3 placeholder:text-white focus:outline-none focus:border-b-2 focus:border-white' placeholder='Ente E-mailId...'></input>
            <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
            className='w-11/12 h-11 bg-white/20 rounded-lg mt-2 md:mt-5 pl-3 placeholder:text-white focus:outline-none focus:border-b-2 focus:border-white' type='password' placeholder='Ente Password...'></input>
            <div className='w-11/12 h-10  mt-8 flex justify-between items-center space-x-2 md:p-3'>
              <button
                     onClick={handleLogin} 
              className='w-24 h-10 text-[12px] md:text-lg md:w-32 md:h-10 rounded-md text-white bg-blue-500 active:bg-blue-600 active:scale-95 duration-100 shadow-blue-800 shadow-md'>
                LogIn
              </button>
              <button onClick={getApp}
              className='w-24 h-10 text-[12px] md:text-lg md:w-32 md:h-10 rounded-md text-white bg-blue-500 active:bg-blue-600 active:scale-95 duration-100 shadow-blue-800 shadow-md' >
                Get the App 
              </button>
            </div>
          </div>
      </div>


      {/* Personal Loan  section */}
      <div id="PL"></div>
      <div className='md:mt-44 mt-20 w-full  md:h-[600px] h-[950px]  flex flex-col items-center' >
          <div className='flex flex-col justify-center items-center'>
            <p className='text-3xl md:text-6xl text-blue-500 font-bold'>
              Get your Personal Loan
            </p>
            <p className='mt-1 text-2xl md:text-2xl text-blue-400 font-semibold'>in four easy steps</p>
          </div>
          <div className='w-full mt-5  grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center'>

            <div className='w-11/12 h-52 md:h-full bg-white flex justify-center items-center overflow-hidden'>
                  {/* GIF Container */}
                  <div className='w-full h-full relative'>
                  {/* Render the current GIF */}
                  {gifs.map((gif, index) => (
                  <img
                  key={index}
                  src={gif}
                  alt={`Gif ${index}`}
                  className={`w-full h-full object-cover absolute transition-opacity duration-1000
                  ${index === currentGif ? 'opacity-100' : 'opacity-0'}`}
                  />
                ))}
                </div>
            </div>



            <div className='w-11/12 h-full bg-white flex flex-col justify-center pl-5 '>
            {steps.map((step, index) => (
            <div className='flex ' key={index}>
            {/* Circle with dot and animation */}
            <div className='relative flex flex-col items-center'>
            <div
              className={`w-8 h-8 rounded-full border-4 transition-all duration-300 
                ${activeStep === index ? 'scale-105 bg-blue-500 border-blue-500' : 'border-gray-400'}
              `}
            ></div>
            {/* Line connecting the dots except for the last one */}
            {index < steps.length - 1 && (
              <div className="h-16 w-[2px] bg-gray-400"></div>
            )}
            </div>

            {/* Step Text */}
            <p
            className={`ml-4 text-xl transition-all duration-300 
              ${activeStep === index ? 'text-blue-500 font-bold' : 'text-gray-600'}
            `}
            >
            {step}
            </p>
            </div>
            ))}
            </div>
          </div>

          <div className='w-11/12 md:h-24 mt-8  flex md:flex-row flex-col space-y-5 md:space-y-0 justify-between items-center text-white'>
            <div className=' flex justify-center items-center w-11/12 h-12 md:h-20 md:w-56 text-2xl bg-blue-400 rounded-xl hover:shadow-lg hover:shadow-blue-700'>
            <IoDocumentsOutline className=' text-3xl mr-1' />Zero Paper work
            </div>
            <div className=' flex justify-center items-center w-11/12 h-12 md:h-20 md:w-56 text-2xl bg-blue-400 rounded-xl hover:shadow-lg hover:shadow-blue-700'>
            <SlCalender className=' text-3xl mr-1' />Affordable EMIs
            </div>
            <div className=' flex justify-center items-center w-11/12 h-12 md:h-20 md:w-56 text-2xl bg-blue-400 rounded-xl hover:shadow-lg hover:shadow-blue-700'>
            <FaChartLine className=' text-3xl mr-1' />Detailed Report
            </div>
            <div className=' flex justify-center items-center w-11/12 h-12 md:h-20 md:w-56 text-2xl bg-blue-400 rounded-xl hover:shadow-lg hover:shadow-blue-700'>
            <FaChartPie className=' text-3xl mr-1' />Valuable Insights
            </div>
          </div>
      </div>


      {/* EMI calculator */}
      <div id="CD"></div>
      <div className='md:mt-44 mt-20 w-full  md:h-[600px] h-[950px]  flex flex-col md:flex-row justify-center items-center space-y-8 md:space-x-1'>
        <div>
          {/* title  */}
        </div>
        <div className='md:hover:scale-125 duration-200 rounded-3xl md:w-1/2 w-full h-5/6 bg-white shadow-2xl flex justify-center flex-col items-center'>
          <h1 className='md:text-5xl text-3xl font-bold ml- text-blue-500'>
            Track your Credit Score
          </h1>
          <p className='text-blue-500 text-lg'>
             for free, any time any where
          </p>
          <img
          className='w-80 h-56 rounded-full'
          style={{ 
            backgroundImage: `url(${GiffCdt})`,
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            animation: 'loopAnimation 3s infinite' // Custom CSS animation loop
          }}
           alt="" /> 
          <input
                   value={mobileNumber}
                   onChange={(e) => setMobileNumber(e.target.value)}
                   type='tel' // Use 'tel' type for mobile numbers
                   required // Optional, to enforce input
          className='w-2/3 h-10 bg-blue-400/20 pl-3 rounded-md focus:outline-none focus:border-b-2 focus:border-blue-500' 
          placeholder='Ente your Mobile Number...'>
          </input>
          <button
                  onClick={handleCheckCredit} 
          className='active:scale-95 active:bg-blue-600 bg-blue-500 mt-5 w-36 h-10 rounded-md text-white text-xl'>
            Check Credit
          </button>
          <div className='gap-3 w-full h-38 md:h-10 mt-5 flex flex-col md:flex-row justify-center  items-center'> 
            <div className=' h-10 w-10/12 md:w-48 rounded-md text-white flex flex-row justify-center items-center bg-blue-500'>
              <FaChartBar className='mr-2 text-2xl' />Free monthly Reports
            </div>
            <div className=' h-10 w-10/12 md:w-48 rounded-md text-white flex flex-row justify-center items-center bg-blue-500'>
              <HiOutlineLightBulb className='mr-2 text-2xl' />Expert Advices
            </div>
            <div className=' h-10 mb-5 md:mb-0 w-10/12 md:w-48 rounded-md text-white flex flex-row justify-center items-center bg-blue-500'>
              <BiSolidOffer className='mr-2 text-2xl' />Exiciting offers
            </div>
          </div>
        </div>


        <div className=' md:w-1/2 w-full h-5/6 flex-col bg-blue-500 shadow-xl rounded-3xl shadow-blue-900 md:hover:scale-125 duration-200 flex justify-center items-center'>
          <div className='md:text-5xl text-3xl text-white font-bold'>
            Calculate EMI
          </div>
          <p className='text-white font-semibold hover:cursor-pointer'>
          <Link to="/emi-calculator">Click Me to Calculate 👈</Link>
          </p>
          <img
          className='w-56 mt-2' 
          src={GiffEmi} alt="" />
          <div className='text-white'>
            <h1 className='text-white md:text-2xl text-xl'>
              Plan your personal loan and EMI beforehand
            </h1>
            <p className=' hidden md:block'>Calculate your EMI beforehand to manage your 
              finances in a better and more</p>
              <p className='md:block hidden'> convinient way</p>
              <h1 className='text-white md:text-2xl text-xl'>No surprises,100% transparent</h1>
              <p className='md:block hidden'>
              Check interest rate, total repayment & terms beforehand - leave </p>
              <p className='md:block hidden'>no room for doubt or surprises!</p>
              <h1 className='text-white md:text-2xl text-xl'>
              Hassle-free,
              easy to use
              </h1>
              <p className='md:block hidden'>The power of human experience & technology - all packed into our app </p>
              <p className='md:block hidden'>to simplify lengthy processes just with a tap</p>
          </div>
        </div>
      </div>



      {/* Testamony  */}
      <div
                        style={{ 
                          backgroundImage: `url(${Giff18})`, 
                          // backgroundSize: '1500px 1500px' , // Size of the GIF 
                          backgroundPosition: 'center', // Position it at the bottom-right corner
                          backgroundRepeat: 'no-repeat' // Prevent the GIF from repeating
                        }} 
      className='w-full h-auto  md:bg-[length:1350px_1350px] bg-[length:500px_500px] flex flex-col justify-center items-center mt-20  md:mt-44 '> 
        <span className='text-blue-500 text-xl md:text-3xl font-medium'>
        Testamomies
        </span>
  {/* GIF or Image at the Top */}
  <div 
    style={{
      backgroundImage: `url(${GiffCup})`,
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      animation: 'loopAnimation 3s infinite'
    }}
    className='w-24 h-24 md:w-44 md:h-44 bg-blue-300'>
  </div>

  {/* 10 Million Downloads Section */}
  <div className='text-blue-500 text-2xl md:text-5xl font-bold text-center mt-5'>
    10 <span className='text-4xl md:text-[2em] text-blue-600'>Million</span> Plus+ Downloads 
  </div>

  {/* 8 Million Active Users Section */}
  <div className='text-blue-500 text-2xl md:text-5xl font-bold text-center mt-10'>
    8 Million <span className='text-4xl md:text-[3em] text-blue-600'>Active Users</span> per Month
  </div>

  {/* Rating Section */}
  <div className='text-blue-500 text-2xl md:text-5xl font-bold text-center mt-10'>
    Rating <span className='text-4xl md:text-[2em] text-blue-600'>4.9</span> on App Store
  </div>

  {/* Second GIF or Image */}
  <div 
    style={{
      backgroundImage: `url(${GiffStR})`,
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      animation: 'loopAnimation 3s infinite'
    }}
    className='w-4/6 md:w-6/12 h-32 md:h-48 md:mt-5'>
  </div>
</div>





{/* contact us Section  */}

  <div id='CS'
                  style={{ 
                    backgroundImage: `url(${GiffQry})`, 
                    // backgroundSize: '350px 350px' , // Size of the GIF 
                    backgroundPosition: 'right bottom', // Position it at the bottom-right corner
                    backgroundRepeat: 'no-repeat' // Prevent the GIF from repeating
                  }} 
  className= ' bg-[length:250px_250px] shadow-2xl md:bg-[length:550px_550px] md:mt-44 text-blue-500 bg-blue-100 mt-20 w-full pl-5 h-[750px] md:h-[600px]   flex flex-col item-center justify-center'>

  <div className='text-6xl font-bold'>
  Queries ? Let's get in touch...
  </div>
  <p className=' mt-5 pr-3'>
  Please write to us at WB@Loan.in for any service-related queries or feedback. Alternatively, you may also use the WB App to lodge a complaint or report an issue. We generally respond within 24-48 working hours.
  <span className='font-bold'>
  Timings: Monday to Saturday - 9 am to 6 pm - Excluding public holidays
  </span>
  </p>
  <input 
          value={qname}
          onChange={(e) => qsetName(e.target.value)}
  className='bg-white/50 text-black w-11/12 h-12 mt-5 pl-5 focus:outline-none rounded-md' placeholder='Name...'></input>
  <input
          value={qemail}
          onChange={(e) => qsetEmail(e.target.value)}
          type='email' // Optional: for better email input handling 
  className='bg-white/50 text-black w-11/12 h-12 mt-5 pl-5 focus:outline-none rounded-md' placeholder='E-Mail...'></input>
  <textarea
          value={query}
          onChange={(e) => setQuery(e.target.value)} 
    className='bg-white/50 text-black  w-11/12 mt-5 pl-5 h-36 p-3 focus:outline-none rounded-md' placeholder='Write your Queries here...'>
  </textarea>
  <div
            onClick={handleSendQuery} 
  className='w-11/12 '>
    <button className='w-32 h-12 bg-blue-600 mt-5 text-white rounded-md font-semibold active:bg-blue-700 active:scale-95'>
      Send Query
    </button>
  </div>
  </div>


  {/* footer  */}
  <div className=' md:mt-44 mt-20 w-full bg-blue-500 md:h-[400px] flex md:flex-row flex-col justify-center item-center'>

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
};

export default HomePage;
