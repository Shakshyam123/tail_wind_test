import { useEffect, useMemo, useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import axios from "axios";

const Example = () => {
  const [formData, setFormData] = useState([]);
  async function hello() {
    try {
      const response = await axios({
        method: "get",
        url: "http://localhost:5005/material",
      });
      console.log(response.data);
      setFormData(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    hello();
  }, []);

  //should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: "name.firstName", //access nested data with dot notation
        header: "First Name",
        size: 150,
      },
      {
        accessorKey: "name.lastName",
        header: "Last Name",
        size: 150,
      },
      {
        accessorKey: "address", //normal accessorKey
        header: "Address",
        size: 200,
      },
      {
        accessorKey: "city",
        header: "City",
        size: 150,
      },
      {
        accessorKey: "state",
        header: "State",
        size: 150,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: formData, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
  });

  return <MaterialReactTable table={table} />;
};

export default Example;
