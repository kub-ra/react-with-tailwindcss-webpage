import React from 'react'
import pc from '../components/pc.jpg'





function Header() {
    return (
        <div className="bg-gray-900 pb-16"> 
        <div className="flex flex-row-reverse mr-8">
        <button className="bg-gray-700 m-2 rounded-xl p-2 mt-16 text-gray-300">Mobil</button>
        <button className="bg-gray-700 m-2 rounded-xl p-2 mt-16 text-gray-300">Oyunlar</button>
        <button className="bg-gray-700 m-2 rounded-xl p-2 mt-16 text-gray-300">Donanım</button>
        <button className="bg-gray-700 m-2 rounded-xl p-2 mt-16 text-gray-300">Teknoloji</button>
        <button className="bg-green-900 m-2 rounded-xl p-2 mt-16 text-green-400 ">Tümü</button>
        </div>
           <div className="m-2 flex justify-between">
               <div className="left ">
                   <img style={{width:420}} className="rounded-xl ml-10 " src={pc} alt="pc"/>

               </div>
               <div className="right mr-10 mt-12">
                   <h5 className="text-green-400">TEKNOLOJİ</h5>
                   <h1 className="text-5xl text-white">En Yeni 7 Oyun Monitörü-2021</h1><br/>
                   <p className="text-xl text-gray-600">Oyun Monitörleri söz konusu olduğunda , herkese uyan tek bir monitör yoktur.Her</p>
                   <p className="text-xl text-gray-600"> kullanıcı,kullandığı ekipmandan oynadığı oyunlara farklı Monitörlere ihtiyaç duyar.

                   </p>
                   <br/>
                   <p className="text-sm text-gray-600">6 AĞUSTOS 2021-22 OKUMA</p>
               </div>


           </div>
           <div className=" flex flex-row ml-8">
               <div className="w-72  m-3 pt-20 bg-green-900 rounded-xl mt-10">
                   <div className="bg-gray-800 p-8 rounded-b-xl" >
                   <h1 className="text-green-400">DONANIM</h1>
                   <h1 className="text-white text-xl">Xbox Series X için En İyi 6 monitör</h1>
                   <p className="text-gray-500 leading-5">Bir Xbox series X'niz varsa ve bir monitörde oyun oynamayı tercih ediyorsanız ,özellikle yüksek yenileme hızı arıyorsanız ,aralarında seçim 
                       yapabileceğiniz birçok seçenek vardır,ancak şuanda piyasada...
                   </p>
                   <div className="text-green-400  mt-3 flex flex-row-reverse"> <span className="mr-1">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
</svg></span><span className="mr-3">Devamını oku  </span></div></div>
               </div>
               <div className="w-72  m-3 pt-20 bg-yellow-900 rounded-xl mt-10">
                   <div className="bg-gray-800 p-8 rounded-b-xl" >
                   <h1 className="text-yellow-400">MOBİL</h1>
                   <h1 className="text-white text-xl">Xbox Series X için En İyi 6 monitör</h1>
                   <p className="text-gray-500 leading-5">Bir Xbox series X'niz varsa ve bir monitörde oyun oynamayı tercih ediyorsanız ,özellikle yüksek yenileme hızı arıyorsanız ,aralarında seçim 
                       yapabileceğiniz birçok seçenek vardır,ancak şuanda piyasada...
                   </p>
                   <div className="text-yellow-400  mt-3 flex flex-row-reverse"> <span className="mr-1">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
</svg></span><span className="mr-3">Devamını oku  </span></div></div>
               </div>
               <div className="w-72  m-3 pt-20 bg-pink-900 rounded-xl mt-10">
                   <div className="bg-gray-800 p-8 rounded-b-xl" >
                   <h1 className="text-pink-400">OYUN</h1>
                   <h1 className="text-white text-xl">Xbox Series X için En İyi 6 monitör</h1>
                   <p className="text-gray-500 leading-5">Bir Xbox series X'niz varsa ve bir monitörde oyun oynamayı tercih ediyorsanız ,özellikle yüksek yenileme hızı arıyorsanız ,aralarında seçim 
                       yapabileceğiniz birçok seçenek vardır,ancak şuanda piyasada...
                   </p>
                   <div className="text-pink-400  mt-3 flex flex-row-reverse"> <span className="mr-1">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
</svg></span><span className="mr-3">Devamını oku  </span></div></div>
               </div>
               <div className="w-72  m-3 pt-20 bg-blue-900 rounded-xl mt-10">
                   <div className="bg-gray-800 p-8 rounded-b-xl" >
                   <h1 className="text-blue-400">TEKNOLOJİ</h1>
                   <h1 className="text-white text-xl">Xbox Series X için En İyi 6 monitör</h1>
                   <p className="text-gray-500 leading-5">Bir Xbox series X'niz varsa ve bir monitörde oyun oynamayı tercih ediyorsanız ,özellikle yüksek yenileme hızı arıyorsanız ,aralarında seçim 
                       yapabileceğiniz birçok seçenek vardır,ancak şuanda piyasada...
                   </p>
                   <div className="text-blue-400  mt-3 flex flex-row-reverse"> <span className="mr-1">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
</svg></span><span className="mr-3">Devamını oku  </span></div></div>
               </div>
               </div>
               <div className="flex flex-row ml-8">
               <div className="w-72  m-3 pt-20 bg-green-900 rounded-xl mt-10">
                   <div className="bg-gray-800 p-8 rounded-b-xl" >
                   <h1 className="text-green-400">DONANIM</h1>
                   <h1 className="text-white text-xl">Xbox Series X için En İyi 6 monitör</h1>
                   <p className="text-gray-500 leading-5">Bir Xbox series X'niz varsa ve bir monitörde oyun oynamayı tercih ediyorsanız ,özellikle yüksek yenileme hızı arıyorsanız ,aralarında seçim 
                       yapabileceğiniz birçok seçenek vardır,ancak şuanda piyasada...
                   </p>
                   <div className="text-green-400  mt-3 flex flex-row-reverse"> <span className="mr-1">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
</svg></span><span className="mr-3">Devamını oku  </span></div></div>
               </div>
               <div className="w-72  m-3 pt-20 bg-yellow-900 rounded-xl mt-10">
                   <div className="bg-gray-800 p-8 rounded-b-xl" >
                   <h1 className="text-yellow-400">MOBİL</h1>
                   <h1 className="text-white text-xl">Xbox Series X için En İyi 6 monitör</h1>
                   <p className="text-gray-500 leading-5">Bir Xbox series X'niz varsa ve bir monitörde oyun oynamayı tercih ediyorsanız ,özellikle yüksek yenileme hızı arıyorsanız ,aralarında seçim 
                       yapabileceğiniz birçok seçenek vardır,ancak şuanda piyasada...
                   </p>
                   <div className="text-yellow-400  mt-3 flex flex-row-reverse"> <span className="mr-1">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
</svg></span><span className="mr-3">Devamını oku  </span></div></div>
               </div>
               <div className="w-72  m-3 pt-20 bg-pink-900 rounded-xl mt-10">
                   <div className="bg-gray-800 p-8 rounded-b-xl" >
                   <h1 className="text-pink-400">OYUN</h1>
                   <h1 className="text-white text-xl">Xbox Series X için En İyi 6 monitör</h1>
                   <p className="text-gray-500 leading-5">Bir Xbox series X'niz varsa ve bir monitörde oyun oynamayı tercih ediyorsanız ,özellikle yüksek yenileme hızı arıyorsanız ,aralarında seçim 
                       yapabileceğiniz birçok seçenek vardır,ancak şuanda piyasada...
                   </p>
                   <div className="text-pink-400  mt-3 flex flex-row-reverse"> <span className="mr-1">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
</svg></span><span className="mr-3">Devamını oku  </span></div></div>
               </div>
               <div className="w-72  m-3 pt-20 bg-blue-900 rounded-xl mt-10">
                   <div className="bg-gray-800 p-8 rounded-b-xl" >
                   <h1 className="text-blue-400">TEKNOLOJİ</h1>
                   <h1 className="text-white text-xl">Xbox Series X için En İyi 6 monitör</h1>
                   <p className="text-gray-500 leading-5">Bir Xbox series X'niz varsa ve bir monitörde oyun oynamayı tercih ediyorsanız ,özellikle yüksek yenileme hızı arıyorsanız ,aralarında seçim 
                       yapabileceğiniz birçok seçenek vardır,ancak şuanda piyasada...
                   </p>
                   <div className="text-blue-400  mt-3 flex flex-row-reverse"> <span className="mr-1">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
</svg></span><span className="mr-3">Devamını oku  </span></div></div>
               </div>

           </div>
        </div>
    )
}

export default Header
