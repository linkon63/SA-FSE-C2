
const postsContainer = document.getElementById('postsContainer')
const photosContainer = document.getElementById('photosContainer')

window.addEventListener('DOMContentLoaded', () => {
    console.log('post.js')
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
        console.log('load data 1',data)
        postsContainer.innerHTML = ''
        for (let i = 0; i < data.length; i++) {
            const post = data[i]
            const postElement = document.createElement('div')
            postElement.classList.add('mb-0', 'bg-white', 'rounded-lg', 'shadow', 'p-6')
            postElement.innerHTML = `
                <h2 class="text-2xl font-bold mb-2">${post.title}</h2>
                <p class="text-gray-600 mb-2">${post.body}</p>
            `
            postsContainer.appendChild(postElement)
        }
    });
})