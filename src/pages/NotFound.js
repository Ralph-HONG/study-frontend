import React from 'react';
import './notfound.css';
import { Link }  from 'react-router-dom' ; 


export const NotFound = () => {
  return (
     <div className='notfound-container'>
        <img src={"./img/notfound_Img.gif"} alt="이미지" width="100%" height="100%" className='notfound-img' />
      <div className='notfound-header'><h1 className='notfound-h2'>찾으시는 페이지가 없습니다.</h1>
      <div className='notfound-p'><br></br>
      <p className='notfound-p1'> 잘못된 접근이거나 요청하신 페이지를 찾을 수 없습니다. <br></br>
      입력하신 페이지의 주소가 정확한지 다시 한번 확인해 주시기 바랍니다.</p>
      <br></br>
      <button className="notfound-button" 
          type="submit" 
          value="back " >
            {/* 로그인 페이지로 연결됨 나중에 Home 으로변경해야 함 */}
                      <Link className='notfound-link' to="" style={{ textDecoration: "none" }}>
                        홈으로 
                         </Link>
          
          <div className="back-icon"></div></button>
      </div>
      </div>

    </div>
  )
}


export default NotFound;
