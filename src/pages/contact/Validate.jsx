import { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

import { motion, AnimatePresence } from "framer-motion";

const BASE_URL = "http://localhost:5005";

function UserList() {
  const [users, setUsers] = useState([]);

  const [updateId, setUpdatedId] = useState(null);
  const [selectId, setSelectId] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  async function fetchUsers() {
    try {
      const response = await axios.get(`${BASE_URL}/prisma`);
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }

  async function handleDeleteUser(userId) {
    try {
      await axios.delete(`${BASE_URL}/prisma/${userId}`);
      setUsers((users) => users.filter((user) => user.id !== userId));
      console.log("User deleted successfully");
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  }

  function selectHandler(data) {
    setSelectId(true);
    setUpdatedId(data.id);
    setValue("email", data.email);
    setValue("name", data.name);
  }

  async function updateSubmit(data) {
    try {
      const user = await axios({
        method: "PUT",
        url: `${BASE_URL}/prisma/${updateId}`,
        data: { name: data.name, email: data.email },
      });
      fetchUsers();
      console.log("User updated successfully:", user.data);
      setSelectId(false); // Reset selectId after submission
    } catch (error) {
      console.error("Error updating user:", error);
    }
  }

  async function onSubmit(data) {
    try {
      const response = await axios({
        url: `${BASE_URL}/prisma`,
        method: "post",
        data: { name: data.name, email: data.email },
      });
      console.log("User added successfully:", response.data);
      fetchUsers();
      reset(); // Reset the form fields after successful submission
    } catch (error) {
      console.error("Error adding user:", error);
    }
  }

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <form
        onSubmit={handleSubmit(selectId ? updateSubmit : onSubmit)}
        className="flex flex-col text-center border-4 p-10 w-fit ml-40"
      >
        <h1 className="text-xl font-extrabold ml-16 mr-48">This is a form</h1>
        <label>
          Name:
          <input type="text" {...register("name", { required: true })} />
          {errors.name && <span>Name is required</span>}
        </label>
        <label>
          Email:
          <input type="email" {...register("email", { required: true })} />
          {errors.email && <span>Email is required</span>}
        </label>
        {!updateId ? (
          <button
            type="submit"
            className="bg-blue-700 p-3 text-white text-center ml-80 mr-80"
          >
            Add User
          </button>
        ) : (
          <button
            type="submit"
            className="bg-blue-700 p-3 text-white text-center ml-80 mr-80"
          >
            Update User
          </button>
        )}
      </form>

      <h1 className="text-xl">
        Show data from backend by clicking this button
      </h1>
      <button
        onClick={toggleVisibility}
        className="border-2 p-2 rounded-lg bg-slate-800 text-white shadow-lg"
      >
        {isVisible ? "Hide data" : "Show data"}
      </button>

      {isVisible && (
        <div>
          <h1 className="font-extrabold text-5xl">User List</h1>
          <table className="border-rose-300 shadow-lg ml-64">
            <thead className="border-rose-300">
              <tr className="bg-blue-600">
                <th className="py-4 pr-5 pl-6">ID</th>
                <th className="py-4 pr-5 pl-6">Name</th>
                <th className="py-4 pr-5 pl-6">Email</th>
                <th className="py-4 pr-5 pl-6">Action</th>
                <th className="py-4 pr-5 pl-6">Select</th>
              </tr>
            </thead>
            <tbody>
              <AnimatePresence>
                {users.map((user) => (
                  <motion.tr
                    key={user.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="bg-blue-300"
                  >
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <button onClick={() => handleDeleteUser(user.id)}>
                        Delete
                      </button>
                    </td>
                    <td>
                      <button onClick={() => selectHandler(user)}>
                        Select
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default UserList;
