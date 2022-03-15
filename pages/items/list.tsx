import type { NextPage } from "next";
import Image from "next/image";
import leather from "../../public/leather.jpg";
import slacks from "../../public/slacks.jpg";

import Head from "next/head";
import {
  CNavbar,
  CContainer,
  CNavbarBrand,
  CNavbarToggler,
  CCollapse,
  CNavbarNav,
  CNavItem,
  CNavLink,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CForm,
  CDropdown,
  CDropdownDivider,
  CFormInput,
  CButton,
  CRow,
  CCol,
  CCard,
  CCardImage,
  CCardBody,
  CCardTitle,
  CCardText,
} from "@coreui/react";

const List: NextPage = () => {
  return (
    <div className="bg-light">
      <CContainer fluid>
        <CRow xs={{ cols: 1, gutter: 3 }} md={{ cols: 5 }} className="mb-3">
          <CCol xs>
            <CCard className="h-100">
              <Image
                src={leather}
                layout="responsive"
                width={400}
                height={400}
              />
              <CCardBody>
                <CCardTitle>핫한 여성용 가죽자켓</CCardTitle>
                <CCardText>쎈언니</CCardText>
                <CCardText>57,000원</CCardText>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs>
            <CCard className="h-100">
              <Image
                src={slacks}
                layout="responsive"
                width={400}
                height={400}
              />
              <CCardBody>
                <CCardTitle>핫한 세미와이드 슬랙스</CCardTitle>
                <CCardText>귀여운 마녀</CCardText>
                <CCardText>22,000원</CCardText>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs>
            <CCard className="h-100">
              <Image
                src={leather}
                layout="responsive"
                width={400}
                height={400}
              />
              <CCardBody>
                <CCardTitle>핫한 여성용 가죽자켓</CCardTitle>
                <CCardText>쎈언니</CCardText>
                <CCardText>57,000원</CCardText>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs>
            <CCard className="h-100">
              <Image
                src={slacks}
                layout="responsive"
                width={400}
                height={400}
              />
              <CCardBody>
                <CCardTitle>핫한 세미와이드 슬랙스</CCardTitle>
                <CCardText>귀여운 마녀</CCardText>
                <CCardText>22,000원</CCardText>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs>
            <CCard className="h-100">
              <Image
                src={leather}
                layout="responsive"
                width={400}
                height={400}
              />
              <CCardBody>
                <CCardTitle>핫한 여성용 가죽자켓</CCardTitle>
                <CCardText>쎈언니</CCardText>
                <CCardText>57,000원</CCardText>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
        <CRow xs={{ cols: 1, gutter: 3 }} md={{ cols: 5 }} className="mb-3">
          <CCol xs>
            <CCard className="h-100">
              <Image
                src={leather}
                layout="responsive"
                width={400}
                height={400}
              />
              <CCardBody>
                <CCardTitle>핫한 여성용 가죽자켓</CCardTitle>
                <CCardText>쎈언니</CCardText>
                <CCardText>57,000원</CCardText>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs>
            <CCard className="h-100">
              <Image
                src={slacks}
                layout="responsive"
                width={400}
                height={400}
              />
              <CCardBody>
                <CCardTitle>핫한 세미와이드 슬랙스</CCardTitle>
                <CCardText>귀여운 마녀</CCardText>
                <CCardText>22,000원</CCardText>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs>
            <CCard className="h-100">
              <Image
                src={leather}
                layout="responsive"
                width={400}
                height={400}
              />
              <CCardBody>
                <CCardTitle>핫한 여성용 가죽자켓</CCardTitle>
                <CCardText>쎈언니</CCardText>
                <CCardText>57,000원</CCardText>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs>
            <CCard className="h-100">
              <Image
                src={slacks}
                layout="responsive"
                width={400}
                height={400}
              />
              <CCardBody>
                <CCardTitle>핫한 세미와이드 슬랙스</CCardTitle>
                <CCardText>귀여운 마녀</CCardText>
                <CCardText>22,000원</CCardText>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs>
            <CCard className="h-100">
              <Image
                src={leather}
                layout="responsive"
                width={400}
                height={400}
              />
              <CCardBody>
                <CCardTitle>핫한 여성용 가죽자켓</CCardTitle>
                <CCardText>쎈언니</CCardText>
                <CCardText>57,000원</CCardText>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default List;
