import './App.css';
import React, {useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import NotFound from './pages/NotFound';
import axios from "axios";

function App() {
	const [testStr, setTestStr] = useState('');

	function callback(str) {
		setTestStr(str);
	}

	useEffect(
			() => {
				axios.get('/hello')
						.then((Response) => {
							callback(Response.data)
						})
						.catch((Error) => {
									console.log(Error)
								}, []
						);
			}
	)
	return (
			<div className='App'>
				{/* <Login /> */}

				<BrowserRouter>
					{/* <Header /> */}
					<Routes>
						<Route path="/" element={<Login/>}></Route>
						{/* <Route path="/#/*" element={<# />}></Route>  */}
						{/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
						<Route path="*" element={<NotFound/>}></Route>
					</Routes>
				</BrowserRouter>
				<p>
					백엔드데이터 : {testStr}
				</p>

			</div>


	)
}

export default App;
