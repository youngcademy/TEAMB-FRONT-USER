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
    CDropdownItem,
    CDropdownDivider,
} from '@coreui/react';

const Main: NextPage = () => {
    return (
        <>
            <CCardBody>
                <CCardTitle>Recommend List</CCardTitle>
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
                                </div>
                            </div>

                            <div className="container w-50">
                                <div className="d-grid gap-2 col-6 mx-auto">
                                    <CButton color="primary" href="#">
                                        LOGIN
                                    </CButton>
                                    <CDropdownDivider />
                                    <CDropdownItem href="#">
                                        New around here? Sign up
                                    </CDropdownItem>
                                    <CDropdownItem href="#">
                                        Forgot password?
                                    </CDropdownItem>
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
                            <span>???????????? : TeamB</span>
                        </li>
                        <span>???????????? : 010-1234-5678</span>
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
