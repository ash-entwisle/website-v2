import { animatedTyping } from "../libs/animations";

export default function Landing() {
    const title = "Hello World, I'm Ash!";
    return (
        <div class="index">
            <h1 onMouseOver={(e) => animatedTyping(e)}>{ title }</h1>
            <p>
                feel free to check out my <a href="/projects">projects</a> and 
                my <a href="/blog">blog</a> or 
                subscribe to my <a href="https://ashentwisle.com/rss.xml">RSS feed</a>
            </p>
            <p>
                If you want to get in touch, <a href="/contact">feel free to reach out!</a>. 
            </p>
        </div>
    );
}
