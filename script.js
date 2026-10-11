const books = [
  {
    id: 1,
    title: "Wings of Fire",
    author: "A. P. J. Abdul Kalam",
    available: true
  },
  {
    id: 2,
    title: "The Alchemist",
    author: "Paulo Coelho",
    available: true
  },
  {
    id: 3,
    title: "Atomic Habits",
    author: "James Clear",
    available: false
  },
  {
    id: 4,
    title: "Ponniyin Selvan",
    author: "Kalki Krishnamurthy",
    available: true
  }
];

const bookList = document.getElementById("bookList");
const search = document.getElementById("search");
const message = document.getElementById("message");

function displayBooks() {
  const query = search.value.trim().toLowerCase();

  const filtered = books.filter(book =>
    book.title.toLowerCase().includes(query) ||
    book.author.toLowerCase().includes(query)
  );

  bookList.replaceChildren();

  if (filtered.length === 0) {
    bookList.textContent = "No books found.";
    return;
  }

  filtered.forEach(book => {
    const card = document.createElement("article");
    card.className = "book";

    const title = document.createElement("h3");
    title.textContent = book.title;

    const author = document.createElement("p");
    author.textContent = "Author: " + book.author;

    const status = document.createElement("p");
    status.textContent = book.available
      ? "Status: Available"
      : "Status: Borrowed";

    const button = document.createElement("button");
    button.textContent = book.available ? "Borrow" : "Return";

    button.addEventListener("click", () => {
      book.available = !book.available;

      message.textContent = book.available
        ? "Book returned successfully!"
        : "Book borrowed successfully!";

      displayBooks();
    });

    card.append(title, author, status, button);
    bookList.appendChild(card);
  });
}

search.addEventListener("input", displayBooks);

displayBooks();
