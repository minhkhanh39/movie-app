import iconRating from "../assets/rating.png";
import iconRatingHalf from "../assets/rating-half.png";
import imgTemp from "../assets/temp-1.jpg";
import iconPlayButton from "../assets/play-button.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPlay } from "@fortawesome/free-solid-svg-icons/faPlay";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const Banner = () => {
  return (
    <div className="w-screen h-[700px] relative overflow-hidden">
      <video
        src="/banner.mp4"
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute w-full h-full top-0 left-0 bg-black opacity-40" />
      <div className="w-full h-full flex items-center justify-center space-x-[30px] p-4">
        <div className="flex flex-col space-y-5 items-baseline w-[50%] z-1">
          <div className="flex items-center m-3">
            <p className="text-[80px] uppercase font-bold text-red-700 mr-2">
              M
            </p>
            <p className="text-white uppercase text-[30px]">S E R I E S</p>
          </div>

          <div className="flex flex-col space-y-4">
            <h2 className="text-white text-[40px] font-bold">
              The Amazing Spider Man
            </h2>
          </div>
          <div className="flex items-center space-x-3">
            <img src={iconRating} alt="rating" className="w-8 h-8" />
            <img src={iconRating} alt="rating" className="w-8 h-8" />
            <img src={iconRating} alt="rating" className="w-8 h-8" />
            <img src={iconRating} alt="rating" className="w-8 h-8" />
            <img src={iconRatingHalf} alt="rating" className="w-8 h-8" />
          </div>
          <p className="text-white">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <div className="flex items-center space-x-1">
            <button className="py-2 px-4 text-black font-bold bg-white text-sm rounded-sm hover:text-[25px] hover:transition-transform duration-500 ml-2 mr-2">
              <FontAwesomeIcon icon={faPlay} />
              Xem
            </button>
            <button className="py-2 px-4 text-white font-bold bg-gray-600 text-sm rounded-sm hover:font-bold capitalize hover:text-[25px] hover:transition-transform duration-500 ">
              <FontAwesomeIcon icon={faInfoCircle} />
              {""} Chi tiết
            </button>
          </div>
        </div>
        <div className="w-[50%] flex items-center justify-center">
          <div className="w-[300px] h-[400px] relative group cursor-pointer">
            <img
              src={imgTemp}
              alt="temp"
              className="w-full h-full object-cover"
            />
            <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <img
                src={iconPlayButton}
                alt="play-button"
                className="w-16 h-16"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
