import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const LaporanList = () => {
  const [laporan, setLaporan] = useState([]);

  useEffect(() => {
    getLaporan();
  }, []);

  const getLaporan = async () => {
    const response = await axios.get("http://localhost:5000/laporan");
    setLaporan(response.data);
  };

  const deleteLaporan = async (laporanId) => {
    await axios.delete(`http://localhost:5000/laporan/${laporanId}`);
    getLaporan();
  };

  return (
    <>
      <div className="container mx-auto mt-12">
        <Link to="/laporan/add" className="btn btn-success my-2">
          {" "}
          Add New
        </Link>
        <div className="overflow-x-auto">
          <table className="table table-zebra table-compact w-full">
            <thead>
              <tr className="text-center">
                <th>No</th>
                <th>Name Report</th>
                <th>Price</th>
                <th>Created By</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {laporan.map((laporan, index) => (
                <tr key={laporan.uuid} className="text-center">
                  <th>{index + 1}</th>
                  <td>{laporan.name}</td>
                  <td>{laporan.price}</td>
                  <td>{laporan.user.name}</td>
                  <td className="flex flex-wrap gap-2 justify-center">
                    <Link
                      to={`/laporan/edit/${laporan.uuid}`}
                      className="btn btn-info"
                    >
                      {" "}
                      Edit{" "}
                    </Link>
                    <button
                      onClick={() => deleteLaporan(laporan.uuid)}
                      className="btn btn-error"
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

export default LaporanList;
