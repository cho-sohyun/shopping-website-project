import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import Navbar from "./component/Navbar";
import PrivateRoute from "./route/PrivateRoute";
import Banner from "./component/Banner";

// 1. 전체 상품 페이지, 로그인 페이지, 상품 상세페이지
// 2. 전체 상품 페이지 -> 전체 상품 볼 수 있음
// 3. 로그인 페이지 -> 로그인 버튼을 누르면 로그인 페이지 이동
// 4. 상품 디테일 눌렀을 때 비로그인 -> 로그인 페이지 이동,
//    로그인 유저는 상품 디테일 페이지를 볼 수 있다.
// 5. 로그아웃 버튼 클릭 시 로그아웃 처리
// 6. 로그아웃이 되면 상품 디테일 페이지를 볼 수 없다. 다시 로그인 페이지
// 7. 로그아웃 상태면 메인에서 로그인 표시, 로그인인 경우는 로그아웃
// 8. 상품 검색
function App() {
  // 로그인 상태
  const [authenticate, setAuthenticate] = useState(false);

  useEffect(() => {
    console.log("로그인 상태", authenticate);
  }, [authenticate]);

  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <ProductAll />
            </>
          }
        />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        <Route
          path="/product/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        />
      </Routes>
    </div>
  );
}

export default App;
