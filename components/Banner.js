import Image from "next/image";
import banner from "../public/images/banner_hero.jpg"

function Banner() {
  return (
    <div
      className="relative h-[300px] sm:h-[400px] lg:h-[500px] 
        
        xl:h-[600px] 2xl:h-[700px]"
    >
      <Image
        src={banner}
        layout="fill"
        objectFit="cover"
      />
      hover:animate-pulse bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white-500 hover:border-transparent rounded
      <div className="absolute w-full text-center top-1/2">
        <p className="text-sm sm:text-lg text-white">Not sure where to go ?</p>
        <button className="px-10 py-4 my-3 font-bold text-white transition duration-150 hover:animate-pulse bg-transparent hover:bg-blue-500   hover:text-white  border border-white-500 hover:border-transparent  rounded-full shadow-md  hover:shadow-xl active:scale-90">I'm Flexible</button>
      </div>
    </div>
  );
}

export default Banner;
