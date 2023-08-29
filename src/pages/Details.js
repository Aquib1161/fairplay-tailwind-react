import React, { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AiOutlineFileText, AiFillPlayCircle } from 'react-icons/ai';
import { IoMdRefresh } from 'react-icons/io';
import { BsPerson, BsSearch } from 'react-icons/bs';
import { PiMonitorBold } from 'react-icons/pi';
import { CgProfile } from 'react-icons/cg';
import { MdCellTower } from 'react-icons/md';
import { BiSolidCricketBall, BiSolidTennisBall, BiFootball } from 'react-icons/bi';
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

// function SidebarItem({ icon, text, selected }) {
//   return (
//     <li className="text-sm text-gray-500 ">
//       <a
//         href="#"
//         className={`flex items-center w-full py-1 px-2 rounded relative hover:text-white hover:bg-gray-700 ${selected ? 'bg-gray-700 text-white' : ''}`}
//       >
//         <div className="pr-2">{icon}</div>
//         <div>{text}</div>
//       </a>
//     </li>
//   );
// }

// function Submenu({ title, items, selected, onClick }) {
//   return (
//     <li className="text-sm text-gray-500 ">
//       <a
//         href="#"
//         onClick={onClick}
//         className={`flex items-center w-full py-1 px-2 rounded relative hover:text-white hover:bg-gray-700 ${selected ? 'bg-gray-700 text-white' : ''}`}
//       >
//         <div className="pr-2">{title}</div>
//         <div className={`absolute right-1.5 transition-transform duration-300 ${selected ? 'rotate-180' : ''}`}>
//           <svg className=" h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//           </svg>
//         </div>
//       </a>
//       <div className={`pl-4 pr-2 overflow-hidden transition-all transform translate duration-300 max-h-0 ${selected ? `max-height: ${items.length * 32}px` : ''}`}>
//         <ul className="flex flex-col mt-2 pl-2 text-gray-500 border-l border-gray-700 space-y-1 text-xs">
//           {items.map((item, index) => (
//             <SidebarItem key={index} icon={item.icon} text={item.text} />
//           ))}
//         </ul>
//       </div>
//     </li>
//   );
// }

