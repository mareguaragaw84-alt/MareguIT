 let currentLang = 'en';
        
        const translations = {
            en: {
                home: "Home",
                courses: "Courses",
                about: "About",
                login: "Login",
                logout: "Logout",
                heroText: "Join the best computer training center to build your future. Learn HTML, CSS, and JavaScript from scratch.",
                startBtn: "Get Started",
                htmlCard: "HTML5 Expert",
                htmlDesc: "Learn the structure of modern web pages.",
                cssCard: "CSS3 Styling",
                cssDesc: "Master responsive design and animations.",
                jsCard: "JavaScript Logic",
                jsDesc: "Build interactive and dynamic websites.",
                email: "Email Address",
                password: "Password",
                loginBtnAction: "Sign In"
            },
            am: {
                home: "መነሻ",
                courses: "ኮርሶች",
                about: "ስለ እኛ",
                login: "ግባ",
                logout: "ውጣ",
                heroText: "የወደፊት ህይወትዎን ለመገንባት ምርጡን የኮምፒውተር ስልጠና ይቀላቀሉ። HTML፣ CSS እና JavaScript ከማንም በተሻለ ይማሩ።",
                startBtn: "አሁን ይጀምሩ",
                htmlCard: "HTML5 ኤክስፐርት",
                htmlDesc: "የዘመናዊ ድረ-ገጾችን መዋቅር ይማሩ።",
                cssCard: "CSS3 ስታይል",
                cssDesc: "ምላሽ ሰጪ ንድፍ (Responsive) እና አኒሜሽን ይማሩ።",
                jsCard: "JavaScript ሎጂክ",
                jsDesc: "ይዘታቸው ተለዋዋጭ የሆኑ ድረ-ገጾችን ይገንቡ።",
                email: "ኢሜይል አድራሻ",
                password: "የይለፍ ቃል",
                loginBtnAction: "ግባ"
            }
        };

        function toggleLanguage() {
            currentLang = currentLang === 'en' ? 'am' : 'en';
            document.getElementById('lang-indicator').innerText = currentLang.toUpperCase();
            
            // Update Title Separately
            const titleSpan = document.getElementById('hero-span');
            document.getElementById('hero-title').innerHTML = currentLang === 'en' 
                ? 'Master <span id="hero-span">Web Development</span>' 
                : '<span id="hero-span">የድረ-ገጽ ግንባታን</span> ይማሩ';

            // Loop through all elements with data-key
            document.querySelectorAll('[data-key]').forEach(el => {
                const key = el.getAttribute('data-key');
                if (isLoggedIn && key === 'login') {
                    el.innerText = translations[currentLang]['logout'];
                } else {
                    el.innerText = translations[currentLang][key];
                }
            });

            // Update placeholder
            document.getElementById('searchInput').placeholder = currentLang === 'en' ? "Search courses..." : "ኮርሶችን ይፈልጉ...";
        }

        // --- 2. Dark/Light Mode Toggle ---
        function toggleTheme() {
            document.body.classList.toggle('dark-mode');
            const icon = document.getElementById('theme-icon');
            if (document.body.classList.contains('dark-mode')) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
        }

        // --- 3. Login/Logout Simulation ---
        let isLoggedIn = false;
        const modal = document.getElementById('loginModal');
        const loginBtn = document.getElementById('loginBtn');

        function toggleLogin() {
            if (isLoggedIn) {
                // Perform Logout
                isLoggedIn = false;
                alert("Logged out successfully / በተሳካ ሁኔታ ወጥተዋል");
                updateLoginButton();
            } else {
                // Open Modal
                modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
            }
        }

        function handleLogin(e) {
            e.preventDefault(); // Stop form submission
            // Simulate Authentication
            isLoggedIn = true;
            modal.style.display = 'none';
            alert("Login Successful! / በሰላም ገብተዋል!");
            updateLoginButton();
        }

        function updateLoginButton() {
            const btnText = loginBtn.querySelector('span');
            btnText.innerText = isLoggedIn ? translations[currentLang].logout : translations[currentLang].login;
            loginBtn.style.backgroundColor = isLoggedIn ? '#ef4444' : 'var(--primary-color)'; // Red if logged in
        }

        // Close modal if clicked outside
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }