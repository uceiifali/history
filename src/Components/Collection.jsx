import React from 'react';
import CollectionSlider from './CollectionSlider';
import col1 from '../img/col1';
import col2 from '../img/col2';
import col3 from '../img/col3';
import col4 from '../img/col4.jpg';
import col5 from '../img/col5.jpg';
import col6 from '../img/col6.jpg';
import col7 from '../img/col7.jpg';
import col8 from '../img/col8.jpg';
import col9 from '../img/col9.jpg';

const CollectionImg = [
  {
    src: col1,
    alt: col1,
    name: 'suspendisse collection',
    link: 'View Collection',
  },
  {
    src: col2,
    alt: col2,
    name: 'senectus collection',
    link: 'View Collection',
  },

  {
    src: col4,
    alt: col4,
    name: 'parturient collection',
    link: 'View Collection',
  },
  {
    src: col5,
    alt: col5,
    name: 'suspendisse collection',
    link: 'View Collection',
  },
  {
    src: col6,
    alt: col6,
    name: 'senectus collection',
    link: 'View Collection',
  },
  {
    src: col7,
    alt: col7,
    name: 'fermentum collection',
    link: 'View Collection',
  },
  {
    src: col8,
    alt: col8,
    name: 'parturient collection',
    link: 'View Collection',
  },
  {
    src: col9,
    alt: col9,
    name: 'suspendisse collection',
    link: 'View Collection',
  },
];
const Collection = () => {
  return (
    <div className="flex  justify-center flex-col gap-8 mt-16">
      <div className="flex items-center justify-center text-center">
        <h1 className="font-coro font-normal text-5xl">
          Some NFTs collections
        </h1>
      </div>
      <div>
        <CollectionSlider CollectionImg={CollectionImg} />
      </div>
    </div>
  );
};

export default Collection;
