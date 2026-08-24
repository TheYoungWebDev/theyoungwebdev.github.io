import React from "react";
import "./Error.css";
import Footer from "./Footer.jsx"
const Error = () => {
    return (
        <>
        <img src="/goofiness.gif" alt="A goofy hacker" />
        <hr/>
        <p>Oops. Looks like you were dabbling with the subdomains. Well go on, I have nothing to hide. And if not, this is an error:</p>
        <h1 id="error">404.</h1>
        <Footer />
        </>
    )
}
export default Error;