import axios from "axios";
import { useEffect, useState } from "react";

function Table() {
  const [moreTable, setMoreTable] = useState([]);
  const [tableData, setTableData] = useState([]);
  async function table() {
    try {
      const response = await axios({
        method: "get",
        url: "http://localhost:5005/table",
      });
      setTableData(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    table();
    moredata();
  }, []);

  async function moredata() {
    try {
      const hello = await axios({
        method: "get",
        url: "http://localhost:5005/tabledata",
      });
      console.log(hello.data);
      setMoreTable(hello.data);
    } catch (error) {
      console.log(error);
    }
  }
  console.log(moreTable);
  return (
    <div>
      <h1>Table data pulled from backend using map method</h1>
      <table>
        <thead>
          <tr>
            <td>sn</td>
            <td>Name</td>
            <td>class</td>
            <td>subject</td>
          </tr>
        </thead>
        <tbody>
          {tableData.map((value, index) => (
            <tr key={index}>
              <td>{value.sn}</td>
              <td>{value.name}</td>
              <td>{value.class}</td>
              <td>{value.subject}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                sn
              </th>
              <th scope="col" className="px-6 py-3">
                name
              </th>
              <th scope="col" className="px-6 py-3">
                color
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                class
              </th>
              <th scope="col" className="px-6 py-3">
                subject
              </th>
              <th scope="col" className="px-6 py-3">
                country
              </th>
            </tr>
          </thead>
          <tbody>
            {moreTable.map((value, index) => (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 md"
                key={index}
              >
                <td className="px-6 py-4">{value.sn}</td>
                <td className="px-6 py-4">{value.name}</td>
                <td className="px-6 py-4">{value.color}</td>
                <td className="px-6 py-4">{value.Price}</td>
                <td className="px-6 py-4">{value.class}</td>
                <td className="px-6 py-4">{value.subject}</td>
                <td className="px-6 py-4">{value.country}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
