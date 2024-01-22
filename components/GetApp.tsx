import React from "react";
import Button from "./Button";
import Image from "next/image";

const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">
            Get your recipe book for free now!
          </h2>
          <p className="regular-16 text-gray-10">
            Just send me a WhatsApp message.
          </p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <a
              href="https://wa.me/+14037144087"
              target="_blank"
              rel="noreferrer">
              <Button
                type="button"
                title="Yes, I want it!"
                icon="/wa_icon.png"
                variant="btn_white"
                full
              />
            </a>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <Image src="/icecream.jpg" alt="phones" width={550} height={870} />
        </div>
      </div>
    </section>
  );
};

export default GetApp;
