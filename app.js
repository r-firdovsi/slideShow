let banner      	 = document.querySelector('.banner');
let bannerButton 	 = document.querySelector('.banner button');
let slideShowWrapper = document.querySelector('.slideshow-wrapper');
let slideShow        = document.querySelector('.slideshow');


bannerButton.addEventListener('click', () => {
	banner.style.display = 'none';
	slideShowWrapper.style.cssText = 'opacity: 1; visibility: visible;'
	slideShow.style.animation = 'slideshow 24s infinite';
})
