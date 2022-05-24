import Head from 'next/head';
import styles from './Store.module.css';
import Image from 'next/image';

export default function Store() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Store</title>
                <meta name="description" content="Buy my stuff on MyBay" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.productContainers}>
                <div className={styles.productContainer}>
                    <div className={styles.imgContainer}>
                        <Image
                            className={styles.productImage}
                            src="https://m.media-amazon.com/images/I/71TPda7cwUL._AC_UY327_FMwebp_QL65_.jpg"
                            alt="Macbook"
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className={styles.productInfo}>
                        <h1 className={styles.productTitle}>2020 Apple MacBook Air</h1>
                        <h2 className={styles.productPrice}>$999<sup className={styles.sup}>00</sup></h2>
                        <h3 className={styles.productCategory}>Electronics</h3>
                        <p className={styles.productDesc}>All-Day Battery Life – Go longer than ever with up to 18 hours of battery life. Powerful Performance – Take on everything from professional-quality editing to action-packed gaming with ease. The Apple M1 chip with an 8-core CPU delivers up to 3.5x faster performance than the previous generation while using way less power.</p>
                        <button className={styles.purchaseBtn}>Purchase</button>
                    </div>
                </div>

                <div className={styles.productContainer}>
                    <div className={styles.imgContainer}>
                        <Image
                            className={styles.productImage}
                            src="https://m.media-amazon.com/images/I/71wD+cPkxlL._AC_UL480_FMwebp_QL65_.jpg"
                            alt="Macbook"
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className={styles.productInfo}>
                        <h1 className={styles.productTitle}>CUK Mantis Gamer PC</h1>
                        <h2 className={styles.productPrice}>$2,699<sup className={styles.sup}>99</sup></h2>
                        <h3 className={styles.productCategory}>Electronics</h3>
                        <p className={styles.productDesc}>Processor: Intel Core i9-10900KF Ten Core Processor (20MB Cache, 3.7GHz-5.3GHz) 125W RAM: 64GB DDR4 2933MHz | Hard Drive: 1TB NVMe Solid State Drive + 2TB 7200rpm Hard Disk Drive. Graphics: NVIDIA GeForce RTX 3080 10GB GDDR6X | Motherboard: Z490</p>
                        <button className={styles.purchaseBtn}>Purchase</button>
                    </div>
                </div>

                <div className={styles.productContainer}>
                    <div className={styles.imgContainer}>
                        <Image
                            className={styles.productImage}
                            src="https://m.media-amazon.com/images/I/81RoSdmbhlL._AC_UL480_FMwebp_QL65_.jpg"
                            alt="Macbook"
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className={styles.productInfo}>
                        <h1 className={styles.productTitle}>All Purpose Flour</h1>
                        <h2 className={styles.productPrice}>$77<sup className={styles.sup}>99</sup></h2>
                        <h3 className={styles.productCategory}>Food</h3>
                        <p className={styles.productDesc}>Total servings: 257 Total calories: 28, 270 Calories per serving: 110 Net weight: 17 lbs (7.71 kg) Shelf life: up to 25 years</p>
                        <button className={styles.purchaseBtn}>Purchase</button>
                    </div>
                </div>

                <div className={styles.productContainer}>
                    <div className={styles.imgContainer}>  
                        {/* <img className={styles.productImage} src="https://images-na.ssl-images-amazon.com/images/I/515k7GcxxvL._SX258_BO1,204,203,200_.jpg"/> */}
                        <Image
                            className={styles.productImage}
                            src="https://images-na.ssl-images-amazon.com/images/I/515k7GcxxvL._SX258_BO1,204,203,200_.jpg"
                            alt="Macbook"
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className={styles.productInfo}>
                        <h1 className={styles.productTitle}>Web Coding & Development For Dummies</h1>
                        <h2 className={styles.productPrice}>$27<sup className={styles.sup}>64</sup></h2>
                        <h3 className={styles.productCategory}>Book</h3>
                        <p className={styles.productDesc}>With more high-paying web development jobs opening every day, people with coding and web/app building skills are having no problems finding employment. If you're a would-be developer looking to gain the know-how to build the interfaces, databases, and other features that run modern websites, web apps, and mobile apps, look no further. Web Coding & Development All-in-One For Dummies is your go-to interpreter for speaking the languages that handle those tasks.</p>
                        <button className={styles.purchaseBtn}>Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    )
}