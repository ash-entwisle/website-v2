import motds from "../libs/motds";

export default function Footer() {
    return (
        <footer>
            <div class="logo"></div>
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
            <div class="contact">
            <p><a href="https://github.com/ash-entwisle">Github</a></p>
            </div>
            <div class="contact">
            <p><a href="https://linkedin.com/in/ash-entwisle">LinkedIn</a></p>
            </div>
            <div class="contact">
            <p><a href="https://cohost.org/ash-e">Cohost</a></p>
            </div>
            <div class="contact">
            <p><a href="https://hachyderm.io/@ashentwisle">Mastodon</a></p>
            </div>
            <div class="contact">
            <p><a href="mailto://ash.entwisle@protonmail.com">Email</a></p>
            </div>
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