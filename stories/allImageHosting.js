import React from "react";
import MarkdownNice from "../lib/Lib";

// 编辑器默认的内容
const defaultText = `编辑器默认的内容`;
// 标题，是一个字符串
const defaultTitle = "Markdown Nice";

// 自定义图床参数
const useImageHosting = {
  url: "/api/upload/images",
  name: "海栈-工具网",
  isSmmsOpen: true,
  isQiniuyunOpen: true,
  isAliyunOpen: true,
};

function App() {
  return (
    <MarkdownNice
      defaultTitle={defaultTitle}
      defaultText={defaultText}
      onTextChange={t => console.log("text => ", t)}
      useImageHosting={useImageHosting}
    />
  );
}

export default App;
