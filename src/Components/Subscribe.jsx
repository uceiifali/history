import React from 'react';

const Subscribe = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-4 p-5">
      <div className="flex items-center flex-col text-center gap-4 ">
        <h1 className="font-coro text-5xl font-normal">
          Subscribe to never miss
          <br /> new updates from us
        </h1>
        <p className="font-jost font-light text-base tracking-tight">
          In commodo auctor eget congue sit. Ultrices eget pretium sit euismod
          mi id. Risus, aliquam odio <br /> posuere ac in in nisl sed augue.
          Porta aenean egestas malesuada in pulvinar enim viverra.
        </p>
      </div>
      <div className="flex items-center justify-center md:w-96 w-64 relative ">
        <input
          type="text"
          placeholder="Write your E-mail Here."
          className="w-full h-16 font-jost font-light md:text-base text-sm p-4 bg-[#EFEEEB] outline-none"
        />
        <button className="font-jost font-normal text-sm  text-center uppercase bg-[#171717] text-[#FDFDFC] md:w-28 md:h-12 w-20 h-10 absolute  right-3 md:top-2 top-3">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
