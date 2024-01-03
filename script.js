
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
    const modal = document.getElementById('modal');
    hackerTextarea.style.display = 'block';
    hackerTextarea.value = '>root\n  ├── CryptoSphere\n  └── CyberNest\n>';
    hackerTextarea.selectionStart = hackerTextarea.selectionEnd = hackerTextarea.value.length;
    hackerTextarea.focus();

    let backgroundAudio = new Audio('chipi.mp3');
    let audioPlaying = false;
    const files = {
        'CryptoSphere': ['encrypted-secrets.txt', 'security-blueprints.doc'],
        'CyberNest': ['code-injector.exe', 'do-not-open.exe']
    };

    let currentDirectory = 'root';

    hackerTextarea.addEventListener('keydown', async function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            let command = hackerTextarea.value.split('\n').pop().trim();
            if (command.startsWith('>')) {
                command = command.slice(1);
            }

            if (command.toLowerCase() === 'help') {
                hackerTextarea.value += '\n  Commands:\n  help - Show available commands\n  ls - List contents\n  cd [directory] - Change directory\n  hack - Initiate hacking process\n  cat [file] - Read file content';
            } else if (command.toLowerCase() === 'ls') {
                hackerTextarea.value += `\n  ${getDirectoryContents(currentDirectory)}`;
            } else if (command.toLowerCase().startsWith('cd ')) {
                const newDirectory = command.slice(3);

                if (files[newDirectory]) {
                    await simulateAsyncOperation(1000);
                    currentDirectory = newDirectory;
                    hackerTextarea.value += `\n  Navigated to ${currentDirectory}`;
                } else {
                    hackerTextarea.value += `\n  Error: Directory "${newDirectory}" not found.`;
                }
            } else if (command.toLowerCase() === 'hack') {
                if (currentDirectory !== 'root') {
                    await simulateAsyncOperation(3000);
                    hackerTextarea.value += `\n  Hacking process completed successfully in ${currentDirectory}!`;
                } else {
                    hackerTextarea.value += '\n  Error: Cannot hack from the root directory. Navigate to a folder.';
                }
            } else if (command.toLowerCase().startsWith('cat ')) {
                const file = command.slice(4);
                if (files[currentDirectory] && files[currentDirectory].includes(file)) {
                    await simulateAsyncOperation(1000);
                    hackerTextarea.value += `\n  ${getFileContent(file)}`;
                    if (file.toLowerCase() === 'do-not-open.exe' && !audioPlaying) {
                        modal.style.display = 'block';
                        backgroundAudio.play();
                        audioPlaying = true;
                    }
                } else {
                    hackerTextarea.value += `\n  Error: File "${file}" not found in ${currentDirectory}.`;
                }
            } else {
                hackerTextarea.value += `\n  Error: Syntax error. Command "${command}" not recognized.`;
                if (audioPlaying) {
                    backgroundAudio.pause();
                    backgroundAudio.currentTime = 0;
                    audioPlaying = false;
                    modal.style.display = 'none';
                }
            }

            hackerTextarea.scrollTop = hackerTextarea.scrollHeight;

            hackerTextarea.value += '\n>';
            hackerTextarea.scrollTop = hackerTextarea.scrollHeight;
        }
    });

    window.addEventListener('DOMContentLoaded', (event) => {
        hackerTextarea.focus();
    });

    function getDirectoryContents(directory) {
        if (files[directory]) {
            return files[directory].join('\n  ');
        } else {
            return 'Error: Directory not found.';
        }
    }

    function getFileContent(file) {
        if (file.toLowerCase() === 'encrypted-secrets.txt') {
            return 'Decrypting secrets... \n\n  Top Secret Information: ABCXYZ';
        } else if (file.toLowerCase() === 'security-blueprints.doc') {
            return 'Opening blueprints... \n\n  Security System Plans: Confidential';
        } else if (file.toLowerCase() === 'code-injector.exe') {
            return 'Executing code-injector.exe... \n\n  [Code Injector Activated]';
        } else if (file.toLowerCase() === 'do-not-open.exe') {
            return 'Displaying GIF content:\n  [Chipi GIF](/chipi.gif)';
        } else {
            return `Content of ${file} is not viewable. Use appropriate software to open.`;
        }
    }
});