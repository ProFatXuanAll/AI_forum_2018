const modal = document.getElementById('modal');
const icon = document.getElementById('icon');
const description = document.getElementById('description');
const speakers = document.getElementsByClassName('speaker');
modal.style.display = 'none';
modal.style.opacity = '0';

for( let s = 0; s < speakers.length; ++s ) {
    let iconSrc = speakers[s].getElementsByTagName('img')[0].src;
    let headerText = speakers[s].getElementsByTagName('h3')[0].textContent;
    let articleText = speakers[s].getElementsByClassName('cont')[0].textContent;
    speakers[s].addEventListener( 'click', () => {
        displaySpeaker( iconSrc, headerText, articleText );
    } );
}

const displaySpeaker = function( iconSrc, headerText, articleText ){
    modal.style.display = 'block';
    setTimeout(() => { modal.style.opacity = '1'; }, 100);
    icon.src = iconSrc;
    description.getElementsByClassName('header')[0].innerHTML = headerText;
    description.getElementsByTagName('p')[0].innerHTML = articleText;
}

document.getElementById('close').onclick = function() { 
    modal.style.opacity = '0';
    setTimeout(() => { modal.style.display = 'none'; }, 500);
}
