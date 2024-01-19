import styles from "../header/header.module.css"
import { TiDelete } from "react-icons/ti";
import { FaCloudUploadAlt } from "react-icons/fa";
import { RiAddBoxLine } from "react-icons/ri";


const Header = (props) => {
    const { fileInputRef, handleFileChange, handleLabelClick, handleRemoveImage, selectedImage } = props

    return (
        <div>
            <div className={styles.invoice}>
                <p>Invoice</p>
            </div>
            <div className={styles.topnav}>
                {/* <div className={styles.invoiceDetails}>
                    <div className={styles.invoiceNo}>
                        <label htmlFor="invoice Number">Invoice No</label>
                        <input type="text" name="invoice Number" />
                    </div>
                    <div className={styles.invoiceNo}>
                        <label htmlFor="invoice Date">Invoice Date</label>
                        <input type="date" name="invoice Date" />
                    </div>
                    <button><RiAddBoxLine size={20} />Add Due Date</button>
                </div> */}
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className={styles.uploadImg}
                />
                <label
                    htmlFor="fileInput"
                    className={styles.fileLabel}
                    onClick={handleLabelClick}
                >
                    {selectedImage ? (
                        <div className={styles.file}>
                            <div>
                                <img src={selectedImage} alt="Selected" />
                            </div>
                            <div className={styles.updateBtnGrp}>
                                <button className={styles.updateButton}>Update your logo</button>
                                <TiDelete size={28} onClick={handleRemoveImage} />
                            </div>
                        </div>
                    ) : (
                        <><FaCloudUploadAlt size={24} />Upload logo</>
                    )}
                </label>
            </div>
        </div>
    )
}

export default Header
