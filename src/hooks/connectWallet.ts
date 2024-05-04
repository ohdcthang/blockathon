import {
    init,
    AUTH_PROVIDER,
    CHAIN,
    THEME,
    WALLET_PROVIDER,
    SUPPORTED_TOMO_NETWORKS,
    signIn
} from '@ramper/viction'
import { useDispatch } from 'react-redux'
import { setWallet } from '../redux/walletSlice'

export const useCreateAccount =  () => {
    const dispatch = useDispatch()

    const logIn = async () => {
         const signInResult = await signIn()

         dispatch(setWallet({
            address: signInResult.user?.wallets.tomo.publicKey,
            email: signInResult.user?.email
         }))

         return signInResult
    }
    return {logIn}
}