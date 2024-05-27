import React, { useEffect, useState } from "react";

export const Notice = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const initData = localStorage.getItem("noticeList");
    setNotices(JSON.parse(initData));
  }, []);

  return (
    <div>
      <h1>공지사항</h1>
      <table>
        <tr style={{ textAlign: "center" }}>
          <td>아이디</td> <td>제목</td> <td>작성자</td>
        </tr>
        {notices.map((notice) => (
          <tr>
            <td>{notice.id}</td>
            <td>{notice.title}</td>
            <td>{notice.writer}</td>
          </tr>
        ))}
      </table>
      <button>글쓰기</button>
    </div>
  );
};
