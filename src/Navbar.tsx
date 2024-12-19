import React from 'react';
import { Link } from 'react-router-dom';  // 使用react-router-dom的Link組件來進行導航

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">首頁</Link>  {/* 返回首頁 */}
        </li>
        <li>
          <Link to="/insertOne">新增學生</Link>
        </li>
        <li>
          <Link to="/updateStudent">刪除學生</Link>
        </li>
        <li>
          <Link to="/findAll">查詢學生</Link>
        </li>
        <li>
          <Link to="/updateStudent">更新學生</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
