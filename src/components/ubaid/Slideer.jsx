import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from '../ubaid/Card.jsx';
import data from '../data/data.json';

const Slideer = () => {
  const [selectedItem, setSelectedItem] = useState(null); // State to hold selected item for details view

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleDetailsClick = (item) => {
    setSelectedItem(item); // Set the selected item when "Details" is clicked
  };

  return (
    <div className="slider-container">
      {selectedItem ? (
        // If an item is selected, render the details of that card
        <div className='flex justify-center items-center flex-col  w-full'>
          <Card item={selectedItem} showDetails={true} />
          <button className='btn btn-success mb-3' onClick={() => setSelectedItem(null)}>Go Back to Slider</button>
        </div>
      ) : (
        // Render the slider if no item is selected
        <Slider {...settings}>
          {data.map((item) => (
            <div key={item.id}>
              <Card item={item} onDetailsClick={() => handleDetailsClick(item)} />
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default Slideer;
