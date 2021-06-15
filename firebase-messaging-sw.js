importScripts("https://www.gstatic.com/firebasejs/8.6.7/firebase-app.js");
importScripts(
    "https://www.gstatic.com/firebasejs/8.6.7/firebase-messaging.js",
);
// For an optimal experience using Cloud Messaging, also add the Firebase SDK for Analytics.
importScripts(
    "https://www.gstatic.com/firebasejs/8.6.7/firebase-analytics.js",
);

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
    messagingSenderId: "704732010309",
    apiKey: "AIzaSyD-dxT_Y0xrI9rnBey5fzIgDKBfymCDSXY",
    projectId: "testing-dcf03",
    appId: "1:704732010309:web:383b2b8e852443b1bed02c",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
    console.log(
        "[firebase-messaging-sw.js] Received background message ",
        payload,
    );
    // Customize notification here
    const notificationTitle = "Background Message Title";
    const notificationOptions = {
        body: "Background Message body.",
        icon: "/itwonders-web-logo.png",
    };

    return self.registration.showNotification(
        notificationTitle,
        notificationOptions,
    );
});