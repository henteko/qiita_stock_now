chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.greeting == "onStock") {
        chrome.tabs.getSelected(null, function(tab){
          var url = 'https://twitter.com/intent/tweet?' + 'text=Stock now! ' + encodeURIComponent(tab.title) + '&url=' + encodeURIComponent(tab.url);
          var w = 640;
          var h = 360;
          var x = (screen.width - w) / 2;
          var y = (screen.height - h) / 2;
          window.open(url, null, 'left=' + x + ',top=' + y + ',width=' + w + ',height=' + h + ',status=no');
        });
      }
    });
