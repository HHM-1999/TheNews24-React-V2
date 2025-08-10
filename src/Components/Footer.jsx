import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Marquee from "react-fast-marquee";
import { scrollTop } from './AllFunctions';
import { Link } from 'react-router-dom';

const { toBengaliNumber } = require('bengali-number');

const years = new Date().getFullYear()
export default function Footer() {
    const [scroll, setScroll] = useState([])
    const [breaking, setBreaking] = useState([])
    const [ticker, setTicker] = useState(false)
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}active-breaking`)
            .then(({ data }) => {
                setBreaking(data.breaking);
                if (data.breaking.length <= 0) {
                    axios
                        .get(`${process.env.REACT_APP_API_URL}json/file/generateActiveScroll.json`)
                        .then(({ data }) => {
                            setScroll(data.data);
                            if (data.data.length > 0) {
                                setTicker(true)
                            }
                        });
                }
                else {
                    setTicker(true)
                }
            });
    }, [])
    return (
        <>
            <footer>
                <div className="DFooterBg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-2 col-12 d-flex justify-content-start border-right-inner">
                                <div className="DFooterLogo">
                                    <a href="/">
                                        <img src={process.env.REACT_APP_DOMAIN_URL + "media/common/logo.png"} alt="The News 24 || দ্য নিউজ ২৪" title="The News 24 || দ্য নিউজ ২৪" className="img-fluid img100" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-5 col-12 d-lg-flex align-items-center justify-content-center  ">

                                <p className='aboutTitle'><Link to='/privacy-policy'><span className='footerIcon'><i className="fa-solid fa-scale-balanced"></i></span>নিয়মনীতি ও শর্তাবলী</Link></p>
                                <p className='aboutTitle'><Link to='/terms-service'><span className='footerIcon'><i className="fa-solid fa-user-secret"></i></span>গোপনীয়তা</Link></p>
                                {/* <p className='aboutTitle'><Link to='/aboutUs'><span className='footerIcon'><i className="fa-solid fa-user"></i></span>আমাদের সম্পর্কে</Link></p> */}
                                <p className='aboutTitle'><Link to='/advertise'><span className='footerIcon'><i className="fa-solid fa-film"></i></span>বিজ্ঞাপন</Link></p>
                            </div>
                            <div className="col-md-5 col-12 d-flex align-items-center justify-content-center">
                                <div className="MoreInfo">
                                    {/* <h5>সম্পাদক ও প্রকাশক: মো. আনোয়ারুল ইসলাম</h5> */}
                                    <p> কর্পোরেট অফিস: বাড়ি : ২১ (৮ তলা), ব্লক : এ, রোড : ০১, মহানগর প্রজেক্ট, হাতিরঝিল, ঢাকা-১২১৯ ৷</p>
                                    <div className="contact ">
                                        <p>ফোন: <a href="tel:+৮৮০ ৯৬১১১৭১৯৮০">+৮৮০ ৯৬১১১৭১৯৮০</a> , <a href="tel:+৮৮০১৩৩২৫০২৩০০">+৮৮০১৩৩২৫০২৩০০</a></p>
                                        {/* <p>ফ্যাক্স: +8802 550 19709</p> */}
                                        <p>ই-মেইল: <a href="mailto:hello@thenews24.com" target="_blank" rel="noreferrer">hello@thenews24.com</a> , <a href="mailto:info@thenews24.com" target="_blank" rel="noreferrer">info@thenews24.com</a></p>

                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
                <div className={ticker ? "DFooterBottomBg d-print-none" : "DFooterBottomBg mb-0  d-print-none"}>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 text-center">
                                <p style={{ fontFamily: " SolaimanLipi" }}> &copy; {toBengaliNumber(years)} | <a href="/">দ্য নিউজ ২৪</a>  কর্তৃক সর্বসত্ব ® সংরক্ষিত | উন্নয়নে <a href="https://www.emythmakers.com"
                                    target="_blank" rel="noreferrer"><span>ইমিথমেকারস.কম</span></a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <section>
                <div className="container-fluid d-print-none">
                    {breaking.length > 0 ?
                        <div className="DScroll">
                            <div className="DScrollSection">
                                <div className="ScrollHeading d-flex justify-content-center">
                                    <p>ব্রেকিং:</p>
                                </div>
                                <div className="ScrollSubject">
                                    <Marquee delay='0' speed='70' direction="left" pauseOnHover='true' play='true' style={{ gradientColor: "none" }}>
                                        {breaking.map((nd) => {
                                            return (
                                                <React.Fragment key={nd.BreakingID}>
                                                    <a href={nd.ScrollUrl === null ? '/' : nd.ScrollUrl} onClick={scrollTop}><span><div className="SquareIcon"></div> {nd.BreakingHead}</span></a>
                                                </React.Fragment>
                                            )
                                        })}
                                    </Marquee>
                                </div>

                            </div>
                        </div>
                        :
                        <>
                            {scroll.length > 0 ?
                                <div className="DScroll">
                                    <div className="DScrollSection">
                                        <div className="ScrollHeading d-flex justify-content-center">
                                            <p>শিরোনাম:</p>
                                        </div>
                                        <div className="ScrollSubject">
                                            <Marquee delay='0' speed='70' direction="left" pauseOnHover='true' play='true'>
                                                {scroll.map((nd) => {
                                                    return (
                                                        <React.Fragment key={nd.ScrollID}>
                                                            <a href={nd.ScrollUrl === null ? '/' : nd.ScrollUrl} onClick={scrollTop}><span><div className="SquareIcon"></div> {nd.ScrollHead}</span></a>
                                                        </React.Fragment>
                                                    )
                                                })}
                                            </Marquee>
                                        </div>
                                    </div>
                                </div>
                                : false}
                        </>}

                </div>
            </section>

        </>
    )
}
