// Gutenberg API integration
const GUTENBERG_API_URL = 'https://gutendex.com/books/';

// Function to fetch most viewed books from Gutenberg
async function fetchMostViewedBooks() {
    try {
        const response = await fetch(`${GUTENBERG_API_URL}?sort=popular`);
        const data = await response.json();
        return data.results.slice(0, 10); // Get top 10 most viewed books
    } catch (error) {
        console.error('Error fetching Gutenberg books:', error);
        return [];
    }
}

// Function to display Gutenberg books
function displayGutenbergBooks(books) {
    const bookList = document.querySelector('#mostViewed .book-list');
    bookList.innerHTML = '';
    books.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.classList.add('book-item');
        bookItem.innerHTML = `
            <img src="${book.formats['image/jpeg'] || 'placeholder.jpg'}" alt="${book.title}">
            <p>${book.title}</p>
            <p>${book.authors[0]?.name || 'Unknown Author'}</p>
        `;
        bookItem.addEventListener('click', () => openGutenbergBook(book));
        bookList.appendChild(bookItem);
    });
}

// Function to open Gutenberg book
function openGutenbergBook(book) {
    const pdfUrl = book.formats['application/pdf'];
    if (pdfUrl) {
        const pdfViewer = document.getElementById('pdfViewer');
        pdfViewer.src = pdfUrl;
        document.getElementById('bookReader').style.display = 'block';
        document.body.style.overflow = 'hidden';
    } else {
        alert('PDF format not available for this book.');
    }
}

// Function to search books (including Gutenberg books)
async function searchBooks(searchTerm) {
    // Search local books
    const localFilteredBooks = books.filter(book => 
        book.title.toLowerCase().includes(searchTerm) || 
        book.author.toLowerCase().includes(searchTerm)
    );

    // Search Gutenberg books
    try {
        const response = await fetch(`${GUTENBERG_API_URL}?search=${searchTerm}`);
        const data = await response.json();
        const gutenbergFilteredBooks = data.results.map(book => ({
            id: book.id,
            title: book.title,
            author: book.authors[0]?.name || 'Unknown Author',
            cover: book.formats['image/jpeg'] || 'placeholder.jpg',
            pdf: book.formats['application/pdf']
        }));

        // Combine local and Gutenberg results
        const allFilteredBooks = [...localFilteredBooks, ...gutenbergFilteredBooks];
        displayBooks('#trendingBooks', allFilteredBooks);
    } catch (error) {
        console.error('Error searching Gutenberg books:', error);
        displayBooks('#trendingBooks', localFilteredBooks);
    }
}

// Update the existing search input event listener
document.getElementById('searchInput').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    searchBooks(searchTerm);
});

// Initialize Gutenberg integration
document.addEventListener('DOMContentLoaded', async function() {
    // ... (existing initialization code)

    // Fetch and display most viewed Gutenberg books
    const mostViewedBooks = await fetchMostViewedBooks();
    displayGutenbergBooks(mostViewedBooks);
});