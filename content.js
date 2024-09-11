// Function to insert predefined feedback
function insertFeedback(feedbackText) {
    // Adjust this selector to match the comment box in the review interface
    const commentBox = document.querySelector('textarea');
    if (commentBox) {
        commentBox.value = feedbackText;
    } else {
        alert("Couldn't find the comment box!");
    }
}

// Listen for messages from the popup and insert corresponding feedback
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'macroSpacing1') {
        insertFeedback('Your code needs to be more spaced out...');
    } else if (request.action === 'macroSpacing2') {
        insertFeedback('Your code spacing could be improved for readability...');
    } else if (request.action === 'macroWhitespace1') {
        insertFeedback('You have instances of "Trailing whitespace"...');
    } else if (request.action === 'macroLinelength1') {
        insertFeedback('Try and keep your line lengths below 80 characters...');
    }
    // Add more conditions here for each macro feedback
});
