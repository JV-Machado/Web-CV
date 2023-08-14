import styles from '../styles/header.module.css'

export const Header = () => {
    return (
        <div className={styles.background}>
            <div className={styles.nav_bar}>
                <ul>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#habilidades">Habilidades</a></li>
                    <li><a href="#portfolio">Portfólio</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </div>
            <div className={styles.header_div}>
                <div className={styles.header}>
                    <h2 className={styles.name}>João Victor Machado de Sousa</h2>
                    <h3 className={styles.data}>Estudante de Engenharia de Controle e Automação. Universidade de Fortaleza</h3>
                </div>
            </div>
            
        </div>
    )
}