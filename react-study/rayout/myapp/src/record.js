import "./record.css";
import React from 'react';
import { useState } from 'react';
function Record()
{

    const [text,setText]=useState('');
    
    const onChange= (e)=>{setText(e.target.value);}

    const onReset = ()=> {setText(''); }
    //리셋 버튼을 저장버튼으로 만들꺼임.

    const [adminusers, adminsetUsers] = useState([
        {
          id:'1',
          pw:'',
          username: 'velopert',
          email: 'public.velopert@gmail.com',
          authority:'prime-supervisor',
          info1:'',
        },
        {
          id: 2,
          pw:'',
          username: 'velopert',
          email: 'public.velopert@gmail.com',
          authority:'prime-supervisor',
          info1:'',
        },
        {
          id: 3,
          pw:'',
          username: 'velopert',
          email: 'public.velopert@gmail.com',
          authority:'prime-supervisor',
          info1:'',
        },
      ]);
return(

    <div className="input1">
        <input onChange={onChange} value={text}/>
        <button onClick={onReset}>id</button>

        <input onChange={onChange} value={text}/>
        <button onClick={onReset}>username</button>

        <input onChange={onChange} value={text}/>
        <button onClick={onReset}>email</button>

        <input onChange={onChange} value={text}/>
        <button onClick={onReset}>info1</button>

        <input onChange={onChange} value={text}/>
        <button onClick={onReset}>info2</button>

        <input onChange={onChange} value={text}/>
        <button onClick={onReset}>info3</button>

        
        <div class="wrapper">
  <div class="one">One</div>
  <div class="two">Two</div>
  <div class="three">Three</div>
  <div class="four">Four</div>
  <div class="five">Five</div>
  <div class="six">Six</div>
</div>

    </div>

    
    ) 
}

//출처:https://binggamel.tistory.com/101
//참조
//https://velog.io/@mnz/React-%EB%B0%B0%EC%97%B4-%EA%B0%92-%EC%B6%94%EA%B0%80-%EC%A0%9C%EA%B1%B0-%EC%88%98%EC%A0%95%ED%95%98%EB%A9%B0-%EB%B6%88%EB%B3%80%EC%84%B1-%EC%9C%A0%EC%A7%80%ED%95%98%EA%B8%B0

export default Record