import React,{useState} from 'react'
import {ReactComponent as Reactlogo} from '../images/angle-right-solid.svg'
import {ReactComponent as Reactup} from '../images/angle-up-solid.svg'
import {ReactComponent as Reactdown} from '../images/angle-down-solid.svg'

function subCategories(){
    return(
      <div className='w-44 h-20  mt-5 grid grid-cols-2'>
          <div className='  my-1.5 bg-gray_text  p-1.5 rounded-lg text-center mx-0.5'>
          <h2 className='text-green '>Razer </h2>
         

          </div>
          <div className=' my-1.5  bg-gray_text  p-1.5 rounded-lg text-center mx-0.5'>
          <h2 className='text-white'> logitech</h2>
         

          </div>
          <div className='  my-1.5  bg-gray_text  p-1 rounded-lg text-center mx-0.5'>
          <h2 className='text-white'> MSI</h2>
         

          </div>
          <div className='  my-1.5 h-8  bg-gray_text  p-1.5 rounded-lg text-center mx-0.5'>
          <h2 className='text-white'> Cooler</h2>
         

          </div>
        
        
        </div>
    )
  }

export default function Filters() {
    const [open, setOpen] = useState(false)
    return (
        <div className='w-2/12 h-96  mt-16 ml-10  right-24'> 
            <p className='text-white text-2xl mt-6'>Filtrele</p>
            <div className='mt-4 '>
               <div>
                   <div className='flex justify-start'> 
                 <div>
                   <h1 onClick={()=>setOpen(open=>!open)}  className='text-green text-xl'>Marka</h1>
                  
                   </div>
                   <Reactup className='w-4  text-green ml-32 mt-1'/>
                   </div>
                   
                  
                   {open == false ? subCategories() : ""}
                   
               </div>

           </div>
           <div className='mt-4 '>
               <div>
                   <div className='flex justify-start'> 
                 <div>
                   <h1 onClick={()=>setOpen(open=>!open)}  className='text-green text-base'>Switch Türü</h1>
                  
                   </div>
                   <Reactup className='w-4  text-green ml-32 mt-1'/>
                   </div>
                   
                  
                   {open == true ? subCategories() : ""}
                   
               </div>

           </div>
           <div className='mt-4 '>
               <div>
                   <div className='flex justify-between'> 
                 <div>
                   <h1 onClick={()=>setOpen(open=>!open)}  className='text-white text-base '>Bağlantı Tipi</h1>
                  
                   </div>
                   <Reactup className='w-4  text-green ml-32 mt-1'/>
                   </div>
                   
                  
                   {open == true ? subCategories() : ""}
                   
               </div>

           </div>
           <div className='mt-4 '>
               <div>
                   <div className='flex justify-start'> 
                 <div>
                   <h1 onClick={()=>setOpen(open=>!open)}  className='text-green text-base w-16'>Özellikleri</h1>
                  
                   </div>
                   <Reactup className='w-4  text-green ml-32 mt-1'/>
                   </div>
                   
                  
                   {open == true ? subCategories() : ""}
                   
               </div>
               <button className='bg-green text-black p-2 px-4 ml-18'>Uygula</button>

           </div>
        </div>
    )
}
