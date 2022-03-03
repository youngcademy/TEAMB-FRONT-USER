import React from 'react';
import Head from 'next/head';
import AppNavbar from './AppNavbar';
import MainHeader from './MainHeader';
import Mainbody from '../pages/main';

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <MainHeader />
            {children}
        </>
    );
}
//body에 넣을 날씨별 상품 콜렉션 2가지 추가하기. db연동 및 다른 컴포넌트 사용을 할수있음
export default Layout;
