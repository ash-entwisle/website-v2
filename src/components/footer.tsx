import motds from "../misc/motds";

export default function Footer() {
    return (
        <footer>
            <div class="misc-padding"></div>
            <div class="footer">
                <MOTD />
                <Socials />
                <Copyright />
            </div>
            <div class="logo">
                <img src="/assets/logo.svg" alt="</>" />
            </div>
        </footer>
    );
}

function MOTD() {
    let motd = motds()[Math.floor(Math.random() * motds().length)];
    return (
        <div class="motd">
            <p><i>{ motd }</i></p>
        </div>
    );
}

function Socials() {
    return (
        <div class="socials">
            <a href=""><img src="/assets/github.svg" alt="GitHub" /></a>
            <a href=""><img src="/assets/linkedin.svg" alt="LinkedIn" /></a>
            <a href=""><img src="/assets/cohost.svg" alt="Cohost" /></a>
            <a href=""><img src="/assets/mastodon.svg" alt="Mastodon" /></a>
            <a href=""><img src="/assets/email.svg" alt="Email" /></a>
        </div>
    );
}

function Copyright() {
    let currentYear = new Date().getFullYear();
    let output = currentYear > 2022 ? `2022-${currentYear}` : currentYear;
    return (
        <div class="copyright">
            <p> &copy; <a href="https://reachout.ashentwisle.com">Ash Entwisle</a> {output} </p>
        </div>
    );
}