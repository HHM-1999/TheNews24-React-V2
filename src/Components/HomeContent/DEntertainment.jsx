import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { scrollTop, ForLazyLoaderImg, getTimeDistance } from '../AllFunctions'
var lazyloaded = false
export default function DEntertainment() {
    const [entertainment, setEntertainment] = useState([])
    const [entertainment2, setEntertainment2] = useState([])

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}json/file/generateCategory7.json`)
            .then(({ data }) => {

                setEntertainment(data.data[0])
                setEntertainment2(data.data.slice(1, 5))
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
                        <Link to="/entertainment" onClick={scrollTop}>
                            <h2>বিনোদন</h2>
                        </Link>
                    </div>
                </div>
            </div>
            {entertainment ?
                <div class="entertainment-lead">
                    <Link to={"/" + entertainment.Slug + "/news/" + entertainment.ContentID} onClick={scrollTop}>
                        <div class="row">
                            <div class="col-lg-8">
                                <div class="entertainment-lead-img">
                                    {entertainment.ImageBgPath ?
                                        <img src={process.env.REACT_APP_IMG_Path + entertainment.ImageBgPath} alt={entertainment.ContentHeading} title={entertainment.ContentHeading}    width="845" height="522" /> :
                                        <img src={process.env.REACT_APP_LAZYL_IMG} alt={entertainment.ContentHeading} title={entertainment.ContentHeading} className="img-fluid" width="845" height="522" />}
                                    {entertainment.ShowVideo === 1 && <div className="card-video-icon big transition"> <i className="fa-solid fa-play"></i> </div>}
                                </div>
                            </div>
                            <div class="col-lg-4 d-flex align-items-center order-lg-first">
                                <div class="Desc">
                                    <h3 class="Title">{entertainment.ContentHeading}</h3>
                                    <p class="Brief">{entertainment.ContentBrief}</p>
                                    <div class="news-Time">
                                        <span class="time">{getTimeDistance(entertainment.created_at ? entertainment.created_at : "")}</span>
                                        <span>{entertainment.CategoryName}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                : false
            }

            <div class="entertainment-list-wrap">
                <div class="row">
                    {entertainment2.map((nc) => {
                        return (
                            <div class="col-lg-3" key={nc.ContentID}>
                                <div class="entertainment-list">
                                    <Link to={"/" + nc.Slug + "/news/" + nc.ContentID} onClick={scrollTop}>
                                        <div class="row">
                                            <div class="col-5 col-lg-12">
                                                <div class="entertainment-list-img">
                                                    {nc.ImageSmPath ?
                                                        <img src={process.env.REACT_APP_IMG_Path + nc.ImageSmPath} alt={nc.ContentHeading} title={nc.ContentHeading} width={300} height={186} className="img-fluid"   /> :
                                                        <img src={process.env.REACT_APP_LAZYL_IMG} alt={nc.ContentHeading} title={nc.ContentHeading} width={300} height={186} className="img-fluid img100" />}

                                                    {nc.ShowVideo === 1 && <div className="card-video-icon big transition"> <i className="fa-solid fa-play"></i> </div>}
                                                </div>
                                            </div>
                                            <div class="col-7 col-lg-12">
                                                <div class="Desc">
                                                    <h3 class="Title">{nc.ContentHeading}</h3>
                                                    <div class="news-Time"><span class="time">{getTimeDistance(nc.created_at ? nc.created_at : "")}</span><span>{nc.CategoryName}</span>
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
