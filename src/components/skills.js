import styles from '../styles/skills.module.css'
import general from '../styles/general.module.css'

export const Skills = () => {
    return (
        <div id="habilidades">
            <h2>Conhecimentos e Habilidades</h2>
            <div className={general.arrow}></div>
            <div className={styles.skills_area}>
                <div className={styles.skills_position}>
                    <span className={styles.skills}>HTML</span>
                    <span className={styles.skills}>CSS</span>
                    <span className={styles.skills}>JavaScript</span>
                    <span className={styles.skills}>React</span>
                    <span className={styles.skills}>Git</span>
                    <span className={styles.skills}>Java</span>
                    <span className={styles.skills}>Spring Boot</span>
                    <span className={styles.skills}>C#</span>
                    <span className={styles.skills}>Python</span>
                    <span className={styles.skills}>SQL</span>
                </div>            
            </div>
        </div>
    )
}