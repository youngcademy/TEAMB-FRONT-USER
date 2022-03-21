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
                <div className="clearfix">
                    <CImage
                        align="center"
                        rounded
                        src="https://images.unsplash.com/photo-1560849735-881abdac6a3d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=dan-smedley-RqTFUay48so-unsplash.jpg"
                        width={500}
                        height={400}
                    />
                </div>
                <CContainer>
                    <CRow>
                        <CCol className="align-self-center"></CCol>
                        <CForm>
                            <div className="mb-3">
                                <div className="container w-50">
                                    <CFormLabel htmlFor="exampleInputEmail1">
                                        Email address
                                    </CFormLabel>
                                    <CFormInput
                                        type="email"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                    />
                                    <CFormText id="emailHelp">
                                        We'll never share your email with anyone
                                        else.
                                    </CFormText>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="container w-50">
                                    <CFormLabel htmlFor="exampleInputPassword1">
                                        Email Password
                                    </CFormLabel>
                                    <CFormInput
                                        type="password"
                                        id="exampleInputPassword1"
                                    />
                                </div>
                            </div>

                            <div className="container w-50">
                                <div className="d-grid gap-2 col-6 mx-auto">
                                    <CButton color="primary" href="#">
                                        LOGIN
                                    </CButton>
                                    <CButton color="info" variant="ghost">
                                        JOIN
                                    </CButton>
                                </div>
                            </div>
                        </CForm>
                    </CRow>
                </CContainer>
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
