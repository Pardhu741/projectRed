import React from "react";
import Navbar from "../Navbar";
import { useMediaQuery } from '@mui/material';
import img from '../test.webp'
import '../global.css'
import './index.css'
import Footer from "../Footer";
import Founder from '../founder.jpg'

function WhoWeAre() {

    const isSmallScreen = useMediaQuery('(max-width: 600px)');

    return (
        <div>
            <Navbar />
            <div>
                <h1 className="inp-sty-3" style={{marginTop:'2% !important'}}>What The <span className="glob-clr">Story</span> of Project Red</h1>
                <div className="shadow-div2 mod-div-n">
                    <p className="para-sty-n para-sty-sub-n">In early 2020, I came across an article saying that less than 20% of women
                        and girls in India use hygienic sanitary pads. This led me to research more and I discovered that millions of young girls
                        in rural India are confused, scared and embarrassed when their first menstrual cycle takes place.
                        Their mothers and aunts are unable to support them due to their own lack of awareness about this subject.
                        Further, problems of affordability and accessibility make it difficult for these girls to use hygienic pads.
                        Their confidence in middle school years nose-dives and many drop out of school. In some cases, they suffer
                        severe infections due to the lack of hygiene. Menstruation continues to a taboo topic and girls and women continue
                        to live with shame for what is a very natural process of their lives.</p>
                    <p className="para-sty-n para-sty-sub-n">Through Project Red, I hope to create awareness, break taboos and empower women to embrace menstruation and menopause as something very normal
                        in their life. In December 2020, I visited 2 villages in Mewat (one of the most backward areas in India). I interacted with girls and women to understand their problems.
                        I showed them educational videos in which gynaecologists' spoke about menstruation, issues related to
                        hygiene and health and emphasized the importance of wearing a pad. I distributed over 400 packets of reusable hygienic sanitary pads
                        that would last a year. The surveys I conducted before and after the awareness campaign showed that average understanding of menstruation
                        increased from 2.19 to 5.54 out of 10. There was a very high acceptance of re-usable pads - 91% of girls reported using reusable pads and average
                        liking of reusable pads - 3.51 out of 5.</p>
                    <p className="para-sty-n para-sty-sub-n">When the second wave of COVID19 hit, families barely had enough money to buy food and keep the house running,
                        so buying pads was out of the question. To help women in these times, I donated over 2000 reusable pads to different parts
                        of India that needed help. I helped women craft villages across India as well as organisations like Blind Relief Foundation, Uday Foundation, Mitr Trust. </p>
                    <p className="para-sty-n para-sty-sub-n">I wanted to find a more sustainble solution in which the women could be independent and
                        not rely on pads from other people, so I innovated a pad vending machine. The machine can be free of charge or accept a 1 rupee coin,
                        can run with electricty or with a battery and has an SMS module that sends a message whenever the pads are over. With the help of Taarini Foundation,
                        I was able to install these machines in a boarding school, a women's jail and a vocational training center, together helping over 600 women,</p>
                </div>
            </div>
            <div>
                <h1 className="inp-sty-3" style={{marginTop:'2% !important'}}>Meet the <span className="glob-clr">Founder</span></h1>
                <div className="shadow-div2 mod-div-n">
                    <div className="row-container2" style={{marginTop:"2%",marginLeft:"6%"}}>
                        <div className="left-column2">
                            <h1 className="inp-sty-4" style={{ fontSize: '32px', color: '#39994f', marginTop: '0% !important',marginBottom:"1%" }}>About Anshi</h1>
                            <img src={Founder} alt="Anshi" className="image45" />
                        </div>
                        <div className="right-column2" style={{paddingRight:"4%"}}>
                            <p className="para-sty-n para-sty-sub-n">Hi! My name is Anshi Aggarwal and I am a 17-year-old girl living in Singapore and studying in Singapore American School. Before moving to Singapore, I lived in Gurgaon, India, for 15 years and studied in The Shri Ram School Aravali.</p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer/>
        </div>
    )
}

export default WhoWeAre;