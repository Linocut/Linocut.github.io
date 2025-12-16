// Project Modal Data and Functionality

// VR Project Modal Data
const vrProjectData = {
    'unity-3d-project-1': {
        title: 'Cat Meoir: Feline Detective',
        date: 'May 2024',
        skills: ['Unity 3D', 'C# Scripting', 'Save System', 'Object Recognition', 'UI/UX Design', 'Photography Mechanics'],
        descriptions: [
            {
                text: 'Developed specialized gameplay systems for this 3D detective adventure game, including a custom save framework that tracks player progress across multiple game sessions. Implemented sophisticated object recognition mechanics that allow players to photograph and catalog evidence throughout their investigation.',
                image: 'CatMeoirImage1.png'
            },
            {
                text: 'Created comprehensive user interface functionality to enhance player interaction and usability. Designed and programmed the photography system that validates correct objects within the camera frame, integrating seamlessly with the game\'s progression and narrative structure.',
                image: 'CatMeoirImage2.png'
            }
        ]
    },
    'unity-3d-project-2': {
        title: 'Deep Sea Scourge',
        date: 'March 2023',
        skills: ['Unity 3D', 'Project Management', 'Isometric Design', 'Action Mechanics', 'Team Leadership', 'ClickUp'],
        descriptions: [
            {
                text: 'Supervised six-person development team through comprehensive project management using ClickUp for workflow coordination. Contributed core programming features while maintaining oversight of development milestones and team coordination.',
                image: 'DeepSeaScourgeImage1.png'
            },
            {
                text: 'Developed action-oriented isometric 3D game focused on reef conservation themes. The reef needs your help to save it! Players use special powers and upgrades to fight evil aquatic bosses in this environmental action adventure.',
                image: 'DeepSeaScourgeImage2.png'
            }
        ]
    },
    'unity-project-1': {
        title: 'Sundrop',
        date: 'January 2024',
        skills: ['Unity 2D', 'Art Direction', 'URP 2D Lighting', 'Color Design', 'Post-Apocalyptic Aesthetic', 'Game Jam'],
        descriptions: [
            {
                text: 'Awarded 3rd Place in the FIEA Game Jam. Served as Art Director overseeing the complete visual direction and color design to evoke a compelling post-apocalyptic fantasy atmosphere. Utilized Unity\'s URP 2D lighting system to create dramatic lighting effects that enhanced the mood and atmosphere.',
                image: 'SundropImage1.png'
            },
            {
                text: 'Emphasized tonal cohesion and thematic clarity throughout the visual design. Coordinated with team members to ensure all art assets maintained consistent style and quality. The project showcased effective use of 2D lighting to create depth and atmosphere in a constrained game jam timeline.',
                image: 'SundropImage2.png'
            }
        ]
    },
    'unity-project-2': {
        title: 'Evil Overlord: Soon-to-be Ruler of All',
        date: 'June 2023',
        skills: ['Unity 2D', 'Narrative Design', 'Branching Dialogue', 'Art Direction', 'Color Theory', 'Nonlinear Storytelling'],
        descriptions: [
            {
                text: 'Authored branching narrative paths creating a nonlinear storytelling experience where player choices meaningfully impact the story outcome. Led art direction with emphasis on vivid, saturated hues—particularly purples and reds—to establish the villainous aesthetic and enhance the game\'s dark comedy tone.',
                image: 'EvilOverlordImage1.png'
            },
            {
                text: 'Set against a darkly atmospheric environment to enhance thematic contrast between the vibrant character designs and moody backgrounds. Integrated character design, spatial composition, and lighting techniques to support the narrative tone and create a cohesive visual experience that reinforced the player\'s role as an aspiring evil overlord.',
                image: 'EvilOverlordImage2.png'
            }
        ]
    },
    'unity-project-3': {
        title: 'Studio Prototype 2',
        date: 'Fall 2025',
        skills: ['Unity 2D', 'Two-Player Mechanics', 'UI System Design', 'Animation State Management', 'Sprite Manipulation', 'Collider Systems'],
        descriptions: [
            {
                text: 'Prototype 2 of my studio project. My main goal of the finished studio project for semester 1 was to make simplistic mechanics that I would then expand in the second semester. This includes a UI for controlling limb stats, two-player controls, and general attacks that occur. This includes win and lose states, animations, and collider changes. The main difficulty navigating this was utilizing flipping sprites to ensure the proper limb is animating, not dependent on the flip. The current game includes movement for idle, running, crouching, crouch moving, and jumping. Additionally, this includes punching and blocking for both arms and kicking with both legs.',
                image: 'GameShowCase.PNG'
            },
            {
                text: 'Further intended scope would include UI changes, controller support for UI, and polishing of game mechanics and visual changes for limb stats. Currently, punch is the only supported limb stat to change, but I intend to add stats for legs as well, which would alter their stat separately from the base stat shown here.',
                image: 'GameShowCase.PNG'
            }
        ]
    },
    'unity-project-4': {
        title: 'The Potions Predicament',
        date: 'April 2023',
        skills: ['Unity 2D', 'Narrative Design', 'Dialogue Systems', 'Art Direction', 'Character Design', 'Fantasy Aesthetic', 'Spatial Composition'],
        descriptions: [
            {
                text: 'Served as lead writer, crafting engaging dialogue to establish dynamic character relationships and drive the narrative forward. Developed a cohesive dialogue system that supports multiple character interactions while maintaining consistent voice and tone throughout the fantasy adventure.',
                image: 'PotionsImage1.png'
            },
            {
                text: 'Directed art style toward a cohesive fantasy aesthetic, integrating character design, spatial composition, and lighting techniques to support the narrative tone. Created a visually harmonious world that enhances player immersion and reinforces the magical atmosphere of the potion-making adventure.',
                image: 'PotionsImage2.png'
            }
        ]
    },
    'unity-project-5': {
        title: 'Buggy Virus',
        date: 'July 2023',
        skills: ['Unity 2D', 'Project Management', 'Gameplay Programming', 'Game Jam', 'Progressive Mechanics', 'Team Leadership'],
        descriptions: [
            {
                text: 'Directed week-long Major Game Jam project, overseeing task distribution and progress tracking while contributing to core gameplay implementation. Managed a multidisciplinary team through rapid development cycles and ensured milestone completion within strict time constraints.',
                image: 'BuggyVirusImage1.png'
            },
            {
                text: 'Designed mechanics that build progressive intensity while maintaining balanced gameplay loop. Focused on creating engaging difficulty curves that challenge players without overwhelming them, ensuring the viral spread mechanics remain both strategic and accessible.',
                image: 'BuggyVirusImage2.png'
            }
        ]
    },
    'story-of-joe': {
        title: 'Story of Joe: VR Demo',
        date: 'September 2023',
        skills: ['Unity VR', 'Narrative Design', 'VR Exploration', 'Interactive Literature', 'Puzzle Mechanics', 'Immersive Storytelling'],
        descriptions: [
            {
                text: 'Developed an immersive VR experience that combines exploration mechanics with interactive literature elements. Created a narrative-driven demo that allows players to engage with story elements through virtual reality, blending traditional storytelling with modern VR technology.',
                image: 'StoryOfJoeImage1.png'
            },
            {
                text: 'Integrated puzzle mechanics within the VR environment to enhance player engagement and narrative progression. The demo showcases innovative approaches to mixing exploration with literature, creating a unique experience that demonstrates the potential for VR as a storytelling medium.',
                image: 'StoryOfJoeImage2.png'
            }
        ],
        youtubeVideo: 'https://www.youtube.com/embed/v6ZdlmrAb_c?si=61pnBim9tYqQ9WaF&enablejsapi=1'
    },
    'unity-project-6': {
        title: 'Legacy Frequency',
        date: 'August 2023',
        skills: ['Unity 2D', 'Radar Systems', 'Shooter Mechanics', 'Detection Algorithms', 'Strategic Gameplay', 'Browser Optimization'],
        descriptions: [
            {
                text: 'Developed tactical shooter mechanics focused on radar-based detection systems. Players must shoot enemies on the radar while carefully avoiding causing friendly fire, creating a strategic layer that requires precise identification and timing.',
                image: 'LegacyFrequencyImage1.png'
            },
            {
                text: 'Implemented detection and stealth mechanics that challenge players to focus on what\'s detected versus what remains hidden to progress. The game emphasizes strategic decision-making and careful observation, optimized for browser-based gameplay with responsive controls.',
                image: 'LegacyFrequencyImage2.png'
            }
        ],
        youtubeVideo: 'https://www.youtube.com/embed/FBfzyeXnOts?si=4KnmAV9GOmuz9f-S&enablejsapi=1'
    },
    'unity-3d-project-1': {
        title: 'Cat Meoir: Feline Detective',
        date: 'May 2024',
        skills: ['Unity 3D', 'C# Programming', 'Custom Save System', 'Object Recognition', 'Detective Mechanics', 'Photography System'],
        descriptions: [
            {
                text: 'Developed specialized gameplay systems for this 3D detective adventure game, including a custom save framework that tracks player progress across multiple game sessions. Implemented sophisticated object recognition mechanics that allow players to photograph and catalog evidence throughout their investigation.',
                image: 'CatMeoirImage1.png'
            },
            {
                text: 'Created immersive 3D environments and user interface functionality to enhance player interaction and usability, focusing on intuitive controls for the photography system. Designed seamless integration between the detective mechanics and the save system to provide a cohesive gameplay experience.',
                image: 'CatMeoirImage2.png'
            }
        ]
    },
    'unity-3d-project-2': {
        title: 'Deep Sea Scourge',
        date: 'March 2023',
        skills: ['Unity 3D', 'Project Management', 'Isometric Design', 'Action Mechanics', 'Team Leadership', 'ClickUp'],
        descriptions: [
            {
                text: 'Supervised six-person development team through comprehensive project management using ClickUp for workflow coordination. Contributed core programming features while maintaining oversight of development milestones and team coordination.',
                image: 'DeepSeaScourgeImage1.png'
            },
            {
                text: 'Developed action-oriented isometric 3D game focused on reef conservation themes. The reef needs your help to save it! Players use special powers and upgrades to fight evil aquatic bosses in this environmental action adventure.',
                image: 'DeepSeaScourgeImage2.png'
            }
        ]
    },
    'vrk-haunted-house': {
        title: 'Virtual Reality Knights Haunted House',
        date: 'October 29, 2023',
        skills: ['Unity 3D', 'C# Scripting', 'VR Development', 'OpenXR Toolkit', 'Roomscale Design', 'Event Coordination'],
        descriptions: [
            {
                text: 'Led development of a collaborative VR horror experience for UCF\'s Virtual Reality Knights RSO, where all models, sounds, and code were created by students and alumni. Managed event logistics including determining maximum roomscale allowance for Quest 2/3 headsets within a 4x6 meter space. Using the club president\'s base model for size comparisons, I scaled and designed levels to work within these constraints while creating an immersive experience.',
                image: 'RoomSize.PNG'
            },
            {
                text: 'Programmed dialog systems, jumpscares, scene transitions, and strategic level design that utilized space limitations as natural barriers while guiding players through a back-and-forth critical path to simulate a larger environment. Successfully coordinated the live event at UCF Student Union with three simultaneous play spaces using borrowed curtains and floor markers. Later adapted into a standalone joystick-controlled version for itch.io release with full credits showcasing each team member\'s contributions.',
                image: 'CreditsPicture.PNG'
            }
        ]
    },
    'multiplayer-vr': {
        title: 'Multiplayer VR Experience',
        date: 'December 6, 2023',
        skills: ['OpenXR Toolkit', 'Ubiqu Networking', 'Escape Room Design', 'Puzzle Design', 'GitHub'],
        descriptions: [
            {
                text: 'Collaborated in a 6-person team to develop a networked VR escape room prototype featuring a progression system that unlocks a final puzzle through interconnected challenges. Each puzzle was designed to lead naturally into the next, creating a cohesive multiplayer experience using Ubiqu\'s networking framework for seamless player interaction across Meta Quest headsets.',
                image: 'PuzzleCase.PNG'
            },
            {
                text: 'Served as primary programmer ensuring socket interactables functioned properly with Ubiqu\'s networking architecture. Refined existing puzzle designs and implemented original puzzle mechanics while handling technical challenges of deploying APKs to Meta Quest headsets. Managed collaborative development through GitHub branches, conducting code reviews, merging to main, and maintaining proper version control structure for team coordination.',
                image: 'PlantsPuzzle.PNG'
            }
        ]
    },
    'educational-workshop': {
        title: 'Educational VR Workshop',
        date: 'August 2024',
        skills: ['Educational Design', 'VR Training', 'Interactive Learning', 'Unity 3D', 'Curriculum Development'],
        descriptions: [
            {
                text: 'Developed a comprehensive VR game design module for high school students at UCF downtown campus, featuring interactive programming tutorials, visual scripting, and hands-on learning experiences that explore industry-standard games. Designed to make complex programming concepts accessible through immersive virtual environments with gradual complexity increase into Unity development.',
                image: 'WorkshopSchedule.PNG'
            },
            {
                text: 'Core curriculum included art asset creation, level design topics, and programming fundamentals. Utilized software such as Bitsy alongside collaborative activities like whiteboard map design sessions. Implemented visual scripting with template scenes to provide students an accessible entry point for creating their own VR worlds and understanding game development workflows.',
                image: 'WorkshopActivity.PNG'
            }
        ]
    }
};

