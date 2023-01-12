import React from 'react';
import {
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillFacebook,
  AiOutlineInstagram,
} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="mt-4 flex items-center justify-around flex-col md:flex-row">
      <div className="flex flex-col gap-2 items-center justify-center">
        <h4 className="uppercase font-jost text-lg font-normal">Antiq NFT </h4>
        <p className="uppercase font-jost text-xs font-light text-center">
          Euismod mi id posuere ac in in nisl sed augue. Posuere ac <br /> in in
          nisl sed augue trices eget pretium sit.
        </p>
        <div className="flex gap-5 items-center justify-center">
          <div className="bg-[#EFEEEB] w-8 h-8 flex items-center justify-center rounded border border-black cursor-pointer ">
            <AiFillFacebook className="text-[#6C6B67]" />
          </div>
          <div className="bg-[#EFEEEB] w-8 h-8 flex items-center justify-center rounded cursor-pointer ">
            <AiOutlineTwitter className="text-[#6C6B67]" />
          </div>
          <div className="bg-[#EFEEEB] w-8 h-8 flex items-center justify-center rounded cursor-pointer ">
            <AiOutlineInstagram className="text-[#6C6B67]" />
          </div>
          <div className="bg-[#EFEEEB] w-8 h-8 flex items-center justify-center rounded cursor-pointer ">
            <AiFillLinkedin className="text-[#6C6B67]" />
          </div>
          <div className="bg-[#EFEEEB] w-8 h-8 flex items-center justify-center rounded cursor-pointer ">
            <AiFillYoutube className="text-[#6C6B67]" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1 items-center justify-center mt-6">
        <h4 className="uppercase font-coro text-lg font-medium ">
          marketPlace
        </h4>
        <p className="font-jost font-normal text-sm cursor-pointer">NFTS</p>
        <p className="font-jost font-normal text-sm cursor-pointer">art</p>
        <p className="font-jost font-normal text-sm cursor-pointer">
          Collections
        </p>
        <p className="font-jost font-normal text-sm cursor-pointer">
          Virtual World
        </p>
      </div>
      <div className="flex flex-col gap-1 items-center justify-center mt-6">
        <h4 className="uppercase font-coro  text-lg font-medium ">Info </h4>
        <p className="font-jost font-normal text-sm cursor-pointer">activity</p>
        <p className="font-jost font-normal text-sm">stats</p>
        <p className="font-jost font-normal text- cursor-pointer">Rankings</p>
        <p className="font-jost font-normal text-sm cursor-pointer">Artists</p>
      </div>
      <div className="flex flex-col gap-1 items-center justify-center mt-6">
        <h4 className="uppercase font-coro  text-lg font-medium ">Company </h4>
        <p className="font-jost font-normal text-sm cursor-pointer">about</p>
        <p className="font-jost font-normal text-sm cursor-pointer">Support</p>
        <p className="font-jost font-normal text-sm cursor-pointer">Features</p>
        <p className="font-jost font-normal text-sm cursor-pointer">
          Top Creators
        </p>
      </div>
      <div className="flex flex-col gap-1 items-center justify-center mt-6">
        <h4 className="uppercase font-coro  text-lg font-medium ">Resources</h4>
        <p className="font-jost font-normal text-sm cursor-pointer">info</p>
        <p className="font-jost font-normal text-sm cursor-pointer">
          affilates
        </p>
        <p className="font-jost font-normal text-sm cursor-pointer">
          Associated
        </p>
        <p className="font-jost font-normal text-sm cursor-pointer">Blog</p>
      </div>
    </div>
  );
};

export default Footer;
