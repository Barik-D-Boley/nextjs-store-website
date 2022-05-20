import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Welcome to MyBay</title>
                <meta name="description" content="Welcome to MyBay!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.pageTitle}>
                <h1>Welcome to MyBay!</h1>
                <h2>Login to get started</h2>
            </div>

            <div className={styles.loginContainer}>
                <h2>Log in</h2>
                <form className={styles.loginForm}>
                    <div className={styles.topInputs}>
                        <input className={styles.formInput} type="text" name="email-input" id="email-input" placeholder="Email" />
                        <input className={styles.formInput} type="password" name="password-input" id="password-input" placeholder="Password" />
                    </div>
                    <input className={styles.formInput} type="submit" value="Submit" id={styles.submitBtn} />
                </form>

                <div className={styles.loginLinks}>
                    <Link href="/register">
                        <a className={styles.loginLink}>Register</a>
                    </Link>
                    <Link href="/store">
                        <a className={styles.loginLink}>Continue as Guest</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}
