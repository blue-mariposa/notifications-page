// Get all the required elements and store them as variables
const noticeCount = document.querySelector(".notice-count"); // Notification count
const markAllAsRead = document.querySelector("#notice-read-all-btn"); // Mark-all-as-read button
const newNotificationDot = document.querySelectorAll(".notice-content .new-notice"); // New notice indicator
const noticeBlocks = document.querySelectorAll(".notice-content"); // Each notification
const wrapper = document.querySelector(".wrapper");

// Check if there are new notiications when the page loads
window.onload = showHideNoticeBanner();

// CHecking if the content of the notification counter has changed.
const observer = new MutationObserver(noNewNoticeBanner); // Functin to call when a change is detected.
// What to observe for. 
// NOTE: Content of the below observtion will be passed onto the MutationObserver above.
observer.observe(noticeCount, {
    childList: true, // Observe the content of the notification counter.
});

// Check and remove new notification when a particular notification is clicked.
// Treating all the available notices as array.
noticeBlocks.forEach((noticeBlock) => {
    // Listen for click on each block of block of notification.
    noticeBlock.addEventListener("click", () => {
        var eachBlockNewNoice = noticeBlock.querySelector(".new-notice"); // Get the new notice indicator for the click notice block.
        // Check if the notice indicator is empty.
        if (eachBlockNewNoice.innerHTML !== "") {
            eachBlockNewNoice.innerHTML = ""; // Delete the content.
            noticeCount.innerHTML -= 1; // Reduce notifiction count by 1.
            noticeBlock.classList.remove("unread"); // Change the backgroundColor.
        } 
    })
});

// Function to toggle read or unread notification state when the 'mark-all-as-read' or 'mark-all-as-unread' button/text is clicked
function toggleReadUnread() {
    // Check if there are any new notificaions. 
    if (markAllAsRead.textContent == "Mark all as read") {
        // loop through all the new notifications and apply settings below.
        for (let i = 0; i < newNotificationDot.length; i++) {
            newNotificationDot[i].textContent = ""; // Remove the red dot from notification.
            noticeBlocks[i].classList.remove("unread"); // Remove background from read notifications.
        }
        noticeCount.textContent = 0; // Reset number of notifications to zero.
        markAllAsRead.textContent = "Mark all as unread"; // Change text to "mark-all-as-unread" after reading all notificaions. 
        showHideNoticeBanner(); // Show banner function

    } else /* Check if all notificaions have been read. */ {
        // loop through all the new notifications and apply settings below.
        for (let i = 0; i < newNotificationDot.length; i++) {
            newNotificationDot[i].innerHTML = "&bull;"; // Add the red dot to notification.
            noticeBlocks[i].classList.add("unread"); // Add background to unread notifications.
        }
        noticeCount.textContent = newNotificationDot.length; // Change number of notifications to unred notifications.
        markAllAsRead.innerHTML = "Mark all as read"; // Change text to "mark-all-as-read" after reseting all notificaions to new. 
        showHideNoticeBanner(); // Show banner function
    }
}

// Check if there are new or no notifications and show a banner message accordingly.
function showHideNoticeBanner() {
    // If notification count is zero(0).
    if (noticeCount.innerHTML == 0) {
        markAllAsRead.textContent = "Mark all as unread";  // Change text to "mark-all-as-unread" after reading all notificaions. 
        wrapper.classList.add("show_bf"); // Show the "You have no new messages!" banner.
        setTimeout(() => {
            wrapper.classList.remove("show_bf")
        }, 1000); // Hide the banner after 3-seconds.
    } else { // If notification count is greater than zero(0).
        wrapper.classList.add("show_aft"); // Show the "You have new messages!" banner.
        setTimeout(() => {
            wrapper.classList.remove("show_aft")
        }, 1000); // Hide the banner after 5-seconds.
    }
}

/*
    Created the below function for the MutationObserver only to avoid the banner being shown anytime a notification is clicked.
    If the showHideNoticeBanner() function is used, "You have a new message!" banner will always show until the countreaches zero.
*/
// Show a banner message if the notification count is zero(0).
function noNewNoticeBanner() {
    // If notification count is zero(0).
    if (noticeCount.innerHTML == 0) {
        markAllAsRead.textContent = "Mark all as unread";  // Change text to "mark-all-as-unread" after reading all notificaions. 
        wrapper.classList.add("show_bf"); // Show the "You have no new messages!" banner.
        setTimeout(() => {
            wrapper.classList.remove("show_bf")
        }, 1000); // Hide the banner after 5-seconds.
    }
}
