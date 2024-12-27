import './App.css';
import { Route, Routes } from 'react-router-dom';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import PrivateRoute from './route/PrivateRoute';
// 1. 전체상품페이지, 로그인페이지, 상세페이지
// 1-1. 네비게이션 바 
// 전체페이지에서는 전체상품볼수 있다.
// 로그인페이지에서는 로그인을 할 수 있다.
// 상품 디테일을 보려면 로그인 후 볼수 있다. 
// 로그인 되어 있을경우 상품디테일 페이지를 볼수 있다.
// 로그아웃 버튼 누르면 로그아웃된다. 
// 로그아웃이 되면 상품 디테일 페이지를 볼수 없다. 다시 로그인페이지가 보인다. 
// 로그인<->로그아웃 버튼
// 상품을 검색할 수 있다.  

function App() {
  const [authenticate, setAuthenticate] = useState(false) // 로그인시 true


  useEffect(() => {
    console.log(`로그인 상태: ${authenticate ? '로그인됨' : '로그아웃됨'}`);
  }, [authenticate])

  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path='/' element={<ProductAll />} />
        <Route path='/login' element={<Login authenticate={authenticate} setAuthenticate={setAuthenticate} />} />
        <Route path='/product/:id' element={<PrivateRoute
          authenticate={authenticate} />} />
      </Routes>
    </div>
  );
}

export default App;
