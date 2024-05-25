function createProgressBar(maximumProgress, currentProgress, color = '#97BE5A') {
    let targetDiv = document.querySelector("[data-acc-text='Progressbar']");
    if (!targetDiv) {
        console.error("Target div not found");
        return;
    }
    targetDiv.innerHTML = '';
    const progressBarContainer = document.createElement('div');
    progressBarContainer.style.position = 'relative';
    progressBarContainer.style.width = '100%';
    progressBarContainer.style.height = '100%';
    progressBarContainer.style.backgroundColor = '#e0e0e0';
    progressBarContainer.style.borderRadius = '5px';
    progressBarContainer.style.overflow = 'hidden';
    progressBarContainer.id = 'progressBarContainer';
    const progressBar = document.createElement('div');
    progressBar.style.height = '100%';
    progressBar.style.width = '0%';
    progressBar.style.backgroundColor = color;
    progressBar.style.transition = 'width 0.5s ease';
    progressBar.id = 'progressBar';


    progressBarContainer.appendChild(progressBar);
    targetDiv.appendChild(progressBarContainer);
    updateProgressBar(currentProgress, maximumProgress);
}
function updateProgressBar(currentProgress, maximumProgress) {
    const progressBar = document.getElementById('progressBar');
    if (progressBar) {
        const progressPercentage = (currentProgress / maximumProgress) * 100;
        progressBar.style.width = `${progressPercentage}%`;
    }
}