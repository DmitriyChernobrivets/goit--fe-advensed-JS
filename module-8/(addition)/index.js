'use strict';

const galleryImg = [
    { preview: 'img/pic-1.jpg', fullview: 'img/pic-1.jpg', alt: "alt text 1" },
    { preview: 'img/pic-2.jpg', fullview: 'img/pic-2.jpg', alt: "alt text 2" },
    { preview: 'img/pic-3.jpg', fullview: 'img/pic-3.jpg', alt: "alt text 3" },
    { preview: 'img/pic-4.jpg', fullview: 'img/pic-4.jpg', alt: "alt text 4" },
    { preview: 'img/pic-5.jpg', fullview: 'img/pic-5.jpg', alt: "alt text 5" },
    { preview: 'img/pic-6.jpg', fullview: 'img/pic-6.jpg', alt: "alt text 6" },
    { preview: 'img/pic-6.jpg', fullview: 'img/pic-6.jpg', alt: "alt text 6" },
];
class Placeholder {
    constructor(fullview = document.createElement('div'), 
                fullviewImg = document.createElement('img'), 
                itemList = document.createElement('ul'), 
                main = document.createElement('div')) {
        this.fullview = fullview;
        this.fullviewImg = fullviewImg;
        this.itemList = itemList;
        this.main = main;
    }
}

class Gallery {
    constructor(items, parentNodess, defaultActiveItem) {
        this.items = items;
        this.parentNodess = parentNodess;
        this.defaultActiveItem = defaultActiveItem;
    }

    galleryRendering({fullview, fullviewImg, itemList, main}) {
 
        this.mainRender(fullview, fullviewImg, itemList, main);
        this.galleryListCreate(this.items, itemList);
        this.imgCapture(itemList, this.defaultActiveItem, fullviewImg);
        this.registerImgClick(main, fullviewImg);
    }

    registerImgClick(main, fullviewImg) {
        const galleryEventClick = (event) => {
            const target = event.target;
            const imageList = document.querySelectorAll('.items-view_img');
            if (((target.nodeName === "IMG") && (target !== fullviewImg))) {
                fullviewImg.src = target.dataset.fullview;
                imageList.forEach(el => {
                    if (el !== target) {
                        el.classList.remove('modifier')
                    } else
                        el.classList.add('modifier')
                })
            }
            else return;
        }

        main.addEventListener('click', galleryEventClick);
    }

    imgCapture(itemList, defaultActiveItem, fullviewImg) {
        if (itemList.childNodes[defaultActiveItem - 1] !== undefined) {
            let firstChoicedItem = itemList.childNodes[defaultActiveItem - 1].firstChild;
            firstChoicedItem.classList.add('modifier');
            fullviewImg.src = firstChoicedItem.dataset.fullview;
            fullviewImg.alt = firstChoicedItem.alt;
        } else {
            console.log('Нету такого елемента гадереи');
            return;
        }
    }
    galleryListCreate(items, itemList) {
        items.forEach((el, li, img) => {
        li = document.createElement('li');
        img = document.createElement('img');
        img.classList.add('items-view_img');
        li.classList.add('items-view_li');
        itemList.appendChild(li).appendChild(img);
        img.src = el.preview;
        img.dataset.fullview = el.fullview;
        img.alt = el.alt;
    });

    }
    mainRender(fullview, fullviewImg, itemList, main) {
        main.classList.add('image-gallery', 'js-image-gallery');
        fullview.classList.add('fullview');
        fullviewImg.classList.add(this.parentNodess);
        itemList.classList.add('items-view');
        document.body.appendChild(main);
        main.append(fullview, itemList);
        fullview.appendChild(fullviewImg);
    }
}

const gallery = new Gallery(galleryImg, 'fullview-preview', 3);

const gallery2 = new Gallery(galleryImg, 'fullview-preview2', 2);

gallery.galleryRendering(new Placeholder());
gallery2.galleryRendering(new Placeholder());


