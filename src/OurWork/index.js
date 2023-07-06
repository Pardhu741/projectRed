import React from "react";
import Navbar from "../Navbar";
import './index.css'
import Footer from "../Footer";
import logo1 from '../logo1.png'
import logo2 from '../logo2.jpeg'
import logo3 from '../logo3.webp'
import logo4 from '../logo4.jpeg'
import logo5 from '../logo5.png'
import logo6 from '../logo6.jpeg'
import logo7 from '../logo7.jpeg'
import logo8 from '../logo8.png'
import logo9 from '../logo9.jpeg'

function OurWork() {
    return (
        <div>
            <Navbar />
            <div>
                <p className="para-sty-gr glob-mar-tp">Project Red has made a difference to the lives of more than <span className="glob-clr">4000 girls</span> through its multiple initiatives.</p>
            </div>
            <div class="mod-div">
                <h2 className="para-sty-sub">Awareness Campaigns + Pad Distribution:</h2>
            </div>
            <div className="mod-div">
                <h2 className="para-sty-sub glob-clr">Research:</h2>
            </div>
            <div className="mod-div-n marg-div shadow-div2">
                <p className="para-sty-n para-sty-sub-n">A research paper evaluating the effectiveness of the awareness campaigns has been published in Global Journals. To know more: Menstruation is a phenomenon unique to girls. However, it has always been surrounded by taboos that lead to the exclusion of women from many spheres of life. In rural India, the topic is still taboo. One of the biggest challenges that women face is not being educated and not having the resources to get sanitary pads. The present research study aims to evaluate the effectiveness of a self-formulated campaign called “Spot On & Off” to raise awareness about menstrual hygiene among females belonging to three different age groups 8-15, 16-35, 36-60, with most of the girls from the age group 16-35. They live in the rural area of Mewat in Haryana, India. A survey was conducted with 300 female respondents. Post the survey, an awareness workshop was carried out, where videos of gynaecologists explaining what menstruation is, was shown. A post-survey was conducted to assess the effectiveness of the campaign. The respondents’ awareness showed a significant increase from 2.19 to 5.54 out of 10 on average. The study also found out that awareness had a 19% impact on the liking of reusable pads.</p>
            </div>
            <div className="mod-div">
                <h2 className="para-sty-sub glob-clr">Pad Distributions during COVID:</h2>
            </div>
            <div className="mod-div-n marg-div shadow-div2">
                <p className="para-sty-n para-sty-sub-n">During the second wave of COVID-19 in India, it was extremely difficult to conduct on ground awareness workshops and pad distributions, so I partnered up with several organizations and sent reusable pads and conducted online awareness workshops. With the help of 10 organizations, we were able to make a difference to 2400 girls' lives. 600 pads were distributed to a women's handicraft enterprise in Rajasthan (Sadhna), 500 pads to Uday Foundation, 200 pads to a women's self-defense organization (Tinka Samajik Sanstha), 100 pads to Kota Women Weaves, 100 pads to Dwarka Plus, 100 pads to Sujani Mahila Jeevan foundation, 400 pads to Disha Shekhawati, 100 pads to a transgender community (Mitr Trust) and 500 pads to Blind Relief Association.</p>
            </div>
            <div className="mod-div">
                <h2 className="para-sty-sub glob-clr">Vending Machines:</h2>
            </div>
            <div className="mod-div-n marg-div shadow-div2">
                <p className="para-sty-n para-sty-sub-n">The awareness workshops and pad distribution drives organized by individuals and NGOs certainly help improve the condition of menstrual hygiene management in India, they are not the solution. Once the pads that are distributed get over, the girls are back to square one with no one to turn to and nowhere to procure pads from. In this context, pad vending machines can play a crucial role by providing convenient and accessible access to sanitary pads, promoting menstrual hygiene, and empowering women to manage their periods safely and with dignity. This is where Project Red comes in. Project Red aims to create an environment of independence and self sustainability through installing pad vending machines in the most remote areas of India. These machines are continuously refilled ensuring that the girls have a steady, low cost source of pads forever.</p>
                <p className="para-sty-n para-sty-sub-n">The machine can be installed in a community center, a girls bathroom or wherever is convenient. The value of each pad can be changed depending on the area, with some being free or some being 2-3 rupees per pad. Any pads can fit in, regular, disposable, reusable, of any size, as long as they are trifold pads. Another important feature of these vending machines is the SMS module. The vending machine contains a sensor that sends a message to the SMS module when less than 5 pads (this number can be changed) are left. The SMS module then sends a text message to whoever’s number is connected and they get a notification saying that the pads need to be refilled. This ensures that the machines never lay empty and there is a constant supply of pads for the girls. This feature is also the main differentiating feature as no other pad vending machines that have been deployed in India possess this feature. Lastly, there is a battery back up in the machines. In case there is no power, the machines can run for up to 2-3 days. This is essential as often there are electricity cuts and shortages in rural India, but that should not stop girls from adopting clean menstrual hygiene practices.</p>
            </div>
            <div className="mod-div">
                <h2 className="para-sty-sub glob-clr">Vending Machines Installation:</h2>
            </div>
            <div className="mod-div-n marg-div shadow-div2">
                <p className="para-sty-n para-sty-sub-n">3 vending machines have already been installed with the help of Taarini Foundation. One of them has been installed in Pandit Deen Dayal Upadhyaya Ashram Paddati Balika Vidyalya in Uttar Pradesh. It is a state run, all girls boarding school. The total strength is 480 girls. The second one has been installed in the District Jail of the Saharanpur District. The women's barrack has a total strength of 51 inmates. The third one has been installed in the All India Women’s Conference (AIWC). The rehabilitation and vocational training home has a total strength of 62 women on a rotational basis. 10 more machines are currently in the process of being installed. </p>
            </div>
            <div className="mod-div">
                <h2 className="para-sty-sub glob-clr">Logos of Partnerships :</h2>
            </div>
            <div className="mod-div-n marg-div shadow-div2" style={{ marginBottom: '4%' }}>
                <div className="logos-container">
                    <img src={logo1} alt="Logo 1" className="logo" />
                    <img src={logo2} alt="Logo 2" className="logo" />
                    <img src={logo3} alt="Logo 3" className="logo" />
                    <img src={logo4} alt="Logo 1" className="logo" />
                    <img src={logo5} alt="Logo 2" className="logo" />
                    <img src={logo6} alt="Logo 3" className="logo" />
                    <img src={logo7} alt="Logo 1" className="logo" />
                    <img src={logo8} alt="Logo 2" className="logo" />
                    <img src={logo9} alt="Logo 3" className="logo" />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default OurWork;