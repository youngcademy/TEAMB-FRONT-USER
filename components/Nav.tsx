import Link from 'next/link';
import navStyles from '../styles/Nav.module.css';

function Nav() {
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link href="/">
                        <a>홈</a>
                    </Link>
                </li>
                <li>
                    <Link href="/event">
                        <a>추천상품</a>
                    </Link>
                </li>
                <li>
                    <Link href="/market">
                        <a>마켓</a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a>유저 관리</a>
                    </Link>
                </li>
                <li>
                    <Link href="/items">
                        <a>상품 관리</a>
                    </Link>
                </li>
                <li>
                    <Link href="/orders">
                        <a>주문 관리</a>
                    </Link>
                </li>
                <li>
                    <Link href="/accounts">
                        <a>관리자 계정 관리</a>
                    </Link>
                </li>
                <li>
                    <Link href="/categories">
                        <a>카테고리 관리</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;