import React, { useContext } from "react";
import { ThemeContext } from "../features/context";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

const FormSetting = () => {
  const { isLight, setIsLight } = useContext(ThemeContext);

  return (
    <>
      <div className="container mx-auto mt-12">
        <p className="text-black text-base my-2 dark:text-white">
          Change Theme
        </p>
        <button
          className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
          onClick={() => setIsLight(!isLight)}
        >
          <span className="ml-2">
            <FaSun
              className={`text-white text-4xl ${isLight ? "" : "hidden"}`}
            />
            <FaMoon
              className={`text-white text-4xl ${isLight ? "hidden" : ""}`}
            />
          </span>
        </button>
      </div>
    </>
  );
};

export default FormSetting;
