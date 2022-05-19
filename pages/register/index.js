import Head from 'next/head';
import Link from 'next/link';
import styles from './Register.module.css';

export default function Register() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Register</title>
                <meta name="description" content="Make a new account for MyBay" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div>
                Register
            </div>
        </div>
    )
}