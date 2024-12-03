// Show more rules functionality
document.getElementById('showMoreBtn').addEventListener('click', function() {
    const extraRules = document.getElementById('extraRules');
    extraRules.classList.toggle('hidden');
    if (extraRules.classList.contains('hidden')) {
        this.innerText = 'Show More Rules';
    } else {
        this.innerText = 'Show Less Rules';
    }
});

