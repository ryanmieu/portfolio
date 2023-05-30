function changeTitle(newTitle) {
    document.title = newTitle;
}



document.getElementById('chat-form').addEventListener('submit', function (e) {
    e.preventDefault();
    var nameInput = document.getElementById('name-input');
    var messageInput = document.getElementById('message-input');
    var name = nameInput.value.trim();
    var message = messageInput.value.trim();

    if (name !== '' && message !== '') {
        addComment(name, message);
        nameInput.value = '';
        messageInput.value = '';
    }
});

function addComment(name, message) {
    var timestamp = new Date();
    var formattedTimestamp = formatTimestamp(timestamp);
    var comment = {
        id: timestamp.getTime(),
        name: name,
        message: message,
        timestamp: formattedTimestamp
    };
    comments.push(comment);
    saveCommentsToLocalStorage();
    displayComment(comment);
}

function saveCommentsToLocalStorage() {
    localStorage.setItem('comments', JSON.stringify(comments));
}

function displayComment(comment) {
    var commentContainer = document.getElementById('chat-messages');
    var commentElement = document.createElement('div');
    commentElement.className = 'comment';
    commentElement.innerHTML = `
      <span class="author">${comment.name}</span>
      <span class="timestamp">${comment.timestamp}</span>
      <p>${comment.message}</p>
    `;
    commentContainer.appendChild(commentElement);
    commentContainer.scrollTop = commentContainer.scrollHeight;
}

function formatTimestamp(timestamp) {
    var options = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    return timestamp.toLocaleString('en-US', options);
}

// Load comments from local storage
var comments = JSON.parse(localStorage.getItem('comments')) || [];

// Display existing comments
comments.forEach(function (comment) {
    displayComment(comment);
});
