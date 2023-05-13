function display_ct() {
    var x = new Date()
    var ampm = x.getHours( ) >= 12 ? ' PM' : ' AM';
    
    var x1=x.getMonth() + 1+ "/" + x.getDate() + "/" + x.getFullYear(); 
    x1 = x1 + " - " +  x.getHours( )+ ":" +  x.getMinutes() + ":" +  x.getSeconds() + ":" + ampm;
    document.getElementById('ct').innerHTML = x1;
    display_c();
     }
     function display_c(){
    var refresh=1000; // Refresh rate in milli seconds
    mytime=setTimeout('display_ct()',refresh)
    }
    display_c()

const input = document.querySelector(".input-line input");
const output = document.querySelector(".output-line");



function app1() {
  document.getElementById("win1").style.visibility = "visible";
}

// Get all the tabs and tab contents
const tabs = document.querySelectorAll('[role="tab"]');
const tabContents = document.querySelectorAll('.tab-content');

// Add event listeners for tab clicks
tabs.forEach((tab) => {
  tab.addEventListener('click', (event) => {
    event.preventDefault();
    // Get the selected tab
    const selectedTab = event.currentTarget;
    const selectedTabId = selectedTab.querySelector('a').getAttribute('href');
    // Update the active tab
    tabs.forEach((tab) => {
      tab.setAttribute('aria-selected', false);
    });
    selectedTab.setAttribute('aria-selected', true);
    // Update the active tab content
    tabContents.forEach((tabContent) => {
      if (tabContent.getAttribute('id') === selectedTabId.slice(1)) {
        tabContent.classList.add('active');
      } else {
        tabContent.classList.remove('active');
      }
    });
  });
});

