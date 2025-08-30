// Quick fix for stuck loading issue
// Add this to index.html after all other scripts

// Fallback if loading gets stuck
setTimeout(() => {
    const loadingScreen = document.getElementById('loadingScreen');
    const dashboard = document.getElementById('dashboard');
    
    if (loadingScreen && loadingScreen.style.display !== 'none') {
        console.warn('[QUICKFIX] Force showing dashboard after 20 seconds');
        
        // Force show dashboard
        loadingScreen.style.display = 'none';
        dashboard.style.display = 'block';
        
        // Set minimal data
        const ipElement = document.getElementById('ipAddress');
        const scoreElement = document.getElementById('scoreValue');
        
        if (ipElement) ipElement.textContent = 'Detection Failed';
        if (scoreElement) scoreElement.textContent = 'N/A';
        
        // Show error message
        const healthScore = document.querySelector('.health-score');
        if (healthScore) {
            healthScore.textContent = 'Unable to complete analysis - Network Error';
            healthScore.style.color = '#e74c3c';
        }
    }
}, 20000); // 20 seconds timeout