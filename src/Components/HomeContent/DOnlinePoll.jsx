import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { scrollTop } from '../AllFunctions'
const { toBengaliNumber } = require('bengali-number');

var PollID = 0
export default function DOnlinePoll() {
    const [poll, setPoll] = useState([])
    const [pollNo, setPollNo] = useState([])
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}latest-poll`)
            .then(({ data }) => {
                if (data.poll_latest.length > 0) {
                    setPoll(data.poll_latest);
                    PollID = data.poll_latest[0].PollID
                    axios
                        .get(`${process.env.REACT_APP_API_URL}current-poll-result/${PollID}`)
                        .then(({ data }) => {
                            setPollNo(data.data)
                        });
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
        <div className="DOnlineVote">
            <div className="SPSecTitle3"><h2><i className="fas fa-question-circle" aria-hidden="true"></i> অনলাইন জরিপ </h2></div>
            {poll.map((nc) => {
                return (
                    <React.Fragment key={nc.PollID}>
                        <div id="opinion-submit-msg" className="opinion-submit-msg" style={{ display: 'none' }}><h4>আপনার মতামত জমা দেওয়া হয়েছে</h4></div>
                        <div className="Question" key={nc.PollID}>
                            <h3>{nc.QuestionBn}</h3>
                            <form onSubmit={resultSubmit}>
                                <div className="VoteAnswer">
                                    <div className="d-flex justify-content-between;">
                                        <label className="form-check-label" htmlFor="radio1"><input type="radio" id="radio1" className="form-check-input" name="rdoPoll" value="1" /> হ্যাঁ</label>
                                        <p>{toBengaliNumber(pollNo.Yes)}%</p>
                                    </div>
                                    <div className="d-flex justify-content-between;">
                                        <label className="form-check-label" htmlFor="radio2"><input type="radio" id="radio2" className="form-check-input" name="rdoPoll" value="2" /> না</label>
                                        <p>{toBengaliNumber(pollNo.No)}%</p>
                                    </div>
                                    <div className="d-flex justify-content-between;">
                                        <label className="form-check-label" htmlFor="radio3"><input type="radio" id="radio3" className="form-check-input" name="rdoPoll" value="3" /> মন্তব্য নেই</label>
                                        <p>{toBengaliNumber(pollNo.NoComments)}%</p>
                                    </div>
                                </div>
                                <div className="VoteSubmit">
                                    <button type="submit" name="submit" className="btn btn-success">ভোট দিন</button>
                                </div>
                                <div className="VoteSubmit">
                                    <Link to="/pollresult" className="btn btn-success" onClick={scrollTop}>পুরোনো ফলাফল</Link>
                                </div>
                            </form>
                        </div>
                    </React.Fragment>
                )
            })}
        </div>
    )
}
