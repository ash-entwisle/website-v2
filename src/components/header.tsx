
export default function Header() {
    return (
        <header>
            <Title />
            <Nav />
        </header>
    );
}

function Title() {
    // add svg logo here
    return (
        <div class="title">
            <img src="/assets/logo.svg" alt="</>" />
            <a href="/">Ash Entwisle</a>
        </div>
    );
}

function Nav() {
    return (
        <div class="nav">
            <a href="/about">About</a>
            <a href="/projects">Projects</a>
            <a href="/blog">Blog</a>
            <a href="/contact">Contact</a>
        </div>
    );
}