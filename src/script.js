const apiKey = 'vQhw0rgoGpf55uSqfaMuh6OmNngHLj6g';
let allArticles = []; 

async function fetchNews() {
    const url = `https://api.nytimes.com/svc/topstories/v2/science.json?api-key=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        allArticles = data.results; 
        displayNews(allArticles);   
    } catch (error) {
        console.error('Error fetching the news:', error);
    }
}


function displayNews(articles) {
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = ''; 

    articles.forEach(article => {
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');

        const imageUrl = article.multimedia && article.multimedia.length > 0
            ? article.multimedia[0].url 
            : 'default_image.jpg'; 

        newsItem.innerHTML = `
            <img src="${imageUrl}" alt="${article.title}" class="news-image">
            <h2>${article.title}</h2>
            <p>${article.abstract}</p>
            <a href="${article.url}" target="_blank">Read more</a>
        `;

        newsContainer.appendChild(newsItem);
    });
}

const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    burger.classList.toggle('active'); 
});


const searchBar = document.querySelector('.search-bar input');
const searchButton = document.querySelector('.search-bar button');

searchButton.addEventListener('click', () => {
    const searchQuery = searchBar.value.toLowerCase();

    const filteredArticles = allArticles.filter(article =>
        article.title.toLowerCase().includes(searchQuery) ||
        article.abstract.toLowerCase().includes(searchQuery)
    );

    displayNews(filteredArticles); 
});

fetchNews();
