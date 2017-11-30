
function getCurrentTabUrl() {
	var queryInfo = { 
		// active: true,
		// currentWindow: true
	};

	chrome.tabs.query(queryInfo, (tabs) => { 
		// var tab = tabs[0];
		// var url = tab.url; 
		document.getElementById("container").innerHTML = tabs.length;
		// document.write(tabs.length);

		// callback(url);
	});

}
getCurrentTabUrl();

// function countTabs(){ 
// chrome.tabs.query({
//     active: true,
//     currentWindow: true
// }, function(tabs) {
//     var tabURL = tabs[0].url;
//     // console.log(tabURL);
// })
// };
//   function displayTabCount() {
//   	document.getElementById("container").innerHTML = countTabs();
//   }

//   displayTabCount();



//  chrome.tabs.query({windowType:'normal'}, function(tabs) {
//     console.log('Number of open tabs in all normal browser windows:',tabs.length);
// }); 