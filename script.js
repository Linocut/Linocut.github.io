// Portfolio Website JavaScript Functionality

// Work Categories for p5js section
const workCategories = [
    { name: "Dialog Systems", color: "#85c1ae", works: [
        { title: "Glaucia Interview", link: "https://editor.p5js.org/Linocut/full/P7oC6vT-J", github: "https://github.com/Linocut/GlauciaInterview", description: "An object-oriented approach to dialog systems." }
    ]},
    { name: "Grid-Based Games", color: "#008b8b", works: [
        { title: "Up and Down", link: "https://editor.p5js.org/Linocut/full/vWwlNnLp7", github: "https://github.com/Linocut/Adventure-Game", description: "Expands dialog classes with collision, animation, and map changes." }
    ]},
    { name: "VR and 3D", color: "#9932cc", works: [
        { title: "Spaceland Coded", link: "https://editor.p5js.org/Linocut/full/i2lsaI5dY", github: "https://github.com/Linocut/P5js-3D", description: "A VR art experience exploring motion and lighting." }
    ]}
];

// Navigation Variables
let navigationHistory = ['home'];
let currentSection = 'home';

// YouTube Players
let player, modalPlayer;

// Hamburger menu functionality
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Back button setup
const backButton = document.getElementById('back-button');
backButton.addEventListener('click', goBack);

// Back button functionality
function updateBackButton() {
    const backButton = document.getElementById('back-button');
    if (navigationHistory.length > 1) {
        backButton.style.display = 'flex';
    } else {
        backButton.style.display = 'none';
    }
}

function goBack() {
    if (navigationHistory.length > 1) {
        navigationHistory.pop(); // Remove current section
        const previousSection = navigationHistory[navigationHistory.length - 1];
        showSection(previousSection, false); // false means don't add to history
        currentSection = previousSection;
        updateBackButton();
    }
}

// Section navigation functionality
function showSection(targetId, addToHistory = true) {
    // Hide all sections
    document.querySelectorAll('section').forEach(section => {
        if (section.classList.contains('hidden-section')) {
            section.style.display = 'none';
        } else if (section.id !== targetId && section.id !== '') {
            section.style.display = 'none';
        }
    });
    
    // Show target section
    if (targetId === 'home' || targetId === '') {
        // Show home sections
        document.querySelector('.hero-section').style.display = 'block';
        document.querySelector('.skills-grid').style.display = 'block';
        document.querySelector('.social-media-section').style.display = 'block';
    } else {
        // Hide home sections and show target
        document.querySelector('.hero-section').style.display = 'none';
        document.querySelector('.skills-grid').style.display = 'none';
        document.querySelector('.social-media-section').style.display = 'none';
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.style.display = 'block';
        }
    }

    // Track navigation history
    if (addToHistory && targetId !== currentSection) {
        navigationHistory.push(targetId);
        currentSection = targetId;
        updateBackButton();
    }
}

// Handle navigation links
document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        showSection(targetId);
        
        // Close hamburger menu
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Handle skill card clicks
document.querySelectorAll('.skill-card.section-link').forEach((card) => {
    card.addEventListener('click', (e) => {
        const targetId = card.getAttribute('data-target');
        showSection(targetId);
    });
});

// Initialize - show home by default
showSection('home');

// CV-specific functionality
function initializeCVSection() {
    const downloadBtn = document.getElementById('download-cv');
    const printBtn = document.getElementById('print-cv');

    // Download CV as PDF functionality
    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            // For now, this will print to PDF - in a real scenario you'd implement PDF generation
            window.print();
        });
    }

    // Print CV functionality  
    if (printBtn) {
        printBtn.addEventListener('click', () => {
            // Ensure CV section is visible for printing
            const cvSection = document.getElementById('cv');
            
            if (cvSection && cvSection.style.display !== 'none') {
                // Already showing CV, print directly
                window.print();
            } else {
                // Show CV section temporarily for printing
                showSection('cv');
                setTimeout(() => {
                    window.print();
                }, 200);
            }
        });
    }

    // Update contact email dynamically
    const emailElement = document.getElementById('cv-email');
    if (emailElement) {
        emailElement.textContent = 'Jelloismynick@gmail.com';
    }
}

