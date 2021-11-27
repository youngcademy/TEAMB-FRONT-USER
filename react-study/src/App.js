// import Hello from "./Hello.js";
import "./App.css";
import Nav from "./nav";
import Ad from "./Ad";
import Post from "./Post";
import Posts from "./Posts";
import Content from "./Content";

function App() {
  const name = "짱구"
  return (
    <>
     
      <Nav/>
      <Content>
      <Ad/>
       <Posts>
        <Post 
        
        title="'위드코로나 후 한국인이 가장 많이 찾는 여행지' 3위 서울, 2위 서귀포, 1위는.." 
        content="사회적 거리두기가 완화되고 '위드 코로나'로 전환되면서 국내외 여행 수요가 증가하고 있다.

          5일 뉴스1에 따르면 이달 1일부터 30일까지 한국인 여행객들이 가장 많이 예약한 국내 여행지는 제주였다. 
          이어 서귀포가 2위를 차지하는 등 제주도가 여전히 인기있는 여행지로 꼽혔다." 
        image_src="https://cdnweb01.wikitree.co.kr/webdata/editor/202111/05/img_20211105114742_4bb3fcae.webp"/>

        <Post 
        title="일본, 18세 이하 모든 국민에게 '용돈 100만원' 지급하기로 결정했다" 
        content="뉴스 내용2기시다 후미오 일본 내각이 18세 이하 전 국민에게 1인당 현금 10만엔(약 104만원)의 재난지원금을 지급한다."  
        image_src="https://cdnweb01.wikitree.co.kr/webdata/editor/202111/05/img_20211105175543_75c04cd0.webp"/>
       </Posts>
      </Content>
   

    </>

  );
}

export default App;
