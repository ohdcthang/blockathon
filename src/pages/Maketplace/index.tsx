import React from 'react'
import { Header } from '../Header'

export const Matketplace = () => {
  return (
    <div>
        <Header />

<div style={{marginTop: '100px', marginBottom: '80px'}}>
 <div className='flex justify-between py-8 px-24  bg-background'>
   <div className=''>
     <p className='text-[55px]'>
     Hackathon Ninety Eight
     </p>
   </div>
   <div className='mt-8 w-full flex'>
     <p className='ml-[200px]'>
       A2U will engage with digital fashion at its most compelling. Whether your interests lie in generative AI, 3d design & animation, XR, web3, digital luxury, gamification, avatars, next-gen supply chains, sustainability, new clienteling, digital twins, phygital fashion, or digitally influenced physical fashion, there will be conversations for you, along with much more.
     </p>
     
   </div>
 </div>

 {/* <div className='flex justify-center items-center py-8 '>
   <div className='text-center p-4 rounded-2xl'>
     <div>
       <p className='text-2xl'>Standard</p>
       <p className='text-md font-thin'>Get inspired & connect</p>
     </div>
     <div className='py-4'>
       <p className='text-2xl'>20 A2U</p>
       <p >Hackathon</p>
     </div>
     <button className='bg-primary px-8 py-2 rounded-2xl text-white'>Get ticket</button>
   </div>
   <div className='text-center mx-8 bg-background p-4 rounded-2xl'>
     <div>
       <p className='text-2xl'>Standard</p>
       <p className='text-md font-thin'>Get inspired & connect</p>
     </div>
     <div className='py-4'>
       <p className='text-2xl'>20 A2U</p>
       <p >Hackathon</p>
     </div>
     <button className='bg-primary px-8 py-2 rounded-2xl text-white'>Get ticket</button>
   </div>
   <div className='text-center p-4 rounded-2xl'>
     <div>
       <p className='text-2xl'>Standard</p>
       <p className='text-md font-thin'>Get inspired & connect</p>
     </div>
     <div className='py-4'>
       <p className='text-2xl'>20 A2U</p>
       <p >Hackathon</p>
     </div>
     <button className='bg-primary px-8 py-2 rounded-2xl text-white'>Get ticket</button>
   </div>
 </div> */}
  <div className='px-24'>

   <div className='grid grid-cols-3 gap-4 justify-between '>
   <div className='py-12'>
     <div className='cursor-pointer'>
       <img src="/Frame 178.png" alt="" className='rounded-2xl' />
       <p className='text-2xl mt-4'>Vip</p>
       <p className='text-[32px]'>20 A2Y</p>
       <button className='text-sm bg-primary text-white rounded-2xl px-4 py-2'>Get Ticket</button>
     </div>
   </div>
   <div className='py-12'>
     <div className='cursor-pointer'>
       <img src="/Frame 179.png" alt="" className='rounded-2xl' />
       <p className='text-2xl mt-4'>Premium</p>
       <p className='text-[32px]'>20 A2Y</p>
       <button className='text-sm bg-primary text-white rounded-2xl px-4 py-2'>Get Ticket</button>
     </div>
   </div>
   <div className='py-12'>
     <div className='cursor-pointer'>
       <img src="/Frame 180.png" alt="" className='rounded-2xl' />
       <p className='text-2xl mt-4'>Standard</p>
       <p className='text-[32px]'>20 A2Y</p>
       <button className='text-sm bg-primary text-white rounded-2xl px-4 py-2'>Get Ticket</button>
     </div>
   </div>
   <div className='py-12'>
     <div className='cursor-pointer'>
       <img src="/Frame 178.png" alt="" className='rounded-2xl' />
       <p className='text-2xl mt-4'>Vip</p>
       <p className='text-[32px]'>20 A2Y</p>
       <button className='text-sm bg-primary text-white rounded-2xl px-4 py-2'>Get Ticket</button>
     </div>
   </div>
   <div className='py-12'>
     <div className='cursor-pointer'>
       <img src="/Frame 179.png" alt="" className='rounded-2xl' />
       <p className='text-2xl mt-4'>Premium</p>
       <p className='text-[32px]'>20 A2Y</p>
       <button className='text-sm bg-primary text-white rounded-2xl px-4 py-2'>Get Ticket</button>
     </div>
   </div>
   <div className='py-12'>
     <div className='cursor-pointer'>
       <img src="/Frame 180.png" alt="" className='rounded-2xl' />
       <p className='text-2xl mt-4'>Standard</p>
       <p className='text-[32px]'>20 A2Y</p>
       <button className='text-sm bg-primary text-white rounded-2xl px-4 py-2'>Get Ticket</button>
     </div>
   </div>
   </div>

 </div>
</div>


<footer className='fixed bottom-0 left-0 right-0 p-4 px-24  bg-semiwhite h-50 flex justify-between'>
 <div>
   <img className='w-20' src="/A2U.png" alt="" />
   <p>
     "Art To You" is a place where you can fulfill your dreams related to art.
   </p>
 </div>
 <div>
   <button className='bg-primary text-white py-2 px-16 rounded-2xl'>Get ticket</button>
 </div>
</footer>
    </div>
  )
}
