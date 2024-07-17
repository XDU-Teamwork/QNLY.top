setTimeout(async () => { if (/^ww[w\d]\.qnl(?:an)?y(?:ang)?\.top$/.test(window.location.hostname)) {
const response = await fetch('https://api6.ipify.org?format=json');
const data = await response.json(); if (data.ip.includes(':')) {
const lapResponse = await fetch('https://lap.direct.qnlanyang.top', { method: 'GET' });
if (lapResponse.ok) {window.location.href = window.location.href.replace(/ww[w\d]\./,'v6.');}
else {console.log('Unable to connect to target domain');}}}}, 0);