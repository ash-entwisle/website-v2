let typing = false;


export function animatedTyping(e: Event) {
    let event = e.target as HTMLElement;
    const text = event.innerHTML;
    if (!typing) {
        typing = true;
        let i = 1;
        let speed = 25;
        event.innerHTML = text.charAt(0);
        let interval = setInterval(() => {
            if (i < text.length) {
                event.innerHTML += text.charAt(i);
                i++;
            } else {
                clearInterval(interval);
                typing = false;
            }
        }, speed);
    }
}