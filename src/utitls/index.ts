import converter from 'hex2dec'
import BigDecimal from 'js-big-decimal'
import Web3 from "web3"
import { ERC20Abi } from "../abi"
import numeral from 'numbro'
import { ADDRESS_TOKEN, RPC } from '../constants'
// @ts-nocheck
const bigDecimal = require('js-big-decimal')


export const truncate = (original: string, options?: {
    length?: number,
    separator?: string
}) => {

    const { length = 5, separator = "..." } = options || {}

    const strLength = original.length;

    if (strLength < length) {
        return original
    }

    const firstCountLetter = original.slice(0, length);
    const lastCountLetter = original.slice(strLength - length, strLength);

    return `${firstCountLetter}${typeof separator ==="string" ? separator : '...'}${lastCountLetter}`
}


export const convertBalanceToWei = (strValue: string, iDecimal: string | number = 18, options?: {
    isFormat?: boolean
  }) => {
    strValue = '' + strValue
  
    if(Number(strValue) === 0) return 0 ;
  
    try {
  //@ts-expect-error

      const multiplyNum = new bigDecimal(Math.pow(10, iDecimal))
      const convertValue = new bigDecimal(String(strValue))
      const result = multiplyNum.multiply(convertValue)
      if (options?.isFormat) {
        return formatMoney(result.getValue()) as any
      }
  
      return result.getValue() as any
    } catch (error) {
      return 0
    }
  }
  
  export const convertWeiToBalance = (strValue: string, iDecimal: string | number = 18, options?: {
    isFormat?: boolean
  }) => {
    strValue = '' + strValue
  
    if(Number(strValue) === 0) return 0 ;
    
    try {
      const decimalFormat = parseFloat(iDecimal.toString())
      const multiplyNum = new bigDecimal(Math.pow(10, decimalFormat))
      const convertValue = new bigDecimal(String(strValue))
      const result = convertValue.divide(multiplyNum, decimalFormat)
      const res = result.round(iDecimal, bigDecimal.RoundingModes.DOWN)
  
      if (options?.isFormat) {
        return formatMoney(res.getValue())
      }
  
      return res.getValue() as any
    } catch (error) {
      return 0
    }
  }

  //@ts-expect-error
  export const formatNumberBro = (number: string |number, mantissa?: number = 4, isReturnNaN?: boolean, textNa?: string, trimMantissa?: boolean = true) => {
    //@ts-expect-error
    if (number !== false && number !== 'null' && !(number === null) && !isNaN(number) && !(number === undefined) && number !== 'NaN' && number !== Infinity) {
      if (number.toString().length > 0) {
        return numeral(number.toString().replace(/,/g, '')).format({ trimMantissa, thousandSeparated: true, mantissa, roundingFunction: Math.floor })
      }
    }
    return isReturnNaN ? (textNa || 'N/A') : 0
  }

  export const formatMoney = (price = '', decimals = 2): string => {
    let mantissa = decimals
    const strPrice = price.toString()
  
    const beforeDot = strPrice.split('.')[0]
    const afterDot = strPrice.split('.')[1] ? strPrice.split('.')[1].split('') : null
    const fBefore = beforeDot?.length
    if (fBefore > 1 && fBefore < 3) {
      mantissa = 2
    }
  
    if (fBefore <= 1) {
      mantissa = 4
  
      const countZero = afterDot ? afterDot.filter(it => it.toString() === '0')?.length : 0
      if (afterDot && countZero > 2) {
        mantissa = 6
      }
    }
  
  //@ts-expect-error
    return formatNumberBro(price, mantissa)
  }

export const getClient = async () => {
    const client = new Web3(new Web3.providers.HttpProvider(RPC))
    // this.clients.set(rpcUrl, client)
    return client
}

export const getBalanceA2Y = async (address: string) => {
    const client = await getClient()

    const contract = new client.eth.Contract(ERC20Abi as any, ADDRESS_TOKEN)
    const balance = await contract.methods.balanceOf(address).call()

    return balance
}


export const convertDecimalToHex = (number: any) => {
  return converter.decToHex(new BigDecimal(parseFloat(number)).getValue()) as string
}
