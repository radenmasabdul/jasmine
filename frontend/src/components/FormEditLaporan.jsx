import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";

const FormEditLaporan = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [message, setMessage] = useState("");
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const getLaporanById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/laporan/${id}`);
        setName(response.data.name);
        setPrice(response.data.price);
      } catch (error) {
        if (error.message) {
          setMessage(error.response.data.message);
        }
      }
    };
    getLaporanById();
  }, [id]);

  const updateLaporan = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/laporan/${id}`, {
        name: name,
        price: price,
      });
      navigate("/laporan");
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message);
      }
    }
  };

  return (
    <>
      <div className="container mx-auto mt-12">
        <div className="card w-96 bg-base-100 shadow-xl">
          <form className="my-10 mx-10" onSubmit={updateLaporan}>
            <p className="text-center">{message}</p>
            <div className="relative z-0 w-full group mb-6">
              <input
                type="text"
                name="floating_name"
                id="floating_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label
                for="floating_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Name Report
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="floating_price"
                id="floating_price"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=""
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <label
                for="floating_price"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Price
              </label>
            </div>
            <div className="flex flex-wrap gap-2 justify-left">
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Update
              </button>
              <Link
                to="/laporan"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                {" "}
                Back{" "}
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormEditLaporan;
