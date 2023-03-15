
export default function Error() {
    return (
        <div class="error">
            <h1>404</h1>
            <p>Sorry, the page `<code>https://ashentwisle.com{window.location.pathname}</code>` does not exist.</p>
            <p>Click <a href="/">here</a> to go home</p>
        </div>
    );
}