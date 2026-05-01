// Load Lucide Icons dynamically if not present
if (!document.getElementById('lucide-script')) {
  const script = document.createElement('script');
  script.id = 'lucide-script';
  script.src = 'https://unpkg.com/lucide@latest';
  document.head.appendChild(script);
}

class AppNavbar extends HTMLElement {
  connectedCallback() {
    const base = this.getAttribute('base') || './';
    
    this.innerHTML = `
      <div class="glass-header">
        <div class="premium-nav">
          <div class="nav-container">
            <a href="${base}index.html" class="brand">
              <img src="${base}image/bg-logo.png" alt="Logo" onerror="this.src='https://placehold.co/100x40/0077b6/ffffff?text=GP+Leh'" class="logo" />
            </a>

            <!-- Mobile Menu Toggle -->
            <button class="mobile-toggle" aria-label="Toggle Menu">
              <i data-lucide="menu" class="menu-icon"></i>
            </button>

            <ul class="nav-links" id="nav-links">
              <button class="mobile-close" aria-label="Close Menu">
                <i data-lucide="x"></i>
                <span aria-hidden="true" class="close-fallback">&times;</span>
              </button>
              
              <li class="nav-item">
                <a href="${base}index.html" class="nav-link">
                  <i data-lucide="home" class="nav-icon"></i> Home
                </a>
              </li>
              
              <li class="nav-item has-dropdown">
                <a href="#" class="nav-link">
                  <i data-lucide="info" class="nav-icon"></i> About Us <i data-lucide="chevron-down" class="arrow"></i>
                </a>
                <div class="dropdown mega-menu">
                  <div class="mega-column">
                    <h4><i data-lucide="building-2"></i> Institute</h4>
                    <a href="${base}AboutUs/princpaldesk.html">Principal's Desk</a>
                    <a href="${base}AboutUs/vision_mission.html">Vision & Mission</a>
                    <a href="${base}AboutUs/objectives.html">Objectives</a>
                  </div>
                  <div class="mega-column">
                    <h4><i data-lucide="network"></i> Infrastructure</h4>
                    <a href="${base}AboutUs/classrooms_labs.html">Classrooms & Labs</a>
                    <a href="${base}AboutUs/library.html">Library</a>
                    <a href="${base}AboutUs/sports_facilities.html">Sports Facilities</a>
                    <a href="${base}AboutUs/hostel.html">Hostel</a>
                    <a href="${base}AboutUs/canteen.html">Canteen</a>
                  </div>
                  <div class="mega-column">
                    <h4><i data-lucide="map-pin"></i> Location</h4>
                    <a href="${base}AboutUs/location_map.html">Campus Map</a>
                    <a href="${base}AboutUs/climate.html">Climate & Env</a>
                    <a href="${base}AboutUs/how_to_reach.html">How to Reach</a>
                  </div>
                </div>
              </li>

              <li class="nav-item has-dropdown">
                <a href="#" class="nav-link">
                  <i data-lucide="book-open" class="nav-icon"></i> Courses <i data-lucide="chevron-down" class="arrow"></i>
                </a>
                <div class="dropdown mega-menu">
                  <div class="mega-column">
                    <h4><i data-lucide="hard-hat"></i> Civil Engineering</h4>
                    <a href="${base}Courses/civil.html">About Dept</a>
                    <a href="${base}Courses/civil_faculty.html">Faculty</a>
                    <a href="${base}Courses/civil_syllabus.html">Syllabus</a>
                    <a href="${base}Courses/civil_labs.html">Labs</a>
                  </div>
                  <div class="mega-column">
                    <h4><i data-lucide="cpu"></i> Computer Engg.</h4>
                    <a href="${base}Courses/computer.html">About Dept</a>
                    <a href="${base}Courses/comp_faculty.html">Faculty</a>
                    <a href="${base}Courses/comp_syllabus.html">Syllabus</a>
                    <a href="${base}Courses/comp_labs.html">Labs</a>
                  </div>
                  <div class="mega-column">
                    <h4><i data-lucide="settings"></i> Mechanical Engg.</h4>
                    <a href="${base}Courses/mechanical.html">About Dept</a>
                    <a href="${base}Courses/mech_faculty.html">Faculty</a>
                    <a href="${base}Courses/mech_syllabus.html">Syllabus</a>
                    <a href="${base}Courses/mech_labs.html">Labs</a>
                  </div>
                </div>
              </li>

              <li class="nav-item has-dropdown">
                <a href="#" class="nav-link">
                  <i data-lucide="graduation-cap" class="nav-icon"></i> Admission <i data-lucide="chevron-down" class="arrow"></i>
                </a>
                <div class="dropdown standard-dropdown">
                  <a href="${base}Admission/procedure.html">Procedure</a>
                  <a href="${base}Admission/seat_intake.html">Seat Intake</a>
                  <a href="${base}Admission/anti_ragging.html">Anti-Ragging</a>
                  <a href="${base}Admission/fee_structure.html">Fee Structure</a>
                  <a href="${base}Admission/student_info.html">Student Info</a>
                </div>
              </li>

              <li class="nav-item has-dropdown">
                <a href="#" class="nav-link">
                  <i data-lucide="download" class="nav-icon"></i> Downloads <i data-lucide="chevron-down" class="arrow"></i>
                </a>
                <div class="dropdown standard-dropdown">
                  <a href="${base}Downloads/forms.html">Forms</a>
                  <a href="${base}Downloads/syllabus.html">Syllabus</a>
                  <a href="${base}Downloads/time_table.html">Time Table</a>
                  <a href="${base}Downloads/prospectus.html">Prospectus</a>
                </div>
              </li>

              <li class="nav-item has-dropdown">
                <a href="#" class="nav-link">
                  <i data-lucide="more-horizontal" class="nav-icon"></i> More <i data-lucide="chevron-down" class="arrow"></i>
                </a>
                <div class="dropdown standard-dropdown">
                  <h4 class="dropdown-header">Notifications</h4>
                  <a href="${base}Notifications/circulars.html">Circulars</a>
                  <a href="${base}Notifications/tenders.html">Tenders</a>
                  <a href="${base}Notifications/results.html">Results</a>
                  <hr>
                  <h4 class="dropdown-header">Grievance</h4>
                  <a href="${base}Grievance/members.html">Members</a>
                  <a href="${base}Grievance/submit.html">Submit</a>
                  <hr>
                  <h4 class="dropdown-header">Staff</h4>
                  <a href="${base}Staff/teaching.html">Teaching Staff</a>
                </div>
              </li>

              <li class="nav-item"><a href="${base}contact.html" class="nav-link btn-contact">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
    `;

    // Mobile menu logic
    const openBtn = this.querySelector('.mobile-toggle');
    const closeBtn = this.querySelector('.mobile-close');
    const navLinks = this.querySelector('.nav-links');
    
    if(openBtn && closeBtn && navLinks) {
      openBtn.addEventListener('click', (e) => {
        e.preventDefault();
        navLinks.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
      });
      
      closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
      });
    }

    // Dropdown toggles for mobile/touch
    const dropdownToggles = this.querySelectorAll('.has-dropdown > .nav-link');
    dropdownToggles.forEach(toggle => {
      toggle.addEventListener('click', (e) => {
        e.preventDefault();
        if(window.innerWidth <= 1100) {
          const parent = toggle.parentElement;
          // Close other open dropdowns
          this.querySelectorAll('.has-dropdown').forEach(item => {
            if(item !== parent) item.classList.remove('touch-open');
          });
          parent.classList.toggle('touch-open');
        }
      });
    });

    // Close the mobile drawer after choosing a real menu link
    this.querySelectorAll('.dropdown a, .btn-contact').forEach(link => {
      link.addEventListener('click', () => {
        if(window.innerWidth <= 992) {
          navLinks.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
        this.querySelectorAll('.has-dropdown').forEach(item => {
          item.classList.remove('touch-open');
        });
      }
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
      if (!this.contains(e.target)) {
        this.querySelectorAll('.has-dropdown').forEach(item => {
          item.classList.remove('touch-open');
        });
      }
    });
    const currentPath = window.location.pathname;
    // Handle root/index cases
    const isRoot = currentPath.endsWith('/') || currentPath === '';
    const allLinks = this.querySelectorAll('a');
    
    allLinks.forEach(link => {
      if (!link.href || link.getAttribute('href') === '#' || link.classList.contains('brand')) return;
      
      try {
        const linkUrl = new URL(link.href, window.location.href);
        const linkPath = linkUrl.pathname.toLowerCase();
        const currentPathLower = window.location.pathname.toLowerCase();
        
        const isMatch = (isRoot && linkPath.endsWith('index.html')) || 
                        linkPath === currentPathLower || 
                        (linkPath.endsWith('/') && currentPathLower.endsWith('index.html')) ||
                        (linkPath.endsWith('index.html') && currentPathLower.endsWith('/'));
                        
        if (isMatch) {
          link.classList.add('active');
          const parentDropdown = link.closest('.has-dropdown');
          if (parentDropdown) {
            const parentLink = parentDropdown.querySelector('.nav-link');
            if (parentLink) parentLink.classList.add('active');
          }
        }
      } catch(e) {}
    });

    // Initialize Lucide icons
    setTimeout(() => {
      if(window.lucide) {
        window.lucide.createIcons();
      } else {
        // Wait and try again if script is still loading
        const interval = setInterval(() => {
          if(window.lucide) {
            window.lucide.createIcons();
            clearInterval(interval);
          }
        }, 100);
      }
    }, 100);
  }
}