// Modal functionality
function openVRModal(projectId) {
    const modal = document.getElementById('vr-project-modal');
    const data = vrProjectData[projectId];
    
    console.log('Opening modal for project:', projectId);
    console.log('Project data:', data);
    
    if (!data) {
        console.log('No data found for project:', projectId);
        return;
    }

    // Populate modal content
    document.getElementById('modal-title').textContent = data.title;
    document.getElementById('modal-date').textContent = data.date;
    
    // Populate skills
    const skillsContainer = document.getElementById('modal-skills');
    skillsContainer.innerHTML = '';
    data.skills.forEach(skill => {
        const skillTag = document.createElement('span');
        skillTag.className = 'skill-tag';
        skillTag.textContent = skill;
        skillsContainer.appendChild(skillTag);
    });

    // Populate descriptions
    data.descriptions.forEach((desc, index) => {
        const textElement = document.getElementById(`description-text-${index + 1}`);
        const imageElement = document.getElementById(`description-image-${index + 1}`);
        
        console.log(`Setting up image ${index + 1}:`, desc.image);
        console.log('Image element found:', !!imageElement);
        
        textElement.textContent = desc.text;
        imageElement.src = desc.image;
        imageElement.alt = data.title + ' - Image ' + (index + 1);
        
        console.log('Image src set to:', imageElement.src);
        
        // Add error handling for images
        imageElement.onerror = function() {
            console.error(`Failed to load image: ${desc.image}`);
            console.error('Full image URL:', this.src);
            console.error('Image element:', this);
            this.style.display = 'none';
        };
        
        imageElement.onload = function() {
            console.log(`Successfully loaded image: ${desc.image}`);
            console.log('Full image URL:', this.src);
            this.style.display = 'block';
        };
    });

    // Show video section if it's Studio Prototype 2
    const modalVideo = document.getElementById('modal-video');
    if (projectId === 'unity-project-3') {
        modalVideo.style.display = 'block';
        // Pause the main video when opening modal
        if (player) {
            try {
                player.pauseVideo();
            } catch(err) {
                // Player not ready or error
            }
        }
    } else {
        modalVideo.style.display = 'none';
    }
    
    // Show modal
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeVRModal() {
    const modal = document.getElementById('vr-project-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
    
    // Pause modal video when closing
    if (modalPlayer) {
        try {
            modalPlayer.pauseVideo();
        } catch(err) {
            // Player not ready or error
        }
    }
}

// Initialize modal event listeners
function initializeModalListeners() {
    // VR and Unity project click handlers (for items with data-project)
    document.querySelectorAll('.vr-project-item[data-project]').forEach(item => {
        item.addEventListener('click', (e) => {
            const projectId = item.getAttribute('data-project');
            openVRModal(projectId);
        });
    });
    
    // Separate click handler for clickable titles
    document.querySelectorAll('.clickable-title').forEach(title => {
        title.addEventListener('click', (e) => {
            e.stopPropagation();
            const projectId = title.getAttribute('data-project');
            openVRModal(projectId);
        });
    });

    // Modal close handlers
    const modalClose = document.getElementById('modal-close');
    const modal = document.getElementById('vr-project-modal');
    
    if (modalClose) {
        modalClose.addEventListener('click', closeVRModal);
    }
    
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target.id === 'vr-project-modal') {
                closeVRModal();
            }
        });
    }

    // Escape key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeVRModal();
        }
    });
}