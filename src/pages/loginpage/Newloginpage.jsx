import axios from "axios";
import Spinner from "../Spinner";

import { useState } from "react";

function Loginpage() {
  const [loading, setLoading] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [sucessMessage, setSucessMessage] = useState("");
  //   const [nameUnique, setNameUnique] = useState("");
  async function onSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true);
      const post = await axios({
        method: "post",
        url: "http://localhost:5005/nav",
        data: { username, password },
      });
      console.log(post);
      setError();
      setSucessMessage(post.data);
    } catch (error) {
      console.log(error);
      setError(error.response.data);
    } finally {
      setLoading(false);
    }
  }
  return (
    <div>
      <div>
        <form onSubmit={onSubmit}>
          <div className="lg:w-2/6  bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full text-center mr-96 mt-4">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
              login
            </h2>
            <div className="relative mb-4">
              <label
                htmlFor="full-name"
                className="leading-7 text-sm text-gray-600"
              >
                User name
              </label>
              <input
                type="text"
                name="full-name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => setUserName(e.target.value)}
                value={username}
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                password
              </label>
              <input
                type="password"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            {error && <div style={{ color: "red" }}>{error}</div>}
            {sucessMessage && (
              <div style={{ color: "green" }}>{sucessMessage.message}</div>
            )}
            <button
              className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              type="submit"
              disabled={loading}
            >
              login {loading && <Spinner />}
            </button>
            <p className="text-xs text-gray-500 mt-3">Fill this form</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Loginpage;
