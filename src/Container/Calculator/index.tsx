import { FC, useState } from "react";
import Empty from "../../assets/illustration_empty_content.svg";
import Spin from "../../assets/spinner.svg";

const Calculator: FC = () => {
  const [amount, setAmount] = useState<number>(0);
  const [interest, setInterest] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [monthlyRepay, setMonthlyRepay] = useState<number>(0);
  const [totalPayment, setTotalPayment] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);
  const [showResponse, setShowResponse] = useState(false);
  const [error, setError] = useState(false);

  const handleChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
  };
  const handleChangeInterest = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInterest(Number(e.target.value));
  };
  const handleChangeDuration = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDuration(Number(e.target.value));
  };

  const principal = amount;

  const calculatedInterest = interest / 100 / 12;

  const calculatedPayment = duration * 12;

  const EX = Math.pow(1 + calculatedInterest, calculatedPayment);

  const monthly = (principal * EX * calculatedInterest) / (EX - 1);

  const Calculate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isFinite(monthly)) {
      setMonthlyRepay(monthly);
      setTotalPayment(monthly * calculatedPayment);
      setTotalInterest(monthly * calculatedPayment - principal);

      setIsLoading(true);

      setTimeout(() => setIsLoading(false), 3000);

      setTimeout(() => setShowResponse(true), 5000);

      setError(error);
    } else {
      setIsLoading(true);

      setTimeout(() => setIsLoading(false), 2000);

      setTimeout(() => setError(!error), 2000);

      setTimeout(() => setError(error), 5000);

      setShowResponse(false);
    }
  };
  return (
    <>
      <div className="bg-[#21565e] p-6 h-[] mt-10 rounded-lg shadow-lg">
        <div className="mx-auto w-[90%] lg:w-[4/5] md:w-[450px] container">
          <div className="text-center">
            <div className="wrapper">
              <h2 className="pb-1 text-3xl font-semibold text-white font-Lacq">Loan Calculator</h2>
              <form onSubmit={Calculate}>
                <div className="amount-group py-3">
                  <div className="border-b-2 border-black w-full shadow-lg rounded-lg h-[50px] flex items-center text-lg font-semibold">
                    <span className="bg-black text-white border-none p-3 rounded-tl-lg rounded-bl-lg text-xl h-[50px] font-bold">
                      ₦
                    </span>
                    <input
                      type="number"
                      className="p-3 border-none outline-none bg-transparent w-full h-[50px]"
                      value={amount}
                      onChange={handleChangeAmount}
                      placeholder="Loan amount"
                    />
                  </div>
                </div>

                <div className="interest-group py-3">
                  <div className="border-b-2 border-black w-full shadow-lg rounded-lg h-[50px] flex items-center text-lg font-semibold">
                    <span className="bg-black text-white border-none p-3 rounded-tl-lg rounded-bl-lg text-xl h-[50px] font-bold">
                      %
                    </span>
                    <input
                      type="number"
                      className="p-3 border-none outline-none bg-transparent w-full h-[50px]"
                      value={interest}
                      onChange={handleChangeInterest}
                      placeholder="Interest"
                    />
                  </div>
                </div>

                <div className="duration-group py-3">
                  <div className="border-b-2 border-black w-full shadow-lg rounded-lg h-[50px] flex items-center text-lg font-semibold">
                    <input
                      type="number"
                      className="p-3 border-none outline-none bg-transparent w-full h-[50px]"
                      value={duration}
                      onChange={handleChangeDuration}
                      placeholder="Years to Repay"
                    />
                  </div>
                </div>

                <div className="bttn my-3">
                  <input
                    type="submit"
                    value="Calculate"
                    className="bg-black text-white text-center font-normal cursor-pointer py-3 px-4 rounded-lg block w-full"
                  />
                </div>
              </form>

              {/* RESULT DISPLAY HERE */}
              {isLoading && (
                <div className="load flex flex-col justify-center items-center">
                  <span className="">
                    <img src={Spin} alt="Emptty data icon" srcSet="" />
                  </span>
                </div>
              )}

              {showResponse && (
                <div className="results pt-5">
                  <div className="repay-group py-2">
                    <div className="flex shadow-lg">
                      <span className="inline-flex items-center px-3 text-base border rounded-l-md bg-gray-500">
                        Monthly Payment
                      </span>
                      <input
                        type="text"
                        id="website-admin"
                        className="rounded-none rounded-r-lg border text-gray-900 block flex-1 min-w-0 w-full text-base font-semibold border-gray-300 p-3 bg-gray-400"
                        disabled
                        value={monthlyRepay.toFixed(2)}
                      />
                    </div>
                  </div>

                  <div className="repay-group py-2">
                    <div className="flex shadow-lg">
                      <span className="inline-flex items-center px-3 text-base border rounded-l-md bg-gray-500">
                        Total Payment
                      </span>
                      <input
                        type="text"
                        id="website-admin"
                        className="rounded-none rounded-r-lg border text-gray-900 block flex-1 min-w-0 w-full text-base font-semibold border-gray-300 p-3 bg-gray-400"
                        disabled
                        value={totalPayment.toFixed(2)}
                      />
                    </div>
                  </div>

                  <div className="repay-group py-2">
                    <div className="flex shadow-lg">
                      <span className="inline-flex items-center px-3 text-base border rounded-l-md bg-gray-500">
                        Total Interest
                      </span>
                      <input
                        type="text"
                        id="website-admin"
                        className="rounded-none rounded-r-lg border text-gray-900 block flex-1 min-w-0 w-full text-base font-semibold border-gray-300 p-3 bg-gray-400"
                        disabled
                        value={totalInterest.toFixed(2)}
                      />
                    </div>
                  </div>
                </div>
              )}

              {error && (
                <div className="wrapper">
                  <div className="empty flex flex-col justify-center items-center">
                    <span className="">
                      <img src={Empty} className='w-4/5 mx-auto' alt="Emptty data icon" srcSet="" />
                    </span>
                    <h5 className=" text-xl font-bold text-black font-Lacq my-1.5 text-center">
                      Please check your input
                    </h5>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
