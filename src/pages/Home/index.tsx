import { useDispatch, useSelector } from 'react-redux'
import { useCreateAccount } from '../../hooks'
import { RootState } from '../../store'
import { signOut } from '@ramper/viction'
import { setWallet } from '../../redux/walletSlice'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { convertWeiToBalance, truncate } from '../../utitls'
import { Header } from '../Header'
import { Carousel } from 'react-responsive-carousel'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const { logIn } = useCreateAccount()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logOut = async () => {
     signOut()

     dispatch(setWallet({
        address: '',
        email: ''
     }))
  }

  const { address, email, balance } = useSelector((state:RootState) => state.wallet)
  console.log("🚀 ~ Home ~ balance:", balance)
  // console.log("🚀 ~ Home ~ email:", email)
  // console.log("🚀 ~ Home ~ address:", address)
  // const user = getUser()
  // console.log("🚀 ~ Home ~ user:", user)

  // user && setAccount(user)

  return (
    <div className=''>``
      {/* HEADER */}
      <Header />

      {/* MAIN  */}
      <div style={{marginTop: '80px', marginBottom: '80px'}}>
        <div className='flex justify-between py-12 px-24  bg-background'>
          <div className=''>
            <p className='text-[70px]' style={{fontFamily: "DM Serif Display"}}>
            Welcome to ART TO YOU
            </p>
          </div>
          <div className=' mt-8 w-full'>
            <p className='ml-[200px]'>
              A2U will engage with digital fashion at its most compelling. Whether your interests lie in generative AI, 3d design & animation, XR, web3, digital luxury, gamification, avatars, next-gen supply chains, sustainability, new clienteling, digital twins, phygital fashion, or digitally influenced physical fashion, there will be conversations for you, along with much more.
            </p>
            <div className='flex py-8 ml-[200px]'>
              <button className='outline py-2 px-4 rounded-2xl'>
                Get invoke
              </button>
              <button className='ml-2 outline py-2 px-4 bg-primary text-background rounded-2xl'>
                Get ticket
              </button>
            </div>
          </div>
        </div>
        <div className='bg-background py-2 px-24 text-center grid grid-cols-3'>
          <div>
            <p className='text-[70px]' style={{fontFamily: "DM Serif Display"}}>300</p>
            <p className='font-semibold'>Participants</p>
          </div>
          <div>
            <p className='text-[70px]' style={{fontFamily: "DM Serif Display"}}>30</p>
            <p className='font-semibold'>Events</p>
          </div>
          <div>
            <p className='text-[70px]' style={{fontFamily: "DM Serif Display"}}>1000M</p>
            <p className='font-semibold'>Total Supply</p>
          </div>
        </div>
        <div className='bg-background pt-12'>
          <img src="1.png " className='w-full h-[500px]' />
        </div>

        <div className='bg-semiwhite  py-2 px-24 '>
          <div >
            <p className='text-[70px]' style={{fontFamily: "DM Serif Display"}}>What's on the A2U?</p>
            <div className='flex text-right'>
              <img className='w-[800px] h-[800px]' src="/banner4.png" alt="" />
              <div className='text-center w-full ml-5'>
                <p className='text-[30px] border bottom-3 border-black rounded-2xl py-2 px-2' style={{fontFamily: "DM Serif Display"}}>
                Exchange A2U token
                </p>
                <p className='border my-20 bottom-3 border-black rounded-2xl py-2 px-2'>
                  <p style={{fontFamily: "DM Serif Display"}} className="text-[30px]">Exclusive benefits </p>
                  <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </span>
                </p>
                <p className=' text-[30px] border bottom-3 border-black rounded-2xl py-2 px-2' style={{fontFamily: "DM Serif Display"}}>
                  Manage your “own" tickets
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='bg-semiwhite  py-12 px-24 '>
          <div className= ''>
            <p className='text-[70px]' style={{fontFamily: "DM Serif Display"}}>Events</p>
            <div className='grid grid-cols-4 gap-4 '>
              <div className='col-span-1'>
                <p className='border bottom-3 border-black bg-background rounded-2xl py-2 px-4 mt-4 flex justify-between'>
                  <p className='text-2xl font-bold' style={{fontFamily: "DM Serif Display"}}> JUNE</p> 
                  <p>May 24</p>
                </p>
                <p className='border bottom-3 border-black bg-background rounded-2xl py-2 px-4 mt-4 flex justify-between'>
                  <p className='text-2xl font-bold' style={{fontFamily: "DM Serif Display"}}>JUNE</p> 
                  <p>May 24</p>
                </p>
              </div>
              <div  className='col-span-3 w-full'>
                                <div className='border bottom-3 border-black rounded-2xl py-2 px-4 mt-4 flex justify-between cursor-pointer 'onClick={() => navigate('buy-ticket')}>

                  <div>
                    <p>
                      4/05/2024 . 4/05/2024
                    </p>
                    <p style={{fontFamily: "DM Serif Display"}} className='text-[32px]'>
                      Hackathon Ninety Eight
                    </p>
                    <p>
                      The principal alcohol in Purell hand sanitizer (to take the most talked-about brand) is 70% ethanol 
                    </p>
                  </div>
                  <div className='flex flex-col justify-center'>
                    <p>
                      Celebrator
                    </p>
                    <p style={{fontFamily: "DM Serif Display"}} className='text-[24px]'>
                      Ninety Eight
                    </p>
                  </div>
                </div>
                    <div className='border bottom-3 border-black rounded-2xl py-2 px-4 mt-4 flex justify-between cursor-pointer 'onClick={() => navigate('buy-ticket')}>

                  <div>
                    <p>
                      4/05/2024 . 4/05/2024
                    </p>
                    <p style={{fontFamily: "DM Serif Display"}} className='text-[32px]'>
                      Hackathon Ninety Eight
                    </p>
                    <p>
                      The principal alcohol in Purell hand sanitizer (to take the most talked-about brand) is 70% ethanol 
                    </p>
                  </div>
                  <div className='flex flex-col justify-center'>
                    <p>
                      Celebrator
                    </p>
                    <p style={{fontFamily: "DM Serif Display"}} className='text-[24px]'>
                      Ninety Eight
                    </p>
                  </div>
                </div>
                                <div className='border bottom-3 border-black rounded-2xl py-2 px-4 mt-4 flex justify-between cursor-pointer 'onClick={() => navigate('buy-ticket')}>

                  <div>
                    <p>
                      4/05/2024 . 4/05/2024
                    </p>
                    <p style={{fontFamily: "DM Serif Display"}} className='text-[32px]'>
                      Hackathon Ninety Eight
                    </p>
                    <p>
                      The principal alcohol in Purell hand sanitizer (to take the most talked-about brand) is 70% ethanol 
                    </p>
                  </div>
                  <div className='flex flex-col justify-center'>
                    <p>
                      Celebrator
                    </p>
                    <p style={{fontFamily: "DM Serif Display"}} className='text-[24px]'>
                      Ninety Eight
                    </p>
                  </div>
                </div>
              </div>
              {/* <img className='w-[500px] h-[500px]' src="https://i.pinimg.com/originals/50/08/ef/5008efb9df96969624d2674645027a3a.png" alt="" />
              <div className='text-center w-full mx-[200px]'>
                <p className='border bottom-3 border-black rounded-2xl py-2 px-4'>
                Lorem ipsum 
                </p>
                <p className='border my-20 bottom-3 border-black rounded-2xl py-2 px-4'>
                  <p>Lorem ipsum </p>
                  <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </span>
                </p>
                <p className='border bottom-3 border-black rounded-2xl py-2 px-4'>
                  Lorem ipsum 
                </p>
              </div> */}
            </div>
          </div>
        </div>
        <div className='bg-primary text-center text-background py-12'>
          <p className='text-[150px]'  style={{fontFamily: "DM Serif Display"}}>
            Don't Miss Out
          </p>
          <p>
            Secure your place at A2U today. Don’t miss the opportunity to join the industry at this landmark event in our great fashion capital.
          </p>
        </div>
        <div className='bg-background'>
          <img className='w-full' src="/banner.png" alt="" />
        </div>
        <div className='bg-background flex px-[80px] py-10'>
          <div className='bg-primary text-background m-6 p-4 rounded-2xl'>
            <p className='text-[50px]' style={{fontFamily: "DM Serif Display"}}>
              Get Involed
            </p>
            <p>
              If you’re interested in participating in A2U, whether as a valued partner, we’d be delighted to hear from you. Please contact us at INFO@CODES.FASHION
            </p>
            <button className='bg-background text-primary w-full rounded-2xl my-6 p-2'>
              Email us
            </button>
          </div>
          <div className='bg-semiwhite border-primary border m-6 p-4 rounded-2xl'>
            <p className='text-[50px]' style={{fontFamily: "DM Serif Display"}}>
             Keep In touch
            </p>
            <p>
              If you’re interested in participating in A2U, whether as a valued partner, we’d be delighted to hear from you. Please contact us at INFO@CODES.FASHION
            </p>
            <button className='bg-primary text-background w-full rounded-2xl my-6 p-2'>
              Email us
            </button>
          </div>
        </div>
      </div>
      {/* FOOTER */}
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

export default Home