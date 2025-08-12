import React, { useEffect } from 'react'
import LeadNewsSection from './HomeContent/LeadNewsSection'
import Sports from './HomeContent/Sports'
import { Link } from 'react-router-dom'
import DocumentTitle from 'react-document-title'
import VideoSec from './HomeContent/VideoSec'
import DCountry from './HomeContent/DCountry'
import DDivisionSearch from './HomeContent/DDivisionSearch'
import DNational from './HomeContent/DNational'
import DInternationalSec from './HomeContent/DInternationalSec'
import OnlinePoll from './HomeContent/OnlinePoll'
import OpinionSec from './HomeContent/OpinionSec'
import DPoliticsSec from './HomeContent/DPoliticsSec'
import DJob from './HomeContent/DJob'
import DBusiness from './HomeContent/DBusiness'
import DEntertainment from './HomeContent/DEntertainment'
import Lifestyle from './HomeContent/Lifestyle'
import Crime from './HomeContent/Crime'
import Technology from './HomeContent/Technology'
import DForeign from './HomeContent/DForeign'
import Religion from './HomeContent/Religion'
import Health from './HomeContent/Health'
import Law from './HomeContent/Law'
import DEducation from './HomeContent/DEducation'
import PhotoSection from './HomeContent/PhotoSection'
import PrayerTime from './HomeContent/PrayerTime'
// import Event from './HomeContent/Event'
import HomeLdJson from './HomeContent/HomeLdJson'
import FBpagePlugin from './FBpagePlugin'
// import Ramadan from './HomeContent/Ramadan'
// import LazyLoaderGIF from '../icon/lazyComponentLoaderGIF.gif'
// import RLoader from './RLoader'

