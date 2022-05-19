import Head from 'next/head';
import Link from 'next/link';
import styles from './Store.module.css';

export default function Store() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Store</title>
                <meta name="description" content="Buy my stuff on MyBay" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div>
                Store
            </div>
        </div>
    )
}