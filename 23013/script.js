document.addEventListener('DOMContentLoaded', () => {
    const data = {
        status: "ok",
        totalResults: 4030,
        articles: [
            {
                source: { id: null, name: "The New Republic" },
                author: "Gil Duran",
                title: "The Most Powerful Crypto Bro in Washington Has Very Weird Beliefs",
                description: "Brian Armstrong has become a familiar face—or should we say pate—in the U.S. Capitol. The 41-year-old billionaire CEO of Coinbase, the nation’s largest cryptocurrency exchange by a country mile, has regularly traveled to Washington since at least 2018 to lobb…",
                url: "https://newrepublic.com/article/185738/coinbase-brian-armstrong-crypto-lobbying-washington-politicians",
                urlToImage: "https://images.newrepublic.com/f5d25182c071acd4c4fdbfa9139789ddd2d4c6c2.jpeg?w=1200&h=630&crop=faces&fit=crop&fm=jpg",
                publishedAt: "2024-10-01T10:00:00Z",
                content: "The guy with the Tesla chip in his hand is Patri Friedman, a grandson of the economist Milton Friedman the founder of Pronomos Capital, one of Prósperas funders.The company, backed by tech billionair… [+1274 chars]"
            }
        ]
    };

    const fetchNewsBtn = document.getElementById('fetchBtn');
    const newsContainer = document.getElementById('newsContainer');
    let articles = data.articles;  // Use the articles directly from the data variable

    function renderRandomArticle() {
        newsContainer.innerHTML = ''; 
        if (articles.length > 0) {
            const randomIndex = Math.floor(Math.random() * articles.length);
            const article = articles[randomIndex];
            const articleElement = document.createElement('div');
            articleElement.className = 'news-item';
            articleElement.innerHTML = `
                <h2>${article.title}</h2>
                <p>${article.description}</p>
                <img src="${article.urlToImage}" alt="${article.title}">
                <p><a href="${article.url}" target="_blank">Read more</a></p>
            `;
            newsContainer.appendChild(articleElement);
        } else {
            newsContainer.innerHTML = '<p>No articles available.</p>';
        }
    }

    fetchNewsBtn.addEventListener('click', renderRandomArticle);  // Trigger renderRandomArticle on button click
});
