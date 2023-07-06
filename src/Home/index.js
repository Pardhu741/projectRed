import React from "react";
import NavBar from "../Navbar";
import Footer from "../Footer";
import './index.css'
import '../global.css'
import { useMediaQuery } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import video from '../video.mp4'

function Home() {

    const isSmallScreen = useMediaQuery('(max-width: 600px)');
    const images = [
        'https://static.wixstatic.com/media/e0c28e_136f2867f2b74349b430c41edbfdf597~mv2.jpeg',
        'https://static.wixstatic.com/media/e0c28e_044c4abe7e9e4d50b1a627d6c1a79d0a~mv2.jpeg',
        'https://static.wixstatic.com/media/e0c28e_72c135319d0d4e418cf2977411f1233e~mv2.jpeg',
        'https://static.wixstatic.com/media/e0c28e_f78c949febfa4e599bee6b6c72f63d8c~mv2.jpeg',
        'https://static.wixstatic.com/media/e0c28e_a2b5bfecfdee42cba2542c5fae6385d7~mv2.jpeg',
        'https://static.wixstatic.com/media/e0c28e_8874ab1b319d47628029c2c7b0cb1809~mv2.jpeg',
        'https://static.wixstatic.com/media/e0c28e_e5b1e3bb9e114883a01bbb98439ad239~mv2.png',
        'https://static.wixstatic.com/media/e0c28e_587f341e1917404c9c8ea5ef3416d38a~mv2.jpeg'
    ]

    // 'https://static.wixstatic.com/media/e0c28e_136f2867f2b74349b430c41edbfdf597~mv2.jpeg/v1/fill/w_66,h_50,al_c,q_80,usm_0.66_1.00_0.01/e0c28e_1bc004188b4e446680efa6afe53f6485~mv2.jpeg',
    // 'https://static.wixstatic.com/media/e0c28e_044c4abe7e9e4d50b1a627d6c1a79d0a~mv2.jpeg/v1/fill/w_66,h_50,al_c,q_80,usm_0.66_1.00_0.01/e0c28e_1bc004188b4e446680efa6afe53f6485~mv2.jpeg',
    // 'https://static.wixstatic.com/media/e0c28e_72c135319d0d4e418cf2977411f1233e~mv2.jpeg/v1/fill/w_66,h_50,al_c,q_80,usm_0.66_1.00_0.01/e0c28e_1bc004188b4e446680efa6afe53f6485~mv2.jpeg',
    // 'https://static.wixstatic.com/media/e0c28e_f78c949febfa4e599bee6b6c72f63d8c~mv2.jpeg/v1/fill/w_66,h_50,al_c,q_80,usm_0.66_1.00_0.01/e0c28e_1bc004188b4e446680efa6afe53f6485~mv2.jpeg',
    // 'https://static.wixstatic.com/media/e0c28e_a2b5bfecfdee42cba2542c5fae6385d7~mv2.jpeg/v1/fill/w_66,h_50,al_c,q_80,usm_0.66_1.00_0.01/e0c28e_1bc004188b4e446680efa6afe53f6485~mv2.jpeg',
    // 'https://static.wixstatic.com/media/e0c28e_8874ab1b319d47628029c2c7b0cb1809~mv2.jpeg/v1/fill/w_66,h_50,al_c,q_80,usm_0.66_1.00_0.01/e0c28e_1bc004188b4e446680efa6afe53f6485~mv2.jpeg',
    // 'https://static.wixstatic.com/media/e0c28e_e5b1e3bb9e114883a01bbb98439ad239~mv2.png/v1/fill/w_66,h_50,al_c,q_80,usm_0.66_1.00_0.01/e0c28e_1bc004188b4e446680efa6afe53f6485~mv2.jpeg',
    // 'https://static.wixstatic.com/media/e0c28e_587f341e1917404c9c8ea5ef3416d38a~mv2.jpeg/v1/fill/w_66,h_50,al_c,q_80,usm_0.66_1.00_0.01/e0c28e_1bc004188b4e446680efa6afe53f6485~mv2.jpeg'

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    function openLinks(path) {
        window.open(path, "_blank")
    }

    return (
        <div>
            <NavBar />
            {/* <h1>HOME</h1> */}
            <div style={{ position: 'relative' }}>
                <video
                    src={video}
                    autoPlay
                    muted
                    loop
                    style={{ width: '100%', height: 'auto', opacity: 0.9 }}
                />
                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: 'white',
                        fontSize: '24px',
                        fontWeight: 'bold',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                    }}
                >
                    <span className="inp-sty-2 blinking-text" style={{ color: 'red' }}>PROJECT RED</span><br />
                    <span className="para-sty blinking-text2" style={{ color: 'black' }}>Pads should be a necessity not a luxury!</span>
                </div>
            </div>
            <div>
                <h1 className="inp-sty-3">What <span className="glob-clr">Project Red</span> Is</h1>
                {!isSmallScreen ? <p className="para-sty-2">Project Red aims to empower women to shed the “period taboo ”<br /> by expanding awareness about menstrual hygiene and enabling access to sanitary products.</p> :
                    <p className="para-sty-2">Project Red aims to empower women to shed the “period taboo ” by expanding awareness about menstrual hygiene and enabling access to sanitary products.</p>
                }
            </div>
            <div className="glob-mar-tp glob-marg-lef glob-marg-rig" style={{ height: '600px' }}>
                <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlaySpeed={3000}
                    centerMode={true}
                    className=""
                    containerClass="my-carousel-container"
                    itemClass="my-carousel-item"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite
                    keyBoardControl
                    minimumTouchDrag={80}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={responsive}
                    showDots={true}
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable
                >
                    {images.map((image, index) => (
                        <div key={index} className="carousel-slide">
                            <img src={image} alt={`Image ${index}`} style={{ width: '100%', height: '100%' }} />
                        </div>
                    ))}
                </Carousel>
            </div>
            <div className="container glob-mar-tp shadow-div">
                <div className="content">
                    <h1 className="inp-sty-3">Project Red<span className="glob-clr"> Impact</span></h1>
                    <p className="para-sty-2">TProject Red aims to empower women to shed the “period taboo” <br /> by expanding awareness about menstrual hygiene<br /> and enabling access to sanitary products.</p>
                </div>
                <div className="image">
                    <img src="https://static.wixstatic.com/media/e0c28e_16648b6109554e8699ccd0d342d212fd~mv2.png" alt="Image" />
                    {/* <img src="https://static.wixstatic.com/media/e0c28e_16648b6109554e8699ccd0d342d212fd~mv2.png/v1/fill/w_1000,h_660,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e0c28e_16648b6109554e8699ccd0d342d212fd~mv2.png" alt="Image" /> */}
                </div>
            </div>
            <div className="container">
                <div className="content">
                    <h1 className="inp-sty-3">Project Red <span className="glob-clr">Initiatives</span></h1>
                    <p className="para-sty-2">Making a difference to the lives of over 2500 girls</p>
                </div>
            </div>
            <div className="container shadow-div2  glob-mar-tp" style={{paddingTop:'3%'}}>
                <div className="image">
                    <img src="https://static.wixstatic.com/media/e0c28e_3bbc16b429c6469bbb6c00b50b34721d~mv2.jpeg/v1/fill/w_953,h_480,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e0c28e_3bbc16b429c6469bbb6c00b50b34721d~mv2.jpeg" alt="Image" />
                    {/* <img src="https://static.wixstatic.com/media/e0c28e_3bbc16b429c6469bbb6c00b50b34721d~mv2.jpeg" alt="Image" /> */}
                </div>
                <div className="content">
                    <h1 className="inp-sty-3" style={{ color: 'red' }}>Campaigns</h1>
                    <p className="para-sty-2" style={{ paddingLeft: '10%', paddingRight: '10%' }}>Project Red has done 3 major awareness campaigns, which included pad vending machines, videos from gynaecologists, pad distribution drives and a handbook that contained all the relevant knowledge about menstruation. To know more, go to the Initiatives tab!</p>
                </div>
            </div>
            <div className="container shadow-div2" style={{paddingBottom:'3%'}}>
                <div className="content ">
                    <h1 className="inp-sty-3" style={{ color: "red" }}>Research</h1>
                    <p className="para-sty-2" style={{ paddingLeft: '10%', paddingRight: '10%' }}>I wrote a research paper on my findings from the surveys I conducted pre and post the awareness campaigns. To know more and read the research paper, go to the Initiatives tab!</p>
                </div>
                <div className="image">
                    <img src="https://static.wixstatic.com/media/e0c28e_d118f89d1f344afc98ad1b7ecd5195db~mv2.png/v1/fill/w_953,h_480,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/e0c28e_d118f89d1f344afc98ad1b7ecd5195db~mv2.png" alt="Image" />
                    {/* <img src="https://static.wixstatic.com/media/e0c28e_d118f89d1f344afc98ad1b7ecd5195db~mv2.png" alt="Image" /> */}
                </div>
            </div>
            <div className="container glob-mar-tp">
                <div className="content">
                    <h1 className="inp-sty-3 imp-mar">In the <span className="glob-clr">News</span></h1>
                    <p className="para-sty-2">We work hard to get our efforts noticed by the media and are so proud when this goal comes to fruition.<br /> Take a look at some of our latest coverage and help spread the word about all the amazing developments at Project Red.</p>
                </div>
            </div>
            <div className="container2 shadow-div  glob-mar-tp glob-marg-rig">
                <div className="image2">
                    {/* <img src="https://static.wixstatic.com/media/e0c28e_1caa129ac69448b9be38bac0286ad1bf~mv2.jpeg" alt="Image 1" /> */}
                    <img src='https://static.wixstatic.com/media/e0c28e_6bdcedd095994ab198750eae0d2d1116~mv2.jpg/v1/fill/w_301,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Screen%20shots%20of%20digital%20news%20(5).jpg' alt="img1" />
                    <button className="button" onClick={() => openLinks('https://www.youtube.com/watch?v=wi_pC7jFTwU&list=PL3HhMTCWB-e82K4AKaYJVFCzhbbqMT3rV&index=13')}>Video With CNN News 18</button>
                </div>
                <div className="image2">
                    {/* <img src="https://static.wixstatic.com/media/e0c28e_16648b6109554e8699ccd0d342d212fd~mv2.png" alt="Image 2" /> */}
                    <img src='https://static.wixstatic.com/media/e0c28e_16648b6109554e8699ccd0d342d212fd~mv2.png/v1/fill/w_301,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Screenshot%202023-01-27%20at%207_09_16%20PM.png' alt="img2" />
                    <button className="button" onClick={() => openLinks('https://sociostory.org/impact-stories/meet-the-duo-who-are-on-a-mission-to-educate-the-rural-girls-and-women-on-a-taboo-topic-menstrual-health')}>Socio Story Article</button>
                </div>
                <div className="image2">
                    {/* <img src="https://static.wixstatic.com/media/e0c28e_6bdcedd095994ab198750eae0d2d1116~mv2.jpg" alt="Image 3" /> */}
                    <img src='https://static.wixstatic.com/media/e0c28e_1caa129ac69448b9be38bac0286ad1bf~mv2.jpeg/v1/fill/w_301,h_240,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/WhatsApp%20Image%202023-01-27%20at%207_42_44%20PM.jpeg' alt="img3" />
                    <button className="button" onClick={() => openLinks('https://www.youtube.com/watch?v=wi_pC7jFTwU&list=PL3HhMTCWB-e82K4AKaYJVFCzhbbqMT3rV&index=13')}>Local News</button>
                </div>
            </div>
            <div className="column-container glob-mar-tp">
                <h2 className="inp-sty-3 imp-mar glob-clr">Donate</h2>
                <p className="para-sty-2">Every donation makes a difference, support Project Red by donating!</p>
                <div class="button-container">
                    <button className="button" style={{width:'fit-content',marginRight:'5rem',paddingLeft:'15px',paddingRight:'15px',backgroundColor:'#55b553'}}>India Fund Raiser</button>
                    <button className="button" style={{width:'fit-content',paddingLeft:'15px',paddingRight:'15px',backgroundColor:'#55b553'}}>Singpore Fund Raiser</button>
                </div>
            </div>
            <div className="glob-mar-tp">
                <Footer/>
            </div>

        </div>
    )
}

export default Home;