import type { NextPage } from 'next';
import {
    CCard,
    CRow,
    CCol,
    CButton,
    CCardBody,
    CCardTitle,
    CCardText,
    CCardFooter,
    CCardHeader,
    CTable,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
    CTableBody,
    CTableDataCell,
} from '@coreui/react';

const Mypage: NextPage = () => {
    return (
        <>
            {/* 주문상태 */}
            <CCard>
                <CCardHeader>TEAM B(사용자 이름)</CCardHeader>
                <CCardBody>
                    <CRow>
                        <CCol sm={3}>
                            <CCard>
                                <CCardBody>
                                    <CCardTitle>입금/결제</CCardTitle>
                                    <CCardText>0</CCardText>
                                    <CButton href="#">주문내역</CButton>
                                </CCardBody>
                            </CCard>
                        </CCol>
                        <CCol sm={3}>
                            <CCard>
                                <CCardBody>
                                    <CCardTitle>배송중</CCardTitle>
                                    <CCardText>2</CCardText>
                                    <CButton href="#">배송조회</CButton>
                                </CCardBody>
                            </CCard>
                        </CCol>
                        <CCol sm={3}>
                            <CCard>
                                <CCardBody>
                                    <CCardTitle>배송완료</CCardTitle>
                                    <CCardText>1</CCardText>
                                    <CButton href="#">상세보기</CButton>
                                </CCardBody>
                            </CCard>
                        </CCol>
                        <CCol sm={3}>
                            <CCard>
                                <CCardBody>
                                    <CCardTitle>취소/교환/환불</CCardTitle>
                                    <CCardText>0</CCardText>
                                    <CButton href="#">상세보기</CButton>
                                </CCardBody>
                            </CCard>
                        </CCol>
                    </CRow>
                </CCardBody>
            </CCard>
            {/* 쿠폰 */}
            <CCard className="text-center">
                <CCardHeader>쿠폰</CCardHeader>
                <CCardBody>
                    <CCardTitle>Special title treatment</CCardTitle>
                    <CCardText>
                        With supporting text below as a natural lead-in to
                        additional content.
                    </CCardText>
                </CCardBody>
            </CCard>
            {/* 주문목록테이블 */}
            <CTable>
                <CTableHead>
                    <CTableRow>
                        <CTableHeaderCell scope="col" colSpan={4}>
                            주문리스트
                        </CTableHeaderCell>
                    </CTableRow>
                    <CTableRow>
                        <CTableHeaderCell scope="col">Class</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                        <CTableHeaderCell scope="col">Heading</CTableHeaderCell>
                    </CTableRow>
                </CTableHead>
                <CTableBody>
                    <CTableRow>
                        <CTableHeaderCell scope="row">1</CTableHeaderCell>
                        <CTableDataCell>Mark</CTableDataCell>
                        <CTableDataCell>Otto</CTableDataCell>
                        <CTableDataCell>@mdo</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                        <CTableHeaderCell scope="row">2</CTableHeaderCell>
                        <CTableDataCell>Jacob</CTableDataCell>
                        <CTableDataCell>Thornton</CTableDataCell>
                        <CTableDataCell>@fat</CTableDataCell>
                    </CTableRow>
                    <CTableRow>
                        <CTableHeaderCell scope="row">3</CTableHeaderCell>
                        <CTableDataCell>Larry the Bird</CTableDataCell>
                        <CTableDataCell>@twitter</CTableDataCell>
                    </CTableRow>
                </CTableBody>
            </CTable>
        </>
    );
};

export default Mypage;
