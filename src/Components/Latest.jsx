import React from 'react';
import lat1 from '../img/lat1';
import lat2 from '../img/lat2';
import lat3 from '../img/lat3';
const LatestItems = [
  {
    src: lat1,
    title: 'Why to buy nfts in 2022?',
    parg: 'In commodo auctor eget congue sit eisus, aliquam odio posuere ac in in nisl sed augue. Porta aenean egestas malesuada in pulvinar enim viverra.',
    link: 'Read more',
  },
  {
    src: lat2,
    title: 'Will NFTs be greater than assets?',
    parg: `Ultrices eget pretium sit euismod mi id commodo auctor eget congue sit.  Isus, aliquam odio posuere ac in in nisl sed pretium sit euismod miaugue. `,
    link: 'Read more',
  },
  {
    src: lat3,
    title: 'NFTs may be of anything else but...',
    parg: 'Porta aenean egestas malesuada in pulvinar enim viverra. In commodo auctor eget congue sit eisus, aliquam odio posuere ac in in nisl sed augue.',
    link: 'Read more',
  },
];
const Latest = () => {
  return (
    <div className=" flex   flex-col md:mt-28">
      <div className="flex items-center justify-center">
        <h1 className="font-coro font-normal text-5xl uppercase text-center">
          Latest informations
        </h1>
      </div>
      <div className="flex w-screen items-center justify-evenly ml-5 flex-col md:flex-row">
        {LatestItems.map((item, i) => (
          <div key={i} className="mt-6">
            <img
              src={item.src}
              className="w-[19rem] h-60 md:w-[26rem]  md:h-72 rounded   "
              alt={item.src}
            />
            <div className="flex flex-col gap-1 mt-2">
              <h3 className="font-jost font-medium text-base">{item.title}</h3>
              <p className="font-jost font-light text-xs w-[92%]">
                {item.parg}
              </p>
              <a
                href="#home"
                className="font-jost font-normal text-sm underline"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Latest;
