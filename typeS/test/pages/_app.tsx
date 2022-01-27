import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            this is sisisi
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
