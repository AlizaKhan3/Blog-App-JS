# PWA-Progressive Web Apps
# PWA-Instantly turns our websites in Mobile App or Desktop App
<b>1) Create a manifest.json file in your app folder </b>
   copy paset below code, can generate Icon for PWA app from <a href="https://cloudparker.com/tools/pwa-app-icon-generator" target="_blank"> PWA Icon Generator</a>
   {
  "name": "Dev'Coffee",
  "short_name": "DevCoffee",
  "start_url": "index.html",
  "display": "standalone",
  "background_color": "#fdfdfd",
  "theme_color": "#db4938",
  "orientation": "portrait-primary",
  "icons": [
    {
      "src": "/images/icons/icon-72x72.png",
      "type": "image/png", "sizes": "72x72"
    },
    {
      "src": "/images/icons/icon-96x96.png",
      "type": "image/png", "sizes": "96x96"
    },
    {
      "src": "/images/icons/icon-128x128.png",
      "type": "image/png","sizes": "128x128"
    },
    {
      "src": "/images/icons/icon-144x144.png",
      "type": "image/png", "sizes": "144x144"
    },
    {
      "src": "/images/icons/icon-152x152.png",
      "type": "image/png", "sizes": "152x152"
    },
}
In the end, it's just a JSON file with some mandatory and optional properties.

name: When the browser launches the splash screen, it will be the name displayed on the screen.

short_name: It will be the name displayed underneath your app shortcut on the home screen.

start_url: It will be the page shown to the user when your app is open.

display: It tells the browser how to display the app. There are several modes like minimal-ui, fullscreen, browser etc. Here, we use the standalone mode to hide everything related to the browser.

background_color: When the browser launches the splash screen, it will be the background of the screen.

theme_color: It will be the background color of the status bar when we open the app.

orientation: It tells the browser the orientation to have when displaying the app.

icons: When the browser launches the splash screen, it will be the icon displayed on the screen. Here, I used all sizes to fit any device's preferred icon. But you can just use one or two. It's up to you.

<b>2) Link your manifest.json fill with HTML (index.html) </b>
    <link rel="manifest" href="manifest.json" />
<!-- ios support -->
<link rel="apple-touch-icon" href="images/icons/icon-72x72.png" />
<link rel="apple-touch-icon" href="images/icons/icon-96x96.png" />
<link rel="apple-touch-icon" href="images/icons/icon-128x128.png" />
<link rel="apple-touch-icon" href="images/icons/icon-144x144.png" />
<link rel="apple-touch-icon" href="images/icons/icon-152x152.png" />
<link rel="apple-touch-icon" href="images/icons/icon-192x192.png" />
<link rel="apple-touch-icon" href="images/icons/icon-384x384.png" />
<link rel="apple-touch-icon" href="images/icons/icon-512x512.png" />
<meta name="apple-mobile-web-app-status-bar" content="#db4938" />
<meta name="theme-color" content="#db4938" />

<b>3) Moving towards Service Worker, create a new javascript file serviceWorker.js </b>
   const staticDevCoffee = "dev-coffee-site-v1"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/images/coffee1.jpg",
  "/images/coffee2.jpg",
  "/images/coffee3.jpg",
  "/images/coffee4.jpg",
  "/images/coffee5.jpg",
  "/images/coffee6.jpg",
  "/images/coffee7.jpg",
  "/images/coffee8.jpg",
  "/images/coffee9.jpg",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})

<b>4) Fetch the Assets</b>
In the serviceWorker.js file, add the below code;
self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})

<b>5) Register the Service Worker</b>
In your js/app.js add below code this code will push notifactions also;
if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker
            .register("/serviceWorker.js")
            .then(res => {
                console.log("service worker regsitered");
                Notification.requestPermission().then(res => {
                    if (Notification.permission == 'granted') {
                        console.log("granted permission");
                        return
                    }
                    console.log(res)
                })
            })
            .catch(err => console.log("service worker not registered", err))
    })
    navigator.serviceWorker.ready.then((Notification) => {
        var options = {
            body: "body text",
            icon: "assets/icons/icon-36x36.png"
        };
        Notification.showNotification('Title Notification', options);
    })
}

<b>Finale Step, make your website live!</b>

