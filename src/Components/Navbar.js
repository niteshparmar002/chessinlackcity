import React from 'react'
import '../App.css';
import lackcity from "../Images/chessinlackcity.jpg";

const Navbar = () => {
return (
    <div>
        <header className="header-layout-default kreeti-header">
            <div style={{background: "skyblue" }}>
                <img className='img-fluid' src={lackcity} alt="" width="80%" style={{padding: "46px 0" }} />
            </div>
            <div class="container ">
                <nav id="navbar" class="navbar navbar-expand-lg order-last order-lg-0 mx-auto">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class='mx-auto'>
                        <li><a href="index.php" class="active">Home</a></li>

                        <li class="dropdown"><a href="#"><span>About</span> <i class="bi bi-chevron-down"></i></a>
                            <ul>
                                <li><a href="about.php">About Us</a></li>
                                <li><a href="history.php">History </a></li>
                                <li><a href="coaches.php"> Our Coaches</a></li>
                                <li><a href="team.php"> Our Team</a></li>
                                <li><a href="arbiter.php"> Our Arbiter</a></li>
                                <li><a href="academy.php">Academy</a></li>
                            </ul>
                        </li>

                        <li class="dropdown"><a href="#"><span>Gallery</span> <i class="bi bi-chevron-down"></i></a>
                            <ul>
                            <li><a href="portfolio.php">Photo Gallery</a></li>
                            <li><a href="video.php">Video Gallery </a></li>
                            
                            </ul>
                        </li>
                        <li class="dropdown"><a href="#"><span>Calendar</span> <i class="bi bi-chevron-down"></i></a>
                            <ul>
                            
                                            <li><a href="admin-panel/uploadbrochure/Final Revised Holi Cup 2023 lakecity 29-12-2023.pdf">Revised 5th Holi 2023 (26-30 March 2023)</a></li>
                            
                                                <li><a href="admin-panel/uploadbrochure/Final Revised Below June 2023 lakecity 29-12-2023.pdf">Revised below June 2023 lakecity</a></li>
                            
                                            </ul>
                        </li>
                        <li><a href="news.php" class="">News</a></li>

                        <li><a href="registration.php" class="">Registration</a></li>
                        <li><a href="t_certificate.php" class="">Certificate</a></li>
                        <li><a href="contact.php" class="">Contact</a></li>

                    </ul>
                    <i class="bi bi-list mobile-nav-toggle"></i>
                </div>
                </nav>
            </div>
        </header>
        <div class="container aft-popular-tags mt-4">
            <div class="container-wrapper">
                <div class="aft-popular-taxonomies-lists bg-light">
                    <strong class="bg-light">Important Link</strong>
                    <ul class="mx-auto my-auto">
                        <li class="mx-3"><a href="https://aicf.in/all-events">AICF Calendar</a></li>
                        <li class="mx-3"><a href="https://prs.aicf.in/players">Players Search</a></li>
                        <li class="mx-3"><a href="https://prs.aicf.in/new-register">New Player AICF Reg</a></li>
                        <li class="mx-3"><a href="https://prs.aicf.in/entry"> Online Entry AICF Tournament Reg</a></li>
                        <li class="mx-3"><a href="https://chess-results.com/fed.aspx?lan=1&fed=IND">Chess Results & Parring</a></li>
                        <li class="mx-3"><a href="https://chess-results.com/fed.aspx?lan=1&fed=IND;&bdld1=22">Chess Results Rajasthan</a></li>
                    </ul>
                </div>                
            </div>
        </div>
    </div>
)
}

export default Navbar