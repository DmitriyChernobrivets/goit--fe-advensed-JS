const galleryItems = [
    { preview: 'img/pic-1.jpg', fullview: 'img/pic-1.jpg', alt: "alt text 1" },
    { preview: 'img/pic-2.jpg', fullview: 'img/pic-2.jpg', alt: "alt text 2" },
    { preview: 'img/pic-3.jpg', fullview: 'img/pic-3.jpg', alt: "alt text 3" },
    { preview: 'img/pic-4.jpg', fullview: 'img/pic-4.jpg', alt: "alt text 4" },
    { preview: 'img/pic-5.jpg', fullview: 'img/pic-5.jpg', alt: "alt text 5" },
    { preview: 'img/pic-6.jpg', fullview: 'img/pic-6.jpg', alt: "alt text 6" },  
];

const gallery = document.querySelector('.js-image-gallery');
const tags = {
    fullview: document.createElement('div'),
    fullviewImg: document.createElement('img'),
    itemList: document.createElement('ul'),
}

const galleryRendering = ({fullview, fullviewImg, itemList}) => {
    galleryMainPlaceholder({fullview, fullviewImg, itemList});
    galleryListCreate(galleryItems, itemList);
    itemCapture(fullviewImg, itemList);
}

const galleryMainPlaceholder = ({fullview, fullviewImg, itemList}) => {
    fullview.classList.add('fullview');
    fullviewImg.classList.add('fullview-preview');
    itemList.classList.add('items-view');
    gallery.append(fullview, itemList);
    fullview.appendChild(fullviewImg);
}

const galleryListCreate = (galleryItems, itemList) => {
    galleryItems.forEach((el,li, img) => {
        li = document.createElement('li');
        img = document.createElement('img');
        itemList.appendChild(li).appendChild(img);
        img.src = el.preview;
        img.dataset.fullview = el.fullview;
        img.alt = el.alt;
    });
}

const itemCapture = (fullviewImg, itemList) => {
    const firstChild = itemList.firstChild.firstChild;
    firstChild.classList.add('border');
    fullviewImg.src = firstChild.dataset.fullview;
    fullviewImg.alt = firstChild.alt;
}


const  galleryEventClick = (event) => {
    const target = event.target;
    const imageList = document.querySelectorAll('li > img');
    const fullviewImg = document.querySelector('.fullview-preview');
    // проверка клика на попадение в нужную картинку и задаем фокус
    if (((target.nodeName === "IMG") && (target !== fullviewImg))) {
        fullviewImg.src = target.dataset.fullview;
        imageList.forEach(el => el !== target 
                              ? el.classList.remove('border') 
                              : el.classList.add('border')          
    )}
    else return;
}



gallery.addEventListener('click', galleryEventClick);
galleryRendering(tags);