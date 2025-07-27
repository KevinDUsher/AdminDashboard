function isOverflowingParent(element) {
  if (!element || !element.parentElement) return false;

  const parent = element.parentElement;

  return (
    element.scrollWidth > parent.clientWidth ||
    element.scrollHeight > parent.clientHeight
  );
}


 const allElements = document.getElementsByTagName('*');
    for (let i = 0; i < allElements.length; i++) {
        const element = allElements[i];
        // Perform operations on 'element'
        if(isOverflowingParent(element))
        {
            console.log(element.tagName);
        }
    }