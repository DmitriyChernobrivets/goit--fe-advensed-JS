const posts = [
    {
        img: "https://placeimg.com/400/150/arch",
        alt: "pic-1",
        title: "Post title 1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
        link: 'link-1.com'
    },
    {
        img: "https://placeimg.com/400/150/nature",
        alt: "pic-2",
        title: "Post title 2",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
        link: 'link-2.com'
    },
    {
        img: "https://placeimg.com/400/150/arch",
        alt: "pic-3",
        title: "Post title 3",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
        link: 'link-3.com'
    }
];

function createPostCard(posts) {
    const list = document.querySelector('.post')
    const img = document.createElement('img')
    const title = document.createElement('h2')
    const text = document.createElement('p')
    const link = document.createElement('a')

    img.classList.add('post__image')
    img.src = posts.img
    img.alt = posts.alt

    title.classList.add('post__title')
    title.textContent = posts.title

    text.classList.add('post__text')
    text.textContent = posts.text

    link.classList.add('button')
    link.href = posts.link
    link.textContent = "Read more"

    list.append(img, title, text, link)

    return list;
}

const createCards = (posts) => posts.forEach(el => createPostCard(el));

createCards(posts);

console.log(document.body)