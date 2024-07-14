# PWA-Progressive Web Apps
# PWA-Instantly turns our websites in Mobile App or Desktop App
<b>1) Create a manifest.json file in your app folder </b>
   copy paset below code, can generate Icon for PWA app from <a href="https://cloudparker.com/tools/pwa-app-icon-generator" target="_blank"> PWA Icon Generator</a>
   <br>
   { <br>
  "name": "Dev'Coffee", <br>
  "short_name": "DevCoffee", <br>
  "start_url": "index.html", <br>
  "display": "standalone", <br>
  "background_color": "#fdfdfd", <br>
  "theme_color": "#db4938", <br>
  "orientation": "portrait-primary",  <br>
  "icons": [  <br>
    { <br>
      "src": "/images/icons/icon-72x72.png",  <br>
      "type": "image/png", "sizes": "72x72"  <br>
    },  <br>
    { <br>
      "src": "/images/icons/icon-96x96.png", <br>
      "type": "image/png", "sizes": "96x96"  <br>
    },  <br>
    {  <br>
      "src": "/images/icons/icon-128x128.png",  <br>
      "type": "image/png","sizes": "128x128"  <br>
    },  <br>
    {  <br>
      "src": "/images/icons/icon-144x144.png",  <br>
      "type": "image/png", "sizes": "144x144"  <br>
    },  <br>
    {  <br>
      "src": "/images/icons/icon-152x152.png",  <br>
      "type": "image/png", "sizes": "152x152"  <br>
    },  <br>
}  <br>
In the end, it's just a JSON file with some mandatory and optional properties.

name: When the browser launches the splash screen, it will be the name displayed on the screen.

short_name: It will be the name displayed underneath your app shortcut on the home screen.

start_url: It will be the page shown to the user when your app is open.

display: It tells the browser how to display the app. There are several modes like minimal-ui, fullscreen, browser etc. Here, we use the standalone mode to hide everything related to the browser.

background_color: When the browser launches the splash screen, it will be the background of the screen.

theme_color: It will be the background color of the status bar when we open the app.

orientation: It tells the browser the orientation to have when displaying the app.

icons: When the browser launches the splash screen, it will be the icon displayed on the screen. Here, I used all sizes to fit any device's preferred icon. But you can just use one or two. It's up to you.

<b>2) Link your manifest.json fill with HTML (index.html) </b>  <br>
    <link rel="manifest" href="manifest.json" />  <br>
    //ios support <br>
link rel="apple-touch-icon" href="images/icons/icon-72x72.png" <br>
link rel="apple-touch-icon" href="images/icons/icon-96x96.png" <br>
link rel="apple-touch-icon" href="images/icons/icon-128x128.png" <br>
link rel="apple-touch-icon" href="images/icons/icon-144x144.png" <br>
link rel="apple-touch-icon" href="images/icons/icon-152x152.png" <br>
link rel="apple-touch-icon" href="images/icons/icon-192x192.png" <br>
link rel="apple-touch-icon" href="images/icons/icon-384x384.png" <br>
link rel="apple-touch-icon" href="images/icons/icon-512x512.png" <br>
meta name="apple-mobile-web-app-status-bar" content="#db4938" <br>
meta name="theme-color" content="#db4938" <br>
 <br>
<b>3) Moving towards Service Worker, create a new javascript file serviceWorker.js </b>  <br>
   const staticDevCoffee = "dev-coffee-site-v1" <br>
const assets = [ <br>
  "/", <br>
  "/index.html",  <br>
  "/css/style.css",  <br>
  "/js/app.js",  <br>
  "/images/coffee1.jpg",  <br>
  "/images/coffee2.jpg",  <br>
  "/images/coffee3.jpg",  <br>
  "/images/coffee4.jpg",  <br>
  "/images/coffee5.jpg",  <br>
  "/images/coffee6.jpg",  <br>
  "/images/coffee7.jpg",  <br>
  "/images/coffee8.jpg",  <br>
  "/images/coffee9.jpg",  <br>
]   <br>
 <br>
self.addEventListener("install", installEvent => {  <br>
  installEvent.waitUntil(  <br>
    caches.open(staticDevCoffee).then(cache => {  <br>
      cache.addAll(assets)  <br>
    }) <br>
  ) <br>
}) <br>
 <br>
<b>4) Fetch the Assets</b>  <br>
In the serviceWorker.js file, add the below code;  <br>
self.addEventListener("fetch", fetchEvent => {  <br>
  fetchEvent.respondWith(  <br>
    caches.match(fetchEvent.request).then(res => {  <br>
      return res || fetch(fetchEvent.request)  <br>
    }) <br>
  ) <br>
}) <br>
 <br>
<b>5) Register the Service Worker</b>  <br>
In your js/app.js add below code this code will push notifactions also;  <br>
if ("serviceWorker" in navigator) { <br>
    window.addEventListener("load", function () { <br>
        navigator.serviceWorker <br>
            .register("/serviceWorker.js")  <br>
            .then(res => {  <br>
                console.log("service worker regsitered");  <br>
                Notification.requestPermission().then(res => {  <br>
                    if (Notification.permission == 'granted') {  <br>
                        console.log("granted permission");  <br>
                        return  <br>
                    }  <br>
                    console.log(res)  <br>
                })  <br> 
            })  <br> 
            .catch(err => console.log("service worker not registered", err))  <br>
    })  <br>
    navigator.serviceWorker.ready.then((Notification) => {  <br>
        var options = {  <br>
            body: "body text",  <br>
            icon: "assets/icons/icon-36x36.png"  <br>
        };  <br>
        Notification.showNotification('Title Notification', options);  <br>
    })  <br>
}  <br>
 <br>
<b>Finale Step, make your website live!</b>

