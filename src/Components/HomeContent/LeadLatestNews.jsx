import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { scrollTop } from '../AllFunctions'
import { Link } from 'react-router-dom';
import { toBengaliNumber } from 'bengali-number';

export default function LeadLatestNews() {
    const [latest, setLatest] = useState([])
    const [popular, setPopular] = useState([])
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}json/file/generateLatest.json`)
            .then(({ data }) => {
                if (data.data.length > 0) {
                    setLatest(data.data.slice(0, 10))
                }
            })
        axios
            .get(`${process.env.REACT_APP_API_URL}json/file/generatePopular.json`)
            .then(({ data }) => {
                setPopular(data.data)
            })
    }, [])

    return (
        <>
            {/* <section className="DLPSTab2">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" data-bs-toggle="tab" href="#tabs-1" role="tab" aria-selected="true">সর্বশেষ</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="tab" href="#tabs-2" role="tab" aria-selected="false">জনপ্রিয়</a>
                            </li>
                        </ul>
                    </div>
                    <div className="panel-body PanelHeight">
                        <div className="tab-content">
                            <div className="tab-pane active" id="tabs-1" role="tabpanel">
                                <div className="DLatestNews longEnough mCustomScrollbar" data-mcs-theme="dark">
                                    {latest.map((nc, i) => {
                                        return (
                                            <div className="DLatestNewsList" key={nc.ContentID}>
                                                <a href={"/" + nc.Slug + "/news/" + nc.ContentID} onClick={scrollTop}>
                                                    <div className="d-flex flex-row">
                                                   
                                                        {nc.ContentSubHeading == null ?
                                                            <p>{nc.ContentHeading} </p> :
                                                            <p> <span className="subheadTitle">{nc.ContentSubHeading + " /"}</span> {nc.ContentHeading} </p>
                                                        }
                                                    </div>
                                                </a>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="tab-pane" id="tabs-2" role="tabpanel">
                                <div className="DLatestNews longEnough mCustomScrollbar" data-mcs-theme="dark">

                                    {popular.map((nc) => {
                                        return (
                                            <div className="DLatestNewsList" key={nc.ContentID}>
                                                <a href={"/" + nc.Slug + "/news/" + nc.ContentID} onClick={scrollTop}>
                                                    <div className="d-flex flex-row">
                                                        
                                                        {nc.ContentSubHeading == null ?
                                                            <p>{nc.ContentHeading} </p> :
                                                            <p> <span className="subheadTitle">{nc.ContentSubHeading + " /"}</span> {nc.ContentHeading} </p>
                                                        }
                                                    </div>
                                                </a>
                                            </div>
                                        )
                                    }
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="allnews"><Link to="/archives" onClick={scrollTop}>সব খবর <i className="fa fa-angle-double-right"></i></Link></div>
            </section> */}
            <div class="LatestNews">
                <ul class="nav nav-pills" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-home" type="button" role="tab"
                            aria-controls="pills-home" aria-selected="true">সর্বশেষ</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-profile" type="button" role="tab"
                            aria-controls="pills-profile" aria-selected="false">সর্বাধিক</button>
                    </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-home" role="tabpanel"
                        aria-labelledby="pills-home-tab">
                        <div class="LatestNewsWrap">
                            <ul>
                                {latest.map((nc, i) => {

                                    return (
                                        <li>
                                            <Link to={"/" + nc.Slug + "/news/" + nc.ContentID} onClick={scrollTop}>
                                                <div class="LastestNewsList">
                                                    <div class="count">{toBengaliNumber(i + 1)}</div>
                                                    <div class="Desc">
                                                        {nc.ContentSubHeading == null ?
                                                            <h3 class="Title">{nc.ContentHeading} </h3> :
                                                            <h3 class="Title"> <span className="subheadTitle">{nc.ContentSubHeading + " /"}</span> {nc.ContentHeading} </h3>
                                                        }
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                    )
                                })}


                            </ul>
                        </div>
                        <div class="allnews"><a href="/archives">সব খবর <i
                            class="fa fa-angle-double-right"></i></a></div>
                    </div>
                    <div class="tab-pane fade" id="pills-profile" role="tabpanel"
                        aria-labelledby="pills-profile-tab">
                        <div class="LatestNewsWrap">
                            <ul>
                                {popular.map((nc, i) => {

                                    return (
                                        <li>
                                            <Link to={"/" + nc.Slug + "/news/" + nc.ContentID} onClick={scrollTop}>
                                                <div class="LastestNewsList">
                                                    <div class="count">{toBengaliNumber(i + 1)}</div>
                                                    <div class="Desc">
                                                        {nc.ContentSubHeading == null ?
                                                            <h3 class="Title">{nc.ContentHeading} </h3> :
                                                            <h3 class="Title"> <span className="subheadTitle">{nc.ContentSubHeading + " /"}</span> {nc.ContentHeading} </h3>
                                                        }
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                    )
                                })}

                            </ul>
                        </div>
                        <div class="allnews"><a href="/archives">সব খবর <i
                            class="fa fa-angle-double-right"></i></a></div>
                    </div>
                </div>
            </div>

        </>

    )
}
