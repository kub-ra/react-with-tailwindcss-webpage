import React, { useState } from 'react'
import {ReactComponent as Reactlogo} from '../images/angle-right-solid.svg'
import {ReactComponent as Reactup} from '../images/angle-up-solid.svg'
import {ReactComponent as Reactdown} from '../images/angle-down-solid.svg'


  


function subCategories(){
    return(
      <div className='w-full ml-5  mt-5'>
          <div className='flex justify-between w-5/6 mb-5'>
          <h2 className='text-green '>Mekanik Klavye</h2>
          <Reactlogo className='w-3  text-green mt-1'/>

          </div>
          <div className='flex justify-between w-5/6 mb-5'>
          <h2 className='text-white'>Yarı Mekanik Klavye</h2>
          <Reactlogo className='w-3  text-gray_text  mt-1'/>

          </div>
        
        
        </div>
    )
  }
 
 export default function Categories() {
    const [open, setOpen] = useState(false)
    return (
        <div className='w-2/12 left-24 mt-7 mr-10'>
            <h2  className='text-lg text-gray_text'>Kategoriler</h2>
           <div className='mt-4 '>
               <div>
                   <div className='flex justify-start'> 
                 <div>
                   <h1 onClick={()=>setOpen(open=>!open)}  className='text-green text-xl'>Klavye</h1>
                  
                   </div>
                   <Reactup className='w-4  text-green ml-32 mt-1'/>
                   </div>
                   
                   <p className='text-green text-sm'>Oyuncu Klavyeleri</p>
                   {open == false ? subCategories() : ""}
                   
               </div>

           </div>
           <div className='mt-4 '>
               <div>
                   <div className='flex justify-start'> 
                 <div>
                   <h1 onClick={()=>setOpen(open=>!open)}  className='text-white text-xl'>Mouse</h1>
                  
                   </div>
                   <Reactdown className='w-3  text-gray_text ml-32 mt-1'/>
                   </div>
                   
                   <p className='text-gray_text text-sm'>Mouse
Oyuncu mouseleri</p>
                   {open == true ? subCategories() : ""}
                   
               </div>

           </div>
           
           <div className='mt-4 '>
               <div>
                   <div className='flex justify-start'> 
                 <div>
                   <h1 onClick={()=>setOpen(open=>!open)}  className='text-white text-xl'>Mouse</h1>
                  
                   </div>
                   <Reactdown className='w-3  text-gray_text ml-32 mt-1'/>
                   </div>
                   
                   <p className='text-gray_text text-sm'>Mouse
Oyuncu mouseleri</p>
                   {open == true ? subCategories() : ""}
                   
               </div>

           </div>
           <div className='mt-4 '>
               <div>
                   <div className='flex justify-start'> 
                 <div>
                   <h1 onClick={()=>setOpen(open=>!open)}  className='text-white text-xl'>Mouse</h1>
                  
                   </div>
                   <Reactdown className='w-3  text-gray_text ml-32 mt-1'/>
                   </div>
                   
                   <p className='text-gray_text text-sm'>Mouse
Oyuncu mouseleri</p>
                   {open == true ? subCategories() : ""}
                   
               </div>

           </div>
           <div className='mt-4 '>
               <div>
                   <div className='flex justify-start'> 
                 <div>
                   <h1 onClick={()=>setOpen(open=>!open)}  className='text-white text-xl'>Mouse</h1>
                  
                   </div>
                   <Reactdown className='w-3  text-gray_text ml-32 mt-1'/>
                   </div>
                   
                   <p className='text-gray_text text-sm'>Mouse
Oyuncu mouseleri</p>
                   {open == true ? subCategories() : ""}
                   
               </div>

           </div>
            
        </div>
        
    )
}


