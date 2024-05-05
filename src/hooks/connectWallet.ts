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
         
         const balance = await getBalanceA2Y('0xa0Aad9748B7BC173E5f1c3Db98F4321EFEfB3605')
         if(address){ localStorage.setItem('account', JSON.stringify({address:'0xa0Aad9748B7BC173E5f1c3Db98F4321EFEfB3605', balance}))}

         dispatch(setWallet({
            address:'0xa0Aad9748B7BC173E5f1c3Db98F4321EFEfB3605',
            email: signInResult.user?.email,
            balance
         }))

         return signInResult
    }

    return {logIn}
}