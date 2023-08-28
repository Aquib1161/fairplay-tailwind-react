import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { AiOutlineSearch } from 'react-icons/ai';
import { BiChevronDown, BiZoomIn } from 'react-icons/bi';
import { RiBankFill } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { IoHomeSharp } from 'react-icons/io5'
import Marquee from "react-fast-marquee";
import RulesModal from '../../casino_components/RulesModal/RulesModal';

const Header = (props) => {
  let { open, setOpen } = props;
  const dispatch = useDispatch();
  const onClickMenutwo = (url) => {
    localStorage.removeItem('user');
    props.history.push(url)
  }

  const navigate = (url) => {
    props.history.push(url)
  }

  // outside funtions
  const [clickedOutside, setClickedOutside] = useState(false);
  const [rulesModalOpen, setRulesModalOpen] = useState(false);
  const [clickedOutside1, setClickedOutside1] = useState(false);
  const myRef = useRef();
  const myRef1 = useRef();

  const handleClickOutside = e => {
    if (!myRef.current.contains(e.target)) {
      setClickedOutside(false);
    }
  };

  const setModalTrue = () => {
    setRulesModalOpen(true)
  }

  const setModalFalse = () => {
    setRulesModalOpen(false)
  }

  const handleClickInside = () => setClickedOutside(true);
  const handleClickInside1 = () => setClickedOutside1(true);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  })

  let user = JSON.parse(localStorage.getItem('spuser'));
  const { users } = props
  const { wallet_balanceItems } = users

  console.log('DATA ON PAGE', wallet_balanceItems);


  return (
    <div>
      <div className="colour_sky flex items-center justify-between flex-wrap md:gap-4 gap-0 top-0  py-1 h-[76px] relative">
        <div onClick={() => navigate("/app/dashboard")} className='flex items-center space-x-4'>
          <IoHomeSharp className='text-[1.5rem] text-white ml-2 lg:hidden block ' />
          <div className='xl:w-[15rem] md:w-[180px] w-[120px] flex justify-start items-center'>
            <img src='/images/logo.png' alt='logo' className='w-auto h-16 cursor-pointer' />
          </div>
        </div>

        <div className='md:hidden block px-2'>
          <div className='flex justify-end items-center space-x-2'>
            <RiBankFill className='text-[1.2rem] text-white ml-2 lg:hidden block ' />
            <div>
              <span className='font-medium text-white text-[1rem]' >{wallet_balanceItems && wallet_balanceItems.balance ? wallet_balanceItems.balance : '0'}</span>
            </div>
          </div>
          <div className='flex justify-end items-center space-x-2'>
            <div className='underline cursor-pointer text-[12px] text-white'>
              Exp: <span className='font-bold'>{wallet_balanceItems && wallet_balanceItems.liability ? wallet_balanceItems.liability : '0'}</span>
            </div>
            <div className='text-white md:relative'>
              <div ref={myRef} onClick={() => { handleClickInside(); setClickedOutside(!clickedOutside); }}>
                <div className='flex items-center cursor-pointer'>
                  <span className='select-none text-lg pl-1 underline text-[12px]'>{user && user.data && user.data.user_name}</span>
                  <BiChevronDown size={24} />
                </div>
                {clickedOutside ?
                  <div className='animate__animated animate__fadeIn animate__faster absolute  rounded-sm right-0  shadow-2xl divide-y divide-slate-300 bg-white w-[180px] md:mx-0 mr-[2%] ml-[2%] text-sm text-slate-800 transition duration-2000 border z-40'>
                    <div className='py-1 divide-y divide-slate-700'>

                      <div className=' cursor-pointer '>
                        <div onClick={() => navigate("/app/dashboard")}
                          className='text-sm px-2 py-1 w-full flex text-black font-normal hover:underline'>
                          Hoome</div>
                        <div onClick={() => navigate("/app/accountstatement")}
                          className='text-sm px-2 py-1 w-full flex text-black font-normal hover:underline'>
                          Account Statement </div>
                        <div onClick={() => navigate("/app/profit-loss")}
                          className='text-sm px-2 py-1 w-full flex text-black font-normal hover:underline'>
                          Profit Loss Report </div>
                        <div onClick={() => navigate("/app/my-bets")}
                          className='text-sm px-2 py-1 w-full flex text-black font-normal hover:underline'>
                          Bet Histroy </div>
                        <div onClick={() => navigate("/app/unsetteled-bet")}
                          className='text-sm px-2 py-1 w-full flex text-black font-normal hover:underline'>
                          Unsettled Bet</div>
                        <div
                          className='text-sm px-2 py-1 w-full flex text-black font-normal hover:underline'>
                          Casino Report History </div>
                        <div
                          className='text-sm px-2 py-1 w-full flex text-black font-normal hover:underline'>
                          Set Button Values</div>
                        <div
                          className='text-sm px-2 py-1 w-full flex text-black font-normal hover:underline'>
                          Security Auth Verification</div>
                        <div onClick={() => navigate("/app/changepassword")}
                          className='text-sm px-2 py-1 w-full flex text-black font-normal hover:underline'>
                          Change Password</div>
                      </div>
                    </div>
                    <div onClick={() => onClickMenutwo("/login")}
                      className='text-sm px-2 py-2 pt-5 w-full bg-white text-black cursor-pointer hover:underline '>Signout</div>
                  </div>

                  : null}
              </div>
            </div>
          </div>
        </div>



        <div className='md:flex hidden md:flex-row flex-col-reverse gap-3 px-2 '>
          <div className='text-white font-bold pt-4 text-base cursor-pointer'>
            <BiZoomIn size={30} />
          </div>
          <div onClick={() => setModalTrue()} className='text-white font-bold pt-4 text-base pr-2 cursor-pointer'>
            Rules
          </div>
          <div className='text-white -space-y-2 pt-2'>
            <div>
              Balance: <span className='font-bold' >{wallet_balanceItems && wallet_balanceItems.balance ? wallet_balanceItems.balance : '0'}</span>
            </div>
            <div className='underline cursor-pointer'>
              Exposure: <span className='font-bold'>{wallet_balanceItems && wallet_balanceItems.liability ? wallet_balanceItems.liability : '0'}</span>
            </div>
          </div>

          <div className='text-white md:relative'>
            <div ref={myRef} onClick={() => { handleClickInside(); setClickedOutside(!clickedOutside); }}>
              <div className='flex items-center pt-3 px-1 cursor-pointer'>
                <span className='select-none text-lg pl-1'>{user && user.data && user.data.user_name}</span>
                <BiChevronDown size={24} />
              </div>
              {clickedOutside ?
                <div className='animate__animated animate__fadeIn animate__faster absolute  rounded-sm right-0  shadow-2xl divide-y divide-slate-300 bg-white w-[180px] md:mx-0 mr-[2%] ml-[2%] text-sm text-slate-800 transition duration-2000 border z-40'>
                  <div className='py-1 divide-y divide-slate-700'>

                    <div className=' cursor-pointer '>
                      <div onClick={() => navigate("/app/accountstatement")}
                        className='text-sm px-2 py-1 w-full flex text-black font-normal hover:underline'>
                        Account Statement </div>
                      <div onClick={() => navigate("/app/profit-loss")}
                        className='text-sm px-2 py-1 w-full flex text-black font-normal hover:underline'>
                        Profit Loss Report </div>
                      <div onClick={() => navigate("/app/my-bets")}
                        className='text-sm px-2 py-1 w-full flex text-black font-normal hover:underline'>
                        Bet Histroy </div>
                      <div onClick={() => navigate("/app/unsetteled-bet")}
                        className='text-sm px-2 py-1 w-full flex text-black font-normal hover:underline'>
                        Unsettled Bet</div>
                      <div
                        className='text-sm px-2 py-1 w-full flex text-black font-normal hover:underline'>
                        Casino Report History </div>
                      <div
                        className='text-sm px-2 py-1 w-full flex text-black font-normal hover:underline'>
                        Set Button Values</div>
                      <div
                        className='text-sm px-2 py-1 w-full flex text-black font-normal hover:underline'>
                        Security Auth Verification</div>
                      <div onClick={() => navigate("/app/changepassword")}
                        className='text-sm px-2 py-1 w-full flex text-black font-normal hover:underline'>
                        Change Password</div>
                    </div>
                  </div>
                  <div onClick={() => onClickMenutwo("/login")}
                    className='text-sm px-2 py-2 pt-5 w-full bg-white text-black cursor-pointer hover:underline '>Signout</div>
                </div>

                : null}
            </div>
          </div>
        </div>
      </div>
      <div className='flex md:hidden text-white font-bold text-base cursor-pointer colour_sky px-1'>
        <div className='bg-white rounded-full text-black p-1'>
          <AiOutlineSearch size={20} />
        </div>
        <div className="text-white">
          <Marquee gradient={false} speed={50}>
            {wallet_balanceItems && wallet_balanceItems.site_message
              ? wallet_balanceItems.site_message
              : null}
          </Marquee>
        </div>
      </div>
      <div className="lg:block hidden colour_sky text-white">
        <Marquee gradient={false} speed={50}>
          {wallet_balanceItems && wallet_balanceItems.site_message
            ? wallet_balanceItems.site_message
            : null}
        </Marquee>
      </div>
      {rulesModalOpen ?
        <RulesModal setModalFalse={setModalFalse} /> : null}
    </div>
  );
}

function mapStateToProps(state) {
  const { users } = state;
  return {
    users
  };
}
export default connect(mapStateToProps)(Header);