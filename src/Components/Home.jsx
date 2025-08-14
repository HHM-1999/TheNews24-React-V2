import React, { useEffect } from 'react'
import LeadNewsSection from './HomeContent/LeadNewsSection'
import Sports from './HomeContent/Sports'
import DocumentTitle from 'react-document-title'
import VideoSec from './HomeContent/VideoSec'
import DCountry from './HomeContent/DCountry'
import DNational from './HomeContent/DNational'
import DInternationalSec from './HomeContent/DInternationalSec'
import OpinionSec from './HomeContent/OpinionSec'
import DPoliticsSec from './HomeContent/DPoliticsSec'
import DJob from './HomeContent/DJob'
import DEntertainment from './HomeContent/DEntertainment'
import Lifestyle from './HomeContent/Lifestyle'
import PhotoSection from './HomeContent/PhotoSection'
// import Event from './HomeContent/Event'
import HomeLdJson from './HomeContent/HomeLdJson'
import DTrade from './HomeContent/DTrade'
// import Ramadan from './HomeContent/Ramadan'
// import LazyLoaderGIF from '../icon/lazyComponentLoaderGIF.gif'

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
                    <DocumentTitle title='The News 24 ::  দ্য নিউজ ২৪' />
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
                        <section class="others-two-area">
                            <div class="container">
                                <DInternationalSec />
                            </div>
                        </section>
                        <section class="opinion-area">
                            <div class="container">
                                <OpinionSec />
                            </div>
                        </section>
                        <section class="common-post-area">
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-4">
                                        <DPoliticsSec />
                                    </div>
                                    <div class="col-lg-4">
                                        <DJob />
                                    </div>
                                    <div class="col-lg-4">
                                        <DTrade />
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section class="entertainment-area">
                            <div class="container">
                                <DEntertainment />
                            </div>
                        </section>
                        <section class="sports-area">
                            <div class="container">
                                <Sports />
                            </div>
                        </section>
                        <section class="life-style-area">
                            <div class="container">
                                <Lifestyle />
                            </div>
                        </section>
                        <section class="Photogallery-area">
                            <div class="container">
                                <PhotoSection />
                            </div>
                        </section>

                    </>





                </>





            </main>
        </>
    )
}
