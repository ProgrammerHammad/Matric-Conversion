function handleNavClick(event) {
    event.preventDefault();
    
    const allSelectDivs = document.querySelectorAll('.select');
    allSelectDivs.forEach(div => div.style.display = 'none');
    
    const navText = event.target.textContent.trim();
    
    const targetDiv = document.getElementById(navText);
    if (targetDiv) {
      targetDiv.style.display = 'block';
    }
  }
  
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => link.addEventListener('click', handleNavClick));



