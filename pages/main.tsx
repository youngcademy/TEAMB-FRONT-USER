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

const Main: NextPage = () => {
    return (
        <>
            {/* 가장큰 제품사진 3개 */}
            <div className="userfrontimagebox" style={styles1.container}>
                <div className="userfrontimage" style={styles1.container}>
                    <Image
                        src="/img/image_one.jpg"
                        alt="1번사진"
                        width={650}
                        height={800}
                    />
                    <Image
                        src="/img/image_two.jpg"
                        alt="2번사진"
                        width={650}
                        height={800}
                    />
                    <Image
                        src="/img/image_three.jpg"
                        alt="3번사진"
                        width={650}
                        height={800}
                    />
                </div>
                {/* 제품사진 */}
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
                                width={250}
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
                                <CCardTitle>product title4</CCardTitle>
                                <CCardText>4</CCardText>
                            </CCardBody>
                        </CCard>
                    </CCol>
                </CRow>
                {/* 이벤트 사진 2개 */}
                <div className="eventProduct">
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
                <div className="footer">
                    <div className="footerlogo">
                        <a>
                            {/* <Image
                            src="./img/nodejslogo.jpg"
                            width={130}
                            height={17}
                        /> */}
                            <span>사업자명 : (주)영카데미b</span>
                            <span>전화 : 010-8468-4897</span>
                            <span>가</span>
                            <span>나</span>
                            <span>다</span>
                            <span>라</span>
                            <span>마</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

const styles1 = {
    container: { padding: '0.5rem' },
} as const;

export default Main;
