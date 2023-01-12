import React from 'react';

const Links = [
  { href: '#home', Name: 'Home' },
  { href: '#artists', Name: 'Artists' },
  { href: '#marketplace', Name: 'MarketPlace' },
  { href: '#community', Name: 'Community' },
];
const user = [
  { href: '#login', Name: 'Log In' },
  { href: '#logout', Name: 'Log Out' },
];
const Navbar = () => {
  return (
    <div className="hidden w-screen lg:flex items-center justify-around h-[100px] md:flex  ">
      <div className="flex items-center gap-x-4 w-[10%]">
        {Links.map((link, index) => (
          <a
            className="font-jost font-normal text-sm hover:text-gray-400 transition-all"
            key={index}
            href={link.href}
          >
            {link.Name}
          </a>
        ))}
      </div>
      <div className="flex items-center justify-center w-1/2">
        <a
          className="font-normal font-jost text-3xl hover:text-gray-400 transition-all"
          href="/"
        >
          ANTIQ NFT
        </a>
      </div>
      <div className="flex items-center  gap-4 ">
        {user.map((link, index) => (
          <a
            className="font-jost font-normal text-sm hover:text-gray-400 transition-all"
            key={index}
            href={link.href}
          >
            {link.Name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
