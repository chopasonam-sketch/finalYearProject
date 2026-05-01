const fs = require('fs');
const path = require('path');

const siteStructure = [
  { name: 'Home', path: 'index.html', existing: 'index.html' },
  { name: 'About Us', submenu: [
    { header: 'Institute' },
    { name: "Principal's Desk", path: 'AboutUs/princpaldesk.html', existing: 'AboutUs/princpaldesk.html' },
    { name: 'Vision & Mission', path: 'AboutUs/vision_mission.html' },
    { name: 'Objectives', path: 'AboutUs/objectives.html' },
    { header: 'Infrastructure & Facilities' },
    { name: 'Classrooms & Labs', path: 'AboutUs/classrooms_labs.html' },
    { name: 'Library', path: 'AboutUs/library.html' },
    { name: 'Sports Facilities', path: 'AboutUs/sports_facilities.html' },
    { name: 'Hostel', path: 'AboutUs/hostel.html' },
    { name: 'Canteen', path: 'AboutUs/canteen.html' },
    { header: 'Location & Climate' },
    { name: 'Campus Location & Map', path: 'AboutUs/location_map.html' },
    { name: 'Climate & Environment', path: 'AboutUs/climate.html' },
    { name: 'How to Reach', path: 'AboutUs/how_to_reach.html' }
  ]},
  { name: 'Courses', submenu: [
    { header: 'Departments' },
    { name: 'Civil Engineering', path: 'Courses/civil.html', existing: 'Courses/civil.html' },
    { name: 'Civil Faculty', path: 'Courses/civil_faculty.html' },
    { name: 'Civil Syllabus', path: 'Courses/civil_syllabus.html' },
    { name: 'Civil Labs', path: 'Courses/civil_labs.html' },
    { name: 'Computer Engineering', path: 'Courses/computer.html', existing: 'Courses/computer.html' },
    { name: 'Comp Faculty', path: 'Courses/comp_faculty.html' },
    { name: 'Comp Syllabus', path: 'Courses/comp_syllabus.html' },
    { name: 'Comp Labs', path: 'Courses/comp_labs.html' },
    { name: 'Mechanical Engineering', path: 'Courses/mechanical.html', existing: 'Courses/mechanical.html' },
    { name: 'Mech Faculty', path: 'Courses/mech_faculty.html' },
    { name: 'Mech Syllabus', path: 'Courses/mech_syllabus.html' },
    { name: 'Mech Labs', path: 'Courses/mech_labs.html' }
  ]},
  { name: 'Admission', submenu: [
    { name: 'Admission Procedure', path: 'Admission/procedure.html' },
    { name: 'Seat Intake', path: 'Admission/seat_intake.html' },
    { name: 'Anti-Ragging Policy', path: 'Admission/anti_ragging.html' },
    { name: 'Fee Structure', path: 'Admission/fee_structure.html' },
    { name: 'Information for Students', path: 'Admission/student_info.html' }
  ]},
  { name: 'Downloads', submenu: [
    { name: 'Forms', path: 'Downloads/forms.html' },
    { name: 'Syllabus', path: 'Downloads/syllabus.html' },
    { name: 'Time Table', path: 'Downloads/time_table.html' },
    { name: 'Prospectus', path: 'Downloads/prospectus.html' }
  ]},
  { name: 'Notifications', submenu: [
    { name: 'Official Circulars', path: 'Notifications/circulars.html' },
    { name: 'Tender Notifications', path: 'Notifications/tenders.html' },
    { name: 'College Results', path: 'Notifications/results.html' },
    { name: 'Placement Cell', path: 'Notifications/placement.html' }
  ]},
  { name: 'Grievance', submenu: [
    { name: 'Grievance Cell Members', path: 'Grievance/members.html' },
    { name: 'Status Report', path: 'Grievance/status.html' },
    { name: 'Submit Grievance', path: 'Grievance/submit.html' }
  ]},
  { name: 'Staff', submenu: [
    { name: 'Teaching Staff', path: 'Staff/teaching.html' },
    { name: 'Non-Teaching Staff', path: 'Staff/non_teaching.html' },
    { name: 'Administrative Staff', path: 'Staff/administrative.html' },
    { name: 'Academic Arrangement', path: 'Staff/academic.html' }
  ]},
  { name: 'Contact Us', path: 'contact.html', existing: 'contact.html' }
];

