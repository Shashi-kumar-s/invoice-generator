import { useRef, useState } from "react";
import ClientForm from "../../components/clientForm";
import DescriptionForm from "../../components/descriptionForm";
import Footer from "../../components/footer";
import SubTotal from "../../components/subTotal";
import VenderForm from "../../components/venderForm";
import styles from "../home/home.module.css"
import { FcAddImage } from "react-icons/fc";
import { RiChatDeleteFill } from "react-icons/ri";
import { TiDelete } from "react-icons/ti";

const Home = () => {
    const fileInputRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleLabelClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];

        if (selectedFile) {
            const reader = new FileReader();
            reader.onloadend = () => setSelectedImage(reader.result);
            reader.readAsDataURL(selectedFile);
        }
    };

    const handleRemoveImage = () => {
        setSelectedImage(null);
        fileInputRef.current.value = '';
    };

    return (
        <div className={styles.container}>
            <div className={styles.topnav}>
                <div className={styles.invoice}>
                    <p>Invoice</p>
                </div>
                <div>
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
                            <>Upload File</>
                        )}
                    </label>
                </div>
            </div>
            <div className={styles.formContainer}>
                <VenderForm />
                <ClientForm />
            </div>
            <div>
                <DescriptionForm />
            </div>
            <div>
                <SubTotal />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Home
