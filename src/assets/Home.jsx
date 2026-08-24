import React from "react";
import Footer from "./Footer.jsx"
const Home = () => {
  return (
      <div>
      <h1>Mohamad Hourani</h1>
      <img src="goofiness.gif" alt="A goofy hacker" />
      <p>Hello, my name is Mohamad Hourani, and I am a beginner/intermediate ethical hacker.</p>
      <hr/>
      <h2>Skills</h2>

      <details>
        <summary><div className="skill-item"><label htmlFor="ETH"><abbr title="Gaining unauthorized access to software for ethical purposes.">Ethical Hacking</abbr><br/>65% </label><progress id="ETH" value="65" max="100"></progress></div><br/></summary>
        <div className="skill-item"><label htmlFor="FS"><abbr title="Foundational hacking skills, such as networking and how systems work.">Foundational Skills</abbr><br/>100% </label><progress id="FS" value="100"></progress></div><br/>
        <div className="skill-item"><label htmlFor="RT"><abbr title="Red teaming is an attacking surface. This includes pentesting and testing systems for vulnerabilities.">Red Teaming</abbr><br/>30% </label><progress id="RT" value="30" max="100"></progress></div><br/>
        <div className="skill-item"><label htmlFor="BT"><abbr title="Blue teaming is a defensive surface. This includes defending outdated systems or patching vulnerabilities.">Blue Teaming</abbr><br/>10% </label><progress id="BT" value="10" max="100"></progress></div><br/>
        <div className="skill-item"><label htmlFor="PT"><abbr title="Penetration Testing is where you test software for critical security flaws/vulnerabilities.">Pentesting</abbr><br/>20% </label><progress id="PT" value="20" max="100"></progress></div><br/>
      </details>
      <hr/>
    <div className="skill-item"><label htmlFor="HTML"><abbr title="HyperText Markup Language, the standard language for websites.">HTML</abbr><br/>80% </label><progress id="HTML" value="80" max="100"></progress></div><br/>
    <div className="skill-item"><label htmlFor="CSS"><abbr title="Cascading Style Sheets, used for describing the presentation of a document written in a markup language, like HTML.">CSS</abbr><br/>75% </label><progress id="CSS" value="75" max="100"></progress></div><br/>
    <div className="skill-item"><label htmlFor="JS"><abbr title="Javascript, used to add functionality to a website.">JS</abbr><br/>50% </label><progress id="JS" value="50" max="100"></progress></div><br/>
    <div className="skill-item"><label htmlFor="PY"><abbr title="Python, a very easy language for programs and systems, like Operating Systems and games.">Python</abbr><br/>60% </label><progress id="PY" value="60" max="100"></progress></div><br/>
    <div className="skill-item"><label htmlFor="JSX"><abbr title="React, an enhanced way to create and render pages instead of reloading.">React</abbr><br/>60%</label><progress id="JSX" value="60" max="100"></progress></div><br/>
    <div className="skill-item"><label htmlFor="NODE"><abbr title="Express, a back-end language used for servers. Think of it like a kitchen in a restaurant.">Node.js(Express)</abbr><br/>45% </label><progress id="NODE" value="45" max="100"></progress></div><br/>
    <div className="skill-item"><label htmlFor="SQL"><abbr title="SQL, one of the best programming languages for databases and can also be used with Express.">SQL</abbr><br/>80% </label><progress id="SQL" value="80" max="100"></progress></div><br/>
    <div className="skill-item"><label htmlFor="TS"><abbr title="TypeScript is an upgrade of JavaScript that adds static typing and type annotations. It helps developers catch errors easier.">TypeScript</abbr><br/>70% </label><progress id="TS" value="70" max="100"></progress></div><br/>
      <hr/>
      <h2>Projects</h2>
      <p><strong>Note:</strong>Some of my projects contain my face, and I'm not comfortable to show it. Anyways, here are some of my projects!</p>

    <details>
        <summary>Linktree</summary>
        <p>My first ever project.</p>
        <a href="https://fw25m4.mimo.run/index.html">→ Link to project</a>
    </details>
    
    <br/>

    <details>
        <summary>Unit Converter</summary>
        <p>A small project I built for practicing my basic JS skills. It was a nightmare, but worth it.</p>
        <a href="https://46q03i.mimo.run/index.html">→ Link to project</a>
    </details>
    
    <br/>

    <details>
        <summary>Coffee Shop Menu</summary>
        <p>A menu I made for putting my CSS to the test. It's a very simple project that anyone can make!</p>
        <a href="https://12yk0l.mimo.run/index.html">→ Link to project</a>
    </details>

    <br/>

    <details>
        <summary>Number Guessing Game</summary>
        <p>A small game I made for practicing loops and comparisons.</p>
        <a href="https://72gqx5.mimo.run/index.html">→ Link to project</a>
    </details>

    <br/>

    <details>
        <summary>Gallery</summary>
        <p>A cute gallery with funny polar bears, using flexbox.</p>
        <a href="https://qafeqj.mimo.run/index.html">→ Link to project</a>
    </details>

    <br/>

    <details>
        <summary>Trivia Game</summary>
        <p>An easy 2-question trivia game I built for enhancing my JS arrays and functions.</p>
        <a href="https://zz46rr.mimo.run/index.html">→ Link to project</a>
    </details>

    <br/>

    <details>
        <summary>Character Compass</summary>
        <p>A Rick and Morty Character Compass.</p>
        <a href="https://jfgwd1.mimo.run/index.html">→ Link to project</a>
    </details>

    <br/>

    <details>
        <summary>Caesar Cipher</summary>
        <p>A small project I built for practicing my JS skills.</p>
        <a href="https://daquwg.mimo.run/index.html">→ Link to project</a>
    </details>
    
    <br />

    <details>
        <summary>Rick and Morty Character Compass</summary>
        <p>I used classes in JavaScript for this project.</p>
        <a href="https://jfgwd1.mimo.run/index.html">→ Link to project</a>
    </details>

    <br />

    <details>
        <summary>Comedian Bot</summary>
        <p>Not going to lie... I needed some help with this ;(</p>
        <a href="https://8ylxri.mimo.run/index.html">→ Link to project</a>
    </details>

    <br />

    <details>
        <summary>Animal Survival</summary>
        <p>I didn't need a lot of help of this. This demonstrated to me how classes work in JavaScript.</p>
        <a href="https://t0g3lr.mimo.run/index.html">→ Link to project</a>
    </details>

    <br />

    <details>
        <summary>Score Keeper</summary>
        <p>This was an easy project. It introduced me to React.</p>
        <a href="https://fwq68l.mimo.run/index.html">→ Link to project</a>
    </details>

    <br />

    <details>
        <summary>Wordle Game</summary>
        <p>I won't spoil the word, but if you want a hint...</p>
        <details><summary>Hint:</summary><p>This project uses...</p></details>
    </details>

    <br />

    <details>
        <summary>Pokédex</summary>
        <p>This was so fun, API's and all that.</p>
        <a href="https://hixjqf.mimo.run/index.html">→ Link to project</a>
    </details>

    <br />

    <details>
        <summary>Around the World</summary>
        <p>This was one of my hardest projects yet. I needed some help with some complex math used in the project.</p>
        <a href="https://bgokq6.mimo.run/index.html">→ Link to project</a>
    </details>
    <Footer />
    </div>
  );
};

export default Home;