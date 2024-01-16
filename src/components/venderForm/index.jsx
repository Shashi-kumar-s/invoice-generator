import styles from "../venderForm/venderForm.module.css"
import { venderFormData } from "../../utils/venderFormDetails"

const VenderForm = () => {
    return (
        <div className={styles.container}>
            <p className={styles.title}>From</p>
            <form className={styles.form}>
                {venderFormData.map((ele) =>
                    <div key={ele.id} className={styles.inputContainer}>
                        <label htmlFor={ele.name}>{ele.name}</label>
                        <input id={ele.id} type={ele.type} name={ele.name} placeholder={ele.placeholder} />
                    </div>
                )}
            </form>
        </div>
    )
}

export default VenderForm
