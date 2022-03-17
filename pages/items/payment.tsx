import type { NextPage } from 'next';
import Image from 'next/image';
import pants from '../../public/pants.jpg';
import {
    CCard,
    CCardHeader,
    CCardBody,
    CCardTitle,
    CCardText,
    CButton,
    CRow,
    CCol,
    CCardImage,
} from '@coreui/react';

const Payment: NextPage = () => {
    return (
        <div className="bg-light">
            <CCard>
                <CCardHeader component="h5">상품 결제</CCardHeader>
                <CCardBody>
                    <CCardTitle>결제 상품</CCardTitle>
                    <CCard className="mb-3">
                        <CRow sm={{ cols: 1, gutter: 3 }} md={{ cols: 4 }}>
                            <CCol md={2}>
                                <CCard>
                                    <CRow className="justify-content-center">
                                        <Image
                                            src={pants}
                                            layout="fixed"
                                            width={200}
                                            height={200}
                                        />
                                    </CRow>
                                </CCard>
                            </CCol>
                            <CCol md={6} className="align-self-center">
                                <CCardBody>
                                    <CCardTitle>
                                        <CRow>
                                            <h3>
                                                <strong>베이지 슬랙스</strong>
                                            </h3>
                                        </CRow>
                                    </CCardTitle>
                                    <CCardText>
                                        <CRow>컬러: 베이지</CRow>
                                        <CRow>사이즈: 29</CRow>
                                        <CRow>브랜드: 쎈언니</CRow>
                                    </CCardText>
                                </CCardBody>
                            </CCol>
                            <CCol md={2} className="align-self-center">
                                <CCardBody>
                                    <CCardText>
                                        <CRow>
                                            <h5>1개</h5>
                                        </CRow>
                                        <CRow>
                                            <h5>57,000원</h5>
                                        </CRow>
                                    </CCardText>
                                </CCardBody>
                            </CCol>
                            <CCol md={2} className="align-self-center">
                                <CCardBody>
                                    <CCardText>
                                        <CRow>
                                            <h5>3,000원</h5>
                                        </CRow>
                                    </CCardText>
                                </CCardBody>
                            </CCol>
                        </CRow>
                    </CCard>
                    <CButton href="#">Go somewhere</CButton>
                </CCardBody>
            </CCard>
        </div>
    );
};

export default Payment;
