// src/pages/_app.js
import { ThirdwebProvider } from '@thirdweb-dev/react';

function MyApp({ Component, pageProps }) {
    return (
        <ThirdwebProvider clientId={process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}>
            <Component {...pageProps} />
        </ThirdwebProvider>
    );
}

export default MyApp;