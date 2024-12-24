import logo from './../assets/Images/logo.png'
import { useState } from 'react';
import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv } from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from './HeaderItem';

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const menu = [
    { name: "HOME", icon: HiHome },
    { name: "SEARCH", icon: HiMagnifyingGlass },
    { name: "WATCHLIST", icon: HiPlus },
    { name: "ORIGINALS", icon: HiStar },
    { name: "MOVIES", icon: HiPlayCircle },
    { name: "SERIES", icon: HiTv },
  ];

  return (
    <div className='flex items-center justify-between p-5'>
      <div className='flex gap-8 items-center'>
        <img src={logo} className='w-[80px] md:w-[115px] object-cover' alt="logo" />

        <div className='hidden md:flex gap-8'>
          {menu.map((item) => (
            <HeaderItem key={item.name} name={item.name} Icon={item.icon} />
          ))}
        </div>

        {/* Mobile Dropdown */}
        <div className='flex gap-5 md:hidden relative'>
          {menu.slice(0, 3).map((item) => (
            <HeaderItem key={item.name} name='' Icon={item.icon} />
          ))}
          <div onClick={() => setToggle(!toggle)}>
            <HeaderItem name='' Icon={HiDotsVertical} />
          </div>
          {toggle && (
            <div className='absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4 w-max z-50'>
              {menu.slice(3).map((item) => (
                <HeaderItem key={item.name} name={item.name} Icon={item.icon} />
              ))}
            </div>
          )}
        </div>
      </div>

      <img
        src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
        className='w-[40px] rounded-full'
        alt="user avatar"
      />
    </div>
  );
};

export default Header;