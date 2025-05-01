document.addEventListener('DOMContentLoaded', () => {
    // Get all dropdown buttons
    const dropdownButtons = document.querySelectorAll('.dropdown-button');

    dropdownButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Find the closest parent project card
            const projectCard = button.closest('.project-card');
            if (projectCard) {
                // Toggle the 'expanded' class on the project card
                projectCard.classList.toggle('expanded');

                // Optional: Adjust max-height dynamically based on content
                // This provides a smoother transition if content height varies significantly.
                const details = projectCard.querySelector('.project-details');
                if (projectCard.classList.contains('expanded')) {
                    // Set max-height to the scrollHeight to allow expansion
                    details.style.maxHeight = details.scrollHeight + 'px';
                } else {
                    // Set max-height back to 0 to collapse
                    details.style.maxHeight = '0';
                }
            }
        });
    });
});
