import { signOut } from '@ramper/viction'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useCreateAccount } from '../../hooks'
import { setWallet } from '../../redux/walletSlice'
import { RootState } from '../../store'
import { convertWeiToBalance, truncate } from '../../utitls'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link, useNavigate } from 'react-router-dom'
<Carousel>
                <div>
                    <img src="assets/1.jpeg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="assets/2.jpeg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/3.jpeg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
export const Header = () => {

  const navigate = useNavigate()
  const { logIn } = useCreateAccount()
  const dispatch = useDispatch()

    const [open, setOpen] = useState(false)

  const logOut = async () => {
     signOut()

     dispatch(setWallet({
        address: '',
        email: ''
     }))

     setOpen(false)

     localStorage.clear()
  }

  

  let { address, email, balance } = useSelector((state:RootState) => state.wallet)
  console.log("🚀 ~ Header ~ balance:", balance)

  if(!address) address = (JSON.parse(localStorage.getItem('account') as string) && JSON.parse(localStorage.getItem('account') as string)!.address as string) || ''
  if(balance === '0') balance =(JSON.parse(localStorage.getItem('account') as string) && JSON.parse(localStorage.getItem('account') as string)!.balance as string) || ''

  return (
    <>
     <header className='flex justify-between bg-white h-50 py-8 px-24 fixed top-0 right-0 left-0'>
        <div className='cursor-pointer' onClick={() => {
          navigate('/')
        }}>
          <img className='w-20' src="/A2U.png" alt="" />
        </div>
        <div className='text-right cursor-pointer font-semibold' onClick={() => {
          navigate('/buy-ticket')
        }}>
          <p>Buy ticket</p>
        </div>
        <div className='text-right cursor-pointer font-semibold' onClick={() => {
          navigate('/buy-ticket')
        }}>
          <p>Martketplace</p>
        </div>
        <div className='text-right cursor-pointer font-semibold' onClick={() => {
          navigate('/profile')
        }}>
          <p>Profile</p>
        </div>
        {/* <div className='text-right cursor-pointer'>
          <p>Matketplace</p>
        </div>  <div className='text-right cursor-pointer'>
          <p>Matketplace</p>
        </div> */}
        <div>
          {
            address ? (
              // <>
              //   <p>{email}</p>
              //   <p className='text-[12px] text-gray-700'>{address}</p>
              //   <p className='text-[12px] text-primary cursor-pointer' onClick={logOut}>Log out</p>
              // </>
              <>
              <div onClick={() => setOpen(!open)} className='flex cursor-pointer' id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" >
                <img src="/Rectangle 7.png" alt="" className='rounded-2xl w-14 h-14' />
                <div className='ml-4'>
                  <p className='text-2xl'>{Number(convertWeiToBalance(balance, '18')).toFixed(0)} A2U</p>
                  <p className='font-extralight'>{truncate(address, {
                            length: 5,
                            separator: '****'
                  })}</p>
                </div>
              </div>
                {open && (
              <div className="origin-top-right absolute right-20 mt-2 w-[265px] rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">

              <ul role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            
                            <li>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                                    onClick={() => {
                                        logOut()
                                    }}
                                >
                                    Log out
                                </a>
                            </li>
                            
                        </ul>
                        
                </div>
                                )}

            </>
              ): (
               <button onClick={logIn} className='bg-primary text-white py-2 px-16 rounded-2xl'>Login</button>
            )
          }
        </div>
      </header>
      
    </>
  )
}
