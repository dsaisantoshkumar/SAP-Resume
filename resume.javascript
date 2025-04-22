function highlight() {
  const skillSections = document.querySelectorAll('section p, section ul');
  skillSections.forEach(el => {
    el.style.backgroundColor = '#e3f2fd';
    el.style.borderLeft = '5px solid #0a6ed1';
    el.style.padding = '8px';
  });
}
