import styles from "../previewClientDetail/previewClientDetail.module.css"


const PreviewClient = () => {
    return (
        <div className={styles.container}>
            <div>
                <p>Bill To</p>
                <h4>Client Name</h4>
                <p><span className={styles.businessNum}>Business Number</span>123456789</p>
                <p>Street Name</p>
                <p>City Name</p>
                <p>Zip code</p>
                <p>Phone</p>
                <p>Mobile No</p>
                <p>Fax No</p>
                <p>Email@gmail.com</p>
            </div>
        </div>
    )
}

export default PreviewClient
