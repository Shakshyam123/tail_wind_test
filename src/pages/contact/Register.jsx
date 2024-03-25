import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Register() {
  const [datas, setDatas] = useState([]);
  const navigate = useNavigate();
  async function onSubmit(data) {
    try {
      const response = await axios.post("http://localhost:5005/prisma", {
        name: data.name,
        email: data.email,
        password: data.password,
      });
      console.log(response.data);

      getData();
      navigate("/loginpage");
    } catch (error) {
      console.log(error);
    }
  }
  console.log(datas);
  async function getData() {
    try {
      const response = await axios.get("http://localhost:5005/prisma");
      console.log(response);
      setDatas(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="flex ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="text-gray-600 body-font ml-44 "
      >
        <div className="container px-5 pt-12  flex flex-wrap items-center">
          <div className=" text-white w-96 bg-gray-100 rounded-lg p-8 flex flex-col  mt-10 bg-[url('./sky.webp')] bg-no-repeat bg-cover">
            <h2 className=" text-2xl font-medium mb-5 text-white font-[poppins]">
              Register Form
            </h2>
            <div className="">
              <label className="leading-7 text-sm text-white">Name</label>
              <input
                type="text"
                placeholder="name"
                {...register("name", {
                  required: "Please enter a valid name",
                  maxLength: 20,
                  minLength: 2,
                })}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <div className="text-red-700">
                {errors.name && errors.name.message}
              </div>
            </div>
            <div className="relative mb-4">
              <label className="leading-7 text-sm text-white">Email</label>
              <input
                type="email"
                placeholder="email"
                {...register("email", {
                  required: "Please enter a valid email",
                  maxLength: 20,
                  minLength: 2,
                  pattern: {
                    value: /@/,
                    message: "Invalid email address",
                  },
                })}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <div className="text-red-700">
                {errors.email && errors.email.message}
              </div>
              <label className="leading-7 text-sm text-white">Password</label>
              <input
                type="password"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="password"
                {...register("password", {
                  required: "Please enter a password",
                  maxLength: 20,
                  minLength: 2,
                })}
              />
              <div className="text-red-700">
                {errors.password && errors.password.message}
              </div>
            </div>
            <button
              className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>

      <div className="flex justify-center item-center h-full ml-9 mt-8">
        <table className="shadow-2xl font-[poppins] border-2 border-cyan-200 w-6/12 mt-9 mr-9 rounded-lg">
          <thead className="">
            <tr className="border-none">
              <th className="py-3 bg-cyan-800">Name</th>
              <th className="bg-cyan-800 py-3">Email</th>
            </tr>
          </thead>
          <tbody className="text-cyan-900   text-center ">
            {datas.map((user) => (
              <tr
                key={user.id}
                className="bg-cyan-200 cursor-pointer duration-300"
              >
                <td className="py-2 px-6">{user.name}</td>
                <td className="py-2 px-6">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Register;
