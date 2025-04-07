import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  const menuList = ["Women", "Men", "Baby", "Kids", "Home"];
  return (
    <div className="nav-container">
      {/* 상단 바 */}
      <div className="top-bar">
        <ul className="customer-service-list">
          <li>지속가능성</li>
          <li>고객 서비스</li>
          <li>뉴스레터</li>
        </ul>
        <div className="login-button">
          <FontAwesomeIcon icon={faUser} />
          <span>로그인</span>
        </div>
      </div>

      {/* 로고 */}
      <div className="logo-section">
        <img width={100} src="/image/hnm-logo.jpg" alt="logo" />
      </div>

      {/* 메뉴 + 검색 */}
      <div className="menu-section">
        <div></div>

        <ul className="menu-list">
          {menuList.map((menu, index) => (
            <li key={index}>{menu}</li>
          ))}
        </ul>

        <div className="search-section">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input type="text" placeholder="검색" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
