import styles from '../styles/contacts.module.css'
import general from '../styles/general.module.css'

export const Contacts = () => {
    return (
        <div>
            <h2 id="contato">Contato</h2>
            <div className={general.arrow}></div>

            <div className={styles.contacts_area}>
                <div className={styles.contact}>
                    <div className={styles.email}></div>
                    <h4>joao.machado27@edu.unifor.br</h4>
                </div>

                <div className={styles.contact}>
                    <div className={styles.telephone}></div>
                    <h4>(85)9 9122-1141</h4>
                </div>
            </div>
        </div>
    )
}