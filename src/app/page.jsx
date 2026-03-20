import Link from 'next/link';
import styles from "./page.module.css";

function Home() {
    return (
        <div className={styles.containerhome}>
            <div className={styles.containerlistas}>
                <h1> exemplos </h1>
                <Link href="/exemplos/ex-01"> exemplo 1 </Link>
                 <Link href="/exemplos/ex-02"> exemplo 2 </Link> 
                  <Link href="/exemplos/ex-03"> exemplo 3 </Link>

            </div>
            <div className={styles.containerlistas}>
                <h1> atividades </h1>
             <Link href="/atividades/atv-01"> atividade 1 </Link>
            </div>
        </div>
    )
}

export default Home;