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
} from '@coreui/react';

const Main: NextPage = () => {
    return (
        <>
            {/* footer */}
            <div className="footer">
                <div className="footerlogo">
                    <a>
                        {/* <Image
                            src="./img/nodejslogo.jpg"
                            width={130}
                            height={17}
                        /> */}
                        <span>사업자명 : (주)영카데미b</span>
                        <span>전화 : 010-8468-4897</span>
                        <span>가</span>
                        <span>나</span>
                        <span>다</span>
                        <span>라</span>
                        <span>마</span>
                    </a>
                </div>
            </div>
        </>
    );
};

const styles1 = {
    container: { padding: '0.5rem' },
} as const;

export default Main;
