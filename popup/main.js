let button = document.querySelector("#button");

button.addEventListener("click", handleClick);

function handleClick() {
   // Notify Content The Button Has Been Fired
   let params = {
      active: true,
      currentWindow: true,
   };

   chrome.tabs.query(params, handleTabs);

   function handleTabs(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, "#000");
   }
}
