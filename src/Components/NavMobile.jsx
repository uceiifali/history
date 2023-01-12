import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

const Links = [
  { href: '/home', Name: 'Home' },
  { href: '/artists', Name: 'Artists' },
  { href: '/marketplace', Name: 'MarketPlace' },
  { href: '/community', Name: 'Community' },
  { href: '/login', Name: 'Log In' },
  { href: '/logout', Name: 'Log Out' },
];

const NavMobile = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center justify-around m-4 static md:hidden sm:flex">
      <div className="flex items-center justify-center ">
        <a
          className="font-normal font-jost text-3xl hover:text-gray-400 transition-all"
          href="/"
        >
          ANTIQ NFT
        </a>
      </div>
      <div>
        {open ? (
          <AiOutlineClose
            className="text-2xl hover:text-gray-400 transition-all cursor-pointer "
            onClick={() => setOpen(!open)}
          />
        ) : (
          <FaBars
            className="text-2xl hover:text-gray-400 transition-all cursor-pointer "
            onClick={() => setOpen(!open)}
          />
        )}
      </div>
      {open && (
        <div className="absolute top-0 left-0   w-screen h-[90%] flex items-center justify-center mt-16 transition-all">
          <div className="flex items-center justify-center gap-4 flex-col transition-all ">
            {Links.map((link, index) => (
              <a
                className="font-jost font-normal text-lg hover:text-gray-400 transition-all"
                key={index}
                href={link.href}
                onClick={() => setOpen(!open)}
              >
                {link.Name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavMobile;
