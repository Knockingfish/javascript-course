const posts = [
    {
        title: "Post 1",
        content: "abcdefghijklm"
    },
    {
        title: "Post 2",
        content: "nopqrstuvwyxz"
    },
    {
        title: "Post 3",
        content: "Now I know my ABCs"
    }
];

const container = document.getElementById("posts");

posts.forEach(post => {
    const html = `
        <article>
            <h2>${post.title}</h2>
            <p>${post.content}</p>
        </article>
    `;
    container.insertAdjacentHTML("beforeend", html);
});
