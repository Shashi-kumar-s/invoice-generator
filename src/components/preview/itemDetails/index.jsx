import styles from "../itemDetails/itemDetails.module.css"




const data = [
    { id: "1", itemName: "iphone", rate: "1000", qty: "2", amount: "2000" },
    { id: "1", itemName: "iphone", rate: "1000", qty: "2", amount: "2000" },
]
const ItemDetails = () => {
    return (
        <div className={styles.container}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className={styles.description}>DESCRIPTION</th>
                        <th>RATE</th>
                        <th>QTY</th>
                        <th>AMOUNT</th>
                    </tr>
                </thead>
                <tbody className={styles.tablebody}>
                    {data.map((ele) => {
                        return (
                            <tr className={styles.allItems}>
                                <td className={styles.itemName}>{ele.itemName}</td>
                                <td>&#8377;{ele.rate}.00</td>
                                <td>{ele.qty}</td>
                                <td>&#8377;{ele.amount}.00</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ItemDetails
