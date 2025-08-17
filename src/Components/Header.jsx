import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { scrollTop, banglaDateConvetar } from './AllFunctions'
import { getDate, getMonth, getYear } from 'bangla-calendar';
import ePper from '../assets/media/common/E_paper2.png'
import archive from '../assets/media/common/archive2.png'
import map from '../assets/media/common/Map2.png'
import moment from 'moment-hijri';
import axios from 'axios'

const date1 = new Date();
let bnDate = getDate(date1, { format: 'D' })
let bnMonth = getMonth(date1, { format: 'MMMM' })
let bnYear = getYear(date1, { format: 'YYYY' })
let BNDATEs = bnDate + ' ' + bnMonth + ' ' + bnYear
const currentDate = moment().format('DD MMMM YYYY')
const currentDay = moment().format('dddd')
var arabicDate = moment().subtract(1, 'days').format('iDD iMMMM iYYYY');

var todaysDate = new Date();
todaysDate.setDate(todaysDate.getDate() - 1);


var navbar
var sticky = 0
var navbarMobile
var sticky2 = 0
export default function Header() {

    let navigate = useNavigate();
    const [scroll, setScroll] = useState([])
    const [breaking, setBreaking] = useState([])
    const [ticker, setTicker] = useState(false)
    const [showDesktopSearch, setShowDesktopSearch] = useState(false);
    const [showMobileSearch, setShowMobileSearch] = useState(false);

    function toggleSearch() {
        setShowDesktopSearch(prev => !prev);
        setShowMobileSearch(prev => !prev);
    }

    // const [showSubCat, setShowSubCat] = useState(false);
    // const [showSubCat1, setShowSubCat1] = useState(false);
    // const [showSubCat2, setShowSubCat2] = useState(false);
    // const [showSubCat6, setShowSubCat6] = useState(false);
    // const [showSubCat7, setShowSubCat7] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', myFixedNav);
        navbar = document.getElementById("myHeader");
        navbarMobile = document.getElementById("myHeader2");
    
        const fetchData = async () => {
            try {
                const breakingRes = await axios.get(`${process.env.REACT_APP_API_URL}active-breaking`);
                const breakingData = breakingRes.data.breaking;
                setBreaking(breakingData);
    
                if (breakingData.length === 0) {
                    const scrollRes = await axios.get(`${process.env.REACT_APP_API_URL}json/file/generateActiveScroll.json`);
                    setScroll(scrollRes.data.data || []);
                }
            } catch (err) {
                console.error("Error loading breaking/scroll data", err);
            }
        };
    
        fetchData();
    }, []);
    

    function myFixedNav() {
        navbar = document.getElementById("myHeader");
        navbarMobile = document.getElementById("myHeader2");
        if (navbar) {
            if (window.pageYOffset > sticky) {
                navbar = document.getElementById("myHeader");
                navbar.classList.add("sticky");
            } else {
                navbar = document.getElementById("myHeader");
                navbar.classList.remove("sticky");
            }
        }
        if (navbarMobile) {
            if (window.pageYOffset > sticky2) {
                navbarMobile = document.getElementById("myHeader2");
                navbarMobile.classList.add("sticky2");
            } else {
                navbarMobile = document.getElementById("myHeader2");
                navbarMobile.classList.remove("sticky2");
            }
        }
    }

    function mobileHeader() {
        var x = document.getElementById("mobile-nav");
        var element2 = document.getElementById("closeBTN1");
        var element = document.getElementById("menuBTN1");
        if (x.style.display === "block") {
            x.style.display = "none";
            element2.classList.add('hide')
            element2.classList.remove('show')
            element.classList.add('show')
            element.classList.remove('hide')
        } else {
            x.style.display = "block";
            element2.classList.add('show')
            element2.classList.remove('hide')
            element.classList.add('hide')
            element.classList.remove('show')
        }
    }

    function mobileHeaderSearch(e) {
        e.preventDefault();
        var searchWeb = document.getElementById("deskSearch");
        if (searchWeb.style.display === "none") {
            searchWeb.style.display = "block";
        } else {
            searchWeb.style.display = "none";
        }
        var searchMobile = document.getElementById("mobileSearchBar");
        if (searchMobile.style.display === "none") {
            searchMobile.style.display = "block";
        } else {
            searchMobile.style.display = "none";
        }
    }

    const handelSubmit = (e) => {
        e.preventDefault();
        const txt = e.target.q.value;
        navigate('/search/' + txt)
    }
    return (
        <>
            <header className="header-area">
                <div className="header-top d-none d-lg-block">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 d-flex align-items-center">
                                <div className="header-date">
                                    <i className="fas fa-calendar"></i>&nbsp;{banglaDateConvetar(currentDay)}, {banglaDateConvetar(currentDate)}, {BNDATEs}
                                </div>
                            </div>
                            <div className="col-lg-6 d-flex align-items-center justify-content-end">
                                <div className="live-icon">
                                    <Link to="/live" onClick={scrollTop}><i className="fa-solid fa-play"></i><span>LIVE</span></Link>
                                </div>
                                <div className="header-social-icon">
                                    <a href="https://www.facebook.com/thenews24digital/" target="_blank"><i className="fa-brands fa-facebook-f"></i></a>
                                    <a href="#" target="_blank"><i className="fa-brands fa-whatsapp"></i></a>
                                    <a href="#" target="_blank"><i className="fa-brands fa-x-twitter"></i></a>
                                    <a href="#" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                                    <a href="https://www.youtube.com/@thenewsdhaka/" target="_blank"><i className="fa-brands fa-youtube"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-bootom" id="myHeader">
                    <div className="main-menu d-none d-lg-block">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <nav className="navbar navbar-expand-lg navbar-light">
                                        <div className="container-fluid">
                                            <a className="navbar-brand" href="/">
                                                <div className="logo">
                                                    <img className="img-fluid" src={process.env.REACT_APP_DOMAIN_URL + "media/common/logo.png"} alt="The News 24 || দ্য নিউজ ২৪" title="The News 24 || দ্য নিউজ ২৪" />
                                                </div>
                                            </a>
                                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                                aria-label="Toggle navigation">
                                                <span className="navbar-toggler-icon"></span>
                                            </button>
                                            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                                                <ul className="navbar-nav">
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="/national">জাতীয়</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="/politics">রাজনীতি</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="/international">আন্তর্জাতিক</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="/crime">অপরাধ</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="/trade">বাণিজ্য</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="/entertainment">বিনোদন</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="/sports">খেলাধুলা</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="/lifestyle">জীবনযাপন</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className="nav-link" href="/opinion">মতামত</a>
                                                    </li>

                                                    <li className="nav-item dropdown">
                                                        <a className="nav-link dropdown-toggle" href="#">অন্যান্য</a>
                                                        <div className="dropdown-menu megamenu" role="menu">
                                                            <div className="container">
                                                                <div className="row gx-3">
                                                                    <div className="col-md-3" style={{ flex: "0 0 20%", maxWidth: "20%" }}>
                                                                        <ul className="nav flex-column">
                                                                            <li><a className="dropdown-item" href="#">আইন ও
                                                                                বিচার</a></li>
                                                                            <li><a className="dropdown-item" href="#">শিক্ষা</a>
                                                                            </li>
                                                                            <li><a className="dropdown-item"
                                                                                href="/motivation">অনুপ্রেরণা</a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="col-md-3" style={{ flex: "0 0 20%", maxWidth: "20%" }}>
                                                                        <ul className="nav flex-column">
                                                                            <li><a className="dropdown-item" href="#">চাকরি</a></li>
                                                                            <li><a className="dropdown-item" href="#">স্বাস্থ্য</a>
                                                                            </li>
                                                                            <li><a className="dropdown-item" href="#">ছবিঘর</a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="col-md-3" style={{ flex: "0 0 20%", maxWidth: "20%" }}>
                                                                        <ul className="nav flex-column">
                                                                            <li><a className="dropdown-item" href="#">তথ্য
                                                                                প্রযুক্তি</a>
                                                                            </li>
                                                                            <li><a className="dropdown-item" href="#">পরিবেশ ও
                                                                                জলবায়ু</a>
                                                                            </li>
                                                                            <li><a className="dropdown-item" href="#">তথ্য
                                                                                প্রযুক্তি</a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="col-md-3" style={{ flex: "0 0 20%", maxWidth: "20%" }}>
                                                                        <ul className="nav flex-column">
                                                                            <li><Link className="dropdown-item" to="/agriculture" onClick={scrollTop}>কৃষি</Link> </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="col-md-3" style={{ flex: "0 0 20%", maxWidth: "20%" }}>
                                                                        <ul className="nav flex-column">
                                                                            <li><Link className="dropdown-item" to="/the-news-special" onClick={scrollTop}>দ্য
                                                                                নিউজ স্পেশাল</Link></li>
                                                                            <li><Link className="dropdown-item" to="/reader-s-news" onClick={scrollTop}>পাঠকের
                                                                                সংবাদ</Link></li>
                                                                            <li><Link className="dropdown-item" to="/archives" onClick={scrollTop}>আর্কাইভ</Link>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="nav-item search-sticky">
                                                        <div className="search-btn" >
                                                            <span className="icon-wrap">
                                                                <span className="search-input" >
                                                                    <form onSubmit={handelSubmit} action="/search" method="get">
                                                                        <span className="srch-close-btn"><i
                                                                            className="far fa-times-circle"></i></span>
                                                                        <input type="text" name="q" className="form-control" aria-describedby="button-addon3"
                                                                            id="search-terms" placeholder="লিখুন..." />
                                                                        <button type="submit" id="button-addon3"
                                                                            className="btn srch-sub-btn" aria-label="submit">খুঁজুন</button>
                                                                    </form>
                                                                </span>
                                                                <a className="nav-link search-button"> <i onClick={mobileHeaderSearch} className="fas fa-search"></i>
                                                                </a>
                                                            </span>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div className="header-extra-wrap">
                                                    <div className="extr">
                                                        <a href="#"> <img src={ePper} alt="ই-পেপার" title='ই-পেপার' />ই-পেপার</a>
                                                        <Link to="/archives" onClick={scrollTop}> <img src={archive} alt="আর্কাইভ" title='আর্কাইভ' />আর্কাইভ</Link>
                                                        <a className="langu" href="#"> <img src={map}
                                                            alt="English" title='English' />English</a>
                                                    </div>
                                                    <div className="header-search">
                                                        <form  onSubmit={handelSubmit} action="/search" method="get">
                                                            <div className="input-group">
                                                                <input type="text" name="q" className="form-control"
                                                                    aria-label="Recipient's username"
                                                                    aria-describedby="basic-addon2" />
                                                                <div className="header-search-icon">
                                                                    <i className="fa-solid fa-magnifying-glass"></i>
                                                                </div>
                                                                <button className="input-group-text"  type="submit" aria-label="submit" id="basic-addon2">খুঁজুন</button>
                                                            </div>
                                                        </form>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* marquee section */}
                    <div className="DScroll d-none d-lg-block">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 m-auto">
                                    {breaking.length > 0 ?
                                        <div className="DScrollSection">
                                            <div className="ScrollHeading d-flex align-items-center">
                                                <p>ব্রেকিং নিউজ:</p>
                                            </div>
                                            <div className="ScrollSubject">
                                                <marquee>
                                                    {breaking.map((nd) => {
                                                        return (
                                                            <React.Fragment key={nd.BreakingID}>
                                                                <a href={nd.ScrollUrl === null ? '/' : nd.ScrollUrl} onClick={scrollTop}><span><div className="SquareIcon">*</div>{nd.BreakingHead}</span></a>
                                                            </React.Fragment>
                                                        )
                                                    })}
                                                </marquee>
                                            </div>
                                        </div>
                                        :
                                        <>
                                            {scroll.length > 0 ?
                                                <div className="DScrollSection">
                                                    <div className="ScrollHeading d-flex align-items-center">
                                                        <p>শিরোনাম:</p>
                                                    </div>
                                                    <div className="ScrollSubject">
                                                        <marquee>
                                                            {scroll.map((nd) => {
                                                                return (
                                                                    <React.Fragment key={nd.ScrollID}>
                                                                        <a href={nd.ScrollUrl === null ? '/' : nd.ScrollUrl} onClick={scrollTop}><span><div className="SquareIcon">*</div>{nd.ScrollHead}</span></a>
                                                                    </React.Fragment>
                                                                )
                                                            })}
                                                        </marquee>
                                                    </div>
                                                </div> : false
                                            }
                                        </>}

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!--mobile-navbar-part-start--> */}
                    <div className="mobile-menu-area d-block d-lg-none hide" id="mobile-nav">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="mobile-topbar">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="bars">
                                                <i className="fas fa-bars"></i>
                                            </div>
                                            <div className="logo">
                                                <a href="/">
                                                    <img className="img-fluid" src={process.env.REACT_APP_DOMAIN_URL + "media/common/logo.png"} alt="The News 24 || দ্য নিউজ ২৪" title="The News 24 || দ্য নিউজ ২৪" />
                                                </a>
                                            </div>
                                            <div className="search-btn">
                                                <span className="icon-wrap">
                                                    <span className={`search-input ${showDesktopSearch ? 'show' : 'hide'}`}>
                                                        <form onSubmit={handelSubmit} action="/search" method="get">
                                                            <span className="srch-close-btn" onClick={toggleSearch}><i className="far fa-times-circle"></i></span>
                                                            <input type="text" name="q" className="form-control" placeholder="লিখুন..." />
                                                            <button type="submit" className="btn srch-sub-btn">খুঁজুন</button>
                                                        </form>
                                                    </span>
                                                    <a className="nav-link search-button" onClick={toggleSearch}>
                                                        <i className="fas fa-search"></i>
                                                    </a>
                                                </span>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="mobile-menu-overlay"></div>
                                    <div className="mobile-menu-main">
                                        <a href="">
                                            <div className="logo">
                                                <img className="img-fluid" src={process.env.REACT_APP_DOMAIN_URL + "media/common/logo.png"} alt="The News 24 || দ্য নিউজ ২৪" title="The News 24 || দ্য নিউজ ২৪" />
                                            </div>
                                        </a>
                                        <div className="close-mobile-menu"><i className="fas fa-times"></i></div>
                                        <div className="header-extra-wrap">
                                            <div className="extr">
                                                <a href="#"> <img src="media/imgAll/icon/E_paper2.png" alt="" />ই-পেপার</a>
                                                <a href="#"> <img src="media/imgAll/icon/archive2.png" alt="" />আর্কাইভ</a>
                                                <a className="langu" href="#"> <img src="media/imgAll/icon/Map2.png" alt="" />English</a>
                                            </div>
                                        </div>
                                        <div className="menu-body">
                                            <div className="menu-list">
                                                <ul className="list-unstyled">
                                                    <li className="sub-mobile-menu">
                                                        <div className="sub-menu-mobile-link">
                                                            <a href="#">জাতীয়</a>
                                                        </div>
                                                    </li>
                                                    <li className="sub-mobile-menu">
                                                        <div className="sub-menu-mobile-link">
                                                            <a href="#">রাজনীতি</a>
                                                        </div>
                                                    </li>
                                                    <li className="sub-mobile-menu">
                                                        <div className="sub-menu-mobile-link">
                                                            <a href="#"> আন্তর্জাতিক </a>
                                                        </div>
                                                    </li>
                                                    <li className="sub-mobile-menu">
                                                        <div className="sub-menu-mobile-link">
                                                            <a href="#">বিনোদন</a>
                                                        </div>
                                                    </li>
                                                    <li className="sub-mobile-menu">
                                                        <div className="sub-menu-mobile-link">
                                                            <a href="#"> বাণিজ্য </a>
                                                        </div>
                                                    </li>
                                                    <li className="sub-mobile-menu">
                                                        <div className="sub-menu-mobile-link">
                                                            <a href="#">খেলাধুলা</a>
                                                        </div>
                                                    </li>
                                                    <li className="sub-mobile-menu">
                                                        <div className="sub-menu-mobile-link">
                                                            <a href="#">মতামত</a>
                                                        </div>
                                                    </li>
                                                    <li className="sub-mobile-menu">
                                                        <div className="sub-menu-mobile-link">
                                                            <a href="#">অপরাধ</a>
                                                        </div>
                                                    </li>
                                                    <li className="sub-mobile-menu">
                                                        <div className="sub-menu-mobile-link">
                                                            <a href="#">ব্যবসা</a>
                                                        </div>
                                                    </li>
                                                    <li className="sub-mobile-menu">
                                                        <div className="sub-menu-mobile-link">
                                                            <a href="#">অন্যান্য</a>
                                                            <span className="accordion-click"><i className="fas fa-angle-down"></i></span>
                                                        </div>
                                                        <ul className="list-unstyled">
                                                            <li>
                                                                <a href="">আইন ও বিচার</a>
                                                            </li>
                                                            <li>
                                                                <a href="">শিক্ষা</a>
                                                            </li>
                                                            <li>
                                                                <a href="">অনুপ্রেরণা</a>
                                                            </li>
                                                            <li>
                                                                <a href="">চাকরি</a>
                                                            </li>
                                                            <li>
                                                                <a href="">স্বাস্থ্য</a>
                                                            </li>
                                                            <li>
                                                                <a href="">ছবিঘর</a>
                                                            </li>
                                                            <li>
                                                                <a href="">তথ্য প্রযুক্তি</a>
                                                            </li>
                                                            <li>
                                                                <a href="">পরিবেশ ও জলবায়ু</a>
                                                            </li>
                                                            <li>
                                                                <a href="">লাইফস্টাইল</a>
                                                            </li>
                                                            <li>
                                                                <a href="">কৃষি</a>
                                                            </li>
                                                            <li>
                                                                <a href="">দ্য নিউজ স্পেশাল</a>
                                                            </li>
                                                            <li>
                                                                <a href="">আর্কাইভ</a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="social-icon">
                                            <ul className="list-unstyled">
                                                <li><a href="#" target="_blank"><i className="fa-brands fa-facebook-f"></i></a></li>
                                                <li><a href="#" target="_blank"><i className="fa-brands fa-whatsapp"></i></a></li>
                                                <li><a href="#" target="_blank"><i className="fa-brands fa-x-twitter"></i></a></li>
                                                <li><a href="#" target="_blank"><i className="fa-brands fa-instagram"></i></a></li>
                                                <li><a href="#" target="_blank"><i className="fa-brands fa-youtube"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--mobile-navbar-part-end--> */}
                </div>
            </header>
        </>
    )
}
