var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");



var settings = {
    "async": true,
    "scrossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=ethereum%2Cbitcoin%2Cdogecoin&vs_currencies=MYR",
    "method": "GET",
    "headers": {}
}
$.ajax(settings).done(function (response){
    btc.innerHTML = response.bitcoin.myr;
    eth.innerHTML = response.ethereum.myr;
    doge.innerHTML = response.dogecoin.myr;
});