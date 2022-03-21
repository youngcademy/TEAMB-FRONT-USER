import type { NextPage } from 'next';
import Image from 'next/image';
import {
    CCard,
    CRow,
    CCol,
    CCardImage,
    CCardBody,
    CCardTitle,
    CCardText,
    CCardFooter,
} from '@coreui/react';

// userfornt:main 전체 감쌈, userfrontimage : 가장큰 제품사진3개 , smallproducts:개별 상품사진 상자,
// eventProduct: 특정주제에 맞는 상품 페이지 이동 사진,footer:푸터

{
    /* const names = ['봄', '가을', '겨울', '여름'];
            const names=['봄', '가을', '겨울', '여름'];
            const nameList=names.map((name)=>(<li>{name}</li>));
*/
}
const listfooter_Isname = [
    '교환/반품주소지(cj택배이용시) :',
    '서울특별시 강남구 논현동 208-2 아뜨랑스[학동로 208]',
    '교환/반품주소지(타택배이용시) :',
    '서울시 구로구 구로동 237-14 지하1층 아뜨랑스담당',
];
const listfooter_Isname2 = [
    '실시간 주문 폭주로 인한 서버 마비 안내 :',
    '2022년 설연휴 배송공지',
    '아뜨랑스 정상배송 안내',
];

const footerList = listfooter_Isname.map((isname) => <p>{isname}</p>);

const Main: NextPage = () => {
    return (
        <>
            {/* 가장큰 제품사진 3개 */}
            <div className="p-3 d-flex justify-content-between">
                <Image
                    src="/img/image_one.jpg"
                    alt="1번사진"
                    width={600}
                    height={775}
                />
                <Image
                    src="/img/image_two.jpg"
                    alt="2번사진"
                    width={600}
                    height={775}
                />
                <Image
                    src="/img/image_three.jpg"
                    alt="3번사진"
                    width={600}
                    height={775}
                />
            </div>
            {/* 제품사진 md={cols:4}는 가로로 카드4개넘으면 wrap */}
            {/* gutter:카드 간 간격 */}
            <div className="smallproducts">
                <div className="text-center fs-1 pb-3">WHETHER'S CHOOSE</div>
                <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 3 }}>
                    <CCol xs>
                        <CCard>
                            <Image
                                src="/img/image_one.jpg"
                                alt="1번사진"
                                width={250}
                                height={400}
                            />
                            <CCardBody>
                                <CCardTitle>product title1</CCardTitle>
                                <CCardText>1</CCardText>
                            </CCardBody>
                        </CCard>
                    </CCol>
                    <CCol xs>
                        <CCard>
                            <Image
                                src="/img/image_one.jpg"
                                alt="1번사진"
                                width={100}
                                height={400}
                            />
                            <CCardBody>
                                <CCardTitle>product title2</CCardTitle>
                                <CCardText>2</CCardText>
                            </CCardBody>
                        </CCard>
                    </CCol>
                    <CCol xs>
                        <CCard>
                            <Image
                                src="/img/image_one.jpg"
                                alt="1번사진"
                                width={250}
                                height={400}
                            />
                            <CCardBody>
                                <CCardTitle>product title3</CCardTitle>
                                <CCardText>3</CCardText>
                            </CCardBody>
                        </CCard>
                    </CCol>
                    <CCol xs>
                        <CCard>
                            <Image
                                src="/img/image_one.jpg"
                                alt="1번사진"
                                width={150}
                                height={300}
                            />
                            <CCardBody>
                                <CCardTitle>product title4</CCardTitle>
                                <CCardText>4</CCardText>
                            </CCardBody>
                        </CCard>
                    </CCol>

                    <CCol xs>
                        <CCard>
                            <Image
                                src="/img/image_one.jpg"
                                alt="1번사진"
                                width={150}
                                height={300}
                            />
                            <CCardBody>
                                <CCardTitle>product title5</CCardTitle>
                                <CCardText>4</CCardText>
                            </CCardBody>
                        </CCard>
                    </CCol>

                    <CCol xs>
                        <CCard>
                            <Image
                                src="/img/image_one.jpg"
                                alt="1번사진"
                                width={150}
                                height={300}
                            />
                            <CCardBody>
                                <CCardTitle>product title6</CCardTitle>
                                <CCardText>4</CCardText>
                            </CCardBody>
                        </CCard>
                    </CCol>
                </CRow>
            </div>

            {/* 이벤트 사진 2개 */}
            <div className="text-center fs-1 pb-3">SEASON COLECTION</div>
            <div className="d-flex justify-content-around">
                <Image
                    src="/img/summertime.jpg"
                    alt="1번사진"
                    width={640}
                    height={122}
                />
                <Image
                    src="/img/letstravel.jpg"
                    alt="2번사진"
                    width={640}
                    height={122}
                />
            </div>
            {/* footer */}

            <div className="pt-3">
                <div className="footerlogo">
                    <a>
                        <Image
                            src="/img/nodejslogo.jpg"
                            width={170}
                            height={34}
                        />
                        <span>사업자명 : (주)영카데미b</span>
                        <span>전화 : 010-8468-4897</span>

                        <div className="p-3 d-flex flex-wrap">
                            <div className="pe-3">
                                <span className="fw-bold fs-3">dilivery</span>
                                {footerList}
                            </div>
                            <div className="pe-3">
                                <span className="fw-bold fs-3">NOTICE + </span>
                                {footerList}
                            </div>
                            <div className="pe-3">
                                <span className="fw-bold fs-3">
                                    ONLY ATTRANGS
                                </span>
                                {footerList}
                            </div>
                            <div className="">
                                <span className="fw-bold fs-3">
                                    CUSTOMER CENTER
                                </span>
                                {footerList}
                            </div>
                            <div className="pe-3">
                                <span className="fw-bold fs-3">ABOUT us</span>
                                {footerList}
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </>
    );
};

// const styles1 = {
//     container: { padding: '0.5rem' },
// } as const;
// 전체 CSS사용 흔적. 전체 css를 걸어주는것보다 bootstrap의 className에서의css지정이 더욱효율적
export default Main;
