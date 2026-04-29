const form = document.getElementById("form");
const email = document.getElementById("email");

form.addEventListener("submit", async function (event) {
    event.preventDefault();

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const posts = await response.json();
        const matchingPosts = posts.filter((post) => post.title.includes(email.value));

        console.log("Matching posts:", matchingPosts);
        alert(`Found ${matchingPosts.length} matching posts. Check the console for details.`);
    } catch (error) {
        console.log(error);
        alert("Unable to fetch posts right now.");
    }
});
