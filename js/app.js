const titleElement = document.querySelector('#main-title')
titleElement.style.textAlign ='Center'

const bodyElement = document.querySelector ('body')
bodyElement.style.backgroundColor='lightsteelblue'

const quoteElement = document.querySelector('p')
quoteElement.textContent='Life happens, coffee helps.'
// console.log(quoteElement)

const titlesElements = document.querySelectorAll('.highlight-title');

titlesElements.forEach((element) => {
    element.style.fontStyle = 'italic'
})

const newMenuItem = document.createElement('li')
newMenuItem.textContent='Rose Cake'
const pastMenuItemsList = document.getElementById('past-menu-items')
pastMenuItemsList.appendChild(newMenuItem)


const newCafe = document.createElement('li')
newCafe.textContent='Karak Tea'
const cafeSpecialties = document.getElementById('cafe-specialties')
cafeSpecialties.appendChild(newCafe)


const blogContainer = document.querySelector('#blogs');


if (blogContainer) {
    const newBlogPost = document.createElement('div')
    newBlogPost.classList.add('blog-post')
const eventTitle = document.createElement('h3')
    eventTitle.textContent = 'Karak Tea Tasting Event'
 const eventDescription = document.createElement('p')
 eventDescription.textContent = 'We had an amazing time at our recent Karak Tea Tasting Event! Guests enjoyed a variety of exquisite Karak teas.'
 newBlogPost.appendChild(eventTitle)
newBlogPost.appendChild(eventDescription)
blogContainer.appendChild(newBlogPost)
}