function ensureDir(filePath) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

const template = (content, depth) => {
  const base = depth === 0 ? './' : '../'.repeat(depth);
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Government Polytechnic College Leh</title>
  <link rel="stylesheet" href="${base}style/main.css">
  <link rel="stylesheet" href="${base}style/components.css">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <script src="${base}components.js" defer></script>
</head>
<body>
  <app-navbar base="${base}"></app-navbar>
  <main class="page-content">
    <div class="card">
      ${content}
    </div>
  </main>
  <app-footer base="${base}"></app-footer>
</body>
</html>`;
};

// Flatten site structure to get all paths
const allPages = [];
siteStructure.forEach(item => {
  if (item.path) allPages.push(item);
  if (item.submenu) {
    item.submenu.forEach(sub => {
      if (sub.path) allPages.push(sub);
    });
  }
});

// Instead of extracting body, we will just prepend the custom CSS links and component JS to the HEAD,
// and prepend <app-navbar> to body, append <app-footer> to body.
// Then hide the old elements.

function updateExistingHtml(html, depth) {
  const base = depth === 0 ? './' : '../'.repeat(depth);
  
  // Inject into HEAD
  const headInjection = `
  <link rel="stylesheet" href="${base}style/main.css">
  <link rel="stylesheet" href="${base}style/components.css">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <style>
    /* Hide old navbars and footers to show new ones */
    header, .main-nav, .navbar, footer, .footer { display: none !important; }
    /* Give spacing for new navbar */
    body { padding-top: 80px; }
  </style>
  <script src="${base}components.js" defer></script>
</head>`;
  html = html.replace(/<\/head>/i, headInjection);

  // Inject into BODY top
  const bodyTopInjection = `<body style="background-color: var(--light); font-family: 'Inter', sans-serif;">\n  <app-navbar base="${base}"></app-navbar>\n  <main class="page-content">`;
  html = html.replace(/<body[^>]*>/i, bodyTopInjection);

  // Inject into BODY bottom
  const bodyBottomInjection = `  </main>\n  <app-footer base="${base}"></app-footer>\n</body>`;
  html = html.replace(/<\/body>/i, bodyBottomInjection);

  return html;
}

// Create/Update files
allPages.forEach(page => {
  const fullPath = path.join(__dirname, page.path);
  const depth = page.path.split('/').length - 1;

  ensureDir(fullPath);

  if (page.existing && fs.existsSync(fullPath)) {
    let existingHtml = fs.readFileSync(fullPath, 'utf8');
    // only update if not already updated
    if (!existingHtml.includes('<app-navbar')) {
        existingHtml = updateExistingHtml(existingHtml, depth);
        fs.writeFileSync(fullPath, existingHtml);
        console.log('Updated existing:', page.path);
    }
  } else {
    // Generate new file
    let content = `<h1>${page.name}</h1>\n<p>Content for ${page.name} goes here.</p>`;
    fs.writeFileSync(fullPath, template(content, depth));
    console.log('Generated new:', page.path);
  }
});

// Update Aboutus.html and Course.html
const extraFiles = ['AboutUs/Aboutus.html', 'Course.html'];
extraFiles.forEach(file => {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    const depth = file.split('/').length - 1;
    let existingHtml = fs.readFileSync(fullPath, 'utf8');
    if (!existingHtml.includes('<app-navbar')) {
        existingHtml = updateExistingHtml(existingHtml, depth);
        fs.writeFileSync(fullPath, existingHtml);
        console.log('Updated Extra:', file);
    }
  }
});

console.log('Site generation complete!');
