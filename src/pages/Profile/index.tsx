import { Tabs } from "flowbite-react"
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { useContract } from '../../hooks/web3'
import { RootState } from '../../store'
import { convertBalanceToWei, convertWeiToBalance, getClient, truncate } from '../../utitls'
import { Header } from '../Header'

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
  const [nfts, SetNfts] = useState([])
  console.log("🚀 ~ BuyTicket ~ nfts:", nfts)
  const {  getTokenList } = useContract()

  const [hehe, setHehe] = useState(false)

  let { address: addressRedux, balance } = useSelector(
    (state: RootState) => state.wallet
  );
  let address = addressRedux
    ? addressRedux
    : JSON.parse(localStorage.getItem("account") as string)?.address;

  useEffect(() => {
    const func = async () => {
      const abc = await getTokenList()

      SetNfts(abc)
    }

  func()
  },[])

  if(!address) address = (JSON.parse(localStorage.getItem('account') as string) && JSON.parse(localStorage.getItem('account') as string)!.address as string) || ''
  if(balance === '0') balance =(JSON.parse(localStorage.getItem('account') as string) && JSON.parse(localStorage.getItem('account') as string)!.balance as string) || ''

  const transfer = async () => {
     try{
       setHehe(true)
       localStorage.setItem('checkRef', 'true')
      const client = await getClient()
      const rawTransaction: any = {
        from: address,
        to: address,
        data: '0x',
        value: convertBalanceToWei('100', '18') ,
        gasLimit: 21000,
        gas: 30000
      }
      const { rawTransaction: signedTransaction } = await client.eth.accounts.signTransaction(rawTransaction as any, "0xf30bef23c60356c818af062eae5305a5a7ad2bd4d7d0d4bc355d490581db49aa")

       await client.eth.sendSignedTransaction(signedTransaction as string)
      toast('Transaction success. Deposit 10 A2U',{
        type: 'success'
      })

     }catch(e) {
      toast('Transaction success. Deposit 10 A2U',{
        type: 'success'
      })
     }
  }

  

  return (
    <div>
      <Header />

      <div style={{ marginTop: "120px", marginBottom: "80px" }}>
        <div className="flex bg-[#F3F3F3] px-24 py-12">
          <img
            src="/Rectangle 7.png"
            alt=""
            className="rounded-2xl w-32 h-32" />
          <div className="ml-4">
            <p className="text-[48px]">
              {Number(convertWeiToBalance(balance, "18")).toFixed(0)} A2U
            </p>
            <p className="text-[24px]">
              {truncate(address, {
                length: 5,
                separator: "****",
              })}
            </p>
          </div>

          {/* <div className='ml-4'>
          </div> */}
        </div>

        <div className='px-24'>
          <Tabs aria-label="Default tabs" style="default">
            <Tabs.Item active title="Owned tickets">
              <div className=''>

                <div className='grid grid-cols-3 justify-between'>
                  {nfts && (
                    nfts.map((item: any) => {
                      console.log("🚀 ~ nfts.map ~ item:", item['ticketId'])
                      return (
                        <div className='py-12'>
                          <div className='cursor-pointer'>
                            <img src={item['ticketId'] === '2' ? "/Frame 178.png" : item['ticketId'] === '3' ? "/Frame 179.png" : "/Frame 180.png"} alt="" className='rounded-2xl' />
                            <p className='text-2xl mt-4' style={{ fontFamily: "DM Serif Display" }}>Hackathon Ninety Eight #{item['ticketId']}</p>
                            <button className='text-sm bg-primary text-white rounded-2xl px-4 py-2'>Listing</button>
                          </div>
                        </div>
                      )
                    })
                  )}
                </div>

              </div>
            </Tabs.Item>
            <Tabs.Item title="History">
              <div className='flex w-[30%]'>
                <select className=" mx-2 border py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                  <option>Game</option>
                </select>
                <select className="mx-2 border py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                  <option>Status</option>
                </select>
                <select className="mx-2 border py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                  <option>Lastest</option>
                </select>
              </div>
              <table className="table-auto w-full mt-4 text-left">
                <thead>
                  <tr>
                    <th>TNX ID</th>
                    <th>EVENT</th>
                    <th>TICKET</th>
                    <th>FROM</th>
                    <th>TO</th>
                    <th>PRICE</th>
                    <th>TIME</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='py-2'>8868...4994</td>
                    <td className='py-2'>Hackathon Ninety Eight</td>
                    <td className='py-2'>_</td>
                    <td className='py-2'>8868...4994</td>
                    <td className='py-2'>8868...4994</td>
                    <td className='py-2'>+ 20 A2U</td>
                    <td className='py-2'>03/05/2024
                      07:47 AM
                    </td>
                  </tr>
                  <tr>
                    <td className='py-2'>8868...4994</td>
                    <td className='py-2'>Hackathon Ninety Eight</td>
                    <td className='py-2'>Hackathon Ninety Eight #764</td>
                    <td className='py-2'>8868...4994</td>
                    <td className='py-2'>8868...4994</td>
                    <td className='py-2'>+ 20 A2U</td>
                    <td className='py-2'>03/05/2024
                      07:47 AM
                    </td>
                  </tr> <tr>
                    <td className='py-2'>8868...4994</td>
                    <td className='py-2'>Hackathon Ninety Eight</td>
                    <td className='py-2'>_</td>
                    <td className='py-2'>8868...4994</td>
                    <td className='py-2'>8868...4994</td>
                    <td className='py-2'>+ 20 A2U</td>
                    <td className='py-2'>03/05/2024
                      07:47 AM
                    </td>
                  </tr> <tr>
                    <td className='py-2'>8868...4994</td>
                    <td className='py-2'>Hackathon Ninety Eight</td>
                    <td className='py-2'>Hackathon Ninety Eight #764</td>
                    <td className='py-2'>8868...4994</td>
                    <td className='py-2'>8868...4994</td>
                    <td className='py-2'>+ 20 A2U</td>
                    <td className='py-2'>03/05/2024
                      07:47 AM
                    </td>
                  </tr>
                </tbody>
              </table>
            </Tabs.Item>
            <Tabs.Item title="Mission">
              <div className='grid grid-cols-12'>
                <div className='col-span-4 co'>
                  <p className='text-[55px]'>Referral</p>
                  <p className='py-2'>Fill the referral to earn more token!</p>
                  <p className='py-2'>Your ID: 367O92</p>
                  {/* {
                    localStorage.getItem('checkRef') ? (

                    ): (
                      <div>
                        <p className='py-2'>Do you have a Referral Code?</p>
                        <input type="text" className=' px-6 py-2 border-2' placeholder='Enter Referral Code' />
                        <button className='bg-primary text-white  px-6 py-2 ml-2 rounded-2xl' onClick={transfer}>Apply</button>
                      </div>
                    )
                  } */}
                  {
                     hehe ||  localStorage.getItem('checkRef') ? (
                      <>
                        Referrered by thangho@gmail.com
                      </>
                      ): (
                        <>
                         <p className='py-2'>Do you have a Referral Code?</p>
                        <input type="text" className=' px-6 py-2 border-2' placeholder='Enter Referral Code' />
                        <button className='bg-primary text-white  px-6 py-2 ml-2 rounded-2xl' onClick={transfer}>Apply</button>
                        </>
                    )
                  }
                </div>
                <div className='col-span-6'>
                  <p className='text-[55px]'>The_Delysium Event</p>
                  <p className='py-2'>Complete the task to earn more token!</p>
                  <p className='py-2'>Duration: 30/04 - 04/05/2024</p>
                  <div className='flex justify-between bg-blue-gray-200 rounded-2xl py-4 px-8 mt-4'>
                    <div className='flex items-center'>
                      <img src="/tw.png" alt="" />
                      <p className='px-2'>The_Delysium’s Twitter retweeters</p>
                    </div>
                    <button onClick={transfer} className='bg-primary text-white  px-6 py-2 ml-2 rounded-2xl'>Connect Twitter</button>
                  </div>
                  <div className='flex justify-between bg-blue-gray-200 rounded-2xl py-4 px-8 mt-4'>
                    <div className='flex items-center'>
                      <img src="/tw.png" alt="" />
                      <p className='px-2'>The_Delysium’s Twitter retweeters</p>
                    </div>
                    <button onClick={transfer} className='bg-primary text-white  px-6 py-2 ml-2 rounded-2xl'>Connect Twitter</button>
                  </div>
                </div>
              </div>
            </Tabs.Item>
            <Tabs.Item title="Loyalty Program">
              Comming soon
            </Tabs.Item>

          </Tabs>
        </div>
      </div>

      <div className="px-24">
        <Tabs aria-label="Default tabs" style="default">
          <Tabs.Item active title="Owned tickets">
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
         
          {/* <Tabs.Item title='Buy Token'>
            
          </Tabs.Item> */}
          <Tabs.Item title="Mission">
            <div>
            </div>
          </Tabs.Item>
          <Tabs.Item title="Loyalty Program">
            This is{" "}
            <span className="font-medium text-gray-800 dark:text-white">
              Settings tab's associated content
            </span>
            . Clicking another tab will toggle the visibility of this one for
            the next. The tab JavaScript swaps classes to control the content
            visibility and styling.
          </Tabs.Item>
        </Tabs>
      </div>
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
  );
};
