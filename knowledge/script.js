document.addEventListener("DOMContentLoaded", function(){

    const progressbar = document.querySelectorAll('.progressbar');
    progressbar.forEach(function(bar) {
        const barp = bar.querySelector('p');
        const percentValue = barp.getAttribute('percentage');
        let barpTC = barp.textContent


        barp.style.width = `calc(${percentValue}% - 1em)`
        barp.innerHTML = `${barpTC} <span class="per"><strong>${percentValue}%</strong></span>`;
    });

})