import { useState } from "react";
import styles from "../descriptionForm/descriptionForm.module.css"
import { MdAddBox } from "react-icons/md";
import { TiDelete } from "react-icons/ti";



const DescriptionForm = () => {
    const [tableRows, setTableRows] = useState([{ id: 1, description: '', rate: '', qty: '', amount: '0.00', tax: true }]);

    const handleAddRow = () => {
        setTableRows(prevRows => [
            ...prevRows,
            { id: prevRows.length + 1,amount:"0.00",tax:true},
        ]);
    };

    const handleDeleteRow = (index) => {
        if (index > 0) {
            const updatedRows = tableRows.filter((row, i) => i !== index);
            setTableRows(updatedRows);
        }
    };

    const handleInputChange = (index, field, value) => {
        const updatedRows = [...tableRows];
        updatedRows[index][field] = value;
        setTableRows(updatedRows);
    };

    return (
        <div className={styles.container}>
            <div>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>DESCRIPTION</th>
                            <th>RATE</th>
                            <th>QTY</th>
                            <th>AMOUNT</th>
                            <th>TAX</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableRows.map((row, index) => (
                            <tr key={row.id} className={styles.inputContainer}>
                                <td className={styles.descRow}>
                                    <input type="text" placeholder="Item Description" value={row.description} onChange={(e) => handleInputChange(index, 'description', e.target.value)} className={styles.description} />
                                </td>
                                <td className={styles.rateRow}>
                                    <input type="text" placeholder="0.00" value={row.rate} onChange={(e) => handleInputChange(index, 'rate', e.target.value)} className={styles.rate} />
                                </td>
                                <td className={styles.qty}>
                                    <input type="text" placeholder="1" value={row.qty} onChange={(e) => handleInputChange(index, 'qty', e.target.value)} className={styles.rate} />
                                </td>
                                <td>{row.amount}</td>
                                <td>
                                    <input type="checkbox" checked={row.tax} onChange={(e) => handleInputChange(index, 'tax', e.target.checked)} className={styles.check} />
                                </td>
                                <td>
                                    {index > 0 && <TiDelete size={28} onClick={() => handleDeleteRow(index)} className={styles.deleteTable} />}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <MdAddBox size={32} className={styles.addDesBtn} onClick={handleAddRow} />
            </div>
        </div>
    )
}

export default DescriptionForm
