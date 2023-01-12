import React from 'react';
import HeaderSliderItem from './HeaderSliderItem';

const HeaderSlider = ({ SliderImg }) => {
  return (
    <div className="w-screen">
      <HeaderSliderItem SliderImg={SliderImg} />
    </div>
  );
};

export default HeaderSlider;
