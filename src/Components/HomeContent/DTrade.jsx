import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { scrollTop, ForLazyLoaderImg, getTimeDistance } from '../AllFunctions'
var lazyloaded = false
export default function DTrade() {

    const [News, setNews] = useState([])
    const [News2, setNews2] = useState([])


    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}json/file/generateCategory8.json`)
            .then(({ data }) => {
                setNews(data.data[0])
                setNews2(data.data.slice(1, 4))
                setTimeout(function () {
                    lazyloaded = false
                    ForLazyLoaderImg(lazyloaded)
                }, 1000);


            })
    }, [])
    return (
        <>
            <div class="common-post-listBox">
                <div class="section-heading">
                    <Link to="/trade" onClick={scrollTop}>
                        <h2>বাণিজ্য</h2>
                    </Link>
                </div>
                <div class="common-single-post-wrap">
                    {News ?
                        <Link to={"/" + News.Slug + "/news/" + News.ContentID} onClick={scrollTop}>
                            <div class="common-single-post-wrap-img">
                                {News.ImageBgPath ?
                                    <img src={process.env.REACT_APP_IMG_Path + News.ImageBgPath} alt={News.ContentHeading} title={News.ContentHeading} className="img-fluid" /> :
                                    <img src={process.env.REACT_APP_LAZYL_IMG} alt={News.ContentHeading} title={News.ContentHeading} className="img-fluid" />}

                                {News.ShowVideo === 1 && <div className="card-video-icon big transition"> <i className="fa-solid fa-play"></i> </div>}
                            </div>
                            <div class="Desc">
                                <h3 class="Title">{News.ContentSubHeading ? (News.ContentSubHeading + "/" + News.ContentHeading) : (News.ContentHeading)}
                                </h3>
                                <div class="news-Time">
                                    <span class="time">{getTimeDistance(News.created_at ? News.created_at : "")}</span>
                                    <span>{News.CategoryName}</span>
                                </div>
                            </div>
                        </Link>
                        : false}

                </div>
                <div class="common-single-post-list-wrap">
                    {News2.map((nc, i) => {
                        return (
                            <div class="common-single-post-list" key={i}>
                                <Link to={"/" + nc.Slug + "/news/" + nc.ContentID} onClick={scrollTop}>
                                    <div class="row gx-3">
                                        <div class="col-5 col-lg-4">
                                            <div class="common-single-post-list-img">
                                                {nc.ImageThumbPath ?
                                                    <img src={process.env.REACT_APP_IMG_Path + nc.ImageThumbPath} alt={nc.ContentHeading} title={nc.ContentHeading} className="img-fluid" /> :
                                                    <img src={process.env.REACT_APP_LAZYL_IMG} alt={nc.ContentHeading} title={nc.ContentHeading} className="img-fluid" />}

                                                {nc.ShowVideo === 1 && <div className="card-video-icon big transition"> <i className="fa-solid fa-play"></i> </div>}
                                            </div>
                                        </div>
                                        <div class="col-7 col-lg-8">
                                            <div class="Desc">
                                                <h3 class="Title">{nc.ContentSubHeading ? (nc.ContentSubHeading + "/" + nc.ContentHeading) : (nc.ContentHeading)}
                                                </h3>
                                                <div class="news-Time">
                                                    <span class="time">{getTimeDistance(nc.created_at ? nc.created_at : "")}</span>
                                                    <span>{nc.CategoryName}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>

        </>

    )
}
