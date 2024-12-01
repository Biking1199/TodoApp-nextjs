import Link from "next/link";
import { Route, Routes } from "react-router-dom";
import AddTask from "./tasks/add/page";

export default function Home() {
  return (
    <div>
      <Routes>
        <Route path="/src/app/tasks/add" element={<AddTask />} />
      </Routes>
      <div className="navigation px-8 flex justify-between">
        <h1 className="text-4xl font-bold text-gray-700 mt-32"> Todoアプリ</h1>
        <nav>
          <Link href="/tasks/add">
            <button>追加</button>
          </Link>
        </nav>
      </div>
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
