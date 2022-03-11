import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Card from "../components/Card";
export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Frentend Mentor | Advice Generator App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/images/favicon-32x32.png" />
            </Head>
            <Card />
        </div>
    );
}
