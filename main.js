$(function() {
  $('.stock-button.btn-primary').click(function(){
    chrome.runtime.sendMessage({greeting: "onStock"}, function(response) {});
  });
});
