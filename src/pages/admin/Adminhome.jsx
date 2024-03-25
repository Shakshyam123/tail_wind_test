import { useContext } from "react";
import GlobleContext from "../../Globalcontext";
import { motion } from "framer-motion";

function Adminhome() {
  const contextvalue = useContext(GlobleContext);
  console.log(contextvalue);
  return (
    <div className="bg-gray-50 h-screen w-full ">
      <div className="flex mt- bg-gray-100 h-auto justify-around ">
        <div className="flex flex-col">
          <div className="flex">
            <motion.div
              initial={{ x: "-100vw" }}
              animate={{ x: "0" }}
              transition={{ duration: "2" }}
              className="border h-36 w-60 m-5 ml-5 rounded-lg bg-white shadow-lg"
            >
              <p className="pt-3 pl-4 font-bold text-xl">Revenue</p>
              <br />
              <h1 className="font-bold text-2xl pl-3">$2,454</h1>
              <p className="text-red-600">-11.4</p>
              <p className="pl-3 text-gray-400">Compare to last year (2019)</p>
            </motion.div>
            <motion.div
              initial={{ y: "100vw" }}
              animate={{ y: "0" }}
              transition={{ duration: "3" }}
              className="border h-36 w-60 m-5 ml-0 rounded-lg bg-white shadow-lg"
            >
              <p className="pt-3 pl-4 font-bold">Sales</p>
              <br />
              <h1 className="font-bold text-2xl pl-3">$6,982</h1>
              <p className="text-green-600 mt-1.5">8.2</p>
              <p className="pl text-gray-400">Compare to last year (2019)</p>
            </motion.div>
            <motion.div
              initial={{ x: "100vw" }}
              animate={{ x: "0" }}
              transition={{ duration: "1" }}
              className="border h-36 w-60 m-5 ml-0 rounded-lg bg-white shadow-lg"
            >
              <p className="pt-3 pl- font-bold">Costs</p>

              <h1 className="font-bold text-2xl pl-3 pt-3">$8,310</h1>
              <p className="pl-3 text-green-600 mt-4">0.7</p>
              <p className="pl-3 text-gray-400">Compare to last year (2019)</p>
            </motion.div>
          </div>
          <div className="border  rounded-lg bg-white h-96 ml-5  mr-5 shadow-lg bg-[url('/img/../growth.webp')]">
            Unique Visitors
          </div>
        </div>
        <div className="flex flex-col">
          <div className="border  w-56 ml- rounded-lg bg-white mt-5 shadow-lg h-80 text-center font-bold">
            <h1 className="mt-4">Monthly target</h1>
            <img
              src="../circle.svg"
              className="rounded-full text-center pl-12 mt-3"
            />
            <p>You need abit more effort to hit monthly target</p>
            <button className="bg-blue-700 rounded-full text-white p-3 text-center mt-3">
              Learn more
            </button>
          </div>

          <div className="border  w-56 ml- rounded-lg bg-white mt-5 shadow-lg h-80 text-center font-bold">
            <h1 className="mt-4">Monthly target</h1>
            <img
              src="../circle.svg"
              className="rounded-full text-center pl-12 mt-3"
            />
            <p>You need abit more effort to hit monthly target</p>
            <button className="bg-blue-700 rounded-full text-white p-3 text-center mt-3">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adminhome;
