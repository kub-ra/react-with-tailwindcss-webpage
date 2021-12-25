import React from "react";
import Categories from "./Categories";
import Filters from "./Filters";

function Header() {
  return (
    <div className="w-full">
      <div className="bg-green2 text-gray text-center h-12 pt-3 w-full">
        <h2 className="">
          Daha iyi alışveriş deneyimi için mobil uygulamamızı indir!
        </h2>
      </div>
      <div className="flex justify-center">
        <Categories />
        <div className="w-6/12 mt-24  grid grid-cols-3 ">
          <div className=" border-white   ">
            <div className="rounded-xl border border-gray_text w-48 h-72 visitid:bg-red">
              <div className="relative">
                <img
                  className="w-100 h-40 rounded-t-xl"
                  src="https://storage-asset.msi.com/event/2019/mystic-light-rgb-pc/images/partner01.jpg"
                  alt="products"
                />
                <span className="text-center rounded-xl text-gray bg-green h-7 w-16 block absolute top-1.5 left-3.5">
                  Vitrin
                </span>
              </div>

              <span className="text-gray_text block ml-3.5 mt-4">
                izmir -Konak
              </span>
              <h2 className="text-white ml-3.5 mt-2">
                Xbox Series X İçin Müthiş Monitör
              </h2>
              <span className="text-green ml-3.5 mt-2">12.000₺</span>
            </div>
          </div>
          <div className="  border-white  ml-5 ">
            <div className="rounded-xl border border-gray_text w-48 h-72">
              <div className="relative">
                <img
                  className="w-100 h-40 rounded-t-xl"
                  src="https://storage-asset.msi.com/event/2019/mystic-light-rgb-pc/images/partner01.jpg"
                  alt="products"
                />
                <span className="text-center rounded-xl text-gray bg-green h-7 w-16 block absolute top-1.5 left-3.5">
                  Vitrin
                </span>
              </div>

              <span className="text-gray_text block ml-3.5 mt-4">
                izmir -Konak
              </span>
              <h2 className="text-white ml-3.5 mt-2">
                Xbox Series X İçin Müthiş Monitör
              </h2>
              <span className="text-green ml-3.5 mt-2">12.000₺</span>
            </div>
          </div>
          <div className="  border-white  ml-5 ">
            <div className="rounded-xl border border-gray_text w-48 h-72">
              <div className="relative">
                <img
                  className="w-100 h-40 rounded-t-xl"
                  src="https://storage-asset.msi.com/event/2019/mystic-light-rgb-pc/images/partner01.jpg"
                  alt="products"
                />
                <span className="text-center rounded-xl text-gray bg-green h-7 w-16 block absolute top-1.5 left-3.5">
                  Vitrin
                </span>
              </div>
              <span className="text-gray_text block ml-3.5 mt-4">
                izmir -Konak
              </span>
              <h2 className="text-white ml-3.5 mt-2">
                Xbox Series X İçin Müthiş Monitör
              </h2>
              <span className="text-green ml-3.5 mt-2">12.000₺</span>
            </div>
          </div>
          <div className="  border-white mt-6   ">
            <div className="rounded-xl border border-gray_text w-48 h-72">
              <div className="relative">
                <img
                  className="w-100 h-40 rounded-t-xl"
                  src="https://storage-asset.msi.com/event/2019/mystic-light-rgb-pc/images/partner01.jpg"
                  alt="products"
                />
                <span className="text-center rounded-xl text-gray bg-green h-7 w-16 block absolute top-1.5 left-3.5">
                  Vitrin
                </span>
              </div>
              <span className="text-gray_text block ml-3.5 mt-4">
                izmir -Konak
              </span>
              <h2 className="text-white ml-3.5 mt-2">
                Xbox Series X İçin Müthiş Monitör
              </h2>
              <span className="text-green ml-3.5 mt-2">12.000₺</span>
            </div>
          </div>
          <div className="  border-white mt-6 ml-5 ">
            <div className="rounded-xl border border-gray_text w-48 h-72">
              <div className="relative">
                <img
                  className="w-100 h-40 rounded-t-xl"
                  src="https://storage-asset.msi.com/event/2019/mystic-light-rgb-pc/images/partner01.jpg"
                  alt="products"
                />
                <span className="text-center rounded-xl text-gray bg-green h-7 w-16 block absolute top-1.5 left-3.5">
                  Vitrin
                </span>
              </div>
              <span className="text-gray_text block ml-3.5 mt-4">
                izmir -Konak
              </span>
              <h2 className="text-white ml-3.5 mt-2">
                Xbox Series X İçin Müthiş Monitör
              </h2>
              <span className="text-green ml-3.5 mt-2">12.000₺</span>
            </div>
          </div>
          <div className="  border-white mt-6  ml-5 ">
            <div className="rounded-xl border border-gray_text w-48 h-72">
              <div className="relative">
                <img
                  className="w-100 h-40 rounded-t-xl"
                  src="https://storage-asset.msi.com/event/2019/mystic-light-rgb-pc/images/partner01.jpg"
                  alt="products"
                />
                <span className="text-center rounded-xl text-gray bg-green h-7 w-16 block absolute top-1.5 left-3.5">
                  Vitrin
                </span>
              </div>
              <span className="text-gray_text block ml-3.5 mt-4">
                izmir -Konak
              </span>
              <h2 className="text-white ml-3.5 mt-2">
                Xbox Series X İçin Müthiş Monitör
              </h2>
              <span className="text-green ml-3.5 mt-2">12.000₺</span>
            </div>
          </div>
        </div>
        <Filters />
      </div>
    </div>
  );
}

export default Header;
