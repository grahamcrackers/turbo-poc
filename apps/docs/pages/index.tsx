import Head from 'next/head';
import { Button } from 'ui';

export default function Docs() {
    return (
        <>
            <Head>
                <script defer src="http://localhost:8000/index.js"></script>
                <script defer src="http://localhost:8001/index.js"></script>
            </Head>
            <div>
                <h1>Docs</h1>
                <Button />
            </div>
        </>
    );
}
