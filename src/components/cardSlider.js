import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardSlider = () => {
  const sliderRef = useRef(null);
  const mainRef = useRef(null);
  const [showAll, setShowAll] = useState(false);
  const [numToShow, setNumToShow] = useState(4);
  const handleSeeMore = () => {
    setShowAll(!showAll);
    setNumToShow(showAll ? 4 : cardsData.length);
    mainRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const cardsData = [
    {
      id: 1,
      imageSrc: "/assets/sacra.png",
      title: "Sacramento River Cats",
      totalEvents: "48 Events",
      sport: "Baseball",
    },
    {
      id: 2,
      imageSrc: "/assets/las.png",
      title: "Las Vegas Aviators",
      totalEvents: "28 Events",
      sport: "Baseball",
    },
    {
      id: 3,
      imageSrc: "/assets/devils.png",
      title: "New Jersey Devils",
      totalEvents: "15 Events",
      sport: "Ice hockey",
    },
    {
      id: 4,
      imageSrc: "/assets/las.png",
      title: "Las Vegas Aviators",
      totalEvents: "28 Events",
      sport: "Baseball",
    },
    {
      id: 5,
      imageSrc: "/assets/sacra.png",
      title: "Sacramento River Cats",
      totalEvents: "48 Events",
      sport: "Baseball",
    },
    {
      id: 6,
      imageSrc: "/assets/las.png",
      title: "Las Vegas Aviators",
      totalEvents: "28 Events",
      sport: "Baseball",
    },
    {
      id: 7,
      imageSrc: "/assets/devils.png",
      title: "New Jersey Devils",
      totalEvents: "15 Events",
      sport: "Ice hockey",
    },
    {
      id: 8,
      imageSrc: "/assets/las.png",
      title: "Las Vegas Aviators",
      totalEvents: "28 Events",
      sport: "Baseball",
    },
  ];

  const CardSliderData = [
    {
      id: 1,
      imageSrc: "/assets/las-aviator.png",
      title: "Las Vegas Aviators",
      date: "Oct 15 | Sun | 4:30 PM",
      venue: "Las Vegas Ballpark, Las Vegas, Nevada",
      button: "Take Flight Collection",
    },
    {
      id: 2,
      imageSrc: "/assets/sacra-aviator.png",
      title: "Sacramento River Cats",
      date: "Oct 15 | Sun | 4:30 PM",
      venue: "Sutter Health Park, Sacramento, California",
      button: "Orange Collection",
    },
    {
      id: 3,
      imageSrc: "/assets/las-aviator.png",
      title: "Las Vegas Aviators",
      date: "Oct 15 | Sun | 4:30 PM",
      venue: "Las Vegas Ballpark, Las Vegas, Nevada",
      button: "Take Flight Collection",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "60px",
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };
  const containerStyle = {
    background: darkMode
      ? "#F7F7F8"
      : "linear-gradient(180deg, #18282A 0%, #221A2C 100%)",
    color: darkMode ? "#000" : "#fff",
  };

  const goToNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };
  const goToPrevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <div style={containerStyle} ref={mainRef}>
      <div className="flex justify-end m-4">
        <button
          className="w-[80px] h-[30px] border hover:cursor-pointer font-bold text-sm rounded-lg"
          onClick={toggleDarkMode}
        >
          {darkMode ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
      {/*black card*/}
      <div className="p-10">
        <h1
          className={`border-b border-[#738FFF] m-2 w-[75px] font-bold text-[24px] ${
            darkMode ? "text-black" : "text-white"
          }`}
        >
          Sports
        </h1>
        <div className='flex justify-center'>
        <div className="grid lg:grid-cols-5 grid-cols-1">
        {cardsData.slice(0, numToShow).map((card, index) => (
                      <React.Fragment key={card.id}>
              <div
                style={containerStyle}
                className={`lg:p-2 p-8 ${
                  darkMode ? "" : "border-[#292B32]"
                } border-2 bg-[#3B3E47] lg:h-[511px] lg:m-2 m-4 w-[260px] lg:w-[unset]`}
              >
                <img src={card.imageSrc} alt={card.title} />
                <p className={`pb-4 ${darkMode ? "text-black" : "text-white"}`}>
                  {card.title}
                </p>
                <div
                  style={{
                    ...containerStyle,
                    backgroundColor: darkMode ? "#F7F7F8" : "#292B32",
                  }}
                  className={`flex justify-start items-center gap-x-4 border-2  p-2 ${
                    darkMode ? "text-black" : "text-white border-[#292B32]"
                  }`}
                >
                  <div>
                    <p>Total events</p>
                    <strong>{card.totalEvents}</strong>
                  </div>
                  <div>
                    <p>Sport</p>
                    <strong>{card.sport}</strong>
                  </div>
                </div>
              </div>
              {index === cardsData.length - 5 && (
                <div
                  style={containerStyle}
                  className={`lg:p-2 p-6 border-2 bg-[#3B3E47] lg:h-[511px] outline-none w-[260px] lg:w-[unset] ${
                    darkMode ? "" : "border-[#292B32]"
                  } lg:m-2 m-4`}
                >
                  <div className="relative">
                    <img src="/assets/imgg4.png" alt="dicks" className="pb-6" />
                    <img
                      src="/assets/imgg0.png"
                      alt="dicks"
                      className="absolute right-0 top-0"
                    />

                    <strong
                      className={`${
                        darkMode ? "text-black" : "text-white"
                      } pb-4 p-2`}
                    >
                      Advertisement title
                    </strong>
                    <p
                      className={`p-2 ${
                        darkMode ? "text-black" : "text-white"
                      } text-[14px]`}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.
                    </p>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
        </div>
        <button className="font-semibold text-[14px] text-[#FFFFFF] rounded-[3px] py-[10px] px-[30px] bg-[#2C9CF0] mx-auto flex justify-center items-center my-4"  onClick={handleSeeMore}>
        {showAll ? 'Show Less' : 'See More'}
        </button>
      </div>

      {/*slider card*/}
      <div>
      <div style={containerStyle} className="relative m-[50px] pb-[30px] ">
        <h1
          className={`${
            darkMode ? "text-black" : "text-white"
          } font-bold lg:text-[50px] text-[20px] text-center mx-auto pt-8`}
        >
          Collection Spotlight
        </h1>
        <p
          className={`lg:text-[14px] text-[10px] px-4 font-normal mx-auto text-center lg:w-[600px] ${
            darkMode ? "text-black" : "text-white"
          } pb-8`}
        >
          Discover extraordinary moments with our Spotlight Collection
          metatickets—exclusive access to premium events for an unforgettable
          experience. Grab yours today!
        </p>

        <Slider
          ref={sliderRef}
          {...settings}
          className="max-w-[820px] mx-auto flex justify-between items-center pl-4 "
        >
          {CardSliderData.map((card) => (
            <div key={card.id} className="lg:ml-14 ml-[-8px] h-[100vh] lg:h-[unset] overflow-auto lg:overflow-hidden">
              <div
                style={{ backgroundColor: darkMode ? "white" : "#3B3E47" }}
                className="border-2  border-none relative mb-4 pt-2 m-4"
              >
                <img src={card.imageSrc} alt="alt" />
                <div className="border-b border-dashed border-[#818A97] w-[180px] mx-auto"></div>
                <div
                  className="absolute top-[68%] right-[-10px]  h-6 w-6 rounded-full border-2 border-none"
                  style={{
                    backgroundImage: darkMode
                      ? "none"
                      : "linear-gradient(to bottom, rgba(24, 40, 42, 1), rgba(34, 26, 44, 1))",
                    backgroundColor: darkMode ? "#F7F7F8" : "transparent",
                  }}
                ></div>
                <div
                  className="absolute top-[68%] left-[-10px] h-6 w-6 rounded-full border-2 border-none"
                  style={{
                    backgroundImage: darkMode
                      ? "none"
                      : "linear-gradient(to bottom, rgba(24, 40, 42, 1), rgba(34, 26, 44, 1))",
                    backgroundColor: darkMode ? "#F7F7F8" : "transparent",
                  }}
                ></div>

                <div
                  className={`flex flex-col justify-center items-center max-w-[200px] mx-auto ${
                    darkMode ? "text-black" : "text-white"
                  }`}
                >
                  <h1 className="pt-4 font-medium">{card.title}</h1>
                  <p className="font-normal">{card.date}</p>
                  <p className="text-[14px] text-center pb-2">{card.venue}</p>
                  <button className="px-[20px] py-[10px] bg-black text-white font-medium lg:mb-2 mb-8">
                    {card.button}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div
          className=" absolute right-[-10%] lg:right-[71px] lg:bottom-[40%] bottom-[50%] cursor-pointer"
          onClick={goToNextSlide}
        >
          <img className="" src="/assets/rightarrow.png" alt="next" />
        </div>
        <div className="absolute left-[-10%] lg:left-[71px] lg:bottom-[40%] bottom-[50%]">
          <img
            className="cursor-pointer"
            src="/assets/leftarrow.png"
            alt="prev"
            onClick={goToPrevSlide}
          />
        </div>
        </div>
      </div>
    </div>
  );
};

export default CardSlider;
