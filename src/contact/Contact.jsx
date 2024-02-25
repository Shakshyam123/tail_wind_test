import { useState } from "react";
import axios from "axios";

function Contact() {
  const [axix, setAxix] = useState("");
  async function hover() {
    try {
      const apple = await axios.get(
        "https://api.nationalize.io?name=nathaniel"
      );
      console.log(apple.data);
      setAxix(apple.data);
    } catch (err) {
      console.log(err.massage);
    }
  }

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: "",
    country: "",
    password: "",
    confirm: "",
  });
  console.log(formData);

  const [formDataError, setFormDataError] = useState({
    nameError: "",
    genderError: "",
    emailError: "",
    countryError: "",
    passError: "",
    confError: "",
  });
  console.log(formData);

  function onSubmit(e) {
    e.preventDefault();
    setFormDataError({
      nameError: "",
      genderError: "",
      countryError: "",
      passError: "",
      confError: "",
    });
    if (!formData.name) {
      setFormDataError((state) => {
        return { ...state, nameError: "!please enter your name!" };
      });
    }

    if (!formData.gender) {
      setFormDataError((state) => {
        return { ...state, genderError: "Please select a gender" };
      });
    }
    if (!formData.email) {
      setFormDataError((state) => {
        return { ...state, emailError: "!please enter your email!" };
      });
    }
    if (!formData.country) {
      setFormDataError((state) => {
        return { ...state, countryError: "!please select a country!" };
      });
    }
    if (!formData.pass) {
      setFormDataError((state) => {
        return { ...state, passError: "!please enter password!" };
      });
    }
    if (!formData.conf) {
      setFormDataError((state) => {
        return { ...state, confError: "!please re-enter your password!" };
      });
    }
    if (formData.pass !== formData.conf && formData.conf !== "") {
      setFormDataError((state) => {
        return { ...state, confError: "!passwords do not match!" };
      });
    }
  }
  return (
    <div className="mt-12 ml-52">
      <div className=" ml-50">
        <h1 className="text-center text-2xl">Fill this form</h1>
        <label>Name:</label>
        <input
          type="text"
          placeholder="Name"
          className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg w-full b-2 h-12 text-xl hover:border-blue-400"
          onChange={(e) => {
            setFormData({ ...formData, name: e.target.value });
          }}
          value={formData.name}
        />
        <span className="mistake">{formDataError.nameError}</span>
        <br />
        <label>Email:</label>
        <input
          type="text"
          placeholder="Email"
          className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg w-full b-2 h-12 text-xl hover:border-blue-800"
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
          }}
          value={formData.email}
        />
        <span className="mistake">{formDataError.emailError}</span>
        <br />
        <label>Gender:</label>
        <input type="radio" />
        <label>Male</label>
        <input type="radio" />
        <label>Female</label>
        <br />
        <select>
          <option value="select.." className="text-gray-700 ">
            select
          </option>
          <option value="nep">nepal</option>
          <option value="ind">india</option>
          <option value="chin">China</option>
        </select>
        <span className="text-red-900">{formDataError.selectError}</span>
        <br />
        <label>Password:</label>
        <input
          type="password"
          placeholder="Password"
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full b-2 h-12 text-xl hover:border-blue-400"
        />
        <span className="mistake">{formDataError.passErrorError}</span>
      </div>
      <label>ConfirmPassword:</label>
      <input
        type="password"
        placeholder="ConfirmPassword"
        className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg w-full b-6 h-12 text-xl hover:border-blue-400"
      />
      <span className="mistake">{formDataError.confErrorError}</span>
      <br />
      <button
        className="p-4 bg-neutral-600 w-36 text-gray-200 rounded-full hover:bg-slate-950 hover:text-gray-50"
        onClick={(e) => {
          onSubmit(e);
        }}
        // className="button"
      >
        Submit
      </button>
      <div>
        <button onClick={hover} className="text-white bg-black p-2 rounded-lg">
          click me
        </button>
        <div>
          {axix.count}
          {axix.name}
        </div>
      </div>
    </div>
  );
}
export default Contact;
