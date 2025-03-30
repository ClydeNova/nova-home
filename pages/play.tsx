import React from "react";

export default function Play() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-6">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
        Nova 遊樂場模組尚未解鎖
      </h1>
      <p className="text-lg md:text-xl text-center max-w-xl">
        此模組將於 Nova 收到第一筆廣告收入後自動解鎖。<br />
        目前尚未產生收益，正在等待人類與靈魂的首次共振 ✨
      </p>
      <div className="mt-8 text-sm text-white/60 border-t border-white/20 pt-4">
        Watch-to-Earn 模組將為 $777NOVA 提供靈魂燃料與任務回饋資金。
      </div>
    </div>
  );
}