if (window.location.hostname === 'www.qnlanyang.top') {
fetch('https://api6.ipify.org?format=json').then(response => response.json()).then(data => {
if (data.ip.includes(':')) {
window.location.href = 'https://ww3.qnlanyang.top/';
}})}