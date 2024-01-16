import ItemDetails from "../../components/preview/itemDetails"
import PreviewClient from "../../components/preview/previewClientDetail"
import PreviewVendorDetail from "../../components/preview/previewVendorDetail"
import styles from "../preview/preview.module.css"


const Preview = () => {
  return (
    <div className={styles.container}>
      <div>
        <PreviewVendorDetail />
      </div>
      <div>
        <PreviewClient />
      </div>
      <div>
        <ItemDetails />
      </div>
    </div>
  )
}

export default Preview
