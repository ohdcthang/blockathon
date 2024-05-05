import Web3 from "web3"
import { convertBalanceToWei, getClient } from "../../../utitls"
import { type TransactionReceipt } from 'web3-eth'
import { Contract } from 'web3-eth-contract'
import { ADDRESS_TOKEN } from "../../../constants"
import { ERC20Abi } from "../../../abi"

export class BuyFiatService {
    public web3: Web3
    public contract: Contract | undefined
    public address: string

    constructor(msgSender: string) {
        this.address = msgSender
        this.web3 = getClient();
        this.contract = this.initializeValidatorContract()
    }

    private initializeValidatorContract() {
        //@ts-ignore
        const contractToken = new this.web3.eth.Contract(ERC20Abi, ADDRESS_TOKEN)
        return contractToken
    }

    public serviceBuyFiat = async (recipient: string, amount: number) => {
        const privateKey = ""
        //@ts-ignore
        const contractToken = new this.web3.eth.Contract(ERC20Abi, ADDRESS_TOKEN)
        const account = this.web3.eth.accounts.privateKeyToAccount('WalletPrivatekey')
        const owner = account.address
        this.web3.eth.accounts.wallet.add(account)
        this.web3.eth.defaultAccount = owner
        const calcAmount = this.estimateToken(Number(amount))
        const weiAmount = convertBalanceToWei(String(calcAmount), 18)
        const encodeTx = await contractToken.methods.transfer(recipient, weiAmount).encodeABI()
        const rawTx = {
            from: owner,
            to: ADDRESS_TOKEN,
            gasLimit: 81000,
            data: encodeTx
        }
        const transactionReceipt = await this.web3.eth.sendTransaction(rawTx)
        return transactionReceipt as TransactionReceipt
    }

    public estimateToken = (amount: number) => {
        const rate = 100
        return amount * rate
    }
}