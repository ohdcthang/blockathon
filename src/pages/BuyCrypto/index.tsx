import { Tabs } from 'flowbite-react'
import React from 'react'
import { Header } from '../Header';
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

export const BuyCrypto = () => {
  // <div>
  //               <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
  //                 Buy Crypto
  //               </label>
  //               <input
  //                 id="fiat"
  //                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  //                 placeholder="100"
  //                 required
  //                 onChange={(e) => handleAmount(e.target.value)}
  //                 type="number"
  //                 value={amount}
  //               />
  //               <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
  //                 Token Receive: {service.estimateToken(Number(amount))}
  //               </label>
  //               <button
  //                 className="bg-primary text-white py-2 px-16 rounded-2xl"
  //                 onClick={handleBuyFiat}
  //               >
  //                 Buy Token
  //               </button>
  //             </div>
  return (
    <div>
      <Header/>
      <div style={{ marginTop: "120px", marginBottom: "80px" }} className='px-24 flex justify-center'>
        <Tabs aria-label="Default tabs" style="default">
          <Tabs.Item active title="Buy tokens" >
            <div className="">
              <p className='text-[70px] my-4' style={{fontFamily: "DM Serif Display"}}>Buy token </p>
              <p className='font-semibold'>Amount</p>
              <input type="text"  placeholder='Amount' className='py-6 px-4 w-[500px] border-2 rounded-2xl mt-4'/>
              <p className='font-semibold mt-4'>Payment method</p>
              <select className="w-[500px] mt-4 border-2   py-6 px-4 block border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                  <option>Bank</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
                <button className='w-[500px] py-4 px-6 bg-primary text-white mt-4 rounded-2xl'>
                  Buy A2U
                </button>
            </div>
          </Tabs.Item>
          <Tabs.Item active title="Sell tokens" >
            <div className="">
              <p className='text-[70px] my-4' style={{fontFamily: "DM Serif Display"}}>Sell token </p>
              <p className='font-semibold'>Amount</p>
              <input type="text"  placeholder='Amount' className='py-6 px-4 w-[500px] border-2 rounded-2xl mt-4'/>
              <p className='font-semibold mt-4'>Payment method</p>
              <select className="w-[500px] mt-4 border-2   py-6 px-4 block border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                  <option>Bank</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
                <button className='w-[500px] py-4 px-6 bg-primary text-white mt-4 rounded-2xl'>
                  Sell A2U
                </button>
            </div>
          </Tabs.Item>
         
      </Tabs>
      {/* <Tabs aria-label="Default tabs" style="default">
          <Tabs.Item active title="Sell tokens" >
            <div className="">
              <p className='text-[70px] my-4' style={{fontFamily: "DM Serif Display"}}>Sell token </p>
              <p className='font-semibold'>Amount</p>
              <input type="text"  placeholder='Amount' className='py-6 px-4 w-[500px] border-2 rounded-2xl mt-4'/>
              <p className='font-semibold mt-4'>Payment method</p>
              <select className="w-[500px] mt-4 border-2   py-6 px-4 block border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                  <option>Bank</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
                <button className='w-[500px] py-4 px-6 bg-primary text-white mt-4 rounded-2xl'>
                  Buy A2U
                </button>
            </div>
          </Tabs.Item>
          <Tabs.Item active title="Sell tokens">
            <div className="">
              <div className="flex justify-between">
                <div className="py-12">
                  <div className="cursor-pointer">
                    <img
                      src="/Frame 178.png"
                      alt=""
                      className="rounded-2xl" />
                    <p className="text-2xl mt-4">Standard #764</p>
                    <button className="text-sm bg-primary text-white rounded-2xl px-4 py-2 my-4">
                      Get Ticket
                    </button>
                  </div>
                </div>
                <div className="py-12">
                  <div className="cursor-pointer">
                    <img
                      src="/Frame 179.png"
                      alt=""
                      className="rounded-2xl" />
                    <p className="text-2xl mt-4">Standard #764</p>
                    <button className="text-sm bg-primary text-white rounded-2xl px-4 py-2 my-4">
                      Get Ticket
                    </button>
                  </div>
                </div>
                <div className="py-12">
                  <div className="cursor-pointer">
                    <img
                      src="/Frame 180.png"
                      alt=""
                      className="rounded-2xl" />
                    <p className="text-2xl mt-4">Standard #764</p>
                    <button className="text-sm bg-primary text-white rounded-2xl px-4 py-2 my-4">
                      Get Ticket
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Tabs.Item>
         
      </Tabs> */}

      </div>
          {/* <Tabs.Item title='Buy Token'>
            
          </Tabs.Item> */}
          <footer className="fixed bottom-0 left-0 right-0 p-4 px-24  bg-semiwhite h-50 flex justify-between">
        <div>
          <img className="w-20" src="/A2U.png" alt="" />
          <p>
            "Art To You" is a place where you can fulfill your dreams related to
            art.
          </p>
        </div>
        <div>
          <button className="bg-primary text-white py-2 px-16 rounded-2xl">
            Get ticket
          </button>
        </div>
      </footer>
    </div>
    
  )
}
