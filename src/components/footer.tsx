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
            <p>
            <a href="https://github.com/ash-entwisle">Github</a> <a href="https://linkedin/in/ash-entwisle">LinkedIn</a> <a href="">Cohost</a> <a href="">Mastodon</a> <a href="mailto://ash.entwisle@protonmail.com">Email</a>
            </p>
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