// If your extension doesn't need a background script, just leave this file empty
    /*global chrome*/

messageInBackground();

// This needs to be an export due to typescript implementation limitation of needing '--isolatedModules' tsconfig

export function messageInBackground() {
  console.log('I can run your javascript like any other code in your project');
  console.log('just do not forget, I cannot render anything !');

}

chrome.runtime.onMessageExternal.addListener(
  function(request, sender, sendResponse) {
    if (request.data)
      alert("Hi, there is message from the website");
      var data = request.data;
      console.log(data)// now the data is on your extension side, just save it to extension's localstorage.
  });
