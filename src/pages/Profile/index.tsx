import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import { convertWeiToBalance, truncate } from '../../utitls'
import { Header } from '../Header'
import { Tabs } from "flowbite-react";

   const data = [
    {
      label: "HTML",
      value: "html",
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people 
      who are like offended by it, it doesn't matter.`,
    },
    {
      label: "React",
      value: "react",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Vue",
      value: "vue",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "Angular",
      value: "angular",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Svelte",
      value: "svelte",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
  ];
 

export const Profile = () => {
  const { address, balance } = useSelector((state:RootState) => state.wallet)

  return (
    <div>
        <Header />

        <div  style={{marginTop: '120px', marginBottom: '80px'}} >
            <div className='flex bg-[#F3F3F3] px-24 py-12'>
                <img src="/Rectangle 7.png" alt="" className='rounded-2xl w-32 h-32' />
                <div className='ml-4'>
                    <p className='text-[48px]'>{Number(convertWeiToBalance(balance, '18')).toFixed(0)} A2U</p>
                    <p className='text-[24px]'>{truncate(address, {
                                length: 5,
                                separator: '****'
                    })}</p>
                </div>
                {/* <div className='ml-4'>
                </div> */}
            </div>

            <div className='px-24'>
            <Tabs aria-label="Default tabs" style="default">
      <Tabs.Item active title="History" >
      <div className=''>

          <div className='flex justify-between'>
          <div className='py-12'>
            <div className='cursor-pointer'>
              <img src="/Frame 178.png" alt="" className='rounded-2xl' />
              <p className='text-2xl mt-4'>Standard #764</p>
              <button className='text-sm bg-primary text-white rounded-2xl px-4 py-2 my-4'>Get Ticket</button>
            </div>
          </div>
          <div className='py-12'>
            <div className='cursor-pointer'>
              <img src="/Frame 179.png" alt="" className='rounded-2xl' />
              <p className='text-2xl mt-4'>Standard #764</p>
              <button className='text-sm bg-primary text-white rounded-2xl px-4 py-2 my-4'>Get Ticket</button>
            </div>
          </div>
          <div className='py-12'>
            <div className='cursor-pointer'>
              <img src="/Frame 180.png" alt="" className='rounded-2xl' />
              <p className='text-2xl mt-4'>Standard #764</p>
              <button className='text-sm bg-primary text-white rounded-2xl px-4 py-2 my-4'>Get Ticket</button>
            </div>
          </div>
          </div>

        </div>
      </Tabs.Item>
      <Tabs.Item title="Mission" >
        This is <span className="font-medium text-gray-800 dark:text-white">Dashboard tab's associated content</span>.
        Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
        control the content visibility and styling.
      </Tabs.Item>
      <Tabs.Item title="Loyalty Program">
        This is <span className="font-medium text-gray-800 dark:text-white">Settings tab's associated content</span>.
        Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
        control the content visibility and styling.
      </Tabs.Item>
      
    </Tabs>
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
