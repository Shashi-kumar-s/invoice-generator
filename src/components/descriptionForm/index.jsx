import styles from "../descriptionForm/descriptionForm.module.css"
import { MdAddBox } from "react-icons/md";
import { TiDelete } from "react-icons/ti";

const DescriptionForm = () => {
    return (
        <div className={styles.container}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>DESCRIPTION</th>
                        <th>RATE</th>
                        <th>QTY</th>
                        <th>AMOUNT</th>
                        <th>TAX</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className={styles.inputContainer}>
                        <td><input type="text" placeholder="Item Description" className={styles.description} /></td>
                        <td><input type="text" placeholder="0.00" className={styles.rate} /></td>
                        <td><input type="text" placeholder="1" className={styles.rate} /></td>
                        <td>1000.00</td>
                        <td><input type="checkbox" name="" id="" /></td>
                    </tr>
                    <tr className={styles.inputContainer}>
                        <td>
                            <textarea name="" id="" cols="35" rows="5" placeholder="Additional details"></textarea>
                        </td>
                    </tr>
                    {/* <td><TiDelete size={32} /></td> */}
                </tbody>
            </table>
            <MdAddBox size={32} className={styles.addDesBtn} />
        </div>
    )
}

export default DescriptionForm
