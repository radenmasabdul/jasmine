import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/AuthSlice";

import Swal from "sweetalert2";

import Layout from "./Layout";
import DataSuretyBondList from "../components/DataSuretyBondList";

const DataSuretyBond = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
    if (user && user.role !== "admin" && user.role !== "userHQ") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Anda tidak bisa mengakses halaman ini!",
      });
      navigate("/dashboard");
    }
  }, [isError, user, navigate]);

  return (
    <>
      <Layout>
        <DataSuretyBondList />
      </Layout>
    </>
  );
};

export default DataSuretyBond;
