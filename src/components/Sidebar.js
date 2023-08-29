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

function SidebarItem({ icon, text, selected }) {
  return (
    <li className="text-sm text-gray-500">
      <a
        href="#"
        className={`flex items-center w-40 mx-auto py-1 px-2 rounded-full bg-orange-600 relative text-white space-x-6 ${selected ? 'bg-gray-700 text-white' : ''}`}
      >
        <div className="absolute -left-2 pr-2">{icon}</div>
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
        className={`flex items-center w-full py-4 px-2  relative text-white hover:bg-white/20 hover:border-r-[4px] hover:border-orange-600 ${selected ? 'hover:bg-white/20 text-white' : ''}`}
      >
        <div className="pr-2">{title}</div>
        {/* <div className={`absolute right-1.5 transition-transform duration-300 ${selected ? 'rotate-180' : ''}`}>
          <svg className=" h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div> */}
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

        <CgProfile size={30}/>
      ),
      text: 'Demo123',
      section: 'Demo123',
    },

  ];

  const submenuItems = [
    {
      title: 'Cricket',
      items: [
        { icon: null, text: 'Users List' },
        { icon: null, text: 'Create User' },
      ],
      section: 'Team',
    },
    {
      title: 'Tennis',
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


  return (
    <>

      <div
        className={`sidebar max-h-screen top-20 h-screen bg-[#121212] text-blue-100 xl:w-[16%]  fixed inset-y-0 left-0 transform transition duration-200 ease-in-out z-30 xl:translate-x-0 xl:sticky ${selectedSection === 'Dashboard' ? 'xl:sticky ' : '-translate-x-full '}`}
      >

        <nav className="px-4  scroller overflow-y-scroll max-h-[calc(100vh-64px)]">
          <ul className="flex flex-col border border-[#F26C20] rounded-[30px] p-4 m-6 ">
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

    </>
  );
}

export default Sidebar;
