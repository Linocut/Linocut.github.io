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
        ],
        youtubeVideo: 'https://www.youtube.com/embed/N59pJ-sAbm0?si=7Ef_mN7XWPKzuiZO&enablejsapi=1'
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
        skills: ['Unity 2D', 'Resource Management', 'Game Jam', 'Art Direction', 'Color Design', 'Background Art', 'Visual Contrast', 'Sprite Art', 'FIEA'],
        descriptions: [
            {
                text: 'Earned 3rd place in a FIEA (Florida Interactive Entertainment Academy) Game Jam with this resource management concept. I pitched the core idea: players make tough decisions about keeping materials, maintaining their health, or saving others using three plant types—one for food, one for medicine, and one to repair protective glass, while resources drain daily through research and plant maintenance.',
                image: 'SunDrop1.PNG'
            },
            {
                text: 'Designed all background art assets to create visual contrast between artificial blue-tinted light and the naturalistic golden sunlight that players collect. Used purple and green color schemes throughout to establish a dreary atmosphere, while drawing plants with multiple decay states to progressively show deterioration and reinforce the resource management tension.',
                image: 'SunDrop2.PNG'
            }
        ],
        youtubeVideo: 'https://www.youtube.com/embed/JGU3GuM_K7M?si=7dmCv9QT0z8Ob0hF&enablejsapi=1'
    },
    'unity-project-2': {
        title: 'Evil Overlord: Soon-to-be Ruler of All',
        date: 'June 2023',
        skills: ['Unity 2D', 'Narrative Design', 'Branching Dialogue', 'Nonlinear Storytelling', 'Art Direction', 'UI Design', 'Lighting Techniques', 'Character Design'],
        descriptions: [
            {
                text: 'Authored branching narrative paths creating a nonlinear storytelling experience where player choices meaningfully impact the story outcome. Led art direction with emphasis on vivid, saturated hues—particularly purples and reds—to establish the villainous aesthetic and enhance the game\'s dark comedy tone.',
                image: 'Overlord1.png'
            },
            {
                text: 'Set against a darkly atmospheric environment to enhance thematic contrast between the vibrant character designs and moody backgrounds. Integrated UI design, spatial composition, and lighting techniques to support the narrative tone and create a cohesive visual experience that reinforced the player\'s role as an aspiring evil overlord.',
                image: 'Overlord2.png'
            }
        ],
        youtubeVideo: 'https://www.youtube.com/embed/RWFrE-1I34o?si=Nd5WNPl0ANsS0Ptz&enablejsapi=1'
    },
    'unity-project-3': {
        title: 'Studio Prototype 2',
        date: 'Ongoing',
        skills: ['Unity 2D', 'Two-Player Controls', 'UI System Design', 'Animation State Management', 'Sprite Flipping', 'Collider Systems', 'Combat Mechanics'],
        descriptions: [
            {
                text: 'Prototype 2 of my studio project. My main goal of the finished studio project for semester 1 was to make simplistic mechanics that I would then expand in the second semester. This includes a UI for controlling limb stats, two-player controls, and general attacks that occur. This includes win and lose states, animations, and collider changes. The main difficulty navigating this was utilizing flipping sprites to ensure the proper limb is animating, not dependent on the flip. The current game includes movement for idle, running, crouching, crouch moving, and jumping. Additionally, this includes punching and blocking for both arms and kicking with both legs.',
                image: 'GameShowCase.PNG'
            },
            {
                text: 'Further intended scope would include UI changes, controller support for UI, and polishing of game mechanics and visual changes for limb stats. Currently, punch is the only supported limb stat to change, but I intend to add stats for legs as well, which would alter their stat separately from the base stat shown here.',
                image: 'GameShowCase.PNG'
            }
        ],
        youtubeVideo: 'https://www.youtube.com/embed/eZug3EqXUmw?si=XONRexEZYEGeoQRu&enablejsapi=1'
    },
    'unity-project-4': {
        title: 'The Potions Predicament',
        date: 'April 2023',
        skills: ['Unity 2D', 'Game Jam', 'Potion-Making Mechanics', 'Narrative Design', 'Character Sprites', 'UI Design', 'Asset Creation', 'Moral Dilemmas'],
        descriptions: [
            {
                text: 'Developed the core concept during a game jam, focusing on potion-making mechanics that narratively impact characters and their stories. I wrote dialogue that presents moral dilemmas, challenging the typical NPC quest-giving dynamic by making players question whether they should really help these characters or if their requests might be morally questionable.',
                image: 'Potion1.PNG'
            },
            {
                text: 'Created all visual assets including backgrounds, UI elements, and character sprites, later enhancing the sprites with detailed facial expressions and personality traits. This artistic evolution strengthened the emotional connection between players and the narrative, making the moral choices feel more impactful and personal.',
                image: 'Potion2.PNG'
            }
        ],
        youtubeVideo: 'https://www.youtube.com/embed/7JtN4t7XCTg?si=7orUdYMJ4_z9xunT&enablejsapi=1'
    },
    'unity-project-5': {
        title: 'Buggy Virus',
        date: 'July 2023',
        skills: ['Unity 2D', 'Project Management', 'Game Jam', 'Click Mechanics', 'Hover Interactions', 'Enemy Design', 'Progressive Difficulty', 'Team Leadership'],
        descriptions: [
            {
                text: 'Directed a week-long major jam project by allocating tasks to my artist collaborator, laying out the gameplay loops and requesting specific assets. I found an entertaining concept of protecting a bug as it grows for accomplishment while avoiding attacks, with countdown timers getting shorter and protection becoming harder until the player shifts to offensive mode, attacking the exterminator directly.',
                image: 'Bugg1.png'
            },
            {
                text: 'Programmed various clicking interactions including pop-ups, click-and-drag mechanics, hover-to-center tabs, and spam clicking to remove objects. Created different enemy spray types: high damage but slow, long-lasting sprays that remain on screen, and super fast but low damage variants. I intentionally designed notification pop-ups to tempt players into clicking and potentially making the game harder for themselves.',
                image: 'Bugg2.png'
            }
        ],
        youtubeVideo: 'https://www.youtube.com/embed/iIG_evFm9dE?si=U-OiZuRrM3UvbaNu&enablejsapi=1'
    },
    'story-of-joe': {
        title: 'Story of Joe: VR Demo',
        date: 'December 2025',
        skills: ['Unity VR', 'Narrative Design', 'VR Exploration', 'Interactive Literature', 'Puzzle Mechanics', 'Immersive Storytelling'],
        descriptions: [
            {
                text: 'The Story of Joe is a non-linear educational VR experience that uses player choices and puzzle solving to create informal, student-driven learning with built-in comprehension checks. This prototype teaches literary concepts including characterization, unreliable narrators, the Hero\'s Journey, and the dynamic relationship between reader and author—reimagined as player and developer.',
                image: 'JoeSS1.png'
            },
            {
                text: 'Designed with three critical educational goals: positive learning outcomes (Education), multiple routes for exploration (Engaging), and cohesive concept delivery across all paths (Consistent). The high-fidelity VR demo demonstrates a complete gameplay loop with sound, writing, environment, and mechanics, asking whether motivation and knowledge for exploring literature increase through interactive VR storytelling.',
                image: 'JoeSS2.png'
            }
        ],
        youtubeVideo: 'https://www.youtube.com/embed/v6ZdlmrAb_c?si=61pnBim9tYqQ9WaF&enablejsapi=1'
    },
    'unity-project-6': {
        title: 'Legacy Frequency',
        date: 'December 2025',
        skills: ['Unity 2D', 'Radar Systems', 'Level Progression', 'Detection Algorithms', 'Enemy Disguise', 'Art Creation', 'Sound Design', 'AI Collaboration'],
        descriptions: [
            {
                text: 'Created a 4-level progressive difficulty game with authoritative, clear dialogue that focuses on the core mission: kill enemies, avoid allies. I handled all art creation and radar generation, found and edited sounds for a scary underwater radar atmosphere, and worked with AI to generate code while refining and specifying system requirements through testing and manual review.',
                image: 'Legacy1.png'
            },
            {
                text: 'Level progression: Level 1 - click enemies, avoid allies (allies show echo radiating). Level 2 - adds enemies disguised as ally ships approaching. Level 3 - adds enemies targeting allies (faster when approaching you). Level 4 - adds special enemies only detectable with the legacy frequency on the left, creating the ultimate detection challenge.',
                image: 'Legacy2.png'
            }
        ],
        youtubeVideo: 'https://www.youtube.com/embed/FBfzyeXnOts?si=4KnmAV9GOmuz9f-S&enablejsapi=1'
    },
    'unity-3d-project-1': {
        title: 'Cat Meoir: Feline Detective',
        date: 'May 2024',
        skills: ['Unity 3D', 'UI Development', 'C# Scripting', 'Custom Save System', 'Raycast Detection', 'Camera Systems', 'Dialog Systems', 'Branching Narratives'],
        descriptions: [
            {
                text: 'Built the UI system in-engine with necessary scripts to toggle objects on and off throughout the detective experience. Integrated this UI functionality with a custom save system that persistently stores player data including visited locations, discovered clues, and developer-specified information across game sessions.',
                image: 'Cat1.PNG'
            },
            {
                text: 'Implemented a raycast-based cat camera system that detects when specific objects are positioned in front of the camera view. Additionally, incorporated a modular dialog system capable of presenting player choices, creating branching decisions that affect the world, spawning clues dynamically, and triggering cutscenes to enhance the narrative experience.',
                image: 'Cat2.PNG'
            }
        ],
        youtubeVideo: 'https://www.youtube.com/embed/N59pJ-sAbm0?si=7Ef_mN7XWPKzuiZO&enablejsapi=1'
    },
    'unity-3d-project-2': {
        title: 'Deep Sea Scourge',
        date: 'March 2023',
        skills: ['Unity 3D', 'Producer Role', 'Team Coordination', 'Pipeline Management', 'Isometric Movement', 'Combat Programming', 'Save Systems', 'Hub World Design'],
        descriptions: [
            {
                text: 'Served as producer coordinating with the director to project manage a 6-person development team. Managed task distribution, facilitated collaboration, and ensured effective pipeline workflow with everyone working simultaneously. Emphasized modular design for art assets and pushed for rapid design documentation to support programming needs.',
                image: 'Deep1.PNG'
            },
            {
                text: 'Programmed core game mechanics starting with isometric movement and shooting systems. Expanded gameplay by implementing unique mechanics including shielding, dashing, and grappling systems. Developed a comprehensive save system that integrated with the hub world to provide seamless player progression.',
                image: 'Deep2.PNG'
            }
        ],
        youtubeVideo: 'https://www.youtube.com/embed/EPH6E6oQRhA?si=vKXFFR06OxcbGtwh&enablejsapi=1'
    },
    'other-project-1': {
        title: 'Lost Match',
        date: 'October 2023',
        skills: ['Visual Storytelling', 'Comic Design', 'Narrative Adaptation', 'Digital Art', 'Literary Reinterpretation'],
        descriptions: [
            {
                text: 'Created a visual narrative comic that reinterprets Hans Christian Andersen\'s "The Little Match Girl" in a contemporary and dramatically different context. Developed a unique artistic approach that transforms the classic tale through modern storytelling techniques and visual design.',
                image: 'Lost1.PNG'
            },
            {
                text: 'Employed innovative comic design principles to create an engaging short-form narrative experience. The project demonstrates versatility in creative mediums beyond interactive games, showcasing skills in visual storytelling, character design, and thematic reinterpretation.',
                image: 'Lost2.PNG'
            }
        ],
        downloadPdf: 'Lost_Match.pdf'
    },
    'other-project-2': {
        title: 'Random Days',
        date: 'October 2023',
        skills: ['Twine', 'Interactive Fiction', 'Narrative Design', 'Randomization Systems', 'Psychological Storytelling', 'User Experience Design'],
        descriptions: [
            {
                text: 'Designed an interactive narrative experience using Twine that explores themes of isolation and routine through randomized daily scenarios. Implemented a third-person perspective system that creates deliberate psychological distance between viewer and protagonist, allowing for both empathy and objectivity while examining modern workplace alienation and technology dependence.',
                image: 'Random1.PNG'
            },
            {
                text: 'Created a looping narrative structure with randomized content variants that reflect the cyclical nature of mundane existence. The interactive design intentionally limits user agency to mirror the protagonist\'s lack of control, using conditional branching and optional information reveals to gradually expose deeper psychological themes. The endless loop mechanic reinforces the narrative\'s exploration of repetition and mental health struggles.',
                image: 'Random2.PNG'
            }
        ],
        youtubeVideo: 'https://www.youtube.com/embed/X1GN3dbjy_o?si=7orUdYMJ4_z9xunT&enablejsapi=1'
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

// P5.js Project Modal Data
const p5jsProjectData = {
    'p5js-project-1': {
        title: 'Glaucia Interview',
        date: 'September 2024',
        p5jsUrl: 'https://editor.p5js.org/Linocut/full/P7oC6vT-J',
        skills: ['p5.js', 'JavaScript', 'Object-Oriented Programming', 'Dialog Systems', 'Interactive Fiction', 'Game Design'],
        descriptions: [
            {
                text: 'Built in P5JS, this dialog-driven game uses custom Message classes and a gameState object to handle branching conversations. The system manages different sprite states (glauciaSpriteNeutral, glauciaSpriteSad, glauciaSpriteHappy) based on player choices, with all artwork created using pixel art techniques.',
                image: 'InterviewPic1.PNG'
            },
            {
                text: 'The story follows a job interview that becomes increasingly strange as players explore deeper conversation paths, revealing the shady nature of the position. As my first dialog system in P5JS, I focused on creating clean, reusable code with preload optimization and modular architecture that I could adapt for future projects.',
                image: 'InterviewPic2.PNG'
            }
        ]
    },
    'p5js-project-2': {
        title: 'Up and Down',
        date: 'January 2025',
        p5jsUrl: 'https://editor.p5js.org/Linocut/full/vWwlNnLp7',
        skills: ['p5.js', 'Collision Detection', 'Animation Systems', 'Map Design', 'Grid-Based Movement', 'Game Mechanics'],
        descriptions: [
            {
                text: 'Building on the dialog system from Glaucia Interview, this adventure game adds directional character movement with animated sprites for each direction (backWalk, frontWalk, rightWalk, leftWalk) and corresponding idle states. The project maintains the Message class structure for conversations while introducing level transitions between different backgrounds (background1, interior1).',
                image: 'GameDemo2.PNG'
            },
            {
                text: 'I implemented a collision detection system that prevents players from walking through objects and NPCs, while the grid-based movement keeps characters aligned to the tile system. The game features item interactions through itemMessage and itemChange variables, creating a more dynamic world where players can collect objects and progress through different map areas using the established dialog framework.',
                image: 'GameDemo4.PNG'
            }
        ]
    },
    'p5js-project-3': {
        title: 'Spaceland Coded',
        date: 'November 2024',
        p5jsUrl: 'https://editor.p5js.org/Linocut/sketches/i2lsaI5dY',
        skills: ['p5.js', '3D Graphics', 'VR Integration', 'Motion Graphics', 'Lighting Systems', 'WebGL'],
        descriptions: [
            {
                text: 'Built using P5JS with A-Frame VR integration, this project creates a surreal 3D environment through the World and VRScene classes. The experience features dual lighting systems (light1, light2) with controlled lightSpeed variables and dynamic particle arrays that populate the virtual space with animated elements.',
                image: 'Space1.PNG'
            },
            {
                text: 'The environment uses a Sky component with fog controls and procedural particle generation through multiple particle arrays (particles, particles2). With controlled objectSpeed and lightSpeed parameters, the project demonstrates how P5JS can work seamlessly with A-Frame to create immersive VR experiences that blend computational creativity with 3D spatial design.',
                image: 'Space2.PNG'
            }
        ]
    },
    'p5js-project-4': {
        title: 'A work issue',
        date: 'December 2024',
        p5jsUrl: 'https://editor.p5js.org/Linocut/full/RVtwxck-Q',
        skills: ['p5.js', 'Mobile Optimization', 'UI Design', 'Dialog Systems', 'Sprite Animation', 'Responsive Design'],
        descriptions: [
            {
                text: 'Building on the Message class framework from Glaucia Interview, this mobile-optimized visual novel features extensive custom artwork including multiple character sprites (tsukiImg, akujiImg, hiroImg, camImg), varied background environments (bgFall, bgCafe, bgOffice, bgStairs), and unique dialog box designs (boxLeft, boxRight) for different conversation types.',
                image: 'LongDialog1.PNG'
            },
            {
                text: 'Designed specifically for mobile play, I added expand and shrink UI controls to accommodate different phone screen sizes so my friend could easily play it. The game features an extensive art library with character duo and trio combinations (hiroDuo, tsukiDuo, tsukiCliff) and specialized choice images, creating a rich visual storytelling experience that builds on the original dialog system architecture.',
                image: 'LongDialog2.PNG'
            }
        ]
    }
};

// Python Project Modal Data
const pythonProjectData = {
    'python-project-2': {
        title: 'Discord Bot: Linocut',
        date: 'September 2021',
        skills: ['Python', 'Discord API', 'Database Management', 'User Authentication', 'API Integration', 'Bot Development'],
        descriptions: [
            {
                text: 'Developed a comprehensive Discord bot for large-scale roleplay server management, handling both administrative and player data storage including inventory systems, information retrieval, and interactive text adventure experiences. Implemented local CSV database management that scales efficiently, currently managing over 24,000 lines of cumulative data across multiple server functions.',
                image: 'Linocut1.PNG'
            },
            {
                text: 'Created an information storage system where players can access saved data such as viewing complete maps and selecting specific locations to learn detailed information about them. Integrated mathematical computation features for real-time campaign assistance and leveraged Discord\'s native data storage to reference existing images, eliminating redundant storage while providing enhanced roleplay variety through efficient data retrieval.',
                image: 'Linocut2.PNG'
            }
        ],
        youtubeVideo: 'https://www.youtube.com/embed/j54qJCvEpDU?si=7orUdYMJ4_z9xunT&enablejsapi=1'
    },
    'python-project-3': {
        title: 'Discord Bot: Mezzotint',
        date: 'September 2023',
        skills: ['Python', 'Perlin Noise', 'Data Processing', 'Algorithm Design', 'Procedural Generation', 'Weather Simulation'],
        descriptions: [
            {
                text: 'Created a Discord bot for generating weather pattern data in large roleplay servers to enhance year-round storytelling with semi-realistic weather patterns. Implemented Perlin noise algorithms to generate gradual randomization across approximately 100 data points with variation offsets between two prime integers, creating natural weather progression.',
                image: 'Weather1.PNG'
            },
            {
                text: 'Developed layered noise systems combining base weather patterns with additional humidity calculations to determine rainfall and cloud generation. The system selects appropriate premade weather descriptions based on calculated rainfall amounts, random chance factors for rainbows, fog parameters, and snow accumulation, providing consistent and immersive weather narratives.',
                image: 'Weather2.PNG'
            }
        ],
        youtubeVideo: 'https://www.youtube.com/embed/_EUiZwlPefs?si=7orUdYMJ4_z9xunT&enablejsapi=1'
    }
};

// Modal functionality
function openVRModal(projectId) {
    const modal = document.getElementById('vr-project-modal');
    
    // Try to find data in different project collections
    let data = vrProjectData[projectId] || p5jsProjectData[projectId] || pythonProjectData[projectId];
    
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

    // Show fullscreen game link for p5js projects
    const fullscreenLinkContainer = document.getElementById('modal-fullscreen-link');
    const fullscreenGameLink = document.getElementById('fullscreen-game-link');
    
    if (data.p5jsUrl) {
        fullscreenLinkContainer.style.display = 'block';
        fullscreenGameLink.href = data.p5jsUrl;
        fullscreenGameLink.textContent = 'Full Screen Game';
    } else if (data.downloadPdf) {
        fullscreenLinkContainer.style.display = 'block';
        fullscreenGameLink.href = data.downloadPdf;
        fullscreenGameLink.textContent = 'Download Full Comic';
        fullscreenGameLink.download = data.downloadPdf;
    } else {
        fullscreenLinkContainer.style.display = 'none';
    }

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

    // Show video section if it's Studio Prototype 2, Story of Joe, Evil Overlord, Potions Predicament, Sundrop, Buggy Virus, Legacy Frequency, Deep Sea Scourge, Random Days, Linocut, or Mezzotint
    const modalVideo = document.getElementById('modal-video');
    if (projectId === 'unity-project-3' || projectId === 'story-of-joe' || projectId === 'unity-project-2' || projectId === 'unity-project-4' || projectId === 'unity-project-1' || projectId === 'unity-project-5' || projectId === 'unity-project-6' || projectId === 'unity-3d-project-2' || projectId === 'other-project-2' || projectId === 'python-project-2' || projectId === 'python-project-3') {
        modalVideo.style.display = 'block';
        
        // Set the video source if the project has a YouTube video
        if (data.youtubeVideo) {
            const modalVideoIframe = document.getElementById('youtube-player-modal');
            if (modalVideoIframe) {
                modalVideoIframe.src = data.youtubeVideo;
            }
        }
        
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