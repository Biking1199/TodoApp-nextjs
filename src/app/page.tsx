"use client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddTask from "./tasks/add/page";
import { Navigation } from "./components/navigation";

export default function Home() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/add" element={<AddTask />} />
        </Routes>
        <Navigation />
      </BrowserRouter>

      <div className="itemTitle px-8  flex justify-between border-b-2 border-indigo-500">
        <p className="">タイトル↓</p>
        <p className="">進捗状態</p>
        <p className="">操作ボタン</p>
      </div>
      <div className="item flex px-8 justify-between">
        <p className="">Nextjs学習</p>
        <p className="">未完了</p>
        <div className="operationButton">
          <p className="">編集ボタン</p>
          <p className="">削除ボタン</p>
        </div>
      </div>
    </div>
  );
}
