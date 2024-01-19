import { useState } from "react";
import styles from "../subTotal/subTotal.module.css"
import { BsTag } from "react-icons/bs";
import { CgAddR } from "react-icons/cg";
import { LuDelete } from "react-icons/lu";


const SubTotal = (props) => {
    const { subTotal, setShowDiscountInTable, showDiscountInTable, handleDiscountType, handleDiscount, discount,discountOnTotal } = props
    const [showDiscount, setShowDiscount] = useState(false)
    const [showTotalDiscount, setShowTotalDiscount] = useState(false)

    const showDiscountContainer = () => {
        setShowDiscountInTable(false)
        setShowTotalDiscount(false)
    }

    return (
        <div className={styles.container}>
            <div className={styles.additionalCharge}>
                {(showTotalDiscount || showDiscountInTable) &&
                    <div className={styles.discountSection}>
                        <p>Reduction</p>
                        <input type="text" placeholder="0.00" value={discount} onChange={handleDiscount} />
                        <div className={styles.select}>
                            <select onChange={handleDiscountType}>
                                <option value="rupess">&#8377;</option>
                                <option value="percent">%</option>
                            </select>
                        </div>
                        <LuDelete size={28} className={styles.deleteDiscBtn} onClick={showDiscountContainer} />
                    </div>}
                {!showDiscount ?
                    <p className={styles.discountBtn} onClick={() => setShowDiscount(true)}><BsTag size={24} /> Add Discounts</p>
                    :
                    <>
                        <p className={styles.discountBtn} onClick={() => setShowDiscountInTable(true)}><CgAddR size={18} /> Give Item Wise Discount</p>
                        <p className={styles.discountBtn} onClick={() => setShowTotalDiscount(true)}><CgAddR size={18} /> Give Discount On Total</p>
                    </>}
            </div>
            <div className={styles.SubTotal}>
                <p>Subtotal</p>
                <p>&#8377; {subTotal ? subTotal : "0.00"}</p>
            </div>
            <div className={styles.SubTotal}>
                <p>Tax(0%)</p>
                <p>&#8377; 0.00</p>
            </div>
            {discount && <div className={styles.SubTotal}>
                <p>Discount(%)</p>
                <p>&#8377; {discountOnTotal}</p>
            </div>}
            <div className={styles.SubTotal}>
                <p>Total</p>
                <p>&#8377; {subTotal ? subTotal : "0.00"}</p>
            </div>
            <div className={`${styles.SubTotal} ${styles.total}`}>
                <p>Balance Due</p>
                <p>&#8377; {subTotal ? (discountOnTotal ? subTotal - discountOnTotal : subTotal) : "0.00"}</p>
            </div>
        </div >
    )
}

export default SubTotal
