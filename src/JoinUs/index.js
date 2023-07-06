import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import './index.css'
import axios from 'axios';
import { GoogleSpreadsheet } from 'google-spreadsheet';
// import { google } from 'googleapis';

function JoinUs() {

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        const data = {
            name: formData.get('name'),
            age: formData.get('age'),
            sex: formData.get('sex'),
            location: formData.get('location'),
            email: formData.get('email'),
            phoneNumber: formData.get('phoneNumber'),
            reasonToJoin: formData.get('reasonToJoin'),
            howToHelp: formData.get('howToHelp'),
        };
        // uploadToSpreadsheet(data, form)
        // addRowToSpreadsheet(data);
        dataUpload(data)
        console.log(data, 'form data')
        form.reset();
    };

    async function dataUpload(data) {
        console.log(JSON.stringify(data),'stringfied')
        fetch('https://sheetdb.io/api/v1/euxlm7u9ie7yp', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data: [
                    {
                        'NAME': data.name,
                        'AGE': data.age,
                        'SEX': data.sex,
                        'LOCATION': data.location,
                        'EMAIL': data.email,
                        'MOBILE_NUMBER': data.phoneNumber,
                        'REASON': data.reasonToJoin,
                        'HELP': data.howToHelp,
                    }
                ]
            })
        })
            .then((response) => response.json())
            .then((data) => {
                alert("RESPONSE SUBMITTED SUCCESSFULLY!!")
                console.log(data)
            });
    }

    return (
        <div>
            <Navbar />
            <h1 className="inp-sty-3"><span className="glob-clr">CONTACT</span> US</h1>
            <div class="section shadow-div" style={{ padding: "15px", marginTop: "2%", paddingBottom: "2%", paddingRight: "2%" }}>
                <h1 className="head">Contact Form</h1>
                <form onSubmit={handleSubmit}>
                    <div class="form-row">
                        <div style={{ marginRight: '15px' }}>
                            <input type="text" placeholder="Name" id="name" name="name" className="para1" />
                        </div>
                        <input type="text" placeholder="Age" id="age" name="age" className="para1" />
                    </div>
                    <div class="form-row">
                        <div style={{ marginRight: '15px' }}>
                            <input type="text" placeholder="Sex" id="sex" name="sex" className="para1" />
                        </div>
                        <input type="text" placeholder="Location" id="location" name="location" className="para1" />
                    </div>
                    <div class="form-row">
                        <div style={{ marginRight: '15px' }}>
                            <input type="email" placeholder="Email ID" id="email" name="email" className="para1" />
                        </div>
                        <input type="tel" placeholder="Phone number" id="phoneNumber" name="phoneNumber" className="para1" />
                    </div>
                    <textarea type="text" placeholder="Reason to join" id="reasonToJoin" name="reasonToJoin" className="para1"></textarea>
                    <textarea type="text" placeholder="How you can help" id="howToHelp" name="howToHelp" className="para1"></textarea>
                    <button type="submit" className="btn">Submit</button>
                </form>
            </div>
            <div className="flexEnd">
                <Footer />
            </div>
        </div>
    )
}

export default JoinUs;