function showPage(page) {
    const allProjects = document.querySelectorAll('.project-item');
    allProjects.forEach(project => {
      project.classList.add('hidden'); // Hide all projects
    });

    const selectedProjects = document.querySelectorAll('.page-' + page);
    selectedProjects.forEach(project => {
      project.classList.remove('hidden'); // Show selected page projects
    });
  }

  // By default show page 1
  showPage(1);