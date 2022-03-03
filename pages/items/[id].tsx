import {
    CHeader,
    CContainer,
    CHeaderBrand,
    CCard,
    CCardHeader,
    CCardBody,
    CCardTitle,
    CCardText,
    CButton,
    CForm,
    CFormLabel,
    CFormInput,
    CFormText,
    CRow,
    CCol,
    CFormSelect,
    CTable,
    CTableHead,
    CTableRow,
    CTableHeaderCell,
    CTableBody,
    CTableDataCell,
    CFormTextarea,
    CCardImage,
    CCardFooter,
} from '@coreui/react';

import type { NextPage } from 'next';
import Image from 'next/image';

const ID: NextPage = () => {
    return (
        <>
            <CCard className="mb-1">
                <CCardHeader>상품 수정</CCardHeader>
                <CCardBody>
                    <CRow
                        xs={{ cols: 1, gutter: 4 }}
                        md={{ cols: 2 }}
                        className="row justify-content-md-center"
                    >
                        <CCol md={4}>
                            <Image
                                src="/pants.jpg"
                                layout="responsive"
                                width={300}
                                height={300}
                                alt=""
                            />
                        </CCol>
                        <CCol md={5}>
                            <CCard>
                                <CCardBody>
                                    <CForm>
                                        <CRow className="mb-3">
                                            <CFormLabel
                                                htmlFor="inputEmail3"
                                                className="col-sm-2 col-form-label"
                                            >
                                                이미지 선택
                                            </CFormLabel>
                                            <CCol>
                                                <CFormInput
                                                    type="file"
                                                    id="formFile"
                                                />
                                            </CCol>
                                        </CRow>
                                        <CRow className="mb-3">
                                            <CFormLabel
                                                htmlFor="inputEmail3"
                                                className="col-sm-2 col-form-label"
                                            >
                                                상품명
                                            </CFormLabel>
                                            <CCol>
                                                <CFormInput type="text" />
                                            </CCol>
                                        </CRow>
                                        <CRow className="mb-3">
                                            <CFormLabel
                                                htmlFor="inputEmail3"
                                                className="col-sm-2 col-form-label"
                                            >
                                                브랜드
                                            </CFormLabel>
                                            <CCol>
                                                <CFormInput type="text" />
                                            </CCol>
                                        </CRow>
                                        <CRow className="mb-3">
                                            <CFormLabel
                                                htmlFor="inputEmail3"
                                                className="col-sm-2 col-form-label"
                                            >
                                                상품 분류
                                            </CFormLabel>
                                            <CCol>
                                                <CFormSelect aria-label="Default select example">
                                                    <option>선택하세요</option>
                                                    <option value="1">
                                                        상의
                                                    </option>
                                                    <option value="2">
                                                        하의
                                                    </option>
                                                    <option value="3">
                                                        아우터
                                                    </option>
                                                </CFormSelect>
                                            </CCol>
                                        </CRow>
                                        <CRow className="mb-3">
                                            <CFormLabel
                                                htmlFor="inputEmail3"
                                                className="col-sm-2 col-form-label"
                                            >
                                                컬러
                                            </CFormLabel>
                                            <CCol>
                                                <CFormSelect aria-label="Default select example">
                                                    <option>컬러 목록</option>
                                                    <option value="1">
                                                        베이지
                                                    </option>
                                                    <option value="2">
                                                        블랙
                                                    </option>
                                                </CFormSelect>
                                            </CCol>
                                            <CCol>
                                                <CFormInput type="text" />
                                            </CCol>
                                            <CCol>
                                                <CButton
                                                    color="primary"
                                                    variant="outline"
                                                >
                                                    추가
                                                </CButton>
                                            </CCol>
                                        </CRow>
                                        <CRow className="mb-3">
                                            <CFormLabel
                                                htmlFor="inputEmail3"
                                                className="col-sm-2 col-form-label"
                                            >
                                                사이즈
                                            </CFormLabel>
                                            <CCol>
                                                <CFormSelect aria-label="Default select example">
                                                    <option>사이즈 목록</option>
                                                    <option value="1">
                                                        28
                                                    </option>
                                                    <option value="2">
                                                        29
                                                    </option>
                                                </CFormSelect>
                                            </CCol>
                                            <CCol>
                                                <CFormInput type="text" />
                                            </CCol>
                                            <CCol>
                                                <CButton
                                                    color="primary"
                                                    variant="outline"
                                                >
                                                    추가
                                                </CButton>
                                            </CCol>
                                        </CRow>
                                        <CRow className="mb-5">
                                            <CFormLabel
                                                htmlFor="inputEmail3"
                                                className="col-sm-2 col-form-label"
                                            >
                                                판매 가격
                                            </CFormLabel>
                                            <CCol>
                                                <CFormInput type="text" />
                                            </CCol>
                                        </CRow>
                                    </CForm>
                                    <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                                        <CButton
                                            size="lg"
                                            color="primary"
                                            className="me-md-3"
                                        >
                                            구입하기
                                        </CButton>
                                        <CButton color="secondary" size="lg">
                                            장바구니
                                        </CButton>
                                    </div>
                                </CCardBody>
                            </CCard>
                        </CCol>
                    </CRow>
                </CCardBody>
            </CCard>
            <CCard className="mb-1">
                <CCardBody>
                    <CRow>
                        <CForm>
                            <div className="mb-3">
                                <CFormLabel htmlFor="exampleFormControlTextarea1">
                                    상품 상세설명
                                </CFormLabel>
                                <CFormTextarea
                                    id="exampleFormControlTextarea1"
                                    rows="10"
                                >
                                    멋진 옷입니다!
                                </CFormTextarea>
                            </div>
                        </CForm>
                    </CRow>
                    <CRow>
                        <div className="d-grid col-1 mx-auto">
                            <CButton color="primary">등록</CButton>
                        </div>
                    </CRow>
                </CCardBody>
            </CCard>
        </>
    );
};

export default ID;
