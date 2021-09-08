import galleryItems from '../app.js';

// References

const gallery = document.querySelector('.js-gallery');

const container = document.querySelector('div.lightbox');
const imageSource = document.querySelector('img.lightbox__image');
const lightboxOverlay = document.querySelector('.lightbox__overlay');
const clearButton = document.querySelector('button[data-action="close-lightbox"]');





 //CREATION OF THE GALLERY


 function createGallery({ preview, original, description}, index) {
     return `<li class = "gallery__item"><a class = "gallery__link" href = "${original}"><img class = "gallery__image" src='${preview}' data-sourse = '${original}' data-index = '${index}' alt='${description}'></a></li>`;
}
const markup = galleryItems.map(createGallery).join('');

gallery.insertAdjacentHTML('beforeend', markup);
 





// DELEGATION



gallery.addEventListener('click', closeUPView);


function closeUPView(evt) {
    evt.preventDefault();
    
    if (evt.target.nodeName !== 'IMG') {
        return;
    } else {
      
        container.classList.add('is-open');
        const imageRef = evt.target;
        const largeImgURL = imageRef.dataset.sourse;
        imageSource.src = largeImgURL;
        imageSource.alt = imageRef.alt;

        }  
}


//MODAL CLOSED



clearButton.addEventListener('click', modalClose);
lightboxOverlay.addEventListener('click', modalClose);

function modalClose() {
    container.classList.remove('is-open');
     imageSource.src = '';
     imageSource.alt = '';
     imageSource.dataset.index = '';
}

//arrow gallery


