import React, { useState } from 'react';

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState('Tasks');

  const toggleSidebar = () => {
    setOpen(!open);
  };

  const toggleSection = (section) => {
    setSelected(selected === section ? '' : section);
  };

  return (
    <div
      className={`sidebar max-h-screen top-0 h-screen bg-gray-800 text-blue-100 w-64 fixed inset-y-0 left-0 transform transition duration-200 ease-in-out z-50 ${
        open ? 'md:translate-x-0 md:sticky' : '-translate-x-full'
      }`}
    >
      <header className="h-[64px] py-2 shadow-lg px-4 md:sticky top-0 bg-gray-800 z-40">
        {/* logo */}
        <a
          href="#"
          className="text-white flex items-center space-x-2 group hover:text-white"
        >
          <div>
            <svg
              className="h-8 w-8 transition-transform duration-300 group-hover:-rotate-45"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {/* Path data */}
            </svg>
          </div>
          <div>
            <span className="text-2xl font-extrabold">FARNOUS</span>
            <span className="text-xs block">Project Management</span>
          </div>
        </a>
      </header>

      {/* nav */}
      <nav className="px-4 pt-4 scroller overflow-y-scroll max-h-[calc(100vh-64px)]">
        <ul className="flex flex-col space-y-2">
          {/* ITEM */}
          <li className="text-sm text-gray-500">
            <a
              href="#"
              className="flex items-center w-full py-1 px-2 rounded relative hover:text-white hover:bg-gray-700"
            >
              <div className="pr-2">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {/* Path data */}
                </svg>
              </div>
              <div>Dashboard</div>
            </a>
          </li>

          {/* Section Devider */}
          <div className="section border-b pt-4 mb-4 text-xs text-gray-600 border-gray-700 pb-1 pl-3">
            Work
          </div>

          {/* ... More code for other menu items ... */}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
