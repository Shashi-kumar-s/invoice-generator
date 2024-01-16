import styles from "../previewVendorDetail/previewVendorDetail.module.css"

const PreviewVendorDetail = () => {
    return (
        <div className={styles.container}>
            <div className={styles.vendorDetail}>
                <div>
                    {/* <img src="" alt="" /> */}
                    <p>Image</p>
                </div>
                <div>
                    <h2>Vendor Name</h2>
                    <p><span className={styles.businessNum}>Business Number</span>123456789</p>
                    <p>Street Name</p>
                    <p>City Name</p>
                    <p>Zip code</p>
                    <p>Phone</p>
                    <p>Email@gmail.com</p>
                </div>
            </div>
            <div className={styles.clientDetail}>
                <div>
                    <p className={styles.clientTitle}>INVOICE</p>
                    <p>123456</p>
                </div>
                <div>
                    <p className={styles.clientTitle}>DATE</p>
                    <p>12-03-2006</p>
                </div>
                <div>
                    <p className={styles.clientTitle}>DUE</p>
                    <p>On Reciept</p>
                </div>
                <div>
                    <p className={styles.clientTitle}>BALANCE DUE</p>
                    <p>INR &#8377;123456</p>
                </div>
            </div>
        </div>
    )
}

export default PreviewVendorDetail
