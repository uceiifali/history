import React from 'react';
import HeaderSlider from './HeaderSlider';
import slider1 from '../img/slider1';
import slider2 from '../img/slider2';
import slider3 from '../img/slider3';
import slider4 from '../img/slider4';
import slider5 from '../img/slider5';
import slider6 from '../img/slider6';
import slider7 from '../img/slider7';
import slider8 from '../img/recent1';
const SliderImg = [
  { src: slider1, alt: slider1, name: 'mi curabitur', price: '0.98 LE' },
  { src: slider2, alt: slider2, name: 'Enim feugiat', price: '0.98 LE' },
  { src: slider3, alt: slider3, name: 'Placerat porta', price: '0.98 LE' },
  { src: slider4, alt: slider4, name: 'nulla amet', price: '0.98 LE' },
  { src: slider5, alt: slider5, name: 'mi curabitur', price: '0.98 LE' },
  { src: slider6, alt: slider6, name: 'Enim feugiat', price: '0.98 LE' },
  { src: slider7, alt: slider7, name: 'Placerat porta', price: '0.98 LE' },
  { src: slider8, alt: slider8, name: 'mi curabitur', price: '0.98 LE' },
];

const SliderReverse = [...SliderImg].reverse();
const Recent = () => {
  return (
    <div className="flex items-center justify-center w-full flex-col gap-4">
      <div className="flex  justify-center">
        <h1 className="font-coro font-normal text-5xl text-center ">
          RECENT DROPS
        </h1>
      </div>

      <div className="w-screen ">
        <HeaderSlider SliderImg={SliderReverse} />
      </div>
    </div>
  );
};

export default Recent;
