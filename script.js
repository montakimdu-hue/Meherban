document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('readme-container');

    // Fetch the README.md file from your repository
    fetch('README.md')
        .then(response => {
            if (!response.ok) throw new Error("Could not find README.md");
            return response.text();
        })
        .then(markdownText => {
            // Convert Markdown to HTML using the marked library
            container.innerHTML = marked.parse(markdownText);
        })
        .catch(err => {
            container.innerHTML = "<p>Error loading collection. Please try again later.</p>";
            console.error(err);
        });
});
