import { FC, useState } from "react";
import { TiPlus } from "react-icons/ti";
import { v4 as uuidv4 } from "uuid";

const ShopperList: FC = () => {
  const [title, setTitle] = useState("");
  const [formField, setFormField] = useState([
    {
      id: uuidv4(),
      serialNumber: "",
      items: "",
      quantity: "",
      unitPrice: "",
      amount: "",
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
        amount: "",
      })
    );
    // console.log("create new line");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(title);
  };
  return (
    <>
      <div className="max-w-full h-[100vh] pt-[70px] px-[30px] pb-[44px]">
        <div className="shopper border-2 border-black shadow-lg shadow-zinc-800 rounded-md p-2.5">
          <h3 className="text-center">form to PDF</h3>
          <div className="createNew items-center flex justify-end">
            <button
              className="p-1 border bg-green-600 font-bold text-3xl rounded-lg items-center text-white"
              aria-label="create new row"
              onClick={createNew}
            >
              <TiPlus title="add a new row" />
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="formWrapper">
              <div className="flex justify-between items-center">
                <div className="title items-center mb-2">
                  <label htmlFor="title"> Title</label>
                  <input
                    // required
                    type="text"
                    name=""
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                    className="border rounded p-1 ml-2 outline-none"
                  />
                </div>
              </div>
              <div className="heading flex rounded-tl-lg rounded-tr-lg justify-between bg-blue-600">
                <table>
                  <thead>
                    <tr className="flex justify-between w-full mx-auto">
                      <th
                        scope="col"
                        className=" text-gray-900 px-6 py-4 mx-2 text-center w-[50px]"
                      >
                        #
                      </th>
                      <th
                        scope="col"
                        className=" text-gray-900 px-6 py-4 mx-2 text-center w-[150px] md:w-[280px]"
                      >
                        Product Description
                      </th>
                      <th
                        scope="col"
                        className=" text-gray-900 px-6 py-4 mx-2 text-center w-[80"
                      >
                        Quantity
                      </th>
                      <th
                        scope="col"
                        className=" text-gray-900 px-6 py-4 mx-2 text-center"
                      >
                        Unit Price
                      </th>
                      <th
                        scope="col"
                        className=" text-gray-900 px-6 py-4 mx-2 text-center w-[90px] md:w-[140px]"
                      >
                        Amount
                      </th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div className="inputWrap">
                {formField.map(
                  ({
                    id,
                    serialNumber,
                    items,
                    quantity,
                    unitPrice,
                    amount,
                  }) => (
                    <div key={id} className="inputList">
                      <div className="grid grid-flow-col auto-cols-max gap-4 mt-1 even:mt-0">
                        <div className="m-2 serialNumbers border rounded w-[50px]">
                          <input
                            // required
                            type="text"
                            name=""
                            onChange={updateForm(id)}
                            value={serialNumber}
                            placeholder="S/N"
                            className="w-full p-2 border-none outline-none"
                          />
                        </div>
                        <div className="m-2 items border rounded w-[150px] md:w-[280px]">
                          <input
                            // required
                            type="text"
                            name=""
                            onChange={updateForm(id)}
                            value={items}
                            placeholder="Items"
                            className="w-full p-2 border-none outline-none"
                          />
                        </div>
                        <div className="m-2 quantity border rounded w-[85px]">
                          <input
                            // required
                            type="text"
                            name=""
                            onChange={updateForm(id)}
                            value={quantity}
                            placeholder="Quantity"
                            className="w-full p-2 border-none outline-none"
                          />
                        </div>
                        <div className="m-2 unitPrice border rounded w-[80px] md:w-[120px]">
                          <input
                            // required
                            type="text"
                            name=""
                            onChange={updateForm(id)}
                            value={unitPrice}
                            placeholder="Unit Price"
                            className="w-full p-2 border-none outline-none"
                          />
                        </div>
                        <div className="m-2 Amount border rounded w-[90px] md:w-[140px]">
                          <input
                            // required
                            type="text"
                            name=""
                            onChange={updateForm(id)}
                            value={amount}
                            placeholder="Amount"
                            className="w-full p-2 border-none outline-none"
                          />
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
              <div className="submit flex justify-end mt-2">
                <div className="border rounded-md p-1.5 bg-gray-400 text-white hover:bg-blue-500 items-center cursor-pointer flex justify-center">
                  <input
                    type="button"
                    className="w-full border-none outline-none cursor-pointer items-center inline-flex"
                    value="Submit"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default ShopperList;
