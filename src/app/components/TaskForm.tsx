import React from "react";

export const TaskForm = () => {
  return (
    <div>
      <p>タスク名</p>
      <input
        type="text"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm "
        placeholder="タスク名"
        required
      />
      <p>進捗状況</p>
      <select>
        <option value="">未完了</option>
        <option value="">進行中</option>
        <option value="">完了</option>
      </select>
      <button className="text-white bg-blue-700  rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">
        追加
      </button>
    </div>
  );
};
