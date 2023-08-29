import { AiOutlineFileText, AiFillPlayCircle } from 'react-icons/ai';
import { IoMdRefresh } from 'react-icons/io';
import { BsPerson, BsSearch } from 'react-icons/bs';

export default function Header() {
  return (
    <header className="h-[80px] py-2 shadow-lg px-4 md:sticky top-0 bg-[#121212] z-40 w-full">
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

    </header>
  );
}
