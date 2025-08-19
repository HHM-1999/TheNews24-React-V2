import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { scrollTop, ForLazyLoaderImg, getTimeDistance } from '../AllFunctions'
// import LeadTopSlider from './LeadTopSlider'
var lazyloaded = false
export default function Sports() {
    const [sports, setSports] = useState([])
    const [sports2, setSports2] = useState([])


    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}json/file/generateCategory6.json`)
            .then(({ data }) => {

                setSports(data.data.slice(0, 2))
                setSports2(data.data.slice(2, 6))

                setTimeout(function () {
                    lazyloaded = false
                    ForLazyLoaderImg(lazyloaded)
                }, 1000);


            })
    }, [])
    return (
        <>
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-heading">
                        <Link to="/sports" onClick={scrollTop}>
                            <h2>খেলাধুলা</h2>
                        </Link>
                    </div>
                </div>
            </div>
            <div class="sports-lead">
                <div class="row">
                    {sports.map((nc) => {
                        return (
                            <div class="col-lg-6">
                                <div class="sports-lead-wrap">
                                    <Link to={"/" + nc.Slug + "/news/" + nc.ContentID} onClick={scrollTop}>
                                        <div class="sports-lead-img">
                                            {nc.ImageBgPath ?
                                                <img src={process.env.REACT_APP_IMG_Path + nc.ImageBgPath} alt={nc.ContentHeading} title={nc.ContentHeading} className="img-fluid" width={800} height={"100%"} /> :
                                                <img src={process.env.REACT_APP_LAZYL_IMG} alt={nc.ContentHeading} title={nc.ContentHeading} className="img-fluid img100" width={800} height={"100%"} />}

                                            {nc.ShowVideo === 1 && <div className="card-video-icon big transition"> <i className="fa-solid fa-play"></i> </div>}
                                        </div>
                                        <div class="Desc">
                                            <h3 class="Title">{nc.ContentHeading}</h3>
                                            <p class="Brief">{nc.ContentBrief}</p>
                                            <div class="news-Time">
                                                <span class="time">{getTimeDistance(nc.created_at ? nc.created_at : "")}</span>
                                                <span>{nc.CategoryName}</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        )
                    })

                    }


                </div>
            </div>
            <div class="sports-list-wrap">
                <div class="row">
                    {sports2.map((nc) => {
                        return (
                            <div class="col-lg-3">
                                <div class="sports-list">
                                    <Link to={"/" + nc.Slug + "/news/" + nc.ContentID} onClick={scrollTop}>
                                        <div class="sports-list-img">
                                            <div class="row">
                                                <div class="col-5 col-lg-12">
                                                    <div class="sports-list-imgBox">
                                                        {nc.ImageSmPath ?
                                                            <img src={process.env.REACT_APP_IMG_Path + nc.ImageSmPath} alt={nc.ContentHeading} title={nc.ContentHeading} className="img-fluid" width={300} height={"100%"} /> :
                                                            <img src={process.env.REACT_APP_LAZYL_IMG} alt={nc.ContentHeading} title={nc.ContentHeading} className="img-fluid img100" width={300} height={"100%"} />}

                                                        {nc.ShowVideo === 1 && <div className="card-video-icon big transition"> <i className="fa-solid fa-play"></i> </div>}
                                                    </div>
                                                </div>
                                                <div class="col-7 col-lg-12">
                                                    <div class="Desc">
                                                        <h3 class="Title">{nc.ContentHeading}</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        )
                    })}


                </div>
            </div>
        </>

    )
}
