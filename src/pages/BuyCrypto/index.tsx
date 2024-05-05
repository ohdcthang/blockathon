import { Tabs } from "flowbite-react";
import { Header } from "../Header";
import { useState } from "react";
import { BuyFiatService } from "./service";
import { RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { getBalanceA2Y } from "../../utitls";
import ToastProvider from "../../hooks/toastProvider";
import { setWallet } from "../../redux/walletSlice";
import { toast } from "react-toastify";


export const BuyCrypto = () => {
  const [amount, setAmount] = useState<string>("0");
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  let { address: addressRedux, balance, email } = useSelector(
    (state: RootState) => state.wallet
  );
  let address = addressRedux
    ? addressRedux
    : JSON.parse(localStorage.getItem("account") as string)?.address;
  const service = new BuyFiatService(address);

  const handleAmount = (amount: string) => setAmount(amount);
  const handleBuyFiat = async () => {
    try {
      setLoading(true)
      if (Number(amount)) {
        await service.serviceBuyFiat(address, Number(amount));
      }
      const balanceState = await getBalanceA2Y(address as string);
      localStorage.setItem(
        "account",
        JSON.stringify({ address, balanceState })
      );
      dispatch(setWallet({
        address,
        email,
        balance: balanceState
     }))
     toast('Buy crypto success',{
      type: 'success'
     })
     setLoading(false)

      // ToastProvider("success", `Buy crypto success`);
    } catch (error) {
     setLoading(false)

      toast('Cannot buy crypto. Please try again',{
        type: 'error'
       })
      console.log({ error });
      // ToastProvider("error", `Cannot buy crypto. Please try again`);
    }
  };

  return (
    <div>
      <Header />
      <div
        style={{ marginTop: "120px", marginBottom: "80px" }}
        className="px-24 flex justify-center"
      >
        <Tabs aria-label="Default tabs" style="default">
          <Tabs.Item active title="Buy tokens">
            <div className="">
              <p
                className="text-[70px] my-4"
                style={{ fontFamily: "DM Serif Display" }}
              >
                Buy token{" "}
              </p>
              <div className="flex justify-between">
                <p className="font-semibold">Amount</p>
                <p className="font-semibold">
                  Token Receive: {service.estimateToken(Number(amount))}
                </p>
              </div>
              <input
                type="text"
                placeholder="Amount"
                className="py-6 px-4 w-[500px] border-2 rounded-2xl mt-4"
                onChange={(e) => handleAmount(e.target.value)}
              />
              <p className="font-semibold mt-4">Payment method</p>
              <select className="w-[500px] mt-4 border-2   py-6 px-4 block border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                <option>Bank</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
              {
                loading ? (
                  <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                ): (

                  <button
                className="w-[500px] py-4 px-6 bg-primary text-white mt-4 rounded-2xl"
                onClick={handleBuyFiat}
              >
                Buy A2U
              </button>
                )
              }
              
            </div>
          </Tabs.Item>
          <Tabs.Item active title="Sell tokens">
            <div className="">
              <p
                className="text-[70px] my-4"
                style={{ fontFamily: "DM Serif Display" }}
              >
                Sell token{" "}
              </p>
              <p className="font-semibold">Amount</p>
              <input
                type="text"
                placeholder="Amount"
                className="py-6 px-4 w-[500px] border-2 rounded-2xl mt-4"
              />
              <p className="font-semibold mt-4">Payment method</p>
              <select className="w-[500px] mt-4 border-2   py-6 px-4 block border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                <option>Bank</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
              <button className="w-[500px] py-4 px-6 bg-primary text-white mt-4 rounded-2xl">
                Sell A2U
              </button>
            </div>
          </Tabs.Item>
        </Tabs>
        {/* <Tabs aria-label="Default tabs" style="default">
          <Tabs.Item active title="Sell tokens" >
            <div className="">
              <p className='text-[70px] my-4' style={{fontFamily: "DM Serif Display"}}>Sell token </p>
              <p className='font-semibold'>Amount</p>
              <input type="text"  placeholder='Amount' className='py-6 px-4 w-[500px] border-2 rounded-2xl mt-4'/>
              <p className='font-semibold mt-4'>Payment method</p>
              <select className="w-[500px] mt-4 border-2   py-6 px-4 block border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                  <option>Bank</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
                <button className='w-[500px] py-4 px-6 bg-primary text-white mt-4 rounded-2xl'>
                  Buy A2U
                </button>
            </div>
          </Tabs.Item>
          <Tabs.Item active title="Sell tokens">
            <div className="">
              <div className="flex justify-between">
                <div className="py-12">
                  <div className="cursor-pointer">
                    <img
                      src="/Frame 178.png"
                      alt=""
                      className="rounded-2xl" />
                    <p className="text-2xl mt-4">Standard #764</p>
                    <button className="text-sm bg-primary text-white rounded-2xl px-4 py-2 my-4">
                      Get Ticket
                    </button>
                  </div>
                </div>
                <div className="py-12">
                  <div className="cursor-pointer">
                    <img
                      src="/Frame 179.png"
                      alt=""
                      className="rounded-2xl" />
                    <p className="text-2xl mt-4">Standard #764</p>
                    <button className="text-sm bg-primary text-white rounded-2xl px-4 py-2 my-4">
                      Get Ticket
                    </button>
                  </div>
                </div>
                <div className="py-12">
                  <div className="cursor-pointer">
                    <img
                      src="/Frame 180.png"
                      alt=""
                      className="rounded-2xl" />
                    <p className="text-2xl mt-4">Standard #764</p>
                    <button className="text-sm bg-primary text-white rounded-2xl px-4 py-2 my-4">
                      Get Ticket
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Tabs.Item>
         
      </Tabs> */}
      </div>
      {/* <Tabs.Item title='Buy Token'>
            
          </Tabs.Item> */}
      <footer className="fixed bottom-0 left-0 right-0 p-4 px-24  bg-semiwhite h-50 flex justify-between">
        <div>
          <img className="w-20" src="/A2U.png" alt="" />
          <p>
            "Art To You" is a place where you can fulfill your dreams related to
            art.
          </p>
        </div>
        <div>
          <button className="bg-primary text-white py-2 px-16 rounded-2xl">
            Get ticket
          </button>
        </div>
      </footer>
    </div>
  );
};
