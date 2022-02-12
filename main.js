const plusList = document.getElementById('plus-list');
const plusBtn = document.getElementById('plus-btn');
const emailClip = document.getElementById('email-clip');
const wappClip = document.getElementById('wapp-clip');

const dropDown = () => {
    if (plusList.style.opacity == 0) {
        plusList.style.visibility = 'visible';
        plusList.style.opacity = 1;
        plusList.style.bottom = '0px';
    } else {
        plusList.style.visibility = 'hidden';
        plusList.style.opacity = 0;
        plusList.style.bottom = '70px';
    }
}

const getWhatsApp = () => {
    wappClip.style.color = 'lightgreen';
    if (emailClip.style.color == 'lightgreen') emailClip.style.color = '#fff';
    setTimeout(() => {
        navigator.clipboard.writeText('71999768309');
        alert('Whatsapp copiado para área de transferência!');
    }, 100)
}

const getEmail = () => {
    emailClip.style.color = 'lightgreen';
    if (wappClip.style.color == 'lightgreen') wappClip.style.color = '#fff';
    setTimeout(() => {
        navigator.clipboard.writeText('joaomarcossb@outlook.com');
        alert('E-mail copiado para área de transferência!');
    }, 100)
}

const wappIn = () => {
    if (wappClip.style.color !== 'lightgreen') wappClip.style.color = '#FA9633';
}

const wappOut = () => {
    if (wappClip.style.color !== 'lightgreen') wappClip.style.color = '#fff';
}

const emailIn = () => {
    if (emailClip.style.color !== 'lightgreen') emailClip.style.color = '#FA9633';
}

const emailOut = () => {
    if (emailClip.style.color !== 'lightgreen') emailClip.style.color = '#fff';
}