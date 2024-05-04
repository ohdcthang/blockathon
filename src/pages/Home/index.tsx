import { useDispatch, useSelector } from 'react-redux'
import { useCreateAccount } from '../../hooks'
import { RootState } from '../../store'
import { signOut } from '@ramper/viction'
import { setWallet } from '../../redux/walletSlice'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { convertWeiToBalance, truncate } from '../../utitls'
import { Header } from '../Header'
import { Carousel } from 'react-responsive-carousel'

const Home = () => {
  const { logIn } = useCreateAccount()
  const dispatch = useDispatch()

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
        <div className='flex justify-between py-2 px-24  bg-background'>
          <div className=''>
            <p className='text-[70px]'>
              Welcom to A2U
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
            <p className='text-[150px]'>300</p>
            <p>Participants</p>
          </div>
          <div>
            <p className='text-[150px]'>300</p>
            <p>Participants</p>
          </div>
          <div>
            <p className='text-[150px]'>300</p>
            <p>Participants</p>
          </div>
        </div>
        <div className='bg-background py-2 '>
          <img src="Frame 180.png " className='w-full h-[500px]' />
        </div>

        <div className='bg-semiwhite  py-2 px-24 '>
          <div className=''>
            <p className='text-[70px]'>What's on the A2U?</p>
            <div className='flex'>
              <img className='w-[500px] h-[500px]' src="https://upload.wikimedia.org/wikipedia/vi/c/cc/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2016-11-01_%EC%98%A4%EC%A0%84_12.10.11%281%29.png" alt="" />
              <div className='text-center w-full mx-[200px]'>
                <p className='border bottom-3 border-black rounded-2xl py-2 px-2'>
                Lorem ipsum 
                </p>
                <p className='border my-20 bottom-3 border-black rounded-2xl py-2 px-2'>
                  <p>Lorem ipsum </p>
                  <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </span>
                </p>
                <p className='border bottom-3 border-black rounded-2xl py-2 px-2'>
                  Lorem ipsum 
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='bg-semiwhite  py-2 px-24 '>
          <div className= ''>
            <p className='text-[70px]'>Events</p>
            <div className='grid grid-cols-3 gap-4 '>
              <div>
                <p className='border bottom-3 border-black bg-secondary rounded-2xl py-2 px-4 mt-4 flex justify-between'>
                  <p className='text-2xl font-bold'>JUNE</p> 
                  <p>May 24</p>
                </p>
                <p className='border bottom-3 border-black bg-secondary rounded-2xl py-2 px-4 mt-4 flex justify-between'>
                  <p className='text-2xl font-bold'>JUNE</p> 
                  <p>May 24</p>
                </p>
              </div>
              <div  className='col-span-2 w-full'>
                <div className='border bottom-3 border-black rounded-2xl py-2 px-4 mt-4 flex justify-between'>
                  <div>
                    <p>
                      4/05/2024 . 4/05/2024
                    </p>
                    <p>
                      Hackathon Nighty Eight
                    </p>
                    <p>
                      The principal alcohol in Purell hand sanitizer (to take the most talked-about brand) is 70% ethanol 
                    </p>
                  </div>
                  <div>
                    <p>
                      Celebrator
                    </p>
                    <p>
                      Nighty Eight
                    </p>
                  </div>
                </div>
                <div className='border bottom-3 border-black rounded-2xl py-2 px-4 mt-4 flex justify-between'>
                  <div>
                    <p>
                      4/05/2024 . 4/05/2024
                    </p>
                    <p>
                      Hackathon Nighty Eight
                    </p>
                    <p>
                      The principal alcohol in Purell hand sanitizer (to take the most talked-about brand) is 70% ethanol 
                    </p>
                  </div>
                  <div>
                    <p>
                      Celebrator
                    </p>
                    <p>
                      Nighty Eight
                    </p>
                  </div>
                </div>
                <div className='border bottom-3 border-black rounded-2xl py-2 px-4 flex justify-between'>
                  <div>
                    <p>
                      4/05/2024 . 4/05/2024
                    </p>
                    <p>
                      Hackathon Nighty Eight
                    </p>
                    <p>
                      The principal alcohol in Purell hand sanitizer (to take the most talked-about brand) is 70% ethanol 
                    </p>
                  </div>
                  <div>
                    <p>
                      Celebrator
                    </p>
                    <p>
                      Nighty Eight
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
        <div className='bg-primary text-center text-background py-5'>
          <p className='text-[150px]'>
            Don't Miss Out
          </p>
          <p>
            Secure your place at A2U today. Don’t miss the opportunity to join the industry at this landmark event in our great fashion capital.
          </p>
        </div>
        <div className='bg-background text-center text-background'>
          <p className='text-[150px]'>
            Don't Miss Out
          </p>
          <p>
            Secure your place at A2U today. Don’t miss the opportunity to join the industry at this landmark event in our great fashion capital.
          </p>
        </div>
        <div className='bg-semiwhite flex px-[80px] py-10'>
          <div className='bg-primary text-background m-6 p-4 rounded-2xl'>
            <p className='text-[50px]'>
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
            <p className='text-[50px]'>
              Get Involed
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