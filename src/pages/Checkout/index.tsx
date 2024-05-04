import React from 'react'
import { Header } from '../Header'

const Checkout = () => {
  return (
    <div>
       <Header />
       <div style={{marginTop: '100px', marginBottom: '80px'}}>
        <div className='grid grid-cols-4 justify-between py-8 px-24  bg-white'>
          <div className='col-span-2'>
           <img src="/Frame 180.png" alt="" className='w-[1000px]'/>
          </div>
          <div className='col-span-2  ml-[100px]'>
            <p className='text-[55px]'>Standard</p>
            <div className='flex justify-between py-4'>
              <p>Blockchain</p>
              <div className='flex items-center'>
                <img src="/viction-24px.png" alt="" />
                <p className='ml-6'>Viction</p>
              </div>
            </div>
            
            <div className='flex justify-between items-center py-4'>
              <p>Currency</p>
              <div className='flex'>
                <img src="/token.png" alt="" className='w-[24px]'/>
                <p className='ml-6'>A2U</p>
              </div>
            </div>

            <div className='flex justify-between items-center py-4'>
              <p>Amount</p>
              <div className='flex'>
                <p>20 A2U $30.5</p>
              </div>
            </div>

            <div className='flex justify-between items-center py-4'>
              <p>Fee</p>
              <div className='flex'>
                <p>$0.1</p>
              </div>
            </div>
            <div className='flex justify-center'>
            <button className='py-4 px-12 border-2 border-primary rounded-2xl'>Cancel</button>
            <button className='py-4 px-12 border-2 border-primary rounded-2xl bg-primary text-white ml-8' >Confirm</button>
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

export default Checkout