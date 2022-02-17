const plusList = document.getElementById('plus-list');
const plusBtn = document.getElementById('plus-btn');
const links = document.getElementById('link-list');

const dropDown = () => {
    if (plusList.style.visibility == 'hidden') {
        plusList.style.visibility = 'visible';
        plusList.style.opacity = 1;
        plusList.style.bottom = '8px';
        plusBtn.style.borderColor = '#FA9633';
        plusBtn.style.borderBottomColor = 'rgb(0,0,0,0)';
        plusBtn.style.borderRadius = '3px 3px 0px 0px';
        plusBtn.style.borderBottomWidth = '0px';
        plusBtn.style.paddingBottom = '12px';
        links.style.bottom = '0px';
    } else {
        plusList.style.visibility = 'hidden';
        plusList.style.opacity = 0;
        plusList.style.bottom = '70px';
        plusBtn.style.borderColor = '#fff';
        plusBtn.style.borderBottomColor = '#fff';
        plusBtn.style.borderRadius = '3px';
        plusBtn.style.borderBottomWidth = '2px';
        plusBtn.style.paddingBottom = '10px';
        links.style.bottom = '45px';
    }
}