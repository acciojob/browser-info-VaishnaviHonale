//your JS code here. If required.
 const browserName = navigator.appName;
        const version = navigator.appVersion;

        // Create a message
        const message = "You are using " + browserName + " version " + version;

        // Display the message in the browser-info div
        const browserInfoDiv = document.getElementById("browser-info");
        browserInfoDiv.textContent = message;