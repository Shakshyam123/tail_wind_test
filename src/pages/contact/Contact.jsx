import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Contact() {
  const [axix, setAxix] = useState("");
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

  async function hover() {
    try {
      const response = await axios.get(
        "https://api.nationalize.io?name=nathaniel"
      );
      console.log(response.data);
      setAxix(response.data);
    } catch (err) {
      console.log(err.message);
    }
  }
  async function dataValid(e) {
    e.preventDefault();

    if (!formData.name) {
      setFormDataError((state) => ({
        ...state,
        nameError: "!please enter your name!",
      }));
    }

    if (!formData.gender) {
      setFormDataError((hello) => ({
        ...hello,
        genderError: "Please select a gender",
      }));
    }
    if (!formData.email) {
      setFormDataError((image) => ({
        ...image,
        emailError: "!please enter your email!",
      }));
    }
    if (!formData.country) {
      setFormDataError((nepal) => ({
        ...nepal,
        countryError: "!please select a country!",
      }));
    }
    if (!formData.password) {
      setFormDataError((state) => ({
        ...state,
        passError: "!please enter password!",
      }));
    }
    // if (formData.password.length < 8) {
    //   setFormDataError((state) => ({
    //     ...state,
    //     passError: "!characters must bet more  than 8 digit!",
    //   }));
    // }
    var regex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!])(?!.*\s).{8,}$/;
    // regex.test(formData.password);

    if (!regex.test(formData.password)) {
      setFormDataError((state) => ({
        ...state,
        passError:
          "!pass must contain at least one upper,lowercase and symbol and number!",
      }));
    }

    if (!formData.confirm) {
      setFormDataError((state) => ({
        ...state,
        confError: "!please re-enter your password!",
      }));
    }
    if (formData.password !== formData.confirm && formData.confirm !== "") {
      setFormDataError((state) => ({
        ...state,
        confError: "!passwords do not match!",
      }));
    }
    try {
      const hello = await axios({
        method: "post",
        url: "http://localhost:5005/api",
        data: { formData },
      });
      console.log(hello);
    } catch (error) {
      console.log(error);
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
        <span className="text-red-500">{formDataError.nameError}</span>
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
        <span className="text-red-500">{formDataError.emailError}</span>
        <br />
        <label>Gender:</label>
        <input
          type="radio"
          name="gender"
          value="Male"
          onChange={(e) => {
            setFormData({ ...formData, gender: e.target.value });
          }}
        />
        <label>Male</label>
        <input
          type="radio"
          value="Female"
          name="gender"
          onChange={(e) => {
            setFormData({ ...formData, gender: e.target.value });
          }}
        />
        <label>Female</label>
        <br />
        <select
          onChange={(e) => {
            setFormData({ ...formData, country: e.target.value });
          }}
        >
          <option value="select.." className="text-gray-700 ">
            select
          </option>
          <option value="nep">nepal</option>
          <option value="ind">india</option>
          <option value="chin">China</option>
        </select>
        <span className="text-red-500">{formDataError.countryError}</span>
        <br />
        <label>Password:</label>
        <input
          type="password"
          placeholder="Password"
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg w-full b-2 h-12 text-xl hover:border-blue-400"
          onChange={(e) => {
            setFormData({ ...formData, password: e.target.value });
          }}
          value={formData.password}
        />
        <span className="text-red-500">{formDataError.passError}</span>
        <br />
        <label>Confirm Password:</label>
        <input
          type="password"
          placeholder="Confirm Password"
          className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg w-full b-6 h-12 text-xl hover:border-blue-400"
          onChange={(e) => {
            setFormData({ ...formData, confirm: e.target.value });
          }}
          value={formData.confirm}
        />
        <span className="text-red-500">{formDataError.confError}</span>
        <br />
        <button
          className="p-4 bg-neutral-600 w-36 text-gray-200 rounded-full hover:bg-slate-950 hover:text-gray-50"
          onClick={dataValid}
        >
          Submit
        </button>
        <div>
          <button
            onClick={hover}
            className="text-white bg-black p-2 rounded-lg"
          >
            click me
          </button>
          <div>
            {axix && (
              <>
                <div>{axix.count}</div>
                <div>{axix.name}</div>
              </>
            )}
          </div>
        </div>
      </div>
      <Link to="/contactus">
        <button className="border bg-black text-white p-2">
          click me to go to contact us page
        </button>
      </Link>
    </div>
  );
}
export default Contact;
