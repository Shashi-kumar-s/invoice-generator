import styles from "../footer/footer.module.css"
import { MdAddBox } from "react-icons/md";
import SignaturePad from "../signatureModal";
import { useRef, useState } from "react";
import { TiDelete } from "react-icons/ti";
import { FaCloudUploadAlt } from "react-icons/fa";

const Footer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const fileInputRef = useRef("");
    const [selectedImage, setSelectedImage] = useState("");

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

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
        setSelectedImage("");
        fileInputRef.current.value = '';
    };


    return (
        <div className={styles.container}>
            <p>Notes</p>
            <textarea name="" id="" cols="30" rows="10" placeholder="Notes - any relevant information not covered , additional terms and conditions"></textarea>
            <div className={styles.signature}>
                <p>Signature</p>
                <MdAddBox size={32} className={styles.addBtn} onClick={openModal} />
                <SignaturePad isOpen={isModalOpen} onClose={closeModal} onOpen={openModal} />
            </div>
            <div className={styles.photoSection}>
                <p>Photo</p>
                <div className={styles.addPhoto}>
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
                                    <button className={styles.updateButton}>Update photo</button>
                                    <TiDelete size={28} onClick={handleRemoveImage} />
                                </div>
                            </div>
                        ) : (
                            <><FaCloudUploadAlt size={24} />Upload photo</>
                        )}
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Footer
