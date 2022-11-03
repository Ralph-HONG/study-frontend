import './App.css';
import React, {useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import NotFound from './pages/NotFound';
import Main from './pages/Main';
import axios from "axios";

function App() {
 /*/ 로그인 상태 관리 */
 const [isLogin, setIsLogin] = useState(false);
 
 useEffect(() => {
   if(sessionStorage.getItem('user_id') === null){
   /*// sessionStorage 에 user_id 라는 key 값으로 저장된 값이 없다면 */
	 console.log('isLogin ?? :: ', isLogin)
   } else {
   /*// sessionStorage 에 user_id 라는 key 값으로 저장된 값이 있다면*/
   /*// 로그인 상태 변경*/
	 setIsLogin(true)
	 console.log('isLogin ?? :: ', isLogin)
   }
 })



	const [testStr, setTestStr] = useState('');

	function callback(str) {
		setTestStr(str);
	};

	useEffect(
			() => {
				axios.get()
						.then((Response) => {
							callback(Response.data)
						})
						.catch((Error) => {
									console.log(Error)
								}, []
						);
			}
	);

	return (

			<div className='App'>
				{/* <Login /> */}
				<BrowserRouter>
					{/* <Header /> */}
					<Routes>
					<Route path="/Main" element={<Main isLogin={isLogin}/> } /> 
					<Route path="/" element={<Login/>} />
						{/* <Route path="/#/*" element={<# />}></Route>  */}
						{/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
						<Route path="*" element={<NotFound/>}  />
					</Routes>
				</BrowserRouter>
				<p>
					백엔드데이터 : {testStr}
				</p>

			</div>


	)
};

export default App;
