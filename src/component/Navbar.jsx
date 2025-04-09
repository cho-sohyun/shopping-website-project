import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faMagnifyingGlass,
  faXmark,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import Offcanvas from "react-bootstrap/Offcanvas";

const Navbar = ({ authenticate, setAuthenticate }) => {
  const menuList = ["Women", "Men", "Baby", "Kids", "Home"];
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setShowMobileSearch(false);
  }, [location]);

  const logout = () => {
    setAuthenticate(false);
    navigate("/");
  };

  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
  };

  const goToHome = () => {
    navigate("/");
  };

  const search = (event) => {
    if (event.key === "Enter") {
      // 입력한 검색어를 읽어와서 url을 바꿔준다.
      let keyword = event.target.value;
      navigate(`/?q=${keyword}`);
    }
  };

  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);

  return (
    <div className="nav-container">
      {/* 모바일 검색창 */}
      {showMobileSearch && (
        <div className="mobile-search-bar">
          <div className="mobile-search-wrapper">
            <input
              type="text"
              placeholder="검색어를 입력하세요"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              onKeyUp={(event) => {
                search(event);
              }}
              autoFocus
            />
            <FontAwesomeIcon
              icon={faXmark}
              className="close-icon"
              onClick={() => setShowMobileSearch(false)}
            />
          </div>
        </div>
      )}

      {/* 상단 바 */}
      <div className="top-bar">
        {/* 메뉴 아이콘 (왼쪽 정렬) */}
        <div className="mobile-menu-icon" onClick={handleShow}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        {/* 로그인 + 모바일 검색 아이콘 */}
        <div className="login-and-search">
          <div
            className="mobile-search"
            onClick={() => setShowMobileSearch(!showMobileSearch)}
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
          <div
            className="login-button"
            onClick={authenticate ? logout : goToLogin}
          >
            <FontAwesomeIcon icon={faUser} />
            <span>{authenticate ? "로그아웃" : "로그인"}</span>
          </div>
        </div>
      </div>
      {/* 로고 */}
      <div className="logo-section">
        <img
          width={100}
          src="/image/hnm-logo.jpg"
          alt="logo"
          onClick={goToHome}
        />
      </div>
      {/* 메뉴 + 검색 */}
      <div className="menu-section">
        <div></div>
        <ul className="menu-list">
          {menuList.map((menu, index) => (
            <li key={index}>{menu}</li>
          ))}
        </ul>

        {/* 모바일 메뉴 */}
        <Offcanvas show={showOffcanvas} onHide={handleClose} placement="start">
          <Offcanvas.Header closeButton></Offcanvas.Header>
          <Offcanvas.Body>
            <ul className="offcanvas-menu-list">
              {menuList.map((menu, index) => (
                <li
                  key={index}
                  style={{
                    padding: "10px 0",
                    cursor: "pointer",
                    listStyle: "none",
                  }}
                >
                  {menu}
                </li>
              ))}
            </ul>
          </Offcanvas.Body>
        </Offcanvas>

        <div className="search-section">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input
            type="text"
            placeholder="검색"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyUp={(event) => {
              search(event);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
