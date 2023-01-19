import React from "react";

const UserList = () => {
  return (
    <>
      <div className="container mt-12">
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
              <tr>
                <th>1</th>
                <td>Abdul Rahman Alhafizh</td>
                <td>abdul.tamsis@gmail.com</td>
                <td>Admin</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UserList;
