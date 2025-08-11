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
            <footer class="footer-area">
                <div class="DFooterBg">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4 col-md-6  border-right-inner">
                                <div class="footer-info">
                                    <div class="footer-logo">
                                        <a href="<?php echo $sSiteURL; ?>">
                                            <img class="img-fluid" src={process.env.REACT_APP_DOMAIN_URL + "media/common/logo.png"} alt="The News 24 || দ্য নিউজ ২৪" title="The News 24 || দ্য নিউজ ২৪" />
                                        </a>
                                    </div>

                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 d-flex justify-content-md-center justify-content-start border-right-inner">
                                <div class="footer-info">
                                    <address class="address">
                                        <p><a href="#" target="_blank">কর্পোরেট অফিস: বাড়ি : ২১ (৮ তলা), <br /> ব্লক : এ, রোড : ০১, মহানগর প্রজেক্ট, হাতিরঝিল, ঢাকা-১২১৯ ৷</a></p>
                                        <p>ফোন:<a href="tel:+৮৮০৯৬১১১৭১৯৮০">+৮৮০৯৬১১১৭১৯৮০</a>,<a href="tel:+৮৮০১৩৩২৫০২৩০০">+৮৮০১৩৩২৫০২৩০০</a></p>
                                        <p>ই-মেইল:<a href="mailto:hello@thenews24.com">hello@thenews24.com </a>,<a href="mailto:info@thenews24.com">info@thenews24.com</a></p>
                                    </address>
                                </div>
                            </div>
                            <div class="col-md-12 col-lg-4 col-md-6 d-flex justify-content-md-center justify-content-start align-items-center">
                                <div>
                                    <div class="FooterSocialIcon mt-3">
                                        <a class="twitter" href="#" target="_blank"><i class="fa-brands fa-x-twitter"></i></a>
                                        <a class="facebook" href="https://www.facebook.com/thenews24digital/" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
                                        <a class="youtube" href="https://www.youtube.com/@thenewsdhaka/" target="_blank"><i class="fa-brands fa-youtube"></i></a>
                                        <a class="instagram" href="#" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                                        <a class="whatsapp" href="#" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="DFooterMiddleListBg">
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <ul class="DFooterMiddleListItems">
                                    <li><a href="#">দ্য নিউজ</a></li>
                                    <li><a href="#">আমাদের সম্পর্কে</a></li>
                                    <li><a href="#">যোগাযোগ করুন</a></li>
                                    <li><a href="#">বিজ্ঞাপন দিন</a></li>
                                    <li><a href="#">সম্পাদকীয় নীতি</a></li>
                                    <li><a href="#">গোপনীয়তা নীতি</a></li>
                                    <li><a href="#">শর্তাবলী</a></li>
                                    <li><a href="#">কপিরাইট নীতি</a></li>
                                    <li><a href="#">পাঠকের অধিকার</a></li>
                                    <li><a href="#">অভিযোগ দায়ের</a></li>
                                    <li><a href="#">সাইট ম্যাপ</a></li>
                                    <li><a href="#">সাবস্ক্রিপশন</a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="DFooterBottomBg">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12 text-center">
                                <p><span class="En">&copy;</span> &copy; {toBengaliNumber(years)} | <a href="/"> দ্য নিউজ ২৪ ডটকম</a>।
                                    সর্বসত্ব ® সংরক্ষিত। রেজি. নং: ২৪৬ । প্রতিষ্ঠাতা ও প্রধান নির্বাহী: মো. আনোয়ারুল ইসলাম । উন্নয়নে:<a href="https://www.emythmakers.com/" target="_blank">
                                        ইমিথমেকারস</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>


        </>
    )
}
