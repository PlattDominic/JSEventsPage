
// Array of words that will be randomly chosen to be displayed as element text 
const CODINGWORDS = ['Windows', 'Python', 'Linux', 'React', 'Vue', 'ASP.NET', 'Angular', 'Github', 'TypeScript'];

// Will randomly pick a word from array and will be set as text for element passed through function
let RandomizeElementText = (element) => {
    element.innerHTML = CODINGWORDS[Math.floor(Math.random()*CODINGWORDS.length)];
}

// Will set 'element' font weight to whats passed through function
let ChangeFontType = (element, fontType) => {
    element.style.fontWeight = fontType;
}

// Will set 'element' font color to whats passed through function
let ChangeFontColor = (element, fontColor) => {
    element.style.color = fontColor;
}

