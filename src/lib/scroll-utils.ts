/**
 * Scroll to a specific element by ID with smooth animation
 * @param id The ID of the element to scroll to
 */
export const scrollToElement = (id: string): void => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};

/**
 * Navigate to a section on the homepage
 * @param sectionId The ID of the section to scroll to
 * @param isHomePage Boolean indicating if we're on the home page
 */
export const navigateToSection = (sectionId: string, isHomePage: boolean): void => {
  // If we're on the homepage, just scroll to the section
  if (isHomePage) {
    scrollToElement(sectionId);
    return;
  }
  
  // Otherwise, navigate to home page with a section hash
  window.location.href = `/#${sectionId}`;
};