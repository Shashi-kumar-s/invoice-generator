import { useEffect, useRef, useState } from "react";
import ClientForm from "../../components/clientForm";
import DescriptionForm from "../../components/descriptionForm";
import Footer from "../../components/footer";
import SubTotal from "../../components/subTotal";
import VenderForm from "../../components/venderForm";
import styles from "../home/home.module.css"
import Preview from "../preview";
import Header from "../../components/header";



const Home = ({ showPreview }) => {
    const fileInputRef = useRef("");
    const [selectedImage, setSelectedImage] = useState("");
    const [uploadImage, setUploadImage] = useState("");
    const [signUrl, setSignUrl] = useState("")
    const [venderData, setVenderData] = useState({ Name: "", Email: "", Address: "", City: "", ZipCode: "", Phone: "", BusinessNumber: "", InvoiceNumber: "", Date: "" })
    const [clientData, setClientData] = useState({ Name: "", Email: "", Address: "", City: "", ZipCode: "", Phone: "", Mobile: "", Fax: "" })
    const [tableRows, setTableRows] = useState([{ id: 1, description: '', rate: '', qty: '1', amount: '0.00', tax: true }]);
    const [subTotal, setSubTotal] = useState("");
    const [showDiscountInTable, setShowDiscountInTable] = useState(false)
    const [discountOnTotal, setDiscountOnTotal] = useState("")
    const [discountType, setDiscountType] = useState("")
    const [discount, setDiscount] = useState("")


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

    const handleChangeForVenderData = (e) => {
        setVenderData({ ...venderData, [e.target.name]: e.target.value })
    }

    const handleChangeForClientData = (e) => {
        setClientData({ ...clientData, [e.target.name]: e.target.value })
    }


    const handleDiscount = (e) => {
        setDiscount(e.target.value)

    }
    const handleDiscountType = (e) => {
        setDiscountType(e.target.value)
    }


    useEffect(() => {
        const newSubtotal = tableRows.reduce((acc, row) => acc + parseFloat(row.amount), 0);
        setSubTotal(newSubtotal.toFixed(2));
        if (discountType === "percent") {
            setDiscountOnTotal(subTotal * discount / 100)
        }
        if (discountType === "rupees") {
            setDiscountOnTotal(subTotal-discount)
        }
    }, [tableRows, discount, discountType]);


    // console.log(discountType, "#######");
    // console.log(discount, "dis");
    console.log(discountOnTotal, "@@@@@2");
    return (
        <>
            {showPreview ?
                <Preview
                    venderData={venderData}
                    clientData={clientData}
                    selectedImage={selectedImage}
                    tableRows={tableRows}
                    subTotal={subTotal}
                    uploadImage={uploadImage} 
                    signUrl={signUrl}
                />
                : <div className={styles.container}>
                    <Header fileInputRef={fileInputRef} handleFileChange={handleFileChange} handleLabelClick={handleLabelClick} handleRemoveImage={handleRemoveImage} selectedImage={selectedImage} />
                    <div className={styles.formContainer}>
                        <VenderForm handleChange={handleChangeForVenderData} venderData={venderData} />
                        <ClientForm handleChange={handleChangeForClientData} clientData={clientData} />
                    </div>
                    <div>
                        <DescriptionForm tableRows={tableRows} setTableRows={setTableRows} showDiscountInTable={showDiscountInTable} />
                    </div>
                    <div>
                        <SubTotal subTotal={subTotal} showDiscountInTable={showDiscountInTable} setShowDiscountInTable={setShowDiscountInTable} handleDiscountType={handleDiscountType} handleDiscount={handleDiscount} discount={discount} discountOnTotal={discountOnTotal}/>
                    </div>
                    <div>
                        <Footer uploadImage={uploadImage} setUploadImage={setUploadImage} signUrl={signUrl} setSignUrl={setSignUrl} />
                    </div>
                </div>}
        </>
    )
}

export default Home
