import './login.css';
import react, { useEffect, useState  } from "react";
import axios from 'axios';
import { useCookies } from "react-cookie";


function Login() {
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');

  
  /** 아이디 기억하기  */
  const [email, setEmail] = useState("");
  const [isRemember, setIsRemember] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(['rememberEmail']);

/** 아이디 기억하기  */
  useEffect(() => {
    if(cookies.rememberEmail !== undefined) {
      setEmail(cookies.rememberEmail);
      setIsRemember(true);
    }
 }, []);

const handleOnChange = (e) => {
  setIsRemember(e.target.check);
  if(e.target.check){
    setCookie('rememberEmail', email, {maxAge: 2000});
  } else {
  removeCookie('rememberEmail');
  }
};



/** --------------------------------------- */




  const handleInputId = (e) => {
      setInputId(e.target.value)
  };

  const handleInputPw = (e) => {
      setInputPw(e.target.value)
  };

  const onClickLogin = () => {
      console.log('click login')
      console.log('ID : ', inputId)
      console.log('PW : ', inputPw)
      axios.post('/user_inform/onLogin', null, {
          params: {
          'user_id': inputId,
          'user_pw': inputPw
          }
      })

      .then(res => {
          console.log(res)
          console.log('res.data.userId :: ', res.data.userId)
          console.log('res.data.msg :: ', res.data.msg)
          if(res.data.userId === undefined){
              // id 일치하지 않는 경우 userId = undefined, msg = '입력하신 id 가 일치하지 않습니다.'
              console.log('======================',res.data.msg)
              alert('입력하신 id 가 일치하지 않습니다.')
          } else if(res.data.userId === null){
              // id는 있지만, pw 는 다른 경우 userId = null , msg = undefined
              console.log('======================','입력하신 비밀번호 가 일치하지 않습니다.')
              alert('입력하신 비밀번호 가 일치하지 않습니다.')
          } else if(res.data.userId === inputId) {
              // id, pw 모두 일치 userId = userId1, msg = undefined
              console.log('======================','로그인 성공')
              sessionStorage.setItem('user_id', inputId)
          }
          // 작업 완료 되면 페이지 이동(새로고침)
          document.location.href = '/main'
      })
      .catch()
  };

   useEffect(() => {
       axios.get('')
       .then(res => console.log(res))
       .catch()
   },[]);





    return (
      <div className="App">
      <header className="header">
      <div className="logo"></div>
      <div className="header__lang-container">
                  <select name="language" id="language" className="header__lang-select-list">
                      <option value="ko_KR">한국어</option>
                      <option value="en_US">English</option>
                      {/* <option value="zh-Hans_CN">中文(简体)</option>
                      <option value="zh-Hant_TW">中文(台灣)</option> */}
                  </select>
              </div>
              </header>
  
    <div className="container">
        <form action="#" method="post" className="form-login">
          <h1 className='form-login__info-h1'>
            로그인
          </h1><p className="form-login__info-p">
        계정이 없으신가요?
          </p>
          <legend>로그인 폼</legend>
          <div className="form-login__id-container">
          <label className="form-login__id-label"  name="id"  value={inputId} onChange={handleInputId}> 아이디 </label>
          <input className="form-login__id-input" type="text" name="email" 
          placeholder='abc@gmail.com' autoFocus />

          
          <div className="error form-login__id-error-message" aria-live="assertive">아이디를 입력해주세요.</div>
          </div>
  
          <div className="form-login__password-container">
          <div className="input-password-find">
            <label className="form-login__password-label" >비밀번호 </label>
          </div>
          <input 
          className="form-login__password-input" 
          value={inputPw} onChange={handleInputPw}
          type="password" 
          name="password" 
           placeholder='********' autoFocus 
                    required
                    minLength={8}
                    maxLength={12}
                    autoComplete="false"
                    />
          <div className="error form-login__password-error-message">비밀번호를 입력해주세요.</div>
          </div>
  
          
          <div className="check"><br></br>
            <input type="checkbox" name="saveId"  id="saveId" onChange={handleOnChange}
            checked={isRemember} />
            <span className='form-login__maintain-check-des' htmlFor='saveId' >아이디 기억하기</span>
  
          </div>
          
          <br></br>
          <div className="space"> </div>
  
          <div className="login-button">
            <a href='/main'>
          <button 
          className="form-login__button" 
          type="submit" 
          onClick={onClickLogin}
          value="Login" >Login

          <div className="login-icon"></div></button> </a>
          </div> <br></br>
  
          <div className="form-login__register"> 
          <div className='form-login__register-p'>  
          <p className='form-login__register-p'> 도움이 필요하세요? </p> 
          </div> <p className='form-login__register-p1'>|</p> 
            <div className='form-login__register-a'> 
            <a href='#'>회원가입</a> 
            </div> 
            <p className='form-login__register-p2'>|</p> 
            <div className="form-login__password-find"> 
            <a href='#'>비밀번호 찾기</a> </div> 
            <p className='form-login__register-p3'>|</p> 
            <div className="form-login__id-find"> 
            <a href='#'>아이디 찾기</a>
             </div>
          </div>
  
        </form>
      </div>
      </div>
    );
  };
  
  
  export default Login;
