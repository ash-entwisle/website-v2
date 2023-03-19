
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
        <div class="logo">
            <a href="/"><img src="/favicon.svg" alt="</>" /></a>
        </div>
    );
}

function Nav() {
    return (
        <div class="nav">
            <div class="nav-item">
                <a href="/about">About</a>
            </div>
            <div class="nav-item">
                <a href="/projects">Projects</a>
            </div>
            <div class="nav-item">
                <a href="/blog">Blog</a>
            </div>
            <div class="nav-item">
                <a href="/contact">Contact</a>
            </div>
        </div>
    );
}