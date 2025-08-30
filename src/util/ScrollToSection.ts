export const ScrollToSection = (id: string, cb: () => void = () => {}) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
  cb();
};
