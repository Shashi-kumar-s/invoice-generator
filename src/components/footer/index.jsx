import styles from "../footer/footer.module.css"
import { MdAddBox } from "react-icons/md";


const Footer = () => {
    return (
        <div className={styles.container}>
            <p>Notes</p>
            <textarea name="" id="" cols="30" rows="10" placeholder="Notes - any relevant information not covered , additional terms and conditions"></textarea>
            <div className={styles.signature}>
                <p>Signature</p>
                <MdAddBox size={32} className={styles.addBtn} />
            </div>
            <div className={styles.photoSection}>
                <p>Photo</p>
                <div className={styles.addPhoto}>
                    <input type="file" name="" id="" />
                </div>
            </div>
        </div>
    )
}

export default Footer
