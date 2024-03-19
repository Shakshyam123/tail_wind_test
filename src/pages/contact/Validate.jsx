import { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

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
    console.log("update", data);
    console.log("updateID", updateId);
    console.log("selectID", selectId);
    try {
      const user = await axios({
        method: "PUT",
        url: `${BASE_URL}s/prisma/${updateId}`,
        data: { name: data.name, email: data.email },
      });
      fetchUsers();
      console.log(user.data);
    } catch (error) {
      console.log(error);
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
      reset();
    } catch (error) {
      console.error("Error adding user:", error);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div>
      <form
        onSubmit={handleSubmit(selectId ? updateSubmit : onSubmit)}
        className="flex flex-col  text-center"
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
            className="bg-blue-700 p-3 text-white text-center ml-80 mr-80   "
            onClick={updateSubmit}
          >
            update user
          </button>
        )}
      </form>

      <h1>User List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
            <th>Select</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleDeleteUser(user.id)}>
                  Delete
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    selectHandler(user);
                  }}
                >
                  Select
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
