import type { NextPage } from 'next';
import {
    CCard,
    CRow,
    CCol,
    CButton,
    CFormInput,
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
import axios from 'axios';
import { useRef } from 'react';
import React, { useState } from 'react';

const Login: NextPage = () => {
    const [inputId, setInputId] = useState('');
    const [inputPw, setInputPw] = useState('');
    const handleInputId = (e) => {
        setInputId(e.target.value);
    };

    const handleInputPw = (e) => {
        setInputPw(e.target.value);
    };

    function onClickLogin() {
        // console.log('ID : ', inputId);
        // console.log('PW : ', inputPw);
        axios
            .post('http://localhost:1234/login', {
                user_id: inputId,
                pw: inputPw,
            })
            .then(function (response) {
                console.log('성공');
                console.log(response.data.accessToken);
            })
            .catch(function (error) {
                console.log(error);
                console.log('실패');
            });

        // console.log(setPW);
    }

    return (
        <>
            <CRow>
                <CCol>
                    <CFormInput
                        placeholder="id"
                        aria-label="id"
                        type="input"
                        value={inputId}
                        onChange={handleInputId}
                    />
                </CCol>
                <CCol>
                    <CFormInput
                        placeholder="pw"
                        aria-label="pw"
                        type="input"
                        value={inputPw}
                        onChange={handleInputPw}
                    />
                </CCol>
                <CCol>
                    <CButton onClick={onClickLogin}>로그인</CButton>
                </CCol>
            </CRow>
        </>
    );
};

export default Login;
