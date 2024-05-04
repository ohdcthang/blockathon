import { Tabs } from "flowbite-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import ToastProvider from "../../hooks/toastProvider";
import { RootState } from "../../store";
import { convertWeiToBalance, getBalanceA2Y, truncate } from "../../utitls";
import { Header } from "../Header";
import { BuyFiatService } from "./service";

export const Profile = () => {
  const { address: addressRedux, balance } = useSelector(
    (state: RootState) => state.wallet
  );
  const address = addressRedux
    ? addressRedux
    : JSON.parse(localStorage.getItem("account") as string)?.address;
  const [amount, setAmount] = useState<string>("0");
  const service = new BuyFiatService(address);
  const handleAmount = (amount: string) => setAmount(amount);
  const handleBuyFiat = async () => {
    try {
      if (Number(amount)) {
        await service.serviceBuyFiat(address, Number(amount));
      }
      const balanceState = await getBalanceA2Y(address as string);
      localStorage.setItem("account", JSON.stringify({ address, balanceState }));
      ToastProvider("success", `Buy crypto success`);
    } catch (error) {
      console.log({ error });
      ToastProvider("error", `Cannot buy crypto. Please try again`);
    }
  };

  return (
    <div>
      <Header />

      <div style={{ marginTop: "120px", marginBottom: "80px" }}>
        <div className="flex bg-[#F3F3F3] px-24 py-12">
          <img
            src="/Rectangle 7.png"
            alt=""
            className="rounded-2xl w-32 h-32"
          />
          <div className="ml-4">
            <p className="text-[48px]">
              {Number(convertWeiToBalance(balance, "18")).toFixed(0)} A2U
            </p>
            <p className="text-[24px]">
              {truncate(address, {
                length: 5,
                separator: "****",
              })}
            </p>
          </div>
          {/* <div className='ml-4'>
                </div> */}
        </div>

        <div className="px-24">
          <Tabs aria-label="Default tabs" style="default">
            <Tabs.Item active title="Owned tickets">
              <div className="">
                <div className="flex justify-between">
                  <div className="py-12">
                    <div className="cursor-pointer">
                      <img
                        src="/Frame 178.png"
                        alt=""
                        className="rounded-2xl"
                      />
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
                        className="rounded-2xl"
                      />
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
                        className="rounded-2xl"
                      />
                      <p className="text-2xl mt-4">Standard #764</p>
                      <button className="text-sm bg-primary text-white rounded-2xl px-4 py-2 my-4">
                        Get Ticket
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Tabs.Item>
            <Tabs.Item title="History">
              <div className="flex w-[30%]">
                <select className=" mx-2 border py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                  <option>Game</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
                <select className="mx-2 border py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                  <option>Status</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
                <select className="mx-2 border py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                  <option>Lastest</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <table className="table-auto w-full mt-4 text-left">
                <thead>
                  <tr>
                    <th>TNX ID</th>
                    <th>EVENT</th>
                    <th>TICKET</th>
                    <th>FROM</th>
                    <th>TO</th>
                    <th>PRICE</th>
                    <th>TIME</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>8868...4994</td>
                    <td>8Hackathon Ninety Eight</td>
                    <td>tandard #764</td>
                    <td>8868...4994</td>
                    <td>8868...4994</td>
                    <td>+ 20 A2U</td>
                    <td>03/05/2024 07:47 AM</td>
                  </tr>
                  <tr>
                    <td>8868...4994</td>
                    <td>8Hackathon Ninety Eight</td>
                    <td>tandard #764</td>
                    <td>8868...4994</td>
                    <td>8868...4994</td>
                    <td>+ 20 A2U</td>
                    <td>03/05/2024 07:47 AM</td>
                  </tr>{" "}
                  <tr>
                    <td>8868...4994</td>
                    <td>8Hackathon Ninety Eight</td>
                    <td>tandard #764</td>
                    <td>8868...4994</td>
                    <td>8868...4994</td>
                    <td>+ 20 A2U</td>
                    <td>03/05/2024 07:47 AM</td>
                  </tr>{" "}
                  <tr>
                    <td>8868...4994</td>
                    <td>8Hackathon Ninety Eight</td>
                    <td>tandard #764</td>
                    <td>8868...4994</td>
                    <td>8868...4994</td>
                    <td>+ 20 A2U</td>
                    <td>03/05/2024 07:47 AM</td>
                  </tr>
                </tbody>
              </table>
            </Tabs.Item>
            <Tabs.Item title="Mission">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Buy Crypto
                </label>
                <input
                  id="fiat"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="100"
                  required
                  onChange={(e) => handleAmount(e.target.value)}
                  type="number"
                  value={amount}
                />
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Token Receive: {service.estimateToken(Number(amount))}
                </label>
                <button
                  className="bg-primary text-white py-2 px-16 rounded-2xl"
                  onClick={handleBuyFiat}
                >
                  Buy Token
                </button>
              </div>
            </Tabs.Item>
            <Tabs.Item title="Loyalty Program">
              This is{" "}
              <span className="font-medium text-gray-800 dark:text-white">
                Settings tab's associated content
              </span>
              . Clicking another tab will toggle the visibility of this one for
              the next. The tab JavaScript swaps classes to control the content
              visibility and styling.
            </Tabs.Item>
          </Tabs>
        </div>
      </div>

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
