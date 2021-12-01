import React,{useState,useEffect} from 'react'
import "./index.css"

function Nav() {

    const [show, setShow] =useState(false);

   const scrolling = () => {
    if (window.scrollY > 100) {
        setShow(true);
    } else {
        setShow(false);
    }
}

useEffect( ()=>{ window.addEventListener('scroll',scrolling);
return()=>window.addEventListener('scroll',scrolling);
},[])
   
    return (
    <div className={`title-logo ${show===true &&'pip'}`}>
       
            <img src="https://t1.daumcdn.net/cfile/tistory/99EE2F485ECDDF470C" className="nav-home"/>

            <img src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg" className="nav-avatar"/>

        
    </div>

    )

  
}


export default Nav;