// Enhanced section navigation with CV support
function updateSectionVisibility() {
    // Update navigation active states
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    // Add active class to current section link
    const currentHash = window.location.hash || '#home';
    const activeLink = document.querySelector(`a[href="${currentHash}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// CV-specific data management
const cvData = {
    contact: {
        email: 'Jelloismynick@gmail.com',
        phone: '', // Add if needed
        location: '' // Add if needed
    },
    updateContactInfo: function(email, phone = '', location = '') {
        this.contact.email = email;
        this.contact.phone = phone;
        this.contact.location = location;
        
        // Update DOM elements
        const emailElement = document.getElementById('cv-email');
        if (emailElement) emailElement.textContent = email;
    }
};

// VR Projects video hover functionality
function initializeVRProjects() {
    const videoContainers = document.querySelectorAll('.video-container');
    console.log('Found video containers:', videoContainers.length);
    
    videoContainers.forEach((container, index) => {
        const video = container.querySelector('.project-video');
        const thumbnail = container.querySelector('.project-thumbnail');
        
        console.log(`Container ${index}:`, {
            hasVideo: !!video,
            hasThumbnail: !!thumbnail,
            videoSrc: video ? video.querySelector('source')?.src : 'none'
        });
        
        // Handle clickable video containers (Studio Prototype 2)
        if (container.classList.contains('clickable-video')) {
            container.addEventListener('click', (e) => {
                // Don't trigger if clicking video controls
                if (e.target.tagName !== 'VIDEO' && !e.target.closest('video')) {
                    if (!container.classList.contains('playing')) {
                        container.classList.add('playing');
                        video.play();
                    }
                }
            });
            
            video.addEventListener('ended', () => {
                container.classList.remove('playing');
                video.currentTime = 0;
            });
            
            video.addEventListener('pause', () => {
                if (video.currentTime === video.duration || video.currentTime === 0) {
                    container.classList.remove('playing');
                }
            });
            
            return; // Skip hover functionality for clickable videos
        }
        
        // Handle regular video containers
        if (video && thumbnail) {
            container.addEventListener('mouseenter', () => {
                console.log(`Hovering over container ${index}`);
                video.currentTime = 0; // Start from beginning
                video.style.opacity = '1';
                thumbnail.style.opacity = '0';
                video.play().catch(e => {
                    console.log('Video autoplay prevented:', e);
                });
            });
            
            container.addEventListener('mouseleave', () => {
                console.log(`Leaving container ${index}`);
                video.pause();
                video.currentTime = 0; // Reset to beginning
                video.style.opacity = '0';
                thumbnail.style.opacity = '1';
            });
            
            // Handle video loading
            video.addEventListener('loadeddata', () => {
                console.log('Video loaded:', video.src);
            });
            
            video.addEventListener('error', (e) => {
                console.log('Video error:', video.src, e);
            });
        }
    });
}

// Re-initialize when VR or Unity section becomes visible
const originalShowSection = showSection;
showSection = function(targetId) {
    originalShowSection(targetId);
    if (targetId === 'vr-works' || targetId === 'unity-works') {
        setTimeout(() => {
            initializeVRProjects();
        }, 100);
    }
};

// P5js Portfolio Generation
function initializeP5jsPortfolio() {
    const portfolioContainer = document.getElementById("portfolio");
    if (!portfolioContainer) return;

    workCategories.forEach(category => {
        const categoryDiv = document.createElement("div");
        categoryDiv.classList.add("category");
        categoryDiv.style.backgroundColor = category.color;
        categoryDiv.innerHTML = `<h2>${category.name}</h2>`;
        portfolioContainer.appendChild(categoryDiv);
        
        const workList = document.createElement("div");
        workList.classList.add("work-list");
        categoryDiv.appendChild(workList);

        category.works.forEach(work => {
            const workItem = document.createElement("div");
            workItem.classList.add("work-item");
            workItem.innerHTML = `
                <h3>${work.title}</h3>
                <p>${work.description}</p>
                <a href="${work.link}" target="_blank">Play</a> | 
                <a href="${work.github}" target="_blank">GitHub</a>
            `;
            workList.appendChild(workItem);
        });

        categoryDiv.addEventListener("click", () => {
            workList.style.display = workList.style.display === "block" ? "none" : "block";
        });
    });
}

// YouTube API functionality
function onYouTubeIframeAPIReady() {
    // Initialize main player
    player = new YT.Player('youtube-player', {
        events: {
            'onReady': onPlayerReady
        }
    });
    
    // Initialize modal player  
    modalPlayer = new YT.Player('youtube-player-modal', {
        events: {
            'onReady': onModalPlayerReady
        }
    });
}

function onPlayerReady(event) {
    // Add click-away listener for main player
    document.addEventListener('click', function(e) {
        const playerElement = document.getElementById('youtube-player');
        if (!playerElement) return;
        const videoContainer = playerElement.closest('.video-container');
        
        if (!videoContainer.contains(e.target)) {
            try {
                player.pauseVideo();
            } catch(err) {
                // Player not ready or error
            }
        }
    });
}

function onModalPlayerReady(event) {
    // Add click-away listener for modal player
    document.addEventListener('click', function(e) {
        const modal = document.getElementById('vr-project-modal');
        const modalPlayerElement = document.getElementById('youtube-player-modal');
        
        if (modal && modal.style.display === 'flex' && modalPlayerElement && !modalPlayerElement.contains(e.target)) {
            try {
                modalPlayer.pauseVideo();
            } catch(err) {
                // Player not ready or error
            }
        }
    });
}

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', () => {
    initializeCVSection();
    updateSectionVisibility();
    updateBackButton();
    initializeVRProjects();
    initializeP5jsPortfolio();
    initializeModalListeners();
});

// Initialize CV section immediately
initializeCVSection();