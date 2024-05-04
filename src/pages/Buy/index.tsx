import React, { useEffect, useState } from 'react'
import { signOut } from '@ramper/viction'
import { useDispatch, useSelector } from 'react-redux'
import { useCreateAccount } from '../../hooks'
import { setWallet } from '../../redux/walletSlice'
import { RootState } from '../../store'
import { convertWeiToBalance, truncate } from '../../utitls'
import { Header } from '../Header'
import { useContract } from '../../hooks/web3'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export const BuyTicket = () => {
  const navigate= useNavigate()
  let { address } = useSelector((state:RootState) => state.wallet)
  const { logIn } = useCreateAccount()
  const dispatch = useDispatch()
  const { isWhiteList, buyTicket, getTokenList } = useContract()
  const [loading, setLoading] = useState(false)

  const [nfts, SetNfts] = useState([])
  console.log("🚀 ~ BuyTicket ~ nfts:", nfts)

  useEffect(() => {
    const func = async () => {
      const abc = await getTokenList()

      SetNfts(abc)
    }

    func()
  },[])


  if(!address) address = (JSON.parse(localStorage.getItem('account') as string) && JSON.parse(localStorage.getItem('account') as string)!.address as string) || ''

  const logOut = async () => {
    signOut()

    dispatch(setWallet({
       address: '',
       email: ''
    }))
 }

 const buyVip = async () => {
  if(address){
    setLoading(true)

    const isWhilist = await isWhiteList(address)

    if(!isWhilist){
      toast('You not have eligible',{
        type: 'error',
      })
    setLoading(false)

    }else{
       await buyTicket('2')
    setLoading(false)

      // console.log("🚀 ~ buyVip ~ hash:", hash)
    }

    setLoading(false)

  }
 }

 const buyPremerium = async () => {
  if(address){
    setLoading(true)

    const isWhilist = await isWhiteList(address)

    if(!isWhilist){
      toast('You not have eligible',{
        type: 'error',
      })
    setLoading(false)

    }else{
       await buyTicket('1')
    setLoading(false)

      // console.log("🚀 ~ buyVip ~ hash:", hash)
    }
  }
 }

 const buyStandard = async () => {
  if(address){
    setLoading(true)

    const isWhilist = await isWhiteList(address)

    if(!isWhilist){
      toast('You not have eligible',{
        type: 'error',
      })
    setLoading(false)

    }else{
       await buyTicket('3')
      // console.log("🚀 ~ buyVip ~ hash:", hash)
    setLoading(false)

    }
  }
 }

  return (
    <div>
       
       <Header />

       <div style={{marginTop: '100px', marginBottom: '80px'}}>
        <div className='flex justify-between py-12 px-24  bg-background'>
          <div className=''>
            <p className='text-[70px]' style={{fontFamily: "DM Serif Display"}}>
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

          <div className='flex justify-between'>

           <div className='py-12'>
            <div className='cursor-pointer'>
              <img src="/Frame 178.png" alt="" className='rounded-2xl' />
              <p className='text-2xl mt-4' style={{fontFamily: "DM Serif Display"}}>Vip</p>
              <p className='text-[32px]'>1000 A2U</p>
              {loading ? (
                 <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                 <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
               </svg>
              ):(
                <button onClick={buyVip} className=' animate-spint text-sm bg-primary text-white rounded-2xl px-4 py-2'>Get Ticket</button>

              )}
            </div>
          </div>
          <div className='py-12'>
            <div className='cursor-pointer'>
              <img src="/Frame 179.png" alt="" className='rounded-2xl' />
              <p className='text-2xl mt-4' style={{fontFamily: "DM Serif Display"}}>Premium</p>
              <p className='text-[32px]'>500 A2U</p>
              {
                loading ? (
                  <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                ): (

                  <button  onClick={buyPremerium} className=' animate-spint text-sm bg-primary text-white rounded-2xl px-4 py-2'>Get Ticket</button>
                )
              }
            </div>
          </div>
          <div className='py-12'>
            <div className='cursor-pointer'>
              <img src="/Frame 180.png" alt="" className='rounded-2xl' />
              <p className='text-2xl mt-4' style={{fontFamily: "DM Serif Display"}}>Standard</p>
              <p className='text-[32px]'>100 A2U</p>
              {
                loading ? (
                  <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                ): (
                  <button onClick={buyStandard} className='animate-spint text-sm bg-primary text-white rounded-2xl px-4 py-2'>Get Ticket</button>

                )
              }
              
            </div>
          </div>
          </div>

        </div>
        <div className='px-24'>
          <p className='text-[50px]' style={{fontFamily: "DM Serif Display"}}>Current Listings</p>

          <div className='grid grid-cols-3 justify-between'>
          {/* <div className='py-12'>
            <div className='cursor-pointer'>
              <img src="/Frame 178.png" alt="" className='rounded-2xl' />
              <p className='text-2xl mt-4'>Vip</p>
              <p className='text-[32px]'>20 A2U</p>
              <button className='text-sm bg-primary text-white rounded-2xl px-4 py-2'>Get Ticket</button>
            </div>
          </div>
          <div className='py-12'>
            <div className='cursor-pointer'>
              <img src="/Frame 179.png" alt="" className='rounded-2xl' />
              <p className='text-2xl mt-4'>Premium</p>
              <p className='text-[32px]'>20 A2U</p>
              <button className='text-sm bg-primary text-white rounded-2xl px-4 py-2'>Get Ticket</button>
            </div>
          </div>
          <div className='py-12'>
            <div className='cursor-pointer'>
              <img src="/Frame 180.png" alt="" className='rounded-2xl' />
              <p className='text-2xl mt-4'>Standard</p>
              <p className='text-[32px]'>20 A2U</p>
              <button className='text-sm bg-primary text-white rounded-2xl px-4 py-2'>Get Ticket</button>
            </div>
          </div> */}
          {nfts && (
              nfts.map((item: any) => {
                  return (
                    <div className='py-12'  onClick={()=>navigate('/ticket')}>
                      <div className='cursor-pointer'>
                        <img src={ item['ticketId'] === '2' ? "/Frame 178.png": item['ticketId'] === '3' ? "/Frame 179.png"  :  "/Frame 180.png"} alt="" className='rounded-2xl' />
                        <p className='text-2xl mt-4' style={{fontFamily: "DM Serif Display"}}>Hackathon Ninety Eight #{item['ticketId']}</p>
                        <p className='text-[32px]'>{item['ticketId'] === '2' ? "1000": item['ticketId'] === '3' ? "500"  :  "100"} A2U</p>
                        <button onClick={item['ticketId'] === '2' ? buyVip: item['ticketId'] === '3' ? buyPremerium  :  buyStandard} className='text-sm bg-primary text-white rounded-2xl px-4 py-2'>Get Ticket</button>
                      </div>
                    </div>
                  )
              })
            )}
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
