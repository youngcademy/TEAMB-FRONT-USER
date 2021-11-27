import "./index.css";
import React, {useState,useEffect} from 'react'
function Nav() {

    const [show,setShow] = useState(false); //조건따라 nav-black 이 추가되려고 너음
    
    const scrollNavbar = ()=>{
        
        if( window.scrollY > 100 ){ setShow(true); }

        else{ setShow(false); }
        //`setShow ${window.scrollY>100 && setShow(true) || setShow(false)}`
    }
   
    //컴포넌트가 생성,삭제,수정되는 시점을 캐치해서 특정 코드를 실행시키는 기능 
  useEffect(()=>{
      window.addEventListener("scroll",scrollNavbar); 
      return() => window.removeEventListener("scroll",scrollNavbar); 
    }, [show]) //[변수] 값이 변경됨 유무를 감지후 실행
    //스크롤 감지하고 특정 시점부터 show값을 true로 바굼
   
    return (
        <div className={`nav ${show ===true && 'nav-black'}`}>
            <div className="nav-contens">
                <img
                    src="https://blog.kakaocdn.net/dn/95L6D/btqCHxhhme0/VLEBkZ5CRH5AZdmWz8Odwk/img.png"
                    alt=""
                    className="nav-logo"/>
               <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                    alt=""
                    className="nav-avatar"/>
            </div>
        </div>

    )
}

export default Nav