import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { scrollTop } from '../AllFunctions'
import DSocialShare from '../SocialShare'
import ShareThisPopup from '../ShareThisPopup';
import SocialShare from '../SocialShare';


// const { toBengaliNumber } = require('bengali-number');
// var lazyloaded = false
var PollID = 0
export default function OnlinePoll() {
    const [poll, setPoll] = useState([])

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}latest-poll`)
            .then(({ data }) => {
                if (data.poll_latest.length > 0) {
                    setPoll(data.poll_latest);
                    PollID = data.poll_latest[0].PollID
                    
                }
            });
    }, [])

    const resultSubmit = (e) => {
        e.preventDefault()
        var PollValue = parseInt(e.target.rdoPoll.value);
        var formData = { 'pollID': PollID, 'PollValue': PollValue }
        // console.log(formData)
        axios
            .post(`${process.env.REACT_APP_API_URL}poll-update`, formData)
            .then(({ data }) => {
                document.getElementById("opinion-submit-msg").style.display = "block";
                e.target.submit.disabled = true;
            });
    }

    return (
        <>
            <div className="DOnlineVote">
                <div className="SPSecTitle3"><h2><i className="fa fa-question-circle"></i> অনলাইন জরিপ </h2></div>
                {poll.map((nc) => {
                    return (
                        <React.Fragment key={nc.PollID} >
                            <div id="opinion-submit-msg" className="opinion-submit-msg" style={{ display: 'none' }}><h4>আপনার মতামত জমা দেওয়া হয়েছে</h4></div>

                            <div className="Imgresize">
                                <figure className="ImgViewer">
                                    <picture className="FixingRatio">
                                        <img src={process.env.REACT_APP_LAZYL_IMG} data-src={process.env.REACT_APP_DOMAIN_URL + nc.image} alt={nc.QuestionBn} title={nc.QuestionBn} className="img-fluid img100 ImgRatio" />
                                    </picture>
                                </figure>
                            </div>
                            <div className="Question" key={nc.PollID}>
                                <h3>{nc.QuestionBn}</h3>
                                <form onSubmit={resultSubmit}>
                                    <div className="VoteAnswer">
                                        <label className="form-check-label" htmlFor="radio1"><input type="radio" id="radio1" className="form-check-input" name="rdoPoll" value="1" />হ্যাঁ</label>
                                     
                                        <label className="form-check-label" htmlFor="radio2"><input type="radio" id="radio2" className="form-check-input" name="rdoPoll" value="2" /> না</label>
                                        
                                        <label className="form-check-label" htmlFor="radio3"><input type="radio" id="radio3" className="form-check-input" name="rdoPoll" value="3" /> মন্তব্য নেই</label>
                                      
                                    </div>
                                    <div className="VoteSubmit">
                                        <button type="submit" name="submit" className="btn btn-success">ভোট দিন</button>
                                    </div>
                                    <div className="VoteSubmit">
                                        <Link to="/pollresult" className="btn btn-success" onClick={scrollTop}>পুরোনো ফলাফল</Link>
                                    </div>
                                    <div className="VoteSubmit mb-0">
                                    <ShareThisPopup key={ nc.PollID} title={nc.QuestionBn} url={`${process.env.REACT_APP_FONT_DOMAIN_URL}opinion-poll/` + (nc.PollID)} elem={nc.PollID} />

                                    </div>
                                    {/* <div className='VoteSubmit'>
                                        <DSocialShare title={nc.QuestionBn} contentID={nc.PollID} />
                                    </div> */}
                                   

                                </form>
                            </div>



                        </React.Fragment>
                    )
                })}

            </div>


        </>

    )
}
