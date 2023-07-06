import React from "react";
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';


function Footer() {

    const currentLoc = window.location.href

    function handleOpens(path){
        window.open(path,'_blank')
    }

    return (
        <div>
            <footer class="footer">
                <div class="section">
                    <h1 className="head">Contact Us</h1>
                    <p className="para">500 Terry Francois Street, 6th Floor. San Francisco, CA 94158</p>
                    <p className="para">pprojectred@gmail.com</p>
                    <p className="para">123-456-7890</p>
                </div>
                <div class="section">
                    <h1 className="head">Follow Us</h1>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: 'center',marginBottom:'2px',cursor:'pointer'}} onClick={()=>handleOpens('https://www.instagram.com/project_r3d/?hl=en')}>
                        <InstagramIcon fontSize="small" color="primary" />
                        <p className="para" style={{ marginLeft: "10px" }}>project_r3d</p>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: 'center',marginBottom:'2px'}}>
                        <MailIcon fontSize="small" color="primary" />
                        <p className="para" style={{ marginLeft: "10px" }}>pprojectred@gmail.com</p>
                    </div>
                    <p className="para">©2023 by Project Red. Proudly created with Wix.com</p>
                </div>
                {/* {!currentLoc.includes('joinUs') ? <div class="section" style={{ padding: "15px" }}>
                    <h1 className="head">Contact Form</h1>
                    <form>
                        <div class="form-row">
                            <div style={{ marginRight: '15px' }}>
                                <input type="text" placeholder="Name" className="para1" />
                            </div>
                            <input type="text" placeholder="Age" className="para1" />
                        </div>
                        <div class="form-row">
                            <div style={{ marginRight: '15px' }}>
                                <input type="text" placeholder="Sex" className="para1" />
                            </div>
                            <input type="text" placeholder="Location" className="para1" />
                        </div>
                        <div class="form-row">
                            <div style={{ marginRight: '15px' }}>
                                <input type="email" placeholder="Email ID" className="para1" />
                            </div>
                            <input type="tel" placeholder="Phone number" className="para1" />
                        </div>
                        <textarea type="text" placeholder="Reason to join" className="para1"></textarea>
                        <textarea type="text" placeholder="How you can help" className="para1"></textarea>
                        <button type="submit" className="btn">Submit</button>
                    </form>
                </div> : ''} */}
            </footer>

        </div>
    )
}

export default Footer;