import styles from '../styles/about.module.css'
import general from '../styles/general.module.css'

export const About = () => {
    return (
        <div id="sobre">
            <h2 className={styles.about}>Sobre Mim</h2>
            <div className={general.arrow}></div>   
            <div className={styles.about_text_area}>
                <div className={styles.about_text}>
                    <span>Sou estudante de Engenharia de Controle e Automação na Universidade de Fortaleza, estou cursando o último semestre
                        e estou em busca da minha primeira oportunidade para atuar na área de programação.
                    </span>
                </div>
            </div>
            
        </div>
    )
}