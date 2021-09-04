 const galleryItems = [
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
        description: 'Hokkaido Flower',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
        description: 'Container Haulage Freight',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
        description: 'Aerial Beach View',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
        description: 'Flower Blooms',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
        description: 'Alpine Mountains',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
        description: 'Mountain Lake Sailing',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
        description: 'Alpine Spring Meadows',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
        description: 'Nature Landscape',
    },
    {
        preview:
            'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
        original:
            'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
        description: 'Lighthouse Coast Sea',
    },
 ];


const gallery = document.querySelector('.js-gallery');

const container = document.querySelector('div.lightbox');
const imageSource = document.querySelector('img.lightbox__image');

const clearButton = document.querySelector('button[data-action="close-lightbox"]');
  


 //CREATION OF THE GALLERY




function createGallery({ preview, description }) {
  return `<li class = "gallery__item"><a class = "gallery__link"><img class = "gallery__image" src='${preview}' alt='${description}'></a></li>`;
}
const markup = galleryItems.map(createGallery).join('');

gallery.insertAdjacentHTML('beforeend', markup);












// DELEGATION



gallery.addEventListener('click', closeUPView);

//let originalPicture = galleryItems.flatMap(item => item.original)


function closeUPView(evt) {
    if (evt.target.nodeName !== 'IMG') {
        return;
    } else {
       //1
        container.classList.add('is-open');
        //2
        
        }
    

}







//MODAL CLOSED



clearButton.addEventListener('click', modalClose);

function modalClose() {
    container.classList.remove('is-open');
}



//MODAL IMAGE INSERTION

/* function createItemImage(obj) {
  const galleryItemImage = document.createEle;
  galleryItemImage.classList.add('gallery__image');
  galleryItemImage.setAttribute('src', obj.preview);
  galleryItemImage.setAttribute('data-source', obj.original);
  galleryItemImage.setAttribute('alt', obj.description);

  return galleryItemImage;
} */