// Get all the required elements and store them as variables
const noticeCount = document.querySelector(".notice-count"); // Notification count
const markAllAsRead = document.querySelector("#notice-read-all-btn"); // Mark-all-as-read button
const newNotificationDot = document.querySelectorAll(".new-notice"); // New notice indicator
const eachNotification = document.querySelectorAll(".notice-content"); // Each notification

// Function to toggle read or unread notification state.
function toggleReadUnread() {
    // Check if there are any new notificaions. 
    if (markAllAsRead.textContent == "Mark all as read") {
        // loop through all the new notifications and apply settings below.
        for (let i = 0; i < newNotificationDot.length; i++) {
            // Remove the red dot from notification.
            newNotificationDot[i].textContent = "";
            // Remove background from read notifications.
            eachNotification[i].classList.remove("unread");
        }
        // Reset number of notifications to zero.
        noticeCount.textContent = 0;
        // Change text to "mark-all-as-unread" after reading all notificaions. 
        markAllAsRead.textContent = "Mark all as unread";

    } else /* Check if all notificaions have been read. */ {
        // loop through all the new notifications and apply settings below.
        for (let i = 0; i < newNotificationDot.length; i++) {
            // Add the red dot to notification.
            newNotificationDot[i].innerHTML = "&bull;";
            // Add background to unread notifications.
            eachNotification[i].classList.add("unread");
        }
        // Change number of notifications to unred notifications.
        noticeCount.textContent = newNotificationDot.length;
        // Change text to "mark-all-as-read" after reseting all notificaions to new. 
        markAllAsRead.innerHTML = "Mark all as read";
    }
}




