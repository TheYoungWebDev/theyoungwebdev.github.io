import "./Footer.css";
const Footer = () => {
  return (
    <>
    <footer className="footer">
        <a href="https://tryhackme.com/p/hoog">
            <img src="THM.png" width="100" alt="TryHackMe" id="thm"/>
        </a>
        <a href="https://github.com/TheYoungWebDev">
            <img src="Github.png" width="100" alt="GitHub" id="github"/>
        </a>
        <h4>Mohamad Hourani</h4>
        <q>
            My father picked me up from school one day and we played hockey and went to the beach. It was too cold to go in the water so we sat on a blanket and ate pizza. When I got home my sneakers were full of sand and I dumped it on my bedroom floor. I didn't know the difference, I was six. My mother screamed at me for the mess but my father wasn't mad. He said that billions of years ago, the world shifting and oceans moving brought that sand to that spot on the beach and then I took it away. Every day he said we change the world. Which is a nice thought until I think about how many days and lifetimes I would need to bring a shoe full of sand home until there is no beach. Until it made a difference to anyone. Every day we change the world. But to change the world in a way that means anything that takes more time than most people have. it never happens all at once. Its slow. Its methodical. Its exhausting. We don't all have the stomach for it.
        </q>
        <p>- Elliot, Mr. Robot</p>
        <p>Email: mohamadhawrane@hotmail.com</p>
    </footer>
    </>
  );
};

export default Footer;