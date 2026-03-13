import image from "next/image";
import styles from "./page.module.css";

function Home() {
    return (
        <div className={styles.containerhome}>
            <div className={styles.containerlistas}>
                <h1> exemplos </h1>
            </div>
            <div className={styles.containerlistas}>
                <h1> atividades </h1>
            </div>
        </div>
    )
}

export default Home;