// var allComponentsLoaded = false
export default function Home() {
    // useEffect(() => {
    //     document.querySelectorAll('link[rel="canonical"]')[0].setAttribute('href', window.location.href)
    //     const timer = setTimeout(() => { window.location.reload(1); }, 300000);
    //     return () => clearTimeout(timer);
    // }, [])
    // const [isLoading, setisLoading] = useState(true)
    // const [homeAd2, setHomeAd2] = useState([]) // eslint-disable-line no-unused-vars

    // const [firstSection, setFirstSection] = useState(false)
    // const [secondSection, setSecondSection] = useState(false)
    // const [thirdSection, setThirdSection] = useState(false)
    // const [fourthSection, setFourthSection] = useState(false)
    useEffect(() => {
        document.querySelectorAll('link[rel="canonical"]')[0].setAttribute('href', window.location.href)
        setTimeout(() => { window.location.reload(1); }, 300000);
        // setisLoading(true)
        // setTimeout(() => { setisLoading(false) }, 300);
        // setisLoading(true)
        // setTimeout(() => { setisLoading(false) }, 300);

        // allComponentsLoaded = true

    }, [])
    return (
        <>
            <main>
                {/* <Event /> */}

                <>

                    <DocumentTitle title='The News 24 || দ্য নিউজ ২৪' />
                    <HomeLdJson />
                    <section className='container'>
                        <LeadNewsSection />
                    </section>
                    <>
                        <div className="video-area">
                            <div class="container">
                                <VideoSec />
                            </div>
                        </div>
                        <section class="others-two-area">
                            <div class="container">
                                <DCountry />
                            </div>
                        </section>

                        <section class="national-news-area">
                            <DNational />
                        </section>
                    </>


                    <>
                        <section>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-9 col-12">

                                        {/* <DInternationalSec /> */}
                                    </div>
                                    <div className="col-lg-3 col-sm-12">
                                        {/* <OnlinePoll /> */}
                                        <div className="DRightSideAdd mt-2">
                                            {/* <Link to="">
                                                <img src={"/media/Advertisement/ispahani.gif"} alt='ads' title='ads' />
                                            </Link> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className="DBGWhite">
                                {/* <OpinionSec /> */}

                            </div>
                        </section>


                    </>

                    <>

                        <div className="container">
                            <section className="International + Economics + Politics">
                                <div className="row">
                                    <div className="col-lg-4 col-12 BorderRight2">
                                        {/* 
                                        <DPoliticsSec /> */}

                                    </div>
                                    <div className="col-lg-4 col-12 BorderRight2 " >

                                        {/* <DJob /> */}



                                    </div>
                                    <div className="col-lg-4 col-12">

                                        {/* <DBusiness /> */}



                                    </div>
                                </div>
                            </section>
                        </div>
                        <section className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="DAdd2 d-flex  justify-content-center">
                                        {/* <Link to="">
                                            <img src={"/media/Advertisement/2148954953036687476.png"} alt="Header Advertisement" title="Header Advertisement" className="img-fluid img100" />
                                        </Link> */}
                                    </div>
                                    {/* <Ads /> */}
                                </div>
                            </div>
                        </section>

                        <section className="Entertainment">
                            {/* <DEntertainment /> */}
                        </section>
                        <>
                            {/* <Ads /> */}
                            <div className="DAdd2 d-flex mt-2  justify-content-center">
                                {/* <Link to="">
                                    <img src={"media/Advertisement/adertisementHome.jpg"} alt="Header Advertisement" title="Header Advertisement" className="img-fluid img100" />
                                </Link> */}
                            </div>
                        </>

                        <div className="container">
                            <section className="Sports">
                                {/* <Sports /> */}
                            </section>
                        </div>

                    </>



                    <section className="Lifestyle">
                        {/* <Lifestyle /> */}
                    </section>
                    <section className="container">
                        <div className="row">
                            <div className="col-md-12 mt-2">
                                {/* <Ads /> */}
                                <div className="DAdd2 d-flex  justify-content-center">
                                    {/* <Link to="">
                                        <img src={"/media/Advertisement/12565849791804438290.png"} alt="Header Advertisement" title="Header Advertisement" className="img-fluid img100" />
                                    </Link> */}
                                </div>
                            </div>
                        </div>
                    </section>

                    <>
                        <div className="container">
                            <section className=" + Economics + Politics">
                                <div className="row">
                                    <div className="col-lg-3 col-12 BorderRight2 mb-3 mt-3">
                                        {/* <Crime /> */}
                                    </div>
                                    <div className="col-lg-3 col-12 BorderRight2 mb-3 mt-3">
                                        {/* <Technology /> */}
                                    </div>
                                    <div className="col-lg-3 col-12 BorderRight2 mb-3 mt-3">
                                        {/* <DForeign /> */}
                                    </div>
                                    <div className="col-lg-3 col-12 mt-3 ">
                                        {/* <Religion /> */}
                                    </div>
                                    <div className="col-lg-3 col-12 BorderRight2">
                                        {/* <Health /> */}

                                    </div>
                                    <div className="col-lg-3 col-12 BorderRight2">

                                        {/* <Law /> */}


                                    </div>
                                    <div className="col-lg-3 col-12">
                                        {/* <DEducation /> */}
                                    </div>
                                    <div className="col-lg-3 col-12">
                                        {/* <Cultural /> */}
                                        {/* <div className="ads-section">
                                            <div className="DAdd2 d-flex  justify-content-center">
                                                <Link to="">
                                                    <img src={"/media/Advertisement/15824348306179494464.gif"} alt="Header Advertisement" title="Header Advertisement" className="img-fluid img100" />
                                                </Link>
                                            </div>
                                        </div> */}




                                    </div>
                                </div>
                            </section>
                        </div>
                        <section className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    {/* <Ads /> */}
                                    {/* <div className="DAdd2 d-flex  justify-content-center">
                                        <Link to="">
                                            <img src={"/media/Advertisement/ads.jpeg"} alt="Header Advertisement" title="Header Advertisement" className="img-fluid img100" />
                                        </Link>
                                    </div> */}
                                </div>
                            </div>
                        </section>
                        <section className="PhotoGallery">
                            <div className="container">
                                <div className="DPhotoGallery">
                                    <div className="row">
                                        <div className="col-lg-9 col-12">
                                            {/* <PhotoSection /> */}
                                        </div>
                                        <div className="col-lg-3 col-12 MT100">
                                            {/* <div className="DRightSideAdd">
                                                <Link to="">
                                                    <img src={"/media/Advertisement/300x250.gif"} alt='ads' title='ads' />
                                                </Link>
                                            </div> */}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </section>

                    </>

                </>





            </main>
        </>
    )
}
