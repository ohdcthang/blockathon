import { Tabs } from "flowbite-react";
import { Header } from "../Header";
import { useState } from "react";
import { BuyFiatService } from "./service";
import { RootState } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import { getBalanceA2Y } from "../../utitls";
import ToastProvider from "../../hooks/toastProvider";
import { setWallet } from "../../redux/walletSlice";


export const BuyCrypto = () => {
  const [amount, setAmount] = useState<string>("0");
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
        balance
     }))
      ToastProvider("success", `Buy crypto success`);
    } catch (error) {
      console.log({ error });
      ToastProvider("error", `Cannot buy crypto. Please try again`);
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
              <button
                className="w-[500px] py-4 px-6 bg-primary text-white mt-4 rounded-2xl"
                onClick={handleBuyFiat}
              >
                Buy A2U
              </button>
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
