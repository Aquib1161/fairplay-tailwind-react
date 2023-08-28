import React, { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AiOutlineFileText, AiFillPlayCircle } from 'react-icons/ai';
import { IoMdRefresh } from 'react-icons/io';
import { BsPerson, BsSearch } from 'react-icons/bs';
import { PiMonitorBold } from 'react-icons/pi';
import { CgProfile } from 'react-icons/cg';



function SidebarItem({ icon, text, selected }) {
  return (
    <li className="text-sm text-gray-500 ">
      <a
        href="#"
        className={`flex items-center w-full py-1 px-2 rounded relative hover:text-white hover:bg-gray-700 ${selected ? 'bg-gray-700 text-white' : ''}`}
      >
        <div className="pr-2">{icon}</div>
        <div>{text}</div>
      </a>
    </li>
  );
}

function Submenu({ title, items, selected, onClick }) {
  return (
    <li className="text-sm text-gray-500 ">
      <a
        href="#"
        onClick={onClick}
        className={`flex items-center w-full py-1 px-2 rounded relative hover:text-white hover:bg-gray-700 ${selected ? 'bg-gray-700 text-white' : ''}`}
      >
        <div className="pr-2">{title}</div>
        <div className={`absolute right-1.5 transition-transform duration-300 ${selected ? 'rotate-180' : ''}`}>
          <svg className=" h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </a>
      <div className={`pl-4 pr-2 overflow-hidden transition-all transform translate duration-300 max-h-0 ${selected ? `max-height: ${items.length * 32}px` : ''}`}>
        <ul className="flex flex-col mt-2 pl-2 text-gray-500 border-l border-gray-700 space-y-1 text-xs">
          {items.map((item, index) => (
            <SidebarItem key={index} icon={item.icon} text={item.text} />
          ))}
        </ul>
      </div>
    </li>
  );
}

function Sidebar() {
  const [selectedSection, setSelectedSection] = useState('Tasks');

  const sidebarItems = [
    {
      icon: (
        
        <CgProfile />
      ),
      text: 'Demo123',
      section: 'Demo123',
    },

  ];

  const submenuItems = [
    {
      title: 'Team',
      items: [
        { icon: null, text: 'Users List' },
        { icon: null, text: 'Create User' },
      ],
      section: 'Team',
    },

  ];

  const handleSectionClick = (section) => {
    setSelectedSection(selectedSection === section ? '' : section);
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <>
      <header className=" h-[80px] py-2 shadow-lg px-4 md:sticky top-0 bg-[#121212] z-40 w-full">
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
                <input type="search" id="default-search" class="block w-full px-4 py-2 pl-10 text-xs text-gray-900  outline-none bg-[#292929] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Search for a Sports, Games or Team" required />

              </div>
            </form>
            {/* <div class="relative">
             <BsSearch className='text-white absolute flex items-center justify-start'/>
              <input type="text" class="bg-[#292929] h-10 w-full px-12 rounded-lg focus:outline-none hover:cursor-pointer" name="" />
            </div> */}
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
      </header>
      <div className="md:flex">

        <div
          className={`sidebar max-h-screen top-0 h-screen bg-[#121212] text-blue-100 w-64 fixed inset-y-0 left-0 transform transition duration-200 ease-in-out z-30 md:translate-x-0 md:sticky ${selectedSection === 'Dashboard' ? 'md:sticky' : '-translate-x-full'}`}
        >

          <nav className="px-4 pt-4 scroller overflow-y-scroll max-h-[calc(100vh-64px)]">
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
        </div>
        <div className='bg-black w-full bg-fixed bg-cover bg-center p-1 border border-white' style={{ backgroundImage: `url("/images/inplay-bg.png")` }}>
          <div className='bg-[#000000] py-10'>
            <div>
              <img src="/images/bnr3-min.png" alt="" className='w-full' />
            </div>
            <div className='lg:flex items-center lg:space-x-4 space-x-0 lg:space-y-0 space-y-4 py-4 px-3'>
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

          <div className='py-10 p-8 border rounded-lg'>
            <div>
              <span></span>
            </div>

            <div className='lg:flex justify-between  rounded-t-xl border-[#C6D2D8] w-full hidden' >
              <div className='text-base font-medium flex justify-start px-2 items-center w-[35%] bg-[#F26C20] py-4 rounded-tl-xl'>
                <span>
                  <AiFillPlayCircle className="text-green-700" size={20} /></span>
                <h2 >Cricket</h2>
              </div>
              <div className='w-[30%] bg-[#363636]'></div>
              <div className='grid grid-cols-3 w-[35%] bg-[#363636] py-4 rounded-t-xl'>
                <span className='w-full flex justify-center items-center text-white'>1</span>
                <span className='w-full flex justify-center items-center text-white'>X</span>
                <span className='w-full flex justify-center items-center text-white'>2</span>
              </div>
            </div>

            <div className='bg-[#FFFFFF] divide-y divide-[#C6D2D8] border border-[#C6D2D8] rounded-b-xl'>
              <div className='lg:flex w-[100%] p-1.5'>
                <div className='lg:w-[35%] w-[100%] p-1 flex justify-between items-center'>
                  <div>
                    <div className='flex justify-start items-center cursor-pointer'>

                      {/* {element && element.status === "INPLAY" ? */}
                      <h2 className='text-sm font-medium' >00.00</h2>
                      <h2 className='text-sm font-medium' >11.11</h2>
                      {/* } */}
                    </div>
                    <div className='flex justify-start py-1 items-center text-gray-600 text-xs font-normal  space-x-1'>
                      <span>12.12
                      </span>
                    </div>
                  </div>
                </div>
                <div className='text-black space-y-1 lg:w-[30%] w-[100%] flex  items-center'>
                  <div className='flex items-center space-x-1'>
                    <div className='text-green-500'><PiMonitorBold size={24}/></div>
                    <span className=' py-1 rounded-full text-green-500 text-sm '>BM</span>
                    <span className='px-2.5 py-1 rounded-full text-green-500 text-sm '>F</span>
                  </div>
                </div>


                <div className="lg:w-[35%] w-[100%] grid grid-cols-6 text-base relative rounded-xl md:rounded-none">
                  <div className='bg-[#6ABBEC] flex justify-center items-center text-xs font-bold p-[5px] rounded-l-xl md:rounded-none'><h2>12.21</h2></div>
                  <div className='bg-[#FAA9BA] flex justify-center items-center text-xs font-bold p-[5px]'><h2>21.32</h2></div>
                  <div className='bg-[#6ABBEC] flex justify-center items-center text-xs font-bold p-[5px]'><h2>22.33</h2></div>
                  <div className='bg-[#FAA9BA] flex justify-center items-center text-xs font-bold p-[5px]'><h2>12.30</h2></div>
                  <div className='bg-[#6ABBEC] flex justify-center items-center text-xs font-bold p-[5px]'><h2>22.334</h2></div>
                  <div className='bg-[#FAA9BA] flex justify-center items-center text-xs font-bold p-[5px] rounded-r-xl md:rounded-none'><h2>32.123</h2></div>
                </div>


              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Sidebar;
