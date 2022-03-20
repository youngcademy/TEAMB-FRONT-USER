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
    CForm,
    CFormLabel,
    CFormInput,
    CFormText,
    CButton,
    CFormCheck,
    CContainer,
    CImage,
} from '@coreui/react';

const Main: NextPage = () => {
    return (
        <>
            <CCardBody>
                <CCardTitle>My Size Page</CCardTitle>
            </CCardBody>
            <CCard>
                <CRow>
                    <CCol xs></CCol>
                    <span></span>
                    <div className="mb-3">
                        <div className="container w-50">
                            <CFormLabel>키</CFormLabel>

                            <CFormInput
                                placeholder="CM"
                                className="form-control form-control-lg"
                            />
                        </div>
                    </div>
                    <div className="mb-3">
                        <div className="container w-50">
                            <CFormLabel>체중</CFormLabel>

                            <CFormInput
                                placeholder="KG"
                                className="form-control form-control-lg"
                            />
                        </div>
                    </div>
                    <CCol xs>
                        <CCol sm={10}>
                            <div className="d-grid gap-1 col-2 mx-auto">
                                <CFormLabel>선호 사항</CFormLabel>
                                <CFormCheck
                                    type="radio"
                                    name="gridRadios"
                                    id="gridRadios1"
                                    value="option1"
                                    label="타이트하게"
                                    defaultChecked
                                />
                                <CFormCheck
                                    type="radio"
                                    name="gridRadios"
                                    id="gridRadios2"
                                    value="option2"
                                    label="딱맞게"
                                />
                                <CFormCheck
                                    type="radio"
                                    name="gridRadios"
                                    id="gridRadios3"
                                    value="option3"
                                    label="헐렁하게"
                                />
                            </div>
                        </CCol>
                    </CCol>
                </CRow>
                <div className="container w-50">
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <CButton color="primary" href="#">
                            SAVE
                        </CButton>
                        <CButton color="info" variant="ghost">
                            RESET
                        </CButton>
                        <CButton color="danger" variant="ghost">
                            ADD DATA
                        </CButton>
                    </div>
                </div>
            </CCard>

            {/* footer */}
            <div className="footer">
                <div className="footerlogo">
                    <a>
                        {/* <Image
                            src="https://unsplash.com/photos/RqTFUay48so"
                            width={130}
                            height={17}
                        /> */}
                        <li>
                            <span>대표자명 : TeamB</span>
                        </li>
                        <span>대표전화 : 010-1234-5678</span>
                    </a>
                </div>
            </div>
        </>
    );
};

const styles1 = {
    container: { padding: '0.5em' },
} as const;

export default Main;
