let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');
let sec = document.getElementById('sec');
let min = document.getElementById('minutes');
let hour = document.getElementById('hour');

let Hr = 0;
let Min = 0;
let Sec = 0;
let timer = null; // Store the interval ID

// Initialize the display to 00:00:00
function initializeValues() {
    sec.value = '00';
    min.value = '00';
    hour.value = '00';
}

initializeValues();

start.addEventListener('click', () => {
    if (!timer) {
        timer = setInterval(() => {
            Sec++;
            if (Sec === 60) {
                Sec = 0;
                Min++;
                if (Min === 60) {
                    Min = 0;
                    Hr++;
                }
            }
            
            // Update the display with formatted values
            sec.value = Sec < 10 ? '0' + Sec : Sec;
            min.value = Min < 10 ? '0' + Min : Min;
            hour.value = Hr < 10 ? '0' + Hr : Hr;
        }, 1000);
    }
});

// Stop the timer
stop.addEventListener('click', () => {
    clearInterval(timer);
    timer = null;
});

// Reset the timer
reset.addEventListener('click', () => {
    clearInterval(timer);
    timer = null;
    Hr = 0;
    Min = 0;
    Sec = 0;
    initializeValues();
});
