'use strict';

const quote = document.querySelector('blockquote');
const Author = document.querySelector('span');
const quote_btn = document.querySelector('.quote-btn');
const tweet_btn = document.querySelector('.tweet-btn');
const api_url = 'https://api.quotable.io/random';

async function getQuote(url) {
    const response = await fetch(url);
    const data = await response.json();
    quote.innerHTML = data.content;
    Author.innerHTML = `---${data.author}`;
}
getQuote(api_url);

quote_btn.addEventListener('click', function(e) {
    getQuote(api_url);
});

function tweet() {
    window.open(
        `https://twitter.com/intent/tweet?text="${quote.innerHTML} "        ${Author.innerHTML}`,
        'twitter window',
        'width=1000,height=1000'
    );
}

tweet_btn.addEventListener('click', function(e) {
    tweet();
});