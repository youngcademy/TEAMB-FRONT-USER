import type { NextPage } from 'next';
import { CCardFooter } from '@coreui/react';
import Link from 'next/link';
import {
    CCard,
    CRow,
    CCol,
    CButton,
    CCardBody,
    CCardTitle,
    CCardText,
    CCardGroup,
    CCardImage,
} from '@coreui/react';

const UserBoard: NextPage = () => {
    return (
        <>
            <CCardGroup>
                <CCard className="m-2">
                    <CCardImage orientation="top" src="/img/image_board1.jpg" />
                    <CCardBody>
                        <CCardTitle>홍대/신촌</CCardTitle>
                    </CCardBody>{' '}
                    <CButton color="light">착장상품 보러가기</CButton>
                    <CCardText className="text-center">
                        <small className="text-medium-emphasis">
                            Last updated 3 mins ago
                        </small>
                    </CCardText>
                </CCard>
                <CCard className="m-2 p-2">
                    <CCardImage orientation="top" src="/img/image_board1.jpg" />
                    <CCardBody>
                        <CCardTitle>홍대/신촌</CCardTitle>
                        <CCardText>
                            오늘 서울의 날씨는 봄이 온 것 같아요. 가볍게 셔츠에
                            카키색 통넓은 바지를 코디해주어 아메카지룩을
                            완성해봤습니다.
                        </CCardText>
                    </CCardBody>
                    <CButton color="light">착장상품 보러가기</CButton>
                    <CCardText className="text-center">
                        <small className="text-medium-emphasis">
                            Last updated 3 mins ago
                        </small>
                    </CCardText>
                </CCard>
                <CCard className="m-2 p-2">
                    <CCardImage orientation="top" src="/img/image_board1.jpg" />
                    <CCardBody>
                        <CCardTitle>홍대/신촌</CCardTitle>
                    </CCardBody>
                    <CButton color="light">착장상품 보러가기</CButton>
                    <CCardText className="text-center">
                        <small className="text-medium-emphasis">
                            Last updated 3 mins ago
                        </small>
                    </CCardText>
                </CCard>
                <CCard className="m-2 p-2">
                    <CCardImage orientation="top" src="/img/image_board1.jpg" />
                    <CCardBody>
                        <CCardTitle>홍대/신촌</CCardTitle>
                    </CCardBody>
                    <CButton color="light">착장상품 보러가기</CButton>
                    <CCardText className="text-center">
                        <small className="text-medium-emphasis">
                            Last updated 3 mins ago
                        </small>
                    </CCardText>
                </CCard>
                <CCard className="m-2 p-2">
                    <CCardImage orientation="top" src="/img/image_board1.jpg" />
                    <CCardBody>
                        <CCardTitle>홍대/신촌</CCardTitle>
                    </CCardBody>
                    <CButton color="light">착장상품 보러가기</CButton>
                    <CCardText className="text-center">
                        <small className="text-medium-emphasis">
                            Last updated 3 mins ago
                        </small>
                    </CCardText>
                </CCard>
            </CCardGroup>
        </>
    );
};

export default UserBoard;
