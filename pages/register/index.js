import Head from 'next/head';
import Link from 'next/link';
import styles from './Register.module.css';

export default function Register() {
    // Handles the submit event on form submit.
    const handleSubmit = async (event) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault()

        // Get data from the form.
        const data = {
            name: event.target.name.value,
            email: event.target.email.value,
            password: event.target.password.value
        }

        // Send the data to the server in JSON format.
        const JSONdata = JSON.stringify(data)

        // API endpoint where we send form data.
        const endpoint = '/api/user'

        // Form the request for sending data to the server.
        const options = {
            // The method is POST because we are sending data.
            method: 'POST',
            // Tell the server we're sending JSON.
            headers: {
                'Content-Type': 'application/json',
            },
            // Body of the request is the JSON data we created above.
            body: JSONdata,
        }

        // Send the form data to our forms API on Vercel and get a response.
        const response = await fetch(endpoint, options)

        // Get the response data from server as JSON.
        // If server returns the name submitted, that means the form works.
        const result = await response.json()
        alert(`Is this your full name: ${result.data}`)
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Register</title>
                <meta name="description" content="Make a new account for MyBay" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.loginContainer}>
                <h2>Register</h2>
                <form className={styles.loginForm} onSubmit={handleSubmit}>
                    <div className={styles.topInputs}>
                        <input className={styles.formInput} type="name" name="name" id="name" placeholder="Name" required />
                        <input className={styles.formInput} type="text" name="email" id="email" placeholder="Email" required />
                        <input className={styles.formInput} type="password" name="password" id="password" placeholder="Password" required />
                    </div>
                    <input className={styles.formInput} type="submit" value="Submit" id={styles.submitBtn} />
                </form>

                <div className={styles.loginLinks}>
                    <Link href="/">
                        <a className={styles.loginLink}>Go Home</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}