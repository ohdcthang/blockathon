import React from 'react'
import { Header } from '../Header'

export const TicketDetail = () => {
  return (
    <div>
        <Header />

        <div style={{marginTop: '100px', marginBottom: '80px'}}>
        <div className='flex justify-between py-8 px-24  bg-white'>
          <div className=''>
           <img src="/Frame 180.png" alt="" className='w-[1000px]'/>
          </div>
          <div className='w-full  ml-[100px]'>
            <p className=''>Hackathon Ninety Eight</p>
            <p className='text-[55px]'>Standard</p>
            <p><span style={{color: "#B8B4C5"}}>Owned by</span> 0x47h..93k8h</p>
            <p className='py-2'>Ticket Standard provides comfortable seating arrangements that can help you feel inspired and connected.Ticket Standard provides comfortable seating arrangements that can help you feel inspired and connected</p>
            <div className='py-2 flex items-center'>
                <img src="/token.png" alt="" />
                <p className='text-[32px] px-2'>20 A2U</p>
                <p  style={{color: "#B8B4C5"}}className='text-[24px]'>20$</p>
            </div>
            <button className='bg-primary text-white rounded-2xl py-2 px-6'>Get Ticket</button>
            <p className='py-4'>End in: 02/07/2024 12:00 PM</p>
          </div>
        </div>
        <div className='px-24'>
          <p className='text-[50px]'>Current Listings</p>

          <div className='flex justify-between'>
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
