import "./About.css";
import Footer from "./Footer.jsx";
const About = () => {
    return (
        <div className="about-page">
<div className="timeline">
        <div className="container left">
            <div className="content">
                <h1>March 11th, 2026</h1>
                <p>Started learning Web Development with Mimo</p>
            </div>
        </div>
        <div className="container right">
            <div className="content">
                <h1>April 6th, 2026</h1>
                <p>Joined GitHub</p>
            </div>
        </div>
        <div className="container left">
            <div className="content">
                <h1>April 20th, 2026</h1>
                <p>Joined Semicolon Academy and started the ETH101 course</p>
            </div>
        </div>
        <div className="container right">
            <div className="content">
                <h1>June 6th, 2026</h1>
                <p>Joined TryHackMe</p>
            </div>
        </div>
        <div className="container left">
            <div className="content">
                <h1>August 15th, 2026</h1>
                <p>Passed TryHackMe's SEC0 certification exam with a pass of 450 on my first try.</p>
            </div>
        </div>
        <div className="container right">
            <div className="content">
                <h1>August 17th, 2026</h1>
                <p>Passed TryHackMe's SEC0 certification exam with a pass of 480 on my second try.</p>
            </div>
        </div>
</div>
<p style={{color: "blue"}}>And I'm continuing my journey!</p>
<Footer />
    </div>
    )
}
export default About;