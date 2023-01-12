import React from 'react';
import CountUp from 'react-countup';

const About = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-8 mt-16 ">
      <div className="flex items-center justify-center flex-col gap-3 ">
        <h1 className="text-center font-coro text-5xl font-medium">
          We have rare & unique <br /> antique NFTs collections
        </h1>
        <p className="font-jost font-light text-base  ">
          In commodo auctor eget congue sit. Ultrices eget pretium sit euismod
          mi id. Risus, aliquam odio <br /> posuere ac in in nisl sed augue.
          Porta aenean egestas malesuada in pulvinar enim viverra.
        </p>
      </div>
      <div className="flex items-center justify-center gap-8 ">
        <div className="flex items-center justify-center flex-col">
          <span className="font-jost font-normal text-4xl">
            <CountUp start={0} end={10} duration={1.5} delay={2} />
            K+
          </span>
          <p className="font-jost font-normal text-base">SOLD NFTS</p>
        </div>
        <div className="flex items-center justify-center flex-col">
          <span className="font-jost font-normal text-4xl">
            <CountUp start={0} end={50} duration={2.5} delay={2} />
            K+
          </span>
          <p className="font-jost font-normal text-base">PRODUCTS</p>
        </div>
        <div className="flex items-center justify-center flex-col">
          <span className="font-jost font-normal text-4xl">
            <CountUp start={0} end={12} duration={3.5} delay={2} />
            k+
          </span>
          <p className="font-jost font-normal text-base">ARTISTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
