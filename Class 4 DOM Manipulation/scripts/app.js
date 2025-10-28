console.log("document", document)
console.log('window', window)

const postTitle = document.getElementById('postTitle')
const postContent = document.getElementById('postContent')
const createPostBtn = document.getElementById('createPostBtn')
const postsContainer = document.getElementById('postsContainer')
const header = document.getElementById('header')


const createPostElement = (post) => {
    const postElement = document.createElement('div')
    postElement.classList.add('bg-amber-300', 'p-4', 'border', 'rounded-lg')
    postElement.innerHTML = `
    <div class="flex justify-between">
    <h2>${post.title}</h2>
    <p>${post.content}</p>
    <button id="deletePostBtn" class="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-lg transition duration-200">Delete</button>
    </div>
    `
    postsContainer.appendChild(postElement)
}

window.addEventListener('DOMContentLoaded', () => {


    // mouseover 

    header.addEventListener('mouseover', (e) => {
        console.log(e.target)
        header.style.backgroundColor = 'red'
        header.style.color = 'white'
        console.log(e.target.tagName)
        if(e.target.tagName === 'H1') {
            header.style.backgroundColor = 'blue'
            header.style.color = 'white'
        }
    })

    header.addEventListener('mouseout', () => {
        header.style.backgroundColor = 'white'
        header.style.color = 'black'
    })


    // load data from the localstorage
    let blogPost = []

    const blogPostLocalStorage = localStorage.getItem('blogPost')
    if (blogPostLocalStorage) {
        blogPost = JSON.parse(blogPostLocalStorage)
        blogPost.forEach(post => {
            createPostElement(post)
        })
    }


    let title = ''
    let content = ''

    postTitle.addEventListener('input', () => {
        title = postTitle.value
    })

    postContent.addEventListener('input', () => {
        content = postContent.value
    })

    createPostBtn.addEventListener('click', () => {
        console.log('createPost')
        console.log('title', title)
        console.log('content', content)
        blogPost.push({
            title,
            content,
            id: Date.now()
        })
        console.log('blogPost', blogPost)
        postsContainer.innerHTML = ''


        for (let i = 0; i < blogPost.length; i++) {
            createPostElement(blogPost[i])
        }

        // store it in the local storage
        localStorage.setItem('blogPost', JSON.stringify(blogPost))
    })

    postsContainer.addEventListener('click', (e) => {

        if (e.target.id === 'deletePostBtn') {
            console.log(e.target.parentElement)
            const parentElement = e.target.parentElement
            const title = parentElement.querySelector('h2').textContent
            console.log('title', title)

            // console.log('deletePost')
            const postElement = e.target.parentElement.parentElement
            postElement.remove()

            blogPost = blogPost.filter(post => post.title !== title)
            console.log('blogPost', blogPost)
            localStorage.setItem('blogPost', JSON.stringify(blogPost))
        }
    })

})