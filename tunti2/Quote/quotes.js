const quotes = [
	"If money is your hope for independence you will never have it. The only real security that a man will have in this world is a reserve of knowledge, experience, and ability.",
	"Beware of false knowledge; it is more dangerous than ignorance.",
	"To acquire knowledge, one must study; but to acquire wisdom, one must observe.",
	"Any fool can know. The point is to understand.",
	"The beautiful thing about learning is nobody can take it away from you.",
	"The man who asks a question is a fool for a minute, the man who does not ask is a fool for life.",
	"Knowledge is knowing a tomato is a fruit; wisdom is not putting it in a fruit salad.",
	"To know that we know what we know, and to know that we do not know what we do not know, that is true knowledge.",
	"It is impossible for a man to learn what he thinks he already knows.",
	"A people without the knowledge of their past history, origin and culture is like a tree without roots.",
	"Integrity without knowledge is weak and useless, and knowledge without integrity is dangerous and dreadful.",
	"A man of knowledge lives by acting, not by thinking about acting.", "Giving a poor person money keeps them poorer longer...often forever; give them knowledge instead."
];

function displayQuote() {
	const quoteContainer = document.getElementById("quote_container");
	const randomIndex = Math.floor(Math.random() * quotes.length);
	quoteContainer.innerHTML = `<p>${quotes[randomIndex]}</p>`;
}