function Dashboard() {
  // const [selectedSection, setSelectedSection] = useState('Tasks');

  // const sidebarItems = [
  //   {
  //     icon: (

  //       <CgProfile />
  //     ),
  //     text: 'Demo123',
  //     section: 'Demo123',
  //   },

  // ];

  // const submenuItems = [
  //   {
  //     title: 'Team',
  //     items: [
  //       { icon: null, text: 'Users List' },
  //       { icon: null, text: 'Create User' },
  //     ],
  //     section: 'Team',
  //   },

  // ];

  // const handleSectionClick = (section) => {
  //   setSelectedSection(selectedSection === section ? '' : section);
  // };

  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1
  };
  var settings1 = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1
  };

  return (
    <>
      <Header />
      {/* <header className=" h-[80px] py-2 shadow-lg px-4 md:sticky top-0 bg-[#121212] z-40 w-full">
        <div className='flex justify-between items-center'>
          <div className='flex items-center space-x-6'>
            <a href="/#" className="text-white flex items-center space-x-2 group hover:text-white">
              <div>
                <img src="/images/logo.png" alt="" className='w-40' />
              </div>
            </a>
            <div className='flex items-center space-x-3'>
              <span className='flex items-center justify-center rounded-full w-8 h-8 bg-[#F26C20] text-white'>
                <AiOutlineFileText size={20} />
              </span>
              <span className='flex items-center justify-center rounded-full w-8 h-8 bg-[#F26C20] text-white'>
                <IoMdRefresh size={20} />
              </span>
            </div>
          </div>
          <div className='flex items-center space-x-6'>
            <form>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg class="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </div>
                <input type="search" id="default-search" class="block w-full px-4 py-2 pl-10 text-xs text-white  outline-none bg-[#292929] " placeholder="Search for a Sports, Games or Team" required />

              </div>
            </form>
            <div className='flex items-center space-x-3'>
              <span className='flex items-center justify-center rounded-full  bg-[#F26C20] text-white px-2 py-2 text-xs w-20'>
                <p>OPEN BETS</p>
              </span>
              <span className='flex items-center justify-center rounded-full  bg-black border border-[#F26C20] text-white  px-2 py-2 text-xs w-20 space-x-2'>
                <p>0.00</p> <BsPerson size={16} className='bg-[#F26C20] rounded-full p-0.5' />
              </span>
            </div>
          </div>

        </div>

      </header> */}
      <div className="md:flex w-full">

        {/* <div
          className={`sidebar max-h-screen top-0 h-screen bg-[#121212] text-blue-100 xl:w-[16%]  fixed inset-y-0 left-0 transform transition duration-200 ease-in-out z-30 xl:translate-x-0 xl:sticky ${selectedSection === 'Dashboard' ? 'xl:sticky ' : '-translate-x-full '}`}
        >

          <nav className="px-4 pt-20 scroller overflow-y-scroll max-h-[calc(100vh-64px)]">
            <ul className="flex flex-col space-y-2 border border-[#F26C20] rounded-xl p-6 ">
              {sidebarItems.map((item, index) => (
                <SidebarItem
                  key={index}
                  icon={item.icon}
                  text={item.text}
                  selected={selectedSection === item.section}
                />
              ))}
              {submenuItems.map((item, index) => (
                <Submenu
                  key={index}
                  title={item.title}
                  items={item.items}
                  selected={selectedSection === item.section}
                  onClick={() => handleSectionClick(item.section)}
                />
              ))}
            </ul>
          </nav>
        </div> */}
        <Sidebar />
        <div className='bg-black xl:w-[84%] w-full bg-fixed bg-cover bg-center p-1 border border-white' style={{ backgroundImage: `url("/images/inplay-bg.png")` }}>
          <div className='bg-[#000000] py-10'>
            <div>
              <img src="/images/bnr3-min.png" alt="" className='w-full' />
            </div>
            <div className='lg:flex items-center lg:space-x-4 space-x-0 lg:space-y-0 space-y-4 py-4 lg:px-3'>
              <div>
                <img src="/images/live-casino-banner.webp" alt="" />
              </div>
              <div>
                <img src="/images/live-cards-banner.webp" alt="" />
              </div>
            </div>
            <div>
              <img src="/images/premium-new.gif" alt="" className='w-full' />
            </div>
          </div>

          <section className='border rounded-lg py-10 p-8 space-y-4'>
            <div className='space-y-4'>
              <div className='pb-4 px-1 flex items-center space-x-2'>
                <span className='flex items-center justify-center rounded-full w-8 h-8 bg-[#F26C20] text-white'>
                  <MdCellTower size={20} />
                </span>
                <span className='text-white'>INPLAY</span>
              </div>


              <div className='bg-[#FFFFFF] divide-y divide-[#C6D2D8] border border-[#C6D2D8] rounded-xl'>
                <div className='lg:flex justify-between border-[#C6D2D8] w-full hidden' >
                  <div className='text-base font-medium flex justify-start px-2 items-center w-[35%] bg-[#F26C20] py-4 rounded-tl-xl space-x-1'>
                    <span>
                      <BiSolidCricketBall className="text-[#C52624]" size={24} /></span>
                    <h2 className='text-white'>Cricket</h2>
                  </div>
                  <div className='w-[30%] bg-[#363636]'></div>
                  <div className='grid grid-cols-3 w-[35%] bg-[#363636] py-4 rounded-tr-xl'>
                    <span className='w-full flex justify-center items-center text-white'>1</span>
                    <span className='w-full flex justify-center items-center text-white'>X</span>
                    <span className='w-full flex justify-center items-center text-white'>2</span>
                  </div>
                </div>
                <a href='/Details' target='_blank'>
                <div className='lg:flex w-[100%] p-1.5' >
                  <div className='lg:w-[35%] w-[100%] p-1 flex justify-between items-center'>
                    <div>
                      <div className='flex justify-start items-center cursor-pointer'>
                        <h2 className='text-sm font-medium' >00.00</h2>
                        <h2 className='text-sm font-medium' >11.11</h2>
                      </div>
                      <div className='flex justify-start py-1 items-center text-gray-600 text-xs font-normal  space-x-1'>
                        <span>12.12
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='text-black space-y-1 lg:w-[30%] w-[100%] flex  items-center'>
                    <div className='flex items-center space-x-1'>
                      <div className='text-green-500'><PiMonitorBold size={24} /></div>
                      <span className=' py-1 rounded-full text-green-500 text-sm '>BM</span>
                      <span className='px-2.5 py-1 rounded-full text-green-500 text-sm '>F</span>
                    </div>
                  </div>


                  <div className="lg:w-[35%] w-[100%] grid grid-cols-6 text-base relative ">
                    <div className='bg-[#6ABBEC] flex justify-center items-center text-xs font-bold p-[5px]'><h2>12.21</h2></div>
                    <div className='bg-[#FAA9BA] flex justify-center items-center text-xs font-bold p-[5px]'><h2>21.32</h2></div>
                    <div className='bg-[#6ABBEC] flex justify-center items-center text-xs font-bold p-[5px]'><h2>22.33</h2></div>
                    <div className='bg-[#FAA9BA] flex justify-center items-center text-xs font-bold p-[5px]'><h2>12.30</h2></div>
                    <div className='bg-[#6ABBEC] flex justify-center items-center text-xs font-bold p-[5px]'><h2>22.334</h2></div>
                    <div className='bg-[#FAA9BA] flex justify-center items-center text-xs font-bold p-[5px]'><h2>32.123</h2></div>
                  </div>


                </div>
                </a>
               
              </div>

              <div className='bg-[#FFFFFF] divide-y divide-[#C6D2D8] border border-[#C6D2D8] rounded-xl'>
                <div className='lg:flex justify-between border-[#C6D2D8] w-full hidden' >
                  <div className='text-base font-medium flex justify-start px-2 items-center w-[35%] bg-[#F26C20] py-4 rounded-tl-xl'>
                    <span>
                      <BiSolidTennisBall className="text-[#C6CF01]" size={20} /></span>
                    <h2 className='text-white'>Tennis</h2>
                  </div>
                  <div className='w-[30%] bg-[#363636]'></div>
                  <div className='grid grid-cols-3 w-[35%] bg-[#363636] py-4 rounded-tr-xl'>
                    <span className='w-full flex justify-center items-center text-white'>1</span>
                    <span className='w-full flex justify-center items-center text-white'>X</span>
                    <span className='w-full flex justify-center items-center text-white'>2</span>
                  </div>
                </div>
                <div className='lg:flex w-[100%] p-1.5'>
                  <div className='lg:w-[35%] w-[100%] p-1 flex justify-between items-center'>
                    <div>
                      <div className='flex justify-start items-center cursor-pointer'>
                        <h2 className='text-sm font-medium' >00.00</h2>
                        <h2 className='text-sm font-medium' >11.11</h2>
                      </div>
                      <div className='flex justify-start py-1 items-center text-gray-600 text-xs font-normal  space-x-1'>
                        <span>12.12
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='text-black space-y-1 lg:w-[30%] w-[100%] flex  items-center'>
                    <div className='flex items-center space-x-1'>
                      <div className='text-green-500'><PiMonitorBold size={24} /></div>
                      <span className=' py-1 rounded-full text-green-500 text-sm '>BM</span>
                      <span className='px-2.5 py-1 rounded-full text-green-500 text-sm '>F</span>
                    </div>
                  </div>


                  <div className="lg:w-[35%] w-[100%] grid grid-cols-6 text-base relative ">
                    <div className='bg-[#6ABBEC] flex justify-center items-center text-xs font-bold p-[5px]'><h2>12.21</h2></div>
                    <div className='bg-[#FAA9BA] flex justify-center items-center text-xs font-bold p-[5px]'><h2>21.32</h2></div>
                    <div className='bg-[#6ABBEC] flex justify-center items-center text-xs font-bold p-[5px]'><h2>22.33</h2></div>
                    <div className='bg-[#FAA9BA] flex justify-center items-center text-xs font-bold p-[5px]'><h2>12.30</h2></div>
                    <div className='bg-[#6ABBEC] flex justify-center items-center text-xs font-bold p-[5px]'><h2>22.334</h2></div>
                    <div className='bg-[#FAA9BA] flex justify-center items-center text-xs font-bold p-[5px]'><h2>32.123</h2></div>
                  </div>


                </div>
              </div>

            </div>
            <div className=''>
              <div className='w-full mx-auto h-1 bg-gradient-to-r via-[#F26C20] to-[#121212] from-[#121212] rounded-full'></div>
              <div className='flex justify-center items-center space-x-4 py-2'>
                <div className='flex items-center space-x-1'>
                  <div className='w-2 h-2 bg-[#daa520] rounded-full'></div>
                  <div className='w-3 h-3 bg-[#daa520] rotate-45'></div>
                </div>
                <p className='text-[#008000] text-center text-[25px] font-[800]'>Live Cards</p>
                <div className='flex items-center space-x-1'>
                  <div className='w-3 h-3 bg-[#daa520] rotate-45'></div>
                  <div className='w-2 h-2 bg-[#daa520] rounded-full'></div>
                </div>
              </div>
              <Slider {...settings}>
                <img src="/images/amarakbaranthony.webp" alt="" />
                <img src="/images/bollywoodcasino.webp" alt="" />
                <img src="/images/cardcasino.webp" alt="" />
                <img src="/images/cardteenpatti.webp" alt="" />
                <img src="/images/muflisteenpatti.webp" alt="" />
                <img src="/images/racetoseventeen.webp" alt="" />
                <img src="/images/cardsjudgement.webp" alt="" />
              </Slider>
            </div>
            <div className=''>
              <div className='w-full mx-auto h-1 bg-gradient-to-r via-[#F26C20] to-[#121212] from-[#121212] rounded-full'></div>
              <div className='flex justify-center items-center space-x-4 py-2'>
                <div className='flex items-center space-x-1'>
                  <div className='w-2 h-2 bg-[#daa520] rounded-full'></div>
                  <div className='w-3 h-3 bg-[#daa520] rotate-45'></div>
                </div>
                <p className='text-[#008000] text-center text-[25px] font-[800]'>Live Casino</p>
                <div className='flex items-center space-x-1'>
                  <div className='w-3 h-3 bg-[#daa520] rotate-45'></div>
                  <div className='w-2 h-2 bg-[#daa520] rounded-full'></div>
                </div>
              </div>
              <Slider {...settings1}>
                <img src="/images/dragontiger.png" alt="" />
                <img src="/images/blackjack.png" alt="" />
                <img src="/images/automaticroulette.png" alt="" />
                <img src="/images/andarbahar.png" alt="" />
                <img src="/images/teenpatti.png" alt="" />
                <img src="/images/speedroulette.png" alt="" />
                <img src="/images/nocommissionbaccarat.png" alt="" />
                <img src="/images/lightningblackjack.png" alt="" />
              </Slider>
            </div>
            <div className='space-y-4'>
              <div className='pb-4 px-1 flex items-center space-x-2'>
                <span className='flex items-center justify-center rounded-full w-8 h-8 bg-[#F26C20] text-white'>
                  <MdCellTower size={20} />
                </span>
                <span className='text-white'>UPCOMING</span>
              </div>


              <div className='bg-[#FFFFFF] divide-y divide-[#C6D2D8] border border-[#C6D2D8] rounded-xl'>
                <div className='lg:flex justify-between border-[#C6D2D8] w-full hidden' >
                  <div className='text-base font-medium flex justify-start px-2 items-center w-[35%] bg-[#F26C20] py-4 rounded-tl-xl space-x-1'>
                    <span>
                      <BiSolidCricketBall className="text-[#C52624]" size={24} /></span>
                    <h2 className='text-white'>Cricket</h2>
                  </div>
                  <div className='w-[30%] bg-[#363636]'></div>
                  <div className='grid grid-cols-3 w-[35%] bg-[#363636] py-4 rounded-tr-xl'>
                    <span className='w-full flex justify-center items-center text-white'>1</span>
                    <span className='w-full flex justify-center items-center text-white'>X</span>
                    <span className='w-full flex justify-center items-center text-white'>2</span>
                  </div>
                </div>
                <div className='lg:flex w-[100%] p-1.5'>
                  <div className='lg:w-[35%] w-[100%] p-1 flex justify-between items-center'>
                    <div>
                      <div className='flex justify-start items-center cursor-pointer'>
                        <h2 className='text-sm font-medium' >00.00</h2>
                        <h2 className='text-sm font-medium' >11.11</h2>
                      </div>
                      <div className='flex justify-start py-1 items-center text-gray-600 text-xs font-normal  space-x-1'>
                        <span>12.12
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='text-black space-y-1 lg:w-[30%] w-[100%] flex  items-center'>
                    <div className='flex items-center space-x-1'>
                      <div className='text-green-500'><PiMonitorBold size={24} /></div>
                      <span className=' py-1 rounded-full text-green-500 text-sm '>BM</span>
                      <span className='px-2.5 py-1 rounded-full text-green-500 text-sm '>F</span>
                    </div>
                  </div>


                  <div className="lg:w-[35%] w-[100%] grid grid-cols-6 text-base relative ">
                    <div className='bg-[#6ABBEC] flex justify-center items-center text-xs font-bold p-[5px]'><h2>12.21</h2></div>
                    <div className='bg-[#FAA9BA] flex justify-center items-center text-xs font-bold p-[5px]'><h2>21.32</h2></div>
                    <div className='bg-[#6ABBEC] flex justify-center items-center text-xs font-bold p-[5px]'><h2>22.33</h2></div>
                    <div className='bg-[#FAA9BA] flex justify-center items-center text-xs font-bold p-[5px]'><h2>12.30</h2></div>
                    <div className='bg-[#6ABBEC] flex justify-center items-center text-xs font-bold p-[5px]'><h2>22.334</h2></div>
                    <div className='bg-[#FAA9BA] flex justify-center items-center text-xs font-bold p-[5px]'><h2>32.123</h2></div>
                  </div>


                </div>
              </div>

              <div className='bg-[#FFFFFF] divide-y divide-[#C6D2D8] border border-[#C6D2D8] rounded-xl'>
                <div className='lg:flex justify-between border-[#C6D2D8] w-full hidden' >
                  <div className='text-base font-medium flex justify-start px-2 items-center w-[35%] bg-[#F26C20] py-4 rounded-tl-xl'>
                    <span>
                      <BiSolidTennisBall className="text-[#C6CF01]" size={24} /></span>
                    <h2 className='text-white'>Tennis</h2>
                  </div>
                  <div className='w-[30%] bg-[#363636]'></div>
                  <div className='grid grid-cols-3 w-[35%] bg-[#363636] py-4 rounded-tr-xl'>
                    <span className='w-full flex justify-center items-center text-white'>1</span>
                    <span className='w-full flex justify-center items-center text-white'>X</span>
                    <span className='w-full flex justify-center items-center text-white'>2</span>
                  </div>
                </div>
                <div className='lg:flex w-[100%] p-1.5'>
                  <div className='lg:w-[35%] w-[100%] p-1 flex justify-between items-center'>
                    <div>
                      <div className='flex justify-start items-center cursor-pointer'>
                        <h2 className='text-sm font-medium' >00.00</h2>
                        <h2 className='text-sm font-medium' >11.11</h2>
                      </div>
                      <div className='flex justify-start py-1 items-center text-gray-600 text-xs font-normal  space-x-1'>
                        <span>12.12
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='text-black space-y-1 lg:w-[30%] w-[100%] flex  items-center'>
                    <div className='flex items-center space-x-1'>
                      <div className='text-green-500'><PiMonitorBold size={24} /></div>
                      <span className=' py-1 rounded-full text-green-500 text-sm '>BM</span>
                      <span className='px-2.5 py-1 rounded-full text-green-500 text-sm '>F</span>
                    </div>
                  </div>


                  <div className="lg:w-[35%] w-[100%] grid grid-cols-6 text-base relative ">
                    <div className='bg-[#6ABBEC] flex justify-center items-center text-xs font-bold p-[5px]'><h2>12.21</h2></div>
                    <div className='bg-[#FAA9BA] flex justify-center items-center text-xs font-bold p-[5px]'><h2>21.32</h2></div>
                    <div className='bg-[#6ABBEC] flex justify-center items-center text-xs font-bold p-[5px]'><h2>22.33</h2></div>
                    <div className='bg-[#FAA9BA] flex justify-center items-center text-xs font-bold p-[5px]'><h2>12.30</h2></div>
                    <div className='bg-[#6ABBEC] flex justify-center items-center text-xs font-bold p-[5px]'><h2>22.334</h2></div>
                    <div className='bg-[#FAA9BA] flex justify-center items-center text-xs font-bold p-[5px]'><h2>32.123</h2></div>
                  </div>


                </div>
              </div>
              <div className='bg-[#FFFFFF] divide-y divide-[#C6D2D8] border border-[#C6D2D8] rounded-xl'>
                <div className='lg:flex justify-between border-[#C6D2D8] w-full hidden' >
                  <div className='text-base font-medium flex justify-start px-2 items-center w-[35%] bg-[#F26C20] py-4 rounded-tl-xl'>
                    <span>
                      <BiFootball className="text-white" size={24} /></span>
                    <h2 className='text-white'>Football</h2>
                  </div>
                  <div className='w-[30%] bg-[#363636]'></div>
                  <div className='grid grid-cols-3 w-[35%] bg-[#363636] py-4 rounded-tr-xl'>
                    <span className='w-full flex justify-center items-center text-white'>1</span>
                    <span className='w-full flex justify-center items-center text-white'>X</span>
                    <span className='w-full flex justify-center items-center text-white'>2</span>
                  </div>
                </div>
                <div className='lg:flex w-[100%] p-1.5'>
                  <div className='lg:w-[35%] w-[100%] p-1 flex justify-between items-center'>
                    <div>
                      <div className='flex justify-start items-center cursor-pointer'>
                        <h2 className='text-sm font-medium' >00.00</h2>
                        <h2 className='text-sm font-medium' >11.11</h2>
                      </div>
                      <div className='flex justify-start py-1 items-center text-gray-600 text-xs font-normal  space-x-1'>
                        <span>12.12
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='text-black space-y-1 lg:w-[30%] w-[100%] flex  items-center'>
                    <div className='flex items-center space-x-1'>
                      <div className='text-green-500'><PiMonitorBold size={24} /></div>
                      <span className=' py-1 rounded-full text-green-500 text-sm '>BM</span>
                      <span className='px-2.5 py-1 rounded-full text-green-500 text-sm '>F</span>
                    </div>
                  </div>


                  <div className="lg:w-[35%] w-[100%] grid grid-cols-6 text-base relative ">
                    <div className='bg-[#6ABBEC] flex justify-center items-center text-xs font-bold p-[5px]'><h2>12.21</h2></div>
                    <div className='bg-[#FAA9BA] flex justify-center items-center text-xs font-bold p-[5px]'><h2>21.32</h2></div>
                    <div className='bg-[#6ABBEC] flex justify-center items-center text-xs font-bold p-[5px]'><h2>22.33</h2></div>
                    <div className='bg-[#FAA9BA] flex justify-center items-center text-xs font-bold p-[5px]'><h2>12.30</h2></div>
                    <div className='bg-[#6ABBEC] flex justify-center items-center text-xs font-bold p-[5px]'><h2>22.334</h2></div>
                    <div className='bg-[#FAA9BA] flex justify-center items-center text-xs font-bold p-[5px]'><h2>32.123</h2></div>
                  </div>


                </div>
              </div>

            </div>
          </section>

          <div className='bg-[#000000] py-10'>
            <div>
              <img src="/images/premium-new-2.gif" alt="" className='w-full' />
            </div>
            <div className='lg:flex items-center lg:space-x-4 space-x-0 lg:space-y-0 space-y-4 py-4 lg:px-3'>
              <div>
                <img src="/images/live-cards-banner.gif" alt="" />
              </div>
              <div>
                <img src="/images/live-casino-banner.gif" alt="" />
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}

export default Dashboard;
