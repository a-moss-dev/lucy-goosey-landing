//const targetDate = new Date("May 16, 2026 15:00:00").getTime();
//
//const timer = setInterval(() => {
//    const now = new Date().getTime();
//    const diff = targetDate - now;
//
//    // Math conversions
//    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
//    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
//    const s = Math.floor((diff % (1000 * 60)) / 1000);
//
//    // Updating the DaisyUI CSS variables
//    document.getElementById("days-span").style.setProperty("--value", d);
//    document.getElementById("hours-span").style.setProperty("--value", h);
//
//    // LOGIC GAP: Use the pattern above to update the 'mins-span' and 'secs-span'
//    // TODO: Add the lines for minutes and seconds here
//
//    if (diff < 0) {
//        clearInterval(timer);
//        alert("The event has started!");
//    }
//}, 1000);
