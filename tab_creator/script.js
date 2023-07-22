
document.addEventListener('click', function(event) {
  if (event.target.classList.contains('tab')) {
   
    const content = event.target.textContent;
    
    
    const clickPosition = getCaretPosition(event.target);
    

    const newText = prompt('Entrez le texte souhaité :');
    if (newText !== null) {
      const updatedContent = content.substring(0, clickPosition) + newText + content.substring(clickPosition + 1);
      event.target.textContent = updatedContent;
    }
  }
});

function getCaretPosition(element) {
  const selection = window.getSelection();
  const range = document.createRange();
  range.setStart(element, 0);
  range.setEnd(selection.anchorNode, selection.anchorOffset);
  return range.toString().length;
}


