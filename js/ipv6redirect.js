setTimeout(async () => { if (window.location.hostname === 'www.qnlanyang.top') {
try { const response = await fetch('https://api6.ipify.org?format=json');
const data = await response.json(); if (data.ip.includes(':')) {
const lapResponse = await fetch('https://lap.qnlanyang.top', { method: 'GET' });
if (lapResponse.ok) { console.log('Target domain is accessible, redirecting to ww3.qnlanyang.top');
window.location.href = window.location.href.replace('www.qnlanyang.top', 'ww3.qnlanyang.top');}
else {console.log('Unable to connect to target domain');}}}
catch (error) {console.log('Error occurred while testing connectivity:', error);}}}, 0);