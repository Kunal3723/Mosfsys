import React from 'react'
import "../styles/dashboardstyle.css";
function Dashboard() {

    let sidebar = document.querySelector(".sidebar");
    let closeBtn = document.querySelector("#btn");


    function btnclick() {
        let sidebar = document.querySelector(".sidebar");
        sidebar.classList.toggle("open");
        menuBtnChange(); 
    }

    
    function menuBtnChange() {
        if (sidebar.classList.contains("open")) {
            closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
            document.getElementById("hr").style.display = "block";

            document.getElementById("members").style.display = "block";
           
        } else {
            closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
            document.getElementById("hr").style.display = "none";

            document.getElementById("members").style.display = "none";
           
        }
    }

    return (
        <>
            <div className="sidebar">
                <div className="logo-details">
                    <i className="bx bxl-c-plus-plus icon"></i>
                    <div className="logo-name">GLOBILITY</div>
                    <i className="bx bx-menu" id="btn" onClick={function () { btnclick() }}></i>
                </div>
                <ul className="nav-list">
                    <li>
                        <a href="/">
                            <i className="bx bxs-home"></i>
                            <span className="links-name">Home</span>
                        </a>
                        <span className="tooltip">Home</span>
                    </li>
                    <li>
                        <a href="/">
                            <i className="bx bxs-flask"></i>
                            <span className="links-name">My Pilots</span>
                        </a>
                        <span className="tooltip">My Pilots</span>
                    </li>
                    <li>
                        <a href="/">
                            <i className="bx bxs-inbox"></i>
                            <span className="links-name">Inbox</span>
                        </a>
                        <span className="tooltip">Inbox</span>
                    </li>
                    <li>
                        <a href="/">
                            <i className="bx bxs-user"></i>
                            <span className="links-name">My Team</span>
                        </a>
                        <span className="tooltip">My Team</span>
                    </li>
                    <li>
                        <hr id="hr" className="hr" />
                    </li>

                    <li>
                        <a href="/">
                            <span className="links-name">Add Team Members</span>
                            <i className="bx bxs-plus-circle"></i>
                        </a>
                    </li>

                    <li className="members" id="members">
                        <a href="/">
                            <img src={require("../images/user.png")} alt="" />
                            <div className="details">
                                <div className="name">Patricia M.</div>
                                <div className="post">Teacher</div>
                            </div>
                        </a>
                    </li>

                    <li className="profile">
                        <a href="/">
                            <i className="bx bxs-cog"></i>
                            <span className="links-name">Setting</span>
                        </a>
                        <span className="tooltip">Setting</span>
                    </li>
                    <li className="profile2">
                        <a href="/">
                            <i className="bx bx-log-out"></i>
                            <span className="links-name">Sign out</span>
                        </a>
                        <span className="tooltip">Sign out</span>
                    </li>
                </ul>
            </div>

            <section className="home-section">
                <div className="tab-bar">
                    <img src={require("../images/Image 1.png")} alt="" />
                    <span className="title">Shenzen Houde Academy</span>
                    <nav>
                        <a href="/">Discovery</a><a href="/">Impact Board</a><a href="/">Learning Pods</a>
                    </nav>
                </div>
                <div className="content">
                    <div className="col-1">
                        <div className="head">
                            <span>Impact Campaigns</span>
                            <i className="bx bx-dots-horizontal-rounded"></i>
                        </div>
                        <div className="detail">
                            <div className="card">
                                <div className="title">Reading Comprehension</div>
                                <div className="tag">High</div>
                                <div className="row">
                                    <div className="col">
                                        <i className="bx bxs-user"></i>
                                        <span>Students</span>
                                    </div>
                                    <div className="col">
                                        <i className="bx bxs-paper-plane"></i>
                                        <span>3 Tools</span>
                                    </div>
                                </div>
                                <div className="row2">
                                    <div className="col">
                                        <img src={require("../images/user.png")} alt="" />
                                    </div>
                                    <div className="col">
                                        <div className="details">
                                            <div className="date">29 Sep-10 Oct</div>
                                            <div className="timeline"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="title">Career Development</div>
                                <div className="tag" style={{ background: "#FD612B", width: "67px" }}>Medium</div>
                                <div className="row">
                                    <div className="col">
                                        <i className="bx bxs-user"></i>
                                        <span>Students</span>
                                    </div>
                                    <div className="col">
                                        <i className="bx bxs-paper-plane"></i>
                                        <span>0 Tools</span>
                                    </div>
                                </div>
                                <div className="row2">
                                    <div className="col">
                                        <img src={require("../images/user.png")} alt="" />
                                    </div>
                                    <div className="col">
                                        <div className="details">
                                            <div className="date">29 Sep-10 Nov</div>
                                            <div className="timeline"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="plus">
                                <i className='bx bx-plus-medical'></i>
                                Start New Campaign
                            </div>
                        </div>
                    </div>

                    <div className="col-2">
                        <div className="head">
                            <span>Learning Tools</span>
                            <i className="bx bx-dots-horizontal-rounded"></i>
                        </div>
                        <div className="detail">
                            <div className="members">
                                <img src={require("../images/Mask Group 2.png")} alt="" />
                                <div className="details">
                                    <div className="name">Paragon One</div>
                                    <div className="post">Creative thinking, +3 more</div>
                                </div>
                            </div>
                            <div className="members">
                                <img src={require("../images/Mask Group 1.png")} alt="" />
                                <div className="details">
                                    <div className="name">Classcraft</div>
                                    <div className="post">Writing composition, +1 more</div>
                                </div>
                            </div>
                            <div className="members">
                                <img src={require("../images/Group 297.png")} alt="" />
                                <div className="details">
                                    <div className="name">ReadToMe</div>
                                    <div className="post">Experimental Learning, +2 more</div>
                                </div>
                            </div>
                            <div className="members">
                                <img src={require("../images/Group 298.png")} alt="" />
                                <div className="details">
                                    <div className="name">Discovery Education</div>
                                    <div className="post">Creative thinking, +10 more</div>
                                </div>
                            </div>
                            <div className="plus">
                                <i className='bx bx-plus-medical'></i>
                                Add New tool
                            </div>
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="head">
                            <span>Tool Pilots</span>
                            <i className="bx bx-dots-horizontal-rounded"></i>
                        </div>
                        <div className="detail">
                            <div className="card2">
                                <div className="title">ReadToMe: Houde Pilot 1</div>
                                <div className="tag" style={{ background: "#1DBC8E" }}>In Progress</div>
                                <div className="row">
                                    <div className="col">
                                        <i className='bx bxs-time' ></i>
                                        <span>Fall 2020</span>
                                    </div>
                                    <div className="col">
                                        <i className='bx bx-check'></i>
                                        <span>Student Pod</span>
                                    </div>
                                </div>
                                <div className="row2">
                                    <div className="col">
                                        <img src={require("../images/user.png")} alt="" />
                                    </div>
                                    <div className="col">
                                        <div className="details">
                                            <div className="date"><b>$50k/year</b></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="extra">
                                    <span>words-per-minute</span>
                                    <span>text completion</span>
                                    <span>comprehension response</span>
                                    <span>pronounciation accuracy</span>
                                </div>
                            </div>
                            <div className="card2">
                                <div className="title">Paragon One: Houde Pilot 1</div>
                                <div className="tag" style={{ background: "#FD9A00" }}>Awaiting Approval</div>
                                <div className="row">
                                    <div className="col">
                                        <i className='bx bxs-time' ></i>
                                        <span>Fall 2020</span>
                                    </div>
                                    <div className="col">
                                        <i className='bx bx-check'></i>
                                        <span>Student Pod</span>
                                    </div>
                                </div>
                                <div className="row2">
                                    <div className="col">
                                        <img src={require("../images/user.png")} alt="" />
                                    </div>
                                    <div className="col">
                                        <div className="details">
                                            <div className="date"><b>$50k/year</b></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="extra">
                                    <span>words-per-minute</span>
                                    <span>text completion</span>
                                    <span>comprehension response</span>
                                    <span>pronounciation accuracy</span>
                                </div>
                            </div>
                            <div className="card2">
                                <div className="title">Paragon One: Houde Pilot 2</div>
                                <div className="tag" style={{ background: "#FD612B", width: "67px" }}>Change Requested</div>
                                <div className="row">
                                    <div className="col">
                                        <i className='bx bxs-time' ></i>
                                        <span>Fall 2020</span>
                                    </div>
                                    <div className="col">
                                        <i className='bx bx-check'></i>
                                        <span>Student Pod</span>
                                    </div>
                                </div>
                                <div className="row2">
                                    <div className="col">
                                        <img src={require("../images/user.png")} alt="" />
                                    </div>
                                    <div className="col">
                                        <div className="details">
                                            <div className="date"><b>$50k/year</b></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="extra">
                                    <span>early career prep</span>
                                    <span>college prep</span>
                                    <span>experimental learnign</span>
                                </div>
                            </div>
                            <div className="plus">
                                <i className='bx bx-plus-medical'></i>
                                Add More
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="head">
                            <span>Design Learning Pod</span>
                            <i className="bx bx-dots-horizontal-rounded"></i>
                        </div>
                        <div className="detail">
                            <div className="plus">
                                <i className='bx bx-plus-medical'></i>
                                New Learning Pod
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Dashboard