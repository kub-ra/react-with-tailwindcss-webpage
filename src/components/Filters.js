import React, { useState } from "react";
import { ReactComponent as Reactlogo } from "../images/angle-right-solid.svg";
import { ReactComponent as Reactup } from "../images/angle-up-solid.svg";
import { ReactComponent as Reactdown } from "../images/angle-down-solid.svg";

function subCategories() {
  return (
    <div className="w-44 h-20  mt-5 grid grid-cols-2">
      <div className="  my-1.5 bg-gray_text  p-1.5 rounded-lg text-center mx-0.5">
        <h2 className="text-green ">Razer </h2>
      </div>
      <div className=" my-1.5  bg-gray_text  p-1.5 rounded-lg text-center mx-0.5">
        <h2 className="text-white"> logitech</h2>
      </div>
      <div className="  my-1.5  bg-gray_text  p-1 rounded-lg text-center mx-0.5">
        <h2 className="text-white"> MSI</h2>
      </div>
      <div className="  my-1.5 h-8  bg-gray_text  p-1.5 rounded-lg text-center mx-0.5">
        <h2 className="text-white"> Cooler</h2>
      </div>
    </div>
  );
}

export default function Filters() {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-2/12 mt-16 ml-10  right-24">
      <div className=" h-96  ">
        <p className="text-white text-2xl mt-6">Filtrele</p>
        <div className="mt-4 w-44 ml-7">
          <div>
            <div className="flex justify-between">
              <div>
                <h1
                  onClick={() => setOpen((open) => !open)}
                  className="text-green text-xl"
                >
                  Marka
                </h1>
              </div>
              <Reactup className="w-4  text-green  mt-1" />
            </div>

            {open == false ? subCategories() : ""}
          </div>
        </div>
        <div className="mt-4 w-44 ml-7 ">
          <div>
            <div className="flex justify-between text-white">
              <div className="w-full">
                <h1
                  onClick={() => setOpen((open) => !open)}
                  className=" text-base w-full"
                >
                  Switch Türü
                </h1>
              </div>
              <Reactdown className="w-4   mt-1" />
            </div>

            {open == true ? subCategories() : ""}
          </div>
        </div>
        <div className="mt-4 w-44 ml-7">
          <div>
            <div className="flex justify-between text-white">
              <div className="w-full">
                <h1
                  onClick={() => setOpen((open) => !open)}
                  className=" text-base w-full"
                >
                  Bağlantı Tipi
                </h1>
              </div>
              <Reactdown className="w-4   mt-1" />
            </div>

            {open == true ? subCategories() : ""}
          </div>
        </div>
        <div className="mt-4 w-44 ml-7">
          <div>
            <div className="flex justify-between text-white">
              <div className="w-full">
                <h1
                  onClick={() => setOpen((open) => !open)}
                  className=" text-base w-full"
                >
                  Özellikleri
                </h1>
              </div>
              <Reactdown className="w-4   mt-1" />
            </div>

            {open == true ? subCategories() : ""}
          </div>
        </div>
        <button className="w-44 ml-7 h-10 text-center bg-green rounded-lg mt-5">
          Uygula
        </button>
      </div>

      <div className=" rounded-lg mt-5 h-72 ">
        <h1 className="text-white  ml-7 ">Sırala</h1>
        <div className="mt-6 ml-7 text-green">
          <input className="inline text-green bg-green" type="radio" /> <label className="ml-2.5">Akıllı Sıralama</label>
        </div>

        <div className="mt-5 ml-7 text-white">
          <input className="inline text-green bg-green" type="radio" /> <label className="ml-2.5">Fiyata göre artan</label>
        </div>
        <div className="mt-5 ml-7 text-white">
          <input className="inline text-green b" type="radio" /> <label className="ml-2.5">Fiyata göre azalan</label>
        </div>
      </div>
      <div className=" rounded-lg mt-5 h-48 ">
        <h1 className="text-white  ml-7 ">Konuma göre</h1>
        <input className="bg-gray border border-gray_text rounded-lg text-center p-1.5 mt-8" type="text" placeholder="Bir şehir ara..."/>
        <div className="overflow-y-scroll h-36">
        <div className="mt-6 ml-7 text-green">
          <input className="inline text-green bg-green" type="radio" /> <label className="ml-2.5">İstanbul</label>
        </div>

        <div className="mt-5 ml-7 text-white">
          <input className="inline text-green bg-green" type="radio" /> <label className="ml-2.5">Ankara</label>
        </div>
        <div className="mt-5 ml-7 text-white">
          <input className="inline text-green b" type="radio" /> <label className="ml-2.5">İzmir</label>
        </div>
        <div className="mt-5 ml-7 text-white">
          <input className="inline text-green bg-green" type="radio" /> <label className="ml-2.5">Ankara</label>
        </div>
        <div className="mt-5 ml-7 text-white">
          <input className="inline text-green b" type="radio" /> <label className="ml-2.5">İzmir</label>
        </div>
        </div>
      </div>
    </div>
  );
}
