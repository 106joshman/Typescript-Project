import { FC, useState } from "react";
import { TiPlus } from "react-icons/ti";
import { v4 as uuidv4 } from "uuid";

const ShopperList: FC = () => {
  const [title, setTitle] = useState("");
  // const [amount] = useState("");
  const [formField, setFormField] = useState([
    {
      id: uuidv4(),
      serialNumber: "",
      items: "",
      quantity: "",
      unitPrice: "",
      // amount: "",
    },
  ]);

  // console.log('Your UUID is: ' + uuidv4());

  const updateForm = (id: any) => (e: any) => {
    const { name, value } = e.target;
    setFormField((cashier) =>
      cashier.map((formField) =>
        formField.id === id ? { ...formField, [name]: value } : formField
      )
    );
  };

  const createNew = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setFormField((cashier) =>
      cashier.concat({
        id: uuidv4(),
        serialNumber: "",
        items: "",
        quantity: "",
        unitPrice: "",
        // amount: "",
      })
    );
  };

  // const sum = [...(parseInt(quantity) * parseInt(unitPrice))].reduce((accumulator, currentValue)=> accumulator + currentValue,0)

  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();

    console.log(title);
    console.log(formField);
  };

  return (
    <>
      <div className="pt-[70px] px-2.5 md:px-[30px] pb-[44px]">
        <div className="shopper man-w-full w-[350px] md:w-full mx-auto border-2 border-black shadow-lg shadow-zinc-800 rounded-md p-2.5">
          <h3 className="text-center">form to PDF</h3>

          <div className="formWrapper overflow-x-auto bg-[#277a55] rounded-tl-lg rounded-tr-lg">
            <form className="w-full">
              <div className="flex justify-between mt-2.5 items-center">
                <div className="title flex items-center mb-2 w-40 md:w-52">
                  <label htmlFor="title"> Title</label>
                  <input
                    // required
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                    className="border w-full rounded p-1 ml-2 outline-none"
                  />
                </div>
                <div className="createNew items-center flex justify-end">
                  <button
                    type="button"
                    className="p-1 border bg-green-600 font-medium text-xl md:text-3xl rounded-lg items-center text-white"
                    aria-label="create new row"
                    onClick={createNew}
                  >
                    <TiPlus title="add a new row" />
                  </button>
                </div>
              </div>
              <div className="heading min-w-full flex justify-between overflow-x-auto">
                <table className="min-w-full bg-[#BFE9FF] text-sm rounded-tl-lg rounded-tr-lg">
                  <thead>
                    <tr className="flex justify-between w-full mx-auto">
                      <th
                        scope="col"
                        className=" text-gray-900 px-2 py-1.5 md:px-6 md:py-4 mx-2 text-center w-[50px]"
                      >
                        #
                      </th>
                      <th
                        scope="col"
                        className=" text-gray-900 px-2 py-1.5 md:px-6 md:py-4 mx-2 text-center w-[150px] md:w-[280px]"
                      >
                        Product Description
                      </th>
                      <th
                        scope="col"
                        className=" text-gray-900 px-2 py-1.5 md:px-6 md:py-4 mx-2 text-center w-[80"
                      >
                        Quantity
                      </th>
                      <th
                        scope="col"
                        className=" text-gray-900 px-2 py-1.5 md:px-6 md:py-4 mx-2 text-center"
                      >
                        Unit Price
                      </th>
                      <th
                        scope="col"
                        className=" text-gray-900 px-2 py-1.5 md:px-6 md:py-4 mx-2 text-center w-[90px] md:w-[140px]"
                      >
                        Amount
                      </th>
                    </tr>
                  </thead>
                </table>
              </div>
            </form>
            <form>
              <div className="inputWrap overflow-auto max-h-[400px]">
                {formField.map(
                  ({ id, serialNumber, items, quantity, unitPrice }) => (
                    <div key={id} className="inputList">
                      <div className="grid grid-flow-col font-semibold auto-cols-max placeholder:font-normal placeholder:normal-case gap-4 mt-1 even:mt-0">
                        <div className="m-2 serialNumbers border rounded w-[50px]">
                          <input
                            // required
                            type="text"
                            name="serialNumber"
                            onChange={updateForm(id)}
                            value={serialNumber}
                            placeholder="S/N"
                            className="w-full p-2 border-none rounded-md outline-none"
                          />
                        </div>
                        <div className="m-2 items border rounded w-[150px] md:w-[280px]">
                          <input
                            // required
                            type="text"
                            name="items"
                            onChange={updateForm(id)}
                            value={items}
                            placeholder="Items"
                            className="w-full rounded-md first-letter:uppercase placeholder:font-normal p-2 border-none outline-none"
                          />
                        </div>
                        <div className="m-2 quantity border rounded w-[85px]">
                          <input
                            // required
                            type="text"
                            name="quantity"
                            onChange={updateForm(id)}
                            value={quantity}
                            placeholder="Quantity"
                            className="w-full p-2 rounded-md uppercase placeholder:font-normal placeholder:normal-case text-center border-none outline-none"
                          />
                        </div>
                        <div className="m-2 unitPrice border rounded w-[80px] md:w-[120px]">
                          <input
                            // required
                            type="text"
                            name="unitPrice"
                            onChange={updateForm(id)}
                            value={unitPrice}
                            placeholder="Unit Price"
                            className="w-full p-2 border-none rounded-md placeholder:font-normal text-center outline-none"
                          />
                        </div>
                        <div className="m-2 Amount border rounded w-[90px] md:w-[140px]">
                          <input
                            // required
                            disabled
                            type="text"
                            name="amount"
                            onChange={updateForm(id)}
                            value={
                              isNaN(parseInt(quantity) * parseInt(unitPrice))
                                ? "0.00"
                                : parseInt(quantity) * parseInt(unitPrice)
                            }
                            placeholder="Amount"
                            className="w-full p-2 border-none rounded-md bg-white placeholder:font-normal outline-none"
                          />
                        </div>
                      </div>
                    </div>
                  )
                )}
                <div className="result inline-block w-full justify-end">
                  <div className="repay-group py-2">
                    {/* <div className="flex">
                      <span className="items-center flex p-0.5">Sub-total</span>
                      <input
                        type="text"
                        id="website-admin"
                        className="text-gray-900 w-[100px] text-base font-semibold p-2"
                        disabled
                        // value={totalPayment.toFixed(2)}
                      />
                    </div>
                    <div className="repay-group py-2">
                      <div className="flex">
                        <span className="items-center flex p-0.5">Tax</span>
                        <input
                          type="text"
                          id="website-admin"
                          className="text-gray-900 w-[100px] flex-1 text-base font-semibold p-2"
                          disabled
                          // value={totalPayment.toFixed(2)}
                        />
                      </div></div> */}
                    <div className="repay-group py-2">
                      <div className="flex">
                        <span className="items-center flex p-0.5 text-xl font-semibold">
                          Total
                        </span>
                        <input
                          type="text"
                          id="website-admin"
                          className="text-gray-900 bg-transparent w-[140px] text-base p-2"
                          disabled
                          // value={reduce((accumlator, currentValue)=>accumlator+currentValue,0)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="submit flex justify-end my-2 mr-2">
                <div className="border rounded-md p-1.5 bg-gray-400 text-white hover:bg-blue-500 items-center cursor-pointer flex justify-center">
                  <button
                    type="button"
                    className="w-full border-none outline-none cursor-pointer items-center inline-flex"
                    // value="Submit"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default ShopperList;
