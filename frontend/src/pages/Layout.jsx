import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <React.Fragment>
        <Navbar />
        <div className="flex min-h-screen flex-row bg-gray-100 text-gray-800 dark:bg-slate-800">
          <Sidebar />
          <main className="main flex flex-wrap my-10 px-4 transition-all duration-150 ease-in md:ml-0">
            <div className="flex h-full text-5xl font-bold">{children}</div>
          </main>
        </div>
      </React.Fragment>
    </>
  );
};

export default Layout;
