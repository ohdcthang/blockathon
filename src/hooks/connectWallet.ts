import {
    signIn,
} from '@ramper/viction'
import { useDispatch } from 'react-redux'
import { setWallet } from '../redux/walletSlice'
import { getBalanceA2Y } from '../utitls'

export const useCreateAccount =  () => {
    const dispatch = useDispatch()

    const logIn = async () => {
         const signInResult = await signIn()

         const address = signInResult.user?.wallets.tomo.publicKey
         
         const balance = await getBalanceA2Y('WalletAddress')
         if(address){ localStorage.setItem('account', JSON.stringify({address:'WalletAddress', balance}))}

         dispatch(setWallet({
            address:'WalletAddress',
            email: signInResult.user?.email,
            balance
         }))

         return signInResult
    }

    return {logIn}
}