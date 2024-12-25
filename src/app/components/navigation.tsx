import React from "react";
import { useNavigate } from "react-router-dom";

export const Navigation = () => {
  const navigate = useNavigate();
  const OnClickAddPage = () => {
    navigate("/add");
  };
  return (
    <div className="navigation px-8 flex justify-between">
      <h1 className="text-4xl font-bold text-gray-700 mt-32"> Todoアプリ</h1>
      <nav>
        <button
          onClick={OnClickAddPage}
          className="text-white bg-blue-700  rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
        >
          追加
        </button>
      </nav>
    </div>
  );
};