class AppFooter extends HTMLElement {
  connectedCallback() {
    const base = this.getAttribute('base') || './';
    
    this.innerHTML = `
      <div class="modern-footer">
        <div class="footer-top">
          <div class="footer-container grid-4">
            <div class="footer-col brand-col">
              <img src="${base}image/bg-logo.png" alt="Logo" onerror="this.src='https://placehold.co/100x40/0077b6/ffffff?text=GP+Leh'" class="footer-logo" />
              <p class="footer-desc">Empowering remote youth through technological education since 2005.</p>
              <div class="social-links">
                <a href="#" class="social-icon" aria-label="Facebook"><i data-lucide="facebook"></i></a>
                <a href="#" class="social-icon" aria-label="Twitter"><i data-lucide="twitter"></i></a>
                <a href="#" class="social-icon" aria-label="Instagram"><i data-lucide="instagram"></i></a>
              </div>
            </div>
            
            <div class="footer-col">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="${base}AboutUs/princpaldesk.html"><i data-lucide="chevron-right" class="li-icon"></i> Principal's Message</a></li>
                <li><a href="${base}Admission/procedure.html"><i data-lucide="chevron-right" class="li-icon"></i> Admissions</a></li>
                <li><a href="${base}Downloads/syllabus.html"><i data-lucide="chevron-right" class="li-icon"></i> Syllabus</a></li>
                <li><a href="${base}Notifications/results.html"><i data-lucide="chevron-right" class="li-icon"></i> Results</a></li>
              </ul>
            </div>
            
            <div class="footer-col">
              <h4>Departments</h4>
              <ul>
                <li><a href="${base}Courses/civil.html"><i data-lucide="chevron-right" class="li-icon"></i> Civil Engineering</a></li>
                <li><a href="${base}Courses/computer.html"><i data-lucide="chevron-right" class="li-icon"></i> Computer Engineering</a></li>
                <li><a href="${base}Courses/mechanical.html"><i data-lucide="chevron-right" class="li-icon"></i> Mechanical Engineering</a></li>
              </ul>
            </div>
            
            <div class="footer-col">
              <h4>Contact Us</h4>
              <ul class="contact-info">
                <li><i data-lucide="map-pin"></i> Main Campus, Leh, Ladakh</li>
                <li><i data-lucide="phone"></i> +91 XXXXX XXXXX</li>
                <li><i data-lucide="mail"></i> gpleh@example.com</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="footer-container">
            <p>&copy; ${new Date().getFullYear()} Govt. Polytechnic College Leh. All rights reserved.</p>
          </div>
        </div>
      </div>
    `;

    setTimeout(() => {
      if(window.lucide) {
        window.lucide.createIcons();
      }
    }, 200);
  }
}

customElements.define('app-navbar', AppNavbar);
customElements.define('app-footer', AppFooter);
