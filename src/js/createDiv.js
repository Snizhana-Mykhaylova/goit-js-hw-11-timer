const createDiv = title => {
  const div = document.createElement('div');
  div.textContent = title;
  return div;
};

export default createDiv;
