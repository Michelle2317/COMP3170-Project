import Footer from "@/Componets/Footer";
import Form from "@/Componets/Form";
import Header from "@/Componets/Header";
import styles from "@/styles/contact.module.css"
import { useState } from "react";

export default function Contacts(){
    return (
        <div>
            <Header/>
            <div className={styles.mainContainer}>
                <h1>Contact Us</h1>
                <Form/>
            </div>
        </div>
       
    )
 
}
<Footer/>