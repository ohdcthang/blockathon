import { useSelector } from "react-redux"
import { ABI_NFT } from "../abi/NFT"
import { ADDRESS_TOKEN, NFT_CONTRACT } from "../constants"
import { convertDecimalToHex, getBalanceA2Y, getClient } from "../utitls"
import { RootState } from '../store'
import {ERC20Abi} from '../abi'
import { toast } from "react-toastify"

export const useContract =  () => {
    let { address, email, balance } = useSelector((state:RootState) => state.wallet)
    console.log("🚀 ~ Header ~ balance:", balance)
  
    if(!address) address = (JSON.parse(localStorage.getItem('account') as string) && JSON.parse(localStorage.getItem('account') as string)!.address as string) || ''
    if(balance === '0') balance =(JSON.parse(localStorage.getItem('account') as string) && JSON.parse(localStorage.getItem('account') as string)!.balance as string) || ''
    
    console.log("🚀 ~ useContract ~ address:", address)
    
    const getNFT = async () => {
        const client = await getClient()
        const contract = new client.eth.Contract(ABI_NFT as any, NFT_CONTRACT)
    }

    const isWhiteList = async (address: string) => {

        const client = await getClient()
        const contract = new client.eth.Contract(ABI_NFT as any, NFT_CONTRACT)

        const isVerify = contract.methods.isWhiteList(address).call()

        return isVerify
    }

    const buyTicket = async (tierIndex: string) => {
        try {
            const client = await getClient()
            const contract = new client.eth.Contract(ABI_NFT as any, NFT_CONTRACT)
            const contractToken = new client.eth.Contract(ERC20Abi as any, ADDRESS_TOKEN)
    
            const data = contract.methods.mint(tierIndex).encodeABI()
            console.log("🚀 ~ buyTicket ~ data:", data)
    
    
            //aprove
    
        const wei = 1000000000000000000000000000000000000000000000000000000000000000000
          const formatAmount = convertDecimalToHex(wei)
          const approve = await contractToken.methods.approve(NFT_CONTRACT, formatAmount).encodeABI()
            const rawTransaction: any = {
                from: address,
                to: ADDRESS_TOKEN,
                data: approve,
                value: '0x0',
                gasLimit: 10000000,
                gas: 30000
              }
              const { rawTransaction: signedTransaction } = await client.eth.accounts.signTransaction(rawTransaction as any, "0xf30bef23c60356c818af062eae5305a5a7ad2bd4d7d0d4bc355d490581db49aa")
    
              const {transactionHash: hash} = await client.eth.sendSignedTransaction(signedTransaction as string)
              console.log("🚀 ~ test ~ approve:", hash)
    
    
              //mint
              const rawTransaction1: any = {
                from: address,
                to: NFT_CONTRACT,
                data: data,
                value: '0x0',
                gasLimit: 10000000,
                gas: 30000
              }
    
              const { rawTransaction: signedTransaction1 } = await client.eth.accounts.signTransaction(rawTransaction1 as any, "0xf30bef23c60356c818af062eae5305a5a7ad2bd4d7d0d4bc355d490581db49aa")
    
              const {transactionHash: hash1} = await client.eth.sendSignedTransaction(signedTransaction1 as string)
              console.log("🚀 ~ buyTicket ~ hash1:", hash1)
    
              const balance = await getBalanceA2Y('0xa0Aad9748B7BC173E5f1c3Db98F4321EFEfB3605')
              if(address){ localStorage.setItem('account', JSON.stringify({address:'0xa0Aad9748B7BC173E5f1c3Db98F4321EFEfB3605', balance}))}
            //   const list = contract.methods.getTicketListByOwner().call()
            //   console.log("🚀 ~ buyTicket ~ list:", list)

              const sendEmail = await fetch('http://10.10.2.44:1997/v1/order',{
                method: 'POST',
                headers:{
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: new URLSearchParams({
                    'gmail': 'quoc1340811@gmail.com',
                })
              })

               await sendEmail.json()

               toast('Buy success. Please check email', {
                type: 'success'
            })
              
        } catch (error) {
            console.log("🚀 ~ buyTicket ~ error:", error)
            toast('Transaction failed', {
                type: 'error'
            })
        }
      

    }

    const getTokenList = async () => {
        const client = await getClient()
        const contract = new client.eth.Contract(ABI_NFT as any, NFT_CONTRACT)
        console.log("🚀 ~ buyTicket ~ contract:", contract)

        const asdhsa = await contract.methods.getTicketListByOwner('0xa0Aad9748B7BC173E5f1c3Db98F4321EFEfB3605').call()

        return asdhsa
    }

    return {getNFT, isWhiteList, buyTicket, getTokenList}
}