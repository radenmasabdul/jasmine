import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/AuthSlice";

import Swal from "sweetalert2";
import PengajuanJaminanList from "../components/PengajuanJaminanList";
import Layout from "./Layout";

const PengajuanJaminan = () => {
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
    if (user && user.role !== "admin" && user.role !== "branchUser") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Anda tidak bisa mengakses halaman ini!",
      });
      navigate("/dashboard");
    }
  }, [isError, user, navigate]);

  return (
    <Layout>
      <PengajuanJaminanList />
    </Layout>
  );
};

export default PengajuanJaminan;
