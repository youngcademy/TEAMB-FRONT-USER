import type { NextPage } from "next";
import Image from "next/image";
import image_one from "./image_one.jpg";
import {
  CCard,
  CRow,
  CCol,
  CCardImage,
  CCardBody,
  CCardTitle,
  CCardText,
  CCardFooter,
} from "@coreui/react";

const Productsmall: NextPage = () => {
  return (
    <>
      <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 3 }}>
        <CCol xs>
          <CCard>
            <CCardImage orientation="top" src="/images/react.jpg" />
            <Image src={image_one} alt="1번사진" width={250} height={400} />
            <CCardBody>
              <CCardTitle>product title1</CCardTitle>
              <CCardText>1</CCardText>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs>
          <CCard>
            <Image src={image_one} alt="1번사진" width={250} height={400} />
            <CCardBody>
              <CCardTitle>product title2</CCardTitle>
              <CCardText>2</CCardText>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs>
          <CCard>
            <Image src={image_one} alt="1번사진" width={250} height={400} />
            <CCardBody>
              <CCardTitle>product title3</CCardTitle>
              <CCardText>3</CCardText>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs>
          <CCard>
            <Image src={image_one} alt="1번사진" width={150} height={300} />
            <CCardBody>
              <CCardTitle>product title4</CCardTitle>
              <CCardText>4</CCardText>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

const styles1 = {
  container: { display: "flex" },
} as const;

export default Productsmall;
