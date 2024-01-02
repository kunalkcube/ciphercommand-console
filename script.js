
// Function to simulate an asynchronous operation
function simulateAsyncOperation(duration) {
    return new Promise(resolve => {
        setTimeout(resolve, duration);
    });
}

// Function to handle progress bar animation
async function handleProgressBar(progressBarContainer, progressBar, statusElement, completionText) {
    progressBarContainer.style.display = 'block';
    let progress = 0;

    for (let i = 0; i <= 100; i++) {
        await simulateAsyncOperation(50); // Simulate progress every 50 milliseconds
        progress++;
        progressBar.style.width = progress + '%';
    }

    progressBarContainer.style.display = 'none';
    statusElement.textContent = completionText;
}

document.addEventListener("DOMContentLoaded", async function () {
    // Step 1
    const stepOneProgressBarContainer = document.getElementById('step-one-progress-bar-container');
    const stepOneProgressBar = document.getElementById('step-one-progress-bar');
    const stepOneStatusElement = document.getElementById('step-one-status');

    await handleProgressBar(stepOneProgressBarContainer, stepOneProgressBar, stepOneStatusElement, 'User Access to Root Completed.');

    // Step 2
    const stepTwoStatusElement = document.getElementById('step-two-status');
    const stepTwoProgressBarContainer = document.getElementById('step-two-progress-bar-container');
    const stepTwoProgressBar = document.getElementById('step-two-progress-bar');

    stepTwoStatusElement.style.display = 'block';
    await handleProgressBar(stepTwoProgressBarContainer, stepTwoProgressBar, stepTwoStatusElement, 'Extracting Sensitive Information Completed.');

    // Step 3
    const stepThreeStatusElement = document.getElementById('step-three-status');
    const stepThreeProgressBarContainer = document.getElementById('step-three-progress-bar-container');
    const stepThreeProgressBar = document.getElementById('step-three-progress-bar');

    stepThreeStatusElement.style.display = 'block';
    await handleProgressBar(stepThreeProgressBarContainer, stepThreeProgressBar, stepThreeStatusElement, 'Cracking Encrypted Files Completed.');

    // Step 4
    const stepFourStatusElement = document.getElementById('step-four-status');
    const stepFourProgressBarContainer = document.getElementById('step-four-progress-bar-container');
    const stepFourProgressBar = document.getElementById('step-four-progress-bar');

    stepFourStatusElement.style.display = 'block';
    await handleProgressBar(stepFourProgressBarContainer, stepFourProgressBar, stepFourStatusElement, 'Bypassing Firewall Security Completed.');

    // Step 5
    const stepFiveStatusElement = document.getElementById('step-five-status');
    const stepFiveProgressBarContainer = document.getElementById('step-five-progress-bar-container');
    const stepFiveProgressBar = document.getElementById('step-five-progress-bar');

    stepFiveStatusElement.style.display = 'block';
    await handleProgressBar(stepFiveProgressBarContainer, stepFiveProgressBar, stepFiveStatusElement, 'Deleting Digital Footprints Completed.');

    // Step 6
    const stepSixStatusElement = document.getElementById('step-six-status');
    const stepSixProgressBarContainer = document.getElementById('step-six-progress-bar-container');
    const stepSixProgressBar = document.getElementById('step-six-progress-bar');

    stepSixStatusElement.style.display = 'block';
    await handleProgressBar(stepSixProgressBarContainer, stepSixProgressBar, stepSixStatusElement, 'Navigating to Root Directory Completed.');

    // Step 7
    const stepSevenStatusElement = document.getElementById('step-seven-status');
    const stepSevenProgressBarContainer = document.getElementById('step-seven-progress-bar-container');
    const stepSevenProgressBar = document.getElementById('step-seven-progress-bar');

    stepSevenStatusElement.style.display = 'block';
    await handleProgressBar(stepSevenProgressBarContainer, stepSevenProgressBar, stepSevenStatusElement, 'Listing Contents Completed.');

    // Display the textarea after completing all steps
    const hackerTextarea = document.getElementById('hacker-textarea');
    hackerTextarea.style.display = 'block';
});