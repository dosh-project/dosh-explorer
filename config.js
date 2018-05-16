/*var api = window.location.protocol + '//' + window.location.hostname;
if(window.location.port !== undefined || window.location.port.length > 0) {
    api += ':' + window.location.port;
}*/
// var api = 'http://dosh-explorer.github.io:27175';
var api = 'http://localhost:18333';
var blockTargetInterval = 120;
var totalCoinsI = 18446744073709551615;
var coinUnits = 1000000000000;
var symbol = 'DOSH';
var refreshDelay = 30000;
// pools stats by MainCoins
var networkStat = {
    "DOSH": [
		["dosh.hashpool.frl", "http://dosh.hashpool.frl:8117/stats"],
    ]
};
