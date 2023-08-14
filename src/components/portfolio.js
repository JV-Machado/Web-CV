import styles from '../styles/portfolio.module.css'
import general from '../styles/general.module.css'

export const Portfolio = () => {
    return (
        <div id="portfolio">
            <h2>Projetos Pessoais</h2>
            <div className={general.arrow}></div>
            <div className={styles.portfolio_area} id={styles.section3}>
                <div className={styles.backend_area}>
                    <div className={styles.card}>
                        <a href='https://github.com/JV-Machado/Currency_Converter'>
                            <div id={styles.backend1}></div>
                        </a>
                    </div>
                    <div className={styles.card}>
                        <a href='https://github.com/JV-Machado/DS_Task_Client_CRUD'>
                            <div id={styles.backend2}></div>
                        </a>
                    </div>
                </div>
                
                <div className={styles.data_science_area}>
                    <div className={styles.card}>
                        <a href='https://github.com/JV-Machado/Customer_churn_classification'>
                            <div id={styles.data_science1}></div>
                        </a>
                    </div>
                    <div className={styles.card}>
                        <a href='https://github.com/JV-Machado/Big_mart_sales_prediction'>
                            <div id={styles.data_science2}></div>
                        </a>
                    </div>
                    <div className={styles.card}>
                        <a href='https://github.com/JV-Machado/NBA_team_clustering'>
                            <div id={styles.data_science3}></div>
                        </a>
                    </div>
                    <div className={styles.card}>
                        <a href='https://github.com/JV-Machado/Chess_Classification'>
                            <div id={styles.data_science4}></div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}