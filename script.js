document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // Update active class
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        });
    });

    // Handle "Share Your Experience" button click
    const shareExperienceButton = document.querySelector('.share-experience-button');
    if (shareExperienceButton) {
        shareExperienceButton.addEventListener('click', () => {
            document.querySelector('#feedback').scrollIntoView({
                behavior: 'smooth'
            });
            // Also highlight the feedback link in nav if it's there
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('.nav-links a[href="#feedback"]').classList.add('active');
        });
    }

    // Handle "Give Feedback" button in header
    const giveFeedbackButton = document.querySelector('.feedback-button');
    if (giveFeedbackButton) {
        giveFeedbackButton.addEventListener('click', () => {
            document.querySelector('#feedback').scrollIntoView({
                behavior: 'smooth'
            });
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('.nav-links a[href="#feedback"]').classList.add('active');
        });
    }

    // Handle "Start Chat" button (placeholder for actual chat functionality)
    const startChatButton = document.querySelector('.start-chat-button');
    if (startChatButton) {
        startChatButton.addEventListener('click', () => {
            alert('Live Chat functionality is coming soon!');
            // In a real application, you would open a chat widget here
        });
    }

    // REMOVED: Old custom form submission handling, as Google Form now handles it.
    // The previous code for `feedbackForm.addEventListener('submit', ...)` has been removed.


    // Set initial active state for navigation based on current scroll position (optional)
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3 // Adjust this value as needed
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === entry.target.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Fallback for initial active link if not observing
    const currentPath = window.location.hash.substring(1);
    if (currentPath) {
        const activeLink = document.querySelector(`.nav-links a[href="#${currentPath}"]`);
        if (activeLink) {
            navLinks.forEach(link => link.classList.remove('active'));
            activeLink.classList.add('active');
        }
    } else {
        // Default to home being active if no hash
        document.querySelector('.nav-links a[href="#home"]').classList.add('active');
    }
});