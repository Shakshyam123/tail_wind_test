import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";

import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";

function LoginPageNew() {
  const [sucessData, setSucessData] = useState("");
  const cookie = Cookies.get("token");

  async function onSubmit(data) {
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:5005/dashcam",
        data: { email: data.email, password: data.password },
      });
      Cookies.set("token", response.data.token, { path: "/" });
      console.log(response.data);
      setSucessData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      {!cookie ? (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="text-gray-600 body-font mr-96"
        >
          <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
            <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
              <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
                Login page
              </h2>
              <div className="relative mb-4">
                <label className="leading-7 text-sm text-gray-600">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email", {
                    required: "please enter valid email",
                    max: 20,
                    min: 2,
                    maxLength: 20,
                    pattern: /@./i,
                  })}
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                <div className="text-red-700">{errors?.email?.message}</div>
                <label className="leading-7 text-sm text-gray-600">
                  Password
                </label>

                <input
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  type="password"
                  placeholder="password"
                  {...register("password", {
                    required: "please enter valid password",
                    max: 15,
                    min: 4,
                    maxLength: 15,
                  })}
                />
                <div className="text-red-700">{errors?.password?.message}</div>
                {sucessData}
                <button
                  className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-3"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      ) : (
        <Navigate to={"/admin"} />
      )}
    </>
  );
}
export default LoginPageNew;
