import { clientFormData } from "../../utils/clientFormDetails"
import styles from "../clientForm/clientForm.module.css"



const ClientForm = () => {
    return (
        <div className={styles.container}>
            <p className={styles.title}>To</p>
            <form className={styles.form}>
                {clientFormData.map((ele) =>
                    <div key={ele.id} className={styles.inputContainer}>
                        <label htmlFor={ele.name}>{ele.name}</label>
                        <input id={ele.id} type={ele.type} name={ele.name} placeholder={ele.placeholder} />
                    </div>
                )}
            </form>
        </div>
    )
}

export default ClientForm
