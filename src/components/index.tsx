import { animatedTyping } from "../libs/animations";

export default function Index() {
    const title = "Hello World, I'm Ash!";
    return (
        <div class="index">
            <h1 onMouseOver={(e) => animatedTyping(e)}>{ title }</h1>
            <p>
                Enjoyer of Arch, Lover of Rust, hater of JavaScript. 
                Feel free to check out my <a href="/projects">projects</a> or my <a href="/blog">blog</a>. 
            </p>
            <p>
                If you want to get in touch, <a href="/contact">feel free to reach out!</a>. 
            </p>
        </div>
    );
}
