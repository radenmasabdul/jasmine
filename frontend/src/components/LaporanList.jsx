import React from "react";

const LaporanList = () => {
  return (
    <>
      <div className="container mx-auto mt-12">
        <div className="overflow-x-auto">
          <table className="table table-zebra table-compact w-full">
            <thead>
              <tr>
                <th>No</th>
                <th>Name Report</th>
                <th>Price</th>
                <th>Created By</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Klaim</td>
                <td>Rp. 500.000</td>
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

export default LaporanList;
