import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Dynamic() {
  const [data, setData] = useState({ name: "", roll: "" });
  const params = useParams();
  console.log(params);
  async function dynamicCall() {
    try {
      const response = await axios({
        method: "get",
        url: `http://localhost:5005/name/${params.id}`,
      });
      console.log(response.data);
      setData(response.data);
    } catch (err) {
      console.log(err.response.data);
    }
  }
  useEffect(() => {
    dynamicCall();
  }, []);

  return (
    <div>
      <div>{data.name}</div>
      <div>{data.roll}</div>
    </div>
  );
}
export default Dynamic;
