document.getElementById('macro-spacing1').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'macroSpacing1' });
    });
});

document.getElementById('macro-spacing2').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'macroSpacing2' });
    });
});

document.getElementById('macro-whitespace1').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: 'macroWhitespace1' });
    });
});

document.getElementById('macro-linelength1').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: 'macroLinelength1' });
    });
});

// Add more event listeners for each macro feedback
