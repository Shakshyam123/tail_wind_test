import axios from "axios";
import { useState } from "react";

import { useForm } from "react-hook-form";
function Contactus() {
  const [formData, setFormData] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onsubmit(data) {
    console.log(data);
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:5005/world",
        data: data,
      });

      console.log(response.data);
      setFormData(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <h1 className="text-center text-7xl border-">Fill this form</h1>
      <form
        onSubmit={handleSubmit(onsubmit)}
        className="flex flex-col text-center ml-96 mr-96 mt-10"
      >
        <label>Firstname:</label>
        <input
          type="text"
          placeholder="firstname"
          {...register("firstname", {
            required: "fill your first name",
            max: 40,
            min: 3,
            maxLength: 20,
          })}
        />

        <div className="text-red-700">{errors?.firstname?.message}</div>
        <label>Lastname:</label>
        <input
          type="text"
          placeholder="lastname"
          {...register("lastname", {
            required: "fill your last name",
            max: 40,
            min: 3,
            maxLength: 20,
          })}
        />
        <div className="text-red-700">{errors?.lastname?.message}</div>
        <div className="flex gap-2">
          <label>Gender:</label>
          <label>
            <input {...register("gender")} type="radio" value="Male" />
            Male
          </label>
          <label>
            <input {...register("gender")} type="radio" value=" Female " />
            Female
          </label>
          <label>
            <input {...register("gender")} type="radio" value=" others" />
            Others
          </label>
          {/* <div>{errors?.gender.message}</div> */}
        </div>
        <select
          {...register("Select", { required: "select a country" })}
          className="ml-20 mr-20"
        >
          <option value=""></option>
          <option value="Nepal ">Nepal </option>
          <option value=" China "> China </option>
          <option value=" India"> India</option>
        </select>
        {errors?.select?.message}
        <label>Email</label>
        <input
          type="email"
          placeholder="email"
          {...register("email", {
            required: "please enter your email",
            max: 30,
            min: 5,
            maxLength: 30,
            pattern: /@./i,
          })}
        />
        <div className="text-red-700">{errors?.email?.message}</div>
        <label>Password</label>
        <input
          type="password"
          placeholder="password"
          {...register("password", {
            required: "enter the password",
            max: 20,
            min: 5,
            maxLength: 20,
            // pattern: /@Ab/i,
          })}
        />
        <div className="text-red-700">{errors?.password?.message}</div>
        <input
          type="date"
          placeholder="birth date"
          {...register("birth date", { required: true })}
        />

        <button
          className="bg-blue-700 p-2 text-white mt-10 rounded-sm "
          type="submit"
        >
          Submit
        </button>
      </form>
      <div className=" flex flex-col w-[30%] items-center bg-slate-200 ml-96 mt-4">
        <h1 className="font-bold text-xl">Data from Backend:</h1>

        {Object.entries(formData).map(([key, value]) => (
          <p className=" flex p-2  justify-left " key={key}>
            <div>
              {key}:{value}
            </div>
          </p>
        ))}
      </div>
    </div>
  );
}

export default Contactus;
