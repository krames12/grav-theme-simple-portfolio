// Declaring main elements
const toggle = document.getElementById("nav-toggle");
const navContainer = document.getElementById("nav-container");
const projectNav = document.querySelectorAll('.project-tag');
const projectList = document.querySelectorAll('.project-single-container');
  
// Menu toggle
toggle.addEventListener('click', function() {
  navContainer.classList.toggle('active');
});

// Project Nav Select
// adding event listener to each tag type.
for(var project of projectNav) {
  project.addEventListener('click', toggleProjects);
}

for(var project of projectList) {
  if(project.classList.contains('application')) {
    project.classList.add('show');
  }
}

function toggleProjects(event) {
  var tagId = event.target.id;
  // Nav higlight based on project type clicked
  for(nav of projectNav) {
    if(nav.id == tagId) {
      nav.classList.add('selected');
    } else {
      nav.classList.remove('selected');
    }
  }

  // Project show based on project type
  for(project of projectList) {
    if(project.classList.contains(tagId)) {
      project.classList.add('show');
    } else {
      project.classList.remove('show');
    }
  }
}