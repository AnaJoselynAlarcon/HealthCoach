import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />

      <div className="bg-slate-500 p-9 relative z-20 flex flex-1 flex-col xl:w-1/2">
        <div className="relative flex flex-1 items-start">
          {/* This is where the image goes */}
          <Image
            src="/rd.jpeg"
            alt="camp"
            width={50}
            height={50}
            className="relative z-20 w-[268px] rounded-3xl bg-teal-500 px-7 py-8"
          />
        </div>
        <h1 className="bold-52 lg:bold-88 mt-10 p-9">Ana Joselyn Alarcon</h1>
        <p className="regular-16 mt-6 text-white xl:max-w-[520px] p-9">
          Because we can be more than what we are, we can transform our bodies
          and minds by choosing inspiring habits.
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            How
            <span className="regular-16 lg:regular-20 ml-1">to start?</span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button type="button" title="Send me a message" variant="btn_green" />
          <Button
            type="button"
            title="How to start?"
            icon="/play.svg"
            variant="btn_white_text"
          />
        </div>
      </div>

      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-teal-500 px-7 py-8">
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-200">How am I?</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-white">BS in Nutrition and Dietetics</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-200">Distance</p>
              <p className="bold-20 text-white">173.28 mi</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-200">Elevation</p>
              <p className="bold-20 text-white">2.040 km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
