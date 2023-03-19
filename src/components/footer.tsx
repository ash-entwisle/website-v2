import motds from "../libs/motds";

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
                <img src="/favicon.svg" alt="</>" />
            </div>
        </footer>
    );
}

function MOTD() {
    let motd = motds()
    return (
        <div class="motd">
            <p><i>{ motd }</i></p>
        </div>
    );
}

function Socials() {
    return (
        <div class="socials">
            <p>
            <a href="https://github.com/ash-entwisle">Github</a> <a href="https://linkedin.com/in/ash-entwisle">LinkedIn</a> <a href="https://cohost.org/ash-e">Cohost</a> <a href="https://hachyderm.io/@ashentwisle">Mastodon</a> <a href="mailto://ash.entwisle@protonmail.com">Email</a>
            </p>
        </div>
    );
}

function Copyright() {
    let currentYear = new Date().getFullYear();
    let output = currentYear > 2022 ? `2022-${currentYear}` : currentYear;
    return (
        <div class="copyright">
            <p> &copy; <a href="https://ashentwisle.com/contact">Ash Entwisle</a> {output} </p>
        </div>
    );
}