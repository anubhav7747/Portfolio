const moreAboutMe = document.getElementById('more_about_me');


knowMore = () => {
    window.location.href = '#about_me';
}

moreAboutMe.addEventListener('click', knowMore);