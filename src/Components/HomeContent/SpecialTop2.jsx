import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { scrollTop, ForLazyLoaderImg, getTimeDistance } from '../AllFunctions'
import { Link } from 'react-router-dom'

var lazyloaded = false
export default function SpecialTop2() {

    const [state2, setState2] = useState([])
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}json/file/generateSpecial3.json`)
            .then(({ data }) => {
                if (data.data.length > 0) {
                    setState2(data.data.slice(0, 3));
                    setTimeout(function () {
                        lazyloaded = false
                        ForLazyLoaderImg(lazyloaded)
                    }, 1000);
                }
            });
    }, [])

    return (
        <>
            <div class="lead-right-wrap">
                {state2.map((nc) => {
                    return (
                        <div class="lead-right-news-box">
                            <Link to={"/" + nc.Slug + "/news/" + nc.ContentID} onClick={scrollTop}>
                                <div class="row">
                                    <div class="col-5 col-lg-12">
                                        <div class="lead-right-news-img">
                                            {nc.ImageSmPath ?
                                                <img src={process.env.REACT_APP_IMG_Path + nc.ImageSmPath} alt={nc.ContentHeading} title={nc.ContentHeading} width={300} height={190} className="img-fluid" /> :
                                                <img src={process.env.REACT_APP_LAZYL_IMG} alt={nc.ContentHeading} title={nc.ContentHeading} width={300} height={190} className="img-fluid" />}

                                            {nc.ShowVideo === 1 && <div className="card-video-icon big transition"> <i className="fa-solid fa-play"></i> </div>}

                                        </div>
                                    </div>
                                    <div class="col-7 col-lg-12">
                                        <div class="Desc">
                                            {nc.ContentSubHeading == null ?
                                                <h3 className="Title"> {nc.ContentHeading}</h3> :
                                                <h3 className="Title"> <span className="subheadTitle">{nc.ContentSubHeading}/</span>  {nc.ContentHeading}</h3>
                                            }
                                            <div class="news-Time">
                                                <span className="time">{getTimeDistance(nc.created_at)}</span>
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

        </>

    )
}
