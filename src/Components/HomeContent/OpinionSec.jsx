import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { scrollTop, ForLazyLoaderImg } from '../AllFunctions'
import WriterDefaultImg from '../../assets/media/common/profile.png';
import OnlinePoll from './OnlinePoll';

var lazyloaded = false
export default function OpinionSec() {
    const [state, setState] = useState([])
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}json/file/generateCategory18.json`)
            .then(({ data }) => {
                if (data.data.length > 0) {
                    setState(data.data.slice(0, 4));
                    setTimeout(function () {
                        lazyloaded = false
                        ForLazyLoaderImg(lazyloaded)
                    }, 1000);
                }
            });
    }, [])

    return (
        <>
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-heading">
                        <Link to="/opinion" onClick={scrollTop}>
                            <h2>মতামত</h2>
                        </Link>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-9">
                    <div class="row">
                        {state.map((nc) => {
                            return (
                                <div class="col-md-6" key={nc.ContentID}>
                                    <div class="opinion-box">
                                        <Link to={"/" + nc.Slug + "/news/" + nc.ContentID}  onClick={scrollTop}>
                                            <div class="row">
                                                <div class="col-lg-3 d-flex justify-content-center">
                                                    <div class="opinion-img">
                                                        {nc.ImageSmPath == null ?
                                                            <img src={WriterDefaultImg} alt={nc.ContentHeading} title={nc.ContentHeading} width={300} height={"100%"} /> :
                                                            <img src={process.env.REACT_APP_IMG_Path + nc.ImageSmPath} alt={nc.ContentHeading} title={nc.ContentHeading} width={300} height={"100%"} className="img-fluid" />
                                                        }
                                                        {nc.ShowVideo === 1 && <div className="card-video-icon big transition"> <i className="fa-solid fa-play"></i> </div>}
                                                    </div>
                                                </div>
                                                <div class="col-lg-9 d-flex aling-items-center">
                                                    <div class="opinion-text">
                                                        <div class="Desc">
                                                            <h3 class="Title">{nc.ContentHeading}</h3>
                                                            <p class="WriterName"><i class="fa fa-pencil" aria-hidden="true"></i>{nc.WriterName}</p>
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
                <div class="col-lg-3 col-sm-12">
                    <OnlinePoll />
                </div>
            </div>


        </>

    )
}
