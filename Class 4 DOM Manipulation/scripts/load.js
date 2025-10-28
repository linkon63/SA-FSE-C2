const postsContainer = document.getElementById('postsContainer')

window.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < 10000000; i++) {
        console.log('load',i)
        const postElement = document.createElement('div')
        postElement.classList.add('mb-0', 'bg-white', 'rounded-lg', 'shadow', 'p-6')
        postElement.innerHTML = `
            <h2 class="text-2xl font-bold mb-2">Post ${i + 1}</h2>
            <p class="text-gray-600 mb-2">This is a sample post content.</p>
        `
        postsContainer.appendChild(postElement)
    }
})
