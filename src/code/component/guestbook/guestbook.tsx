import Slider from "react-slick"; // Import Slider component from react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./guestbook.css";
import "../../../index.css"
import { useState } from "react";

export const GuestBook = () => {
  const guestwishList = [
    { ucapan: "semoga berkekalan", nama: "yana" },
    { ucapan: "berpasangan lah sampai ke syurga wahai kawan ku kasihi yang hensem", nama: "hazim" },
    { ucapan: "selamat menempuh hidup baru", nama: "zaki" },
    { ucapan: "selamat menempuh hidup baru", nama: "zaki" },
    { ucapan: "selamat menempuh hidup baru", nama: "zaki" },
    { ucapan: "selamat menempuh hidup baru", nama: "zaki" }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
    
  };

  return (
    <div className="w-full transition-all duration-500 ease-in-out overflow-hidden">
      <Slider {...settings}>
        {guestwishList.map((guest, index) => (
          <div key={index} className="text-center mb-5">
            <p className="whitespace-normal break-words custom-font-marck-script text-xl">{guest.ucapan}</p>
            <p className="pt-[3px]">oleh <span className="font-semibold">{guest.nama}</span></p>
          </div>
        ))}
      </Slider>
    </div>
  );
};
