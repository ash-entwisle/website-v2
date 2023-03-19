
export default function Error() {
    return (
        <main>
            <div class="error">
                <h1>ERR: 404</h1> 
                <p>Sorry, the page `<code>https://ashentwisle.com{window.location.pathname}</code>` does not exist. <i>Click <a href="/">here</a> to go home</i></p>
            </div>
        </main>
    );
}