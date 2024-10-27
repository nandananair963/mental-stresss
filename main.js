function startQuiz() {
    alert("Quiz functionality coming soon!");
}

document.getElementById('search').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    // Here you would filter the resource list based on the query.
    document.getElementById('resource-list').innerHTML = `Searching for: ${query}`;
});
