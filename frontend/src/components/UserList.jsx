import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUsers(response.data);
  };

  const deleteUser = async (userId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5000/users/${userId}`).then((res) => {
          Swal.fire({
            title: "Successfully",
            text: "Your file has been deleted.",
            icon: "success",
            showCancelButton: false,
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Ok",
          });
          getUsers();
        });
      } else {
        return;
      }
    });
  };

  return (
    <>
      <div className="container mt-12">
        <p className="capitalize text-base text-black dark:text-white">
          Manajemen User
        </p>
        <Link to="/users/add" className="btn btn-success my-2 text-white">
          {" "}
          Add New
        </Link>
        <div className="overflow-x-auto">
          <table className="table table-zebra table-compact w-full">
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.uuid} className="text-center">
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td className="flex flex-wrap gap-2 justify-center">
                    <Link
                      to={`/users/edit/${user.uuid}`}
                      className="btn btn-info text-white"
                    >
                      {" "}
                      Edit{" "}
                    </Link>
                    <button
                      onClick={() => deleteUser(user.uuid)}
                      className="btn btn-error text-white"
                    >
                      {" "}
                      Delete{" "}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UserList;
