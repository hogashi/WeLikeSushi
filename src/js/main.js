/* main.js */

var timerid;
var sushiCodes = ["1f41f", "1f363"];
var textTitles = ['data-original-title', 'title'];
var texts = ["寿司を握る", "寿司を下げる"];
window.addEventListener("load", start);
document.addEventListener("keydown", start);
document.addEventListener("keyup", start);
document.addEventListener("click", start);

function start(){
	if(!!document.querySelector('.HeartAnimation')){
		var tweets = document.getElementsByClassName('tweet');
		for(var i=0; i<tweets.length; i++){
			if(!!tweets[i].querySelector('.HeartAnimation')){
				var iconParents = tweets[i].getElementsByClassName('HeartAnimationContainer');
				for(var j=0; j<2; j++){
					var sushiemoji = document.createElement('img');
					sushiemoji.className = "twitter-emoji";
					iconParents[j].removeChild(tweets[i].querySelector('.HeartAnimation'));
					sushiemoji.src = "https://abs.twimg.com/emoji/v1/72x72/" + sushiCodes[j] + ".png";
					iconParents[j].appendChild(sushiemoji);
				}
				var innertext = tweets[i].querySelector('.ProfileTweet-actionList .ProfileTweet-action--favorite');
				innertext.innerHTML = innertext.innerHTML.replace(/いいね/g, "寿司");
				// ページ全体の"いいね"を"寿司"に
				//document.body.innerHTML = document.body.innerHTML.replace(/いいね/g, "寿司");
			}
		}
	}
	clearTimeout(timerid);
	timerid = setTimeout("start()",1000);
}
