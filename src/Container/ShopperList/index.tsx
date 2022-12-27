import { FC, useState } from "react";
import { TiPlus } from "react-icons/ti";

const ShopperList: FC = () => {
  const createNew = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log("create new line");
  };
  return (
    <>
      <div className="grid place-items-center h-[95vh]">
        <div className="shopper">
          <h3 className="text-center">form to PDF</h3>
          <div className="createNew items-center flex justify-end">
            <button
              className="p-1 border bg-green-600 font-bold text-3xl rounded-lg items-center text-white"
              aria-label="create new row"
              onClick={createNew}
            >
              <TiPlus />
            </button>
          </div>

          <form>
            <div className="flex justify-between items-center">
              <div className="title items-center">
                <label htmlFor="title"> Title</label>
                <input
                  // required
                  type="text"
                  name=""
                  placeholder="Title"
                  className="border rounded p-1 ml-2 outline-none"
                />
              </div>
            </div>
            <div className="heading flex justify-between bg-blue-600">
              <th
                scope="col"
                className=" text-gray-900 px-6 py-4 text-center w-[50px]"
              >
                #
              </th>
              <th
                scope="col"
                className=" text-gray-900 px-6 py-4 text-center w-[150px] md:w-[280px]"
              >
                Product Description
              </th>
              <th
                scope="col"
                className=" text-gray-900 px-6 py-4 text-center w-[80"
              >
                Quantity
              </th>
              <th
                scope="col"
                className=" text-gray-900 px-6 py-4 text-center"
              >
                Unit Price
              </th>
              <th
                scope="col"
                className=" text-gray-900 px-6 py-4 text-center w-[90px] md:w-[140px]"
              >
                Amount
              </th>
            </div>
            <div className="grid grid-flow-col auto-cols-max overflow-scroll gap-4 my-3">
              <div className="serialNumbers border rounded p-2 w-[50px]">
                <input
                  // required
                  type="text"
                  name=""
                  placeholder="S/N"
                  className="w-full border-none outline-none"
                />
              </div>
              <div className="items border rounded p-2 w-[150px] md:w-[280px]">
                <input
                  type="text"
                  name=""
                  placeholder="Items"
                  className="w-full border-none outline-none"
                />
                {/* <textarea
                  // required
                  className="w-full border-none outline-none resize-none overflow-hidden"
                  rows={1}
                  wrap="hard"
                  // cols={30}
                  name="items"
                  placeholder="items"
                ></textarea> */}
              </div>
              <div className="quantity border rounded p-2 w-[80px]">
                <input
                  // required
                  type="text"
                  name=""
                  placeholder="Quantity"
                  className="w-full border-none outline-none"
                />
              </div>
              <div className="unitPrice border rounded p-2 w-[80px] md:w-[120px]">
                <input
                  // required
                  type="text"
                  name=""
                  placeholder="Unit Price"
                  className="w-full border-none outline-none"
                />
              </div>
              <div className="Amount border rounded p-2 w-[90px] md:w-[140px]">
                <input
                  // required
                  type="text"
                  name=""
                  placeholder="Amount"
                  className="w-full border-none outline-none"
                />
              </div>
            </div>
            <div className="submit flex justify-end">
              <div className="border rounded-md p-1.5 hover:bg-blue-500 items-center cursor-pointer flex justify-center hover:text-white">
                <input
                  type="button"
                  className="w-full border-none outline-none cursor-pointer items-center inline-flex"
                  value="Submit"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default ShopperList;
