// Sample data with Google Drive links
const GUTENBERG_API_URL = 'https://gutendex.com/books/';


const books = [
    // First open works 
    { id: 2, title: "Learning Angular 2", author: "Pablo Deeleman", cover: "alison_courseware_intro_1213.jpg", pdf: "https://drive.google.com/file/d/1UTfOKSZHIk110I_B91QehwLRSi_Itnx3/preview", category: "Angular" },
    { id: 3, title: "Ansible_Up-and-Running,2nd-Edition", author: "Lorin Hochestein", cover: "images.png", pdf: "https://drive.google.com/file/d/18NMnnZ0azMg2gE9itCvFYZs2E5v9H-jH/preview", category: "Ansible" },
    { id: 4, title: "Arduino-Development", author: "Cornel Amariei", cover: "arduino-programming-2-books-in-1-the.jpg", pdf: "https://drive.google.com/file/d/1aM71o7jlIKYewuvSKKuZ70spWwzXGWX5/preview", category: "Arduino" },
    { id: 5, title: "CSS3 Professional", author: "Piotr Sikora", cover: "css3.jpg", pdf: "https://drive.google.com/file/d/1CMZ7o2gWuI_Dx2m88YbXTkE5ozuBv-ER/preview", category: "CSS" },
    { id: 6, title: "Delphi Cookbook", author: "Michelle Obama", cover: "delphi.jpg", pdf: "https://drive.google.com/file/d/1HP95o_0ou8wCrDsjs0UJh9HpgX-voEIt/preview", category: "Delphi" },
    { id: 7, title: "Devops Automation", author: "Michael Duffy", cover: "devops.jpg", pdf: "https://drive.google.com/file/d/1v74fXuLEKbBCLeSNOSEoY0IrJd28LIA2/preview", category: "Devops" },
    { id: 8, title: "Docker In Action", author: "Jeff Nickoloff", cover: "Docker1.jpg", pdf: "https://drive.google.com/file/d/1rO-EiQARAqrojc_jdnIcctE5BSlIbFJe/preview", category: "Docker" },
    { id: 9, title: "Docker In Practice", author: "Ian Miell", cover: "Docker.png", pdf: "https://drive.google.com/file/d/1ciYcNSEdOV29wUyOviSAvR1Yp-oOGPeq/preview", category: "Docker" },
    { id: 10, title: "Introduction to docker", author: "Unknown", cover: "docker2.jpg", pdf: "https://drive.google.com/file/d/1v--AkVPgqS3403m-qDu7W5qrlQxH5eTY/preview", category: "Docker" },
    { id: 11, title: "SFML Game Development", author: "Raimondas Pupius", cover: "game development.jpeg", pdf: "https://drive.google.com/file/d/15HpJCsYf_dz1G3WwIuaHGBfLMOjRSyU1/preview", category: "Game Development" },
    { id: 12, title: "Github Essential", author: "Achilleas Pipinellis", cover: "git-essentials-2.webp", pdf: "https://drive.google.com/file/d/12nUNQ-6DWOoSWE1Ro6knn3HzSkCFTumv/preview", category: "Github" },
    { id: 13, title: "Jump Start Git", author: "Shaumik", cover: "Github Essential.jpg", pdf: "https://drive.google.com/file/d/119h7PdCJ6Frv8__iYs1dBeBeyegjAbTH/preview", category: "Github" },
    { id: 14, title: "Concurrency in Go", author: "Katherine Cox-Buday", cover: "go lang.jpeg", pdf: "https://drive.google.com/file/d/1hEAi8yQxciemQ_vpMvEkXDV6oNUCPVnq/preview", category: "Go" },
    { id: 15, title: "Harnessing Hibernate", author: "James Elliot", cover: "Java.jpg", pdf: "https://drive.google.com/file/d/120ySInaFde2XDGJ84TYhbs68Q9NSYODu/preview", category: "Java" },
    { id: 16, title: "Java 8 Pocket Guide", author: "Robert", cover: "Java.jpg", pdf: "https://drive.google.com/file/d/1F5OxlpeuQTTqO7TfHnYLqwT-OUbpGIia/preview", category: "Java" },
    { id: 17, title: "Java Deep Learning Essential", author: "Yusuke", cover: "java.jpg", pdf: "https://drive.google.com/file/d/1xQuWPfDBW2xIovqdLHi7av-q_BTmy_Tw/preview", category: "Java" },
    { id: 18, title: "Learning Reactive Programming with java 8", author: "Nickolay", cover: "java.jpg", pdf: "https://drive.google.com/file/d/1WOtiCEtE9PDAPUB6Lf8owKqHPUGExc30/preview", category: "Java" },
    { id: 19, title: "Spring Boot In Action", author: "Craig Walls", cover: "java.jpg", pdf: "https://drive.google.com/file/d/1cfgE6tiQqBOBorz-wvTBf5wtQXUNtJc9/preview", category: "Java" },
    { id: 1, title: "C#-and-.NET-Core-1.0", author: "MARK.J.Price", cover: "css3.jpg", pdf: "https://drive.google.com/file/d/1sgvIDL6zhlbahiIagiFOVY3-8ZOPV87t/preview", category: "nonfiction" },
    { id: 20, title: "Spring Cookbook", author: "Jerome", cover: "java.jpg", pdf: "https://drive.google.com/file/d/1DbEHYE3dr-hAOmsj_7Ae1l35E_IphvUz/preview", category: "Java" },
    { id: 21, title: "Bootstrap Site Blueprint", author: "Matt Lembort", cover: "javascript.jpeg", pdf: "https://drive.google.com/file/d/1nqcBMaEkm9LYdojXHErwLZLaLRt_uLFy/preview", category: "Javascript" },
    { id: 22, title: "Learning Vue", author: "Olga Filipova", cover: "javascript.jpeg", pdf: "https://drive.google.com/file/d/1cSSsjoyeXXW5gI6hqE4crx9mcrHGxXun/preview", category: "Javascript" },
    { id: 23, title: "Learning Web Development with React", author: "Harmeet Singh", cover: "javascript.jpeg", pdf: "https://drive.google.com/file/d/1OOV0oqOIbf-KKOUpr42_ObdDRZ9XMsVY/preview", category: "Javascript" },
    { id: 24, title: "ReactJs Blueprint", author: "Sven.j", cover: "javascipt.jpeg", pdf: "https://drive.google.com/file/d/1Xfw-4PEO8t89QccObjaPWN44ndAEqlm9/preview", category: "Javascript" },
    { id: 25, title: "TypeScript", author: "Vilic Vane", cover: "javascript.jpeg", pdf: "https://drive.google.com/file/d/1Tw7doeLEJNY2MEUEeDIkQxiQF3pxOCr9/preview", category: "Javascript" },
    { id: 26, title: "Ansible_Up-and-Running,2nd-Edition", author: "Lorin Hochestein", cover: "images.png", pdf: "https://drive.google.com/file/d/18NMnnZ0azMg2gE9itCvFYZs2E5v9H-jH/preview", category: "Ansible" },
    { id: 27, title: "Arduino-Development", author: "Cornel Amariei", cover: "arduino-programming-2-books-in-1-the.jpg", pdf: "https://drive.google.com/file/d/1aM71o7jlIKYewuvSKKuZ70spWwzXGWX5/preview", category: "Arduino" },
    { id: 28, title: "CSS3 Professional", author: "Piotr Sikora", cover: "css3.jpg", pdf: "https://drive.google.com/file/d/1CMZ7o2gWuI_Dx2m88YbXTkE5ozuBv-ER/preview", category: "CSS" },
    { id: 29, title: "Delphi Cookbook", author: "Michelle Obama", cover: "delphi.jpg", pdf: "https://drive.google.com/file/d/1HP95o_0ou8wCrDsjs0UJh9HpgX-voEIt/preview", category: "Delphi" },
    { id: 30, title: "Devops Automation", author: "Michael Duffy", cover: "devops.jpg", pdf: "https://drive.google.com/file/d/1v74fXuLEKbBCLeSNOSEoY0IrJd28LIA2/preview", category: "Devops" },
    { id: 31, title: "Docker In Action", author: "Jeff Nickoloff", cover: "Docker1.jpg", pdf: "https://drive.google.com/file/d/1rO-EiQARAqrojc_jdnIcctE5BSlIbFJe/preview", category: "Docker" },
    { id: 32, title: "Docker In Practice", author: "Ian Miell", cover: "Docker.png", pdf: "https://drive.google.com/file/d/1ciYcNSEdOV29wUyOviSAvR1Yp-oOGPeq/preview", category: "Docker" },
    { id: 33, title: "Introduction to docker", author: "Unknown", cover: "docker2.jpg", pdf: "https://drive.google.com/file/d/1v--AkVPgqS3403m-qDu7W5qrlQxH5eTY/preview", category: "Docker" },
    { id: 34, title: "Advance Math", author: "Rakesh Yadav", cover: "advnace math.jpg", pdf: "https://drive.google.com/file/d/1spIQrdeRW3vA1AM7oeS8uKi7OMgRorBt/preview", category: "SSC CGL" },
    { id: 35, title: "Englsih Plinth", author: "Neetu Singh", cover: "english plinth.jpg", pdf: "https://drive.google.com/file/d/1SC5JZbPttXx8uW38RmHDgGB3Pk_K5grb/preview", category: "SSC CGL",},
    { id: 36, title: "Lucent GK English", author: "Lucent", cover: "lucent.jpg", pdf: "https://drive.google.com/file/d/1rjxi5sWXgJ9nw4vr6tc8vjvJnvzo50pA/preview", category: "SSC CGL" },
    { id: 37, title: "Quantitative Aptitude", author: "RS Agrawal", cover: "rs agrawal.jpg", pdf: "https://drive.google.com/file/d/16nwNZBFggXg_tmvjGJq501p9S6gUc2rt/preview", category: "SSC CGL" },
    { id: 38, title: "The art of ancient Egypt", author: "Meuseum of art", cover: "ancient egypt.jpeg", pdf: "https://drive.google.com/file/d/13rMia1b20Ul8LiNcXfw4keE0WSUOfofj/preview", category: ["History","Egypt"] },
    { id: 39, title: "Religion of ancient world", author: "George", cover: "religion of ancient world.jpg", pdf: "https://drive.google.com/file/d/1PvjBvbTrtHWG3EG4-6Q58856CERPHgaj/preview", category: ["History","World"] },
    { id: 40, title: "What is Capitalism", author: "Hoover Institution", cover: "capitalism.jpeg", pdf: "https://drive.google.com/file/d/1vM-nsb83whsrN604kwszFTFXb1CyjM-G/preview", category: ["History","Capitalism"] },
    { id: 41, title: "World History,Culture", author: "Nadejda William", cover: "world history cullture.jpg", pdf: "https://drive.google.com/file/d/1ItDKnQNX5RoQVJVw8TtEi8bpVHO6wxTk/preview", category: ["History","World","Culture"] },
    { id: 42, title: "Discovering Ancient Egypt", author: "National Meuseum", cover: "ancient egypt.jpeg", pdf: "https://drive.google.com/file/d/1jg-C_Znq_OnvddGubKwOSmnx0DhD9-y7/preview", category: ["World","History","World","Egypt"] },
    { id: 43, title: "On History", author: "James", cover: "on history.jpg", pdf: "https://drive.google.com/file/d/1Ehl5wznXK0DOzjwbKxh9nbNYl-Jy06Fh/preview", category: ["History","World"] },
    { id: 44, title: "Story of ancient egypt", author: "George Rawl", cover: "ancient egypt.jpeg", pdf: "https://drive.google.com/file/d/16CdDX_swFOYgQdCtGZKtGcrhJPTXPExL/preview", category: ["Egypt","World","History"] },
    { id: 45, title: "Universal History Vol.1", author: "Alexendra", cover: "universal history.jpeg", pdf: "https://drive.google.com/file/d/1_2-1mW1toHvvcKxpYbldS_BeqtzQ2uTm/preview", category: ["History","World"] },
    { id: 46, title: "Universal History Vol.2", author: "Alexendra", cover: "univeral history.jpeg", pdf: "https://drive.google.com/file/d/17zTIodJIc2IEsGsEZtbG27rjGVkj6WaG/preview", category: "History" },
    { id: 47, title: "Hindu a history", author: "Aundrey", cover: "origin of hinduism.jpg", pdf: "https://drive.google.com/file/d/1-uBIU0nDt35UWriBKECXBPMLiuTG7Ve1/preview", category: ["History","Hindu"] },
    { id: 48, title: "Hinduism Article", author: "American Huminist", cover: "hinduism.jpg", pdf: "https://drive.google.com/file/d/1H3MLxDvrLOUsNmGL1vD4T0zzB8uqr0DI/preview", category: ["History","Hinduism","Hindu"] },
    { id: 49, title: "The history of origin of christianity", author: "", cover: "history of christianity.jpeg", pdf: "https://drive.google.com/file/d/140QpXuAntkmRHCWl3aUFbkIXAogp9WOj/preview", category: ["History","Christianity"] },
    { id: 50, title: "Adolf Hitler Collection of Speeches", author: "Katherine Cox-Buday", cover: "adolf hitler collecction speeches.jpeg", pdf: "https://drive.google.com/file/d/1ybDK7sZLEP6hRgkkto6LHbvv4kBLcgnv/preview", category: ["History","Adolf Hitler"] },
    { id: 51, title: "Hitler's Shadow", author: "Richard", cover: "hitler shadow.jpg", pdf: "https://drive.google.com/file/d/15gEufHyKdtybr0BbwLTgZh3XCBlh6wpt/preview", category: ["Adolf Hitler","History"] },
    { id: 52, title: "Java 8 Pocket Guide", author: "Robert", cover: "Java.jpg", pdf: "https://drive.google.com/file/d/1F5OxlpeuQTTqO7TfHnYLqwT-OUbpGIia/preview", category: "Java" },
    { id: 53, title: "Java Deep Learning Essential", author: "Yusuke", cover: "java.jpg", pdf: "https://drive.google.com/file/d/1xQuWPfDBW2xIovqdLHi7av-q_BTmy_Tw/preview", category: "Java" },
    { id: 54, title: "Learning Reactive Programming with java 8", author: "Nickolay", cover: "java.jpg", pdf: "https://drive.google.com/file/d/1WOtiCEtE9PDAPUB6Lf8owKqHPUGExc30/preview", category: "Java" },
    { id: 55, title: "Ikigai - Japanese Secret to a life", author: "Hector Garcia", cover: "ikigai.png", pdf: "https://drive.google.com/file/d/1uFFb-0xXrylWS6wcYUe7DxYEjtafGVwf/preview", category: ["Life","Japanese"] },


];

const categories = ["C#", "History","World","Hindu","Hinduism","Adolf Hitler","Christianity","Capitalism","Egypt","Culture","Java", "Javascript", "Arduino", "Delphi", "Devops", "Docker", "JavaScript","Japanese","Life","SSC CGL"].sort();

// Function to display books
function displayBooks(section, books) {
    const bookList = document.querySelector(`${section} .book-list`);
    bookList.innerHTML = '';
    books.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.classList.add('book-item');
        bookItem.innerHTML = `
            <img src="${book.cover}" alt="${book.title}" onerror="this.src='placeholder.jpg'">
            <p>${book.title || 'Untitled'}</p>
            <p>${book.author || 'Unknown Author'}</p>
        `;
        bookItem.addEventListener('click', () => openBook(book));
        bookList.appendChild(bookItem);
    });
}
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

function openGutenbergBook(book) {
    let readableUrl = book.formats['application/pdf'];
    
    // If PDF is not available, check for text formats
    if (!readableUrl) {
        const textFormats = ['text/plain', 'text/html', 'text/plain; charset=utf-8'];
        for (let format of textFormats) {
            if (book.formats[format]) {
                readableUrl = book.formats[format];
                break;
            }
        }
    }

    if (readableUrl) {
        const pdfViewer = document.getElementById('pdfViewer');
        pdfViewer.src = readableUrl;
        document.getElementById('bookReader').style.display = 'block';
        document.body.style.overflow = 'hidden';
    } else {
        alert('No readable format available for this book.');
    }
}

// Function to search books (including Gutenberg books)
let searchCache = {};
let searchTimeout;

async function searchBooks(searchTerm) {
    if (searchTimeout) {
        clearTimeout(searchTimeout);
    }

    searchTimeout = setTimeout(async () => {
        if (searchCache[searchTerm]) {
            displaySearchResults(searchCache[searchTerm], searchTerm);
            return;
        }

        const localFilteredBooks = books.filter(book => 
            book.title.toLowerCase().includes(searchTerm) || 
            book.author.toLowerCase().includes(searchTerm)
        );

        try {
            const response = await fetch(`${GUTENBERG_API_URL}?search=${searchTerm}`);
            const data = await response.json();
            const gutenbergFilteredBooks = data.results.map(book => ({
                id: book.id,
                title: book.title,
                author: book.authors[0]?.name || 'Unknown Author',
                cover: book.formats['image/jpeg'] || 'placeholder.jpg',
                pdf: book.formats['application/pdf'] || book.formats['text/html'] || book.formats['text/plain'] || ''
            }));

            const allFilteredBooks = [...localFilteredBooks, ...gutenbergFilteredBooks];
            searchCache[searchTerm] = allFilteredBooks;
            displaySearchResults(allFilteredBooks, searchTerm);
        } catch (error) {
            console.error('Error searching Gutenberg books:', error);
            displaySearchResults(localFilteredBooks, searchTerm);
        }
    }, 300); // 300ms debounce
}

function displaySearchResults(books, searchTerm) {
    const trendingSection = document.querySelector('#trendingBooks');
    trendingSection.querySelector('h2').textContent = 'Your Search Results';
    
    if (books.length === 0) {
        trendingSection.querySelector('.book-list').innerHTML = `
            <p>No books found for "${searchTerm}". Please try a different search term.</p>
        `;
    } else {
        displayBooks('#trendingBooks', books);
    }
}

// Function to handle book reading
function openBook(book) {
    if (!book || !book.pdf) {
        alert('Sorry, this book is not available for reading.');
        return;
    }

    localStorage.setItem('currentBook', JSON.stringify(book));
    const pdfViewer = document.getElementById('pdfViewer');
    pdfViewer.src = book.pdf;
    document.getElementById('bookReader').style.display = 'block';
    document.body.style.overflow = 'hidden';


const pageNumberDisplay = document.createElement('div');
pageNumberDisplay.id = 'pageNumberDisplay';
pageNumberDisplay.style.position = 'absolute';
pageNumberDisplay.style.bottom = '10px';
pageNumberDisplay.style.left = '10px';
pageNumberDisplay.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
pageNumberDisplay.style.padding = '5px 10px';
pageNumberDisplay.style.borderRadius = '5px';
document.getElementById('bookReader').appendChild(pageNumberDisplay);

// Add notes button
const notesButton = document.createElement('button');
notesButton.id = 'notesButton';
notesButton.textContent = 'Notes';
notesButton.style.position = 'absolute';
notesButton.style.top = '10px';
notesButton.style.left = '10px';
notesButton.style.zIndex = '1003';
document.getElementById('bookReader').appendChild(notesButton);

// Add notes modal
const notesModal = document.createElement('div');
notesModal.id = 'notesModal';
notesModal.style.display = 'none';
notesModal.style.position = 'absolute';
notesModal.style.top = '50px';
notesModal.style.left = '10px';
notesModal.style.backgroundColor = 'white';
notesModal.style.padding = '10px';
notesModal.style.borderRadius = '5px';
notesModal.style.zIndex = '1004';
notesModal.innerHTML = `
    <textarea id="notesText" rows="5" cols="30"></textarea>
    <br>
    <button id="saveNotes">Save Notes</button>
`;
document.getElementById('bookReader').appendChild(notesModal);

// Event listeners for notes functionality
notesButton.addEventListener('click', toggleNotesModal);
document.getElementById('saveNotes').addEventListener('click', saveNotes);

// Load existing notes
loadNotes(book.id);

// Listen for page changes
pdfViewer.addEventListener('load', function() {
    this.contentWindow.addEventListener('scroll', updatePageNumber);
});

}
function updatePageNumber() {
    const pdfViewer = document.getElementById('pdfViewer');
    const pageNumberDisplay = document.getElementById('pageNumberDisplay');
    
    // This is a simplified way to estimate the current page
    // For accurate page numbers, you'd need to use a PDF.js library
    const scrollPercentage = pdfViewer.contentWindow.scrollY / (pdfViewer.contentDocument.body.scrollHeight - pdfViewer.contentWindow.innerHeight);
    const currentBook = JSON.parse(localStorage.getItem('currentBook'));
    const estimatedTotalPages = 100; // This should be replaced with actual total pages if known
    const currentPage = Math.ceil(scrollPercentage * estimatedTotalPages);
    
    pageNumberDisplay.textContent = `Page ${currentPage} of ${estimatedTotalPages}`;
}
function toggleNotesModal() {
    const notesModal = document.getElementById('notesModal');
    notesModal.style.display = notesModal.style.display === 'none' ? 'block' : 'none';
}

function saveNotes() {
    const notesText = document.getElementById('notesText').value;
    const currentBook = JSON.parse(localStorage.getItem('currentBook'));
    localStorage.setItem(`notes_${currentBook.id}`, notesText);
    alert('Notes saved successfully!');
}
function loadNotes(bookId) {
    const notesText = localStorage.getItem(`notes_${bookId}`);
    if (notesText) {
        document.getElementById('notesText').value = notesText;
    }
}

// Function to close the PDF viewer
function closePdfViewer() {
    document.getElementById('bookReader').style.display = 'none';
    document.getElementById('pdfViewer').src = '';
    document.body.style.overflow = ''; // Re-enable scrolling
    
    // Remove page number display and notes elements
    const pageNumberDisplay = document.getElementById('pageNumberDisplay');
    const notesButton = document.getElementById('notesButton');
    const notesModal = document.getElementById('notesModal');
    if (pageNumberDisplay) pageNumberDisplay.remove();
    if (notesButton) notesButton.remove();
    if (notesModal) notesModal.remove();
}

// Function to load the last read book
function loadContinueReading() {
    const currentBook = JSON.parse(localStorage.getItem('currentBook'));
    if (currentBook) {
        displayBooks('#continueReading', [currentBook]);
    }
}

// Function to filter books by category
function filterBooks(category) {
    let filteredBooks = books;
    if (category !== 'all') {
        filteredBooks = books.filter(book => {
            if (Array.isArray(book.category)) {
                return book.category.some(cat => cat.toLowerCase() === category.toLowerCase());
            } else {
                return book.category.toLowerCase() === category.toLowerCase();
            }
        });
    }
    displayBooks('#trendingBooks', filteredBooks);
    showMainContent();
}

// Function to handle search
document.getElementById('searchInput').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase().trim();
    if (searchTerm === '') {
        // Reset to original trending books when search is cleared
        document.querySelector('#trendingBooks h2').textContent = 'Trending';
        displayBooks('#trendingBooks', books);
    } else {
        searchBooks(searchTerm);
    }
});
document.getElementById('searchInput').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const filteredBooks = books.filter(book => 
        book.title.toLowerCase().includes(searchTerm) || 
        book.author.toLowerCase().includes(searchTerm)
    );
    displayBooks('#trendingBooks', filteredBooks);
});

// Hamburger menu functionality
const hamburger = document.querySelector('.hamburger-menu');
const mobileNav = document.getElementById('mobileNav');

hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
});

// Close mobile nav when a category is selected
mobileNav.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        mobileNav.classList.remove('active');
        if (e.target.textContent === 'Categories') {
            showCategoryPage();
        } else {
            filterBooks(e.target.textContent.toLowerCase());
            showMainContent();
        }
    }
});

// Close PDF viewer when close button is clicked
document.getElementById('closePdf').addEventListener('click', closePdfViewer);

// Function to show the category page
function showCategoryPage() {
    document.getElementById('mainContent').style.display = 'none';
    document.getElementById('categoryPage').style.display = 'block';
    const categoryGrid = document.querySelector('.category-grid');
    categoryGrid.innerHTML = '';
    categories.forEach(category => {
        const categoryItem = document.createElement('div');
        categoryItem.classList.add('category-item');
        categoryItem.textContent = category;
        categoryItem.addEventListener('click', () => {
            filterBooks(category);
        });
        categoryGrid.appendChild(categoryItem);
    });
}

// Function to show the main content
function showMainContent() {
    document.getElementById('mainContent').style.display = 'block';
    document.getElementById('categoryPage').style.display = 'none';
}

// Event listener for the Categories link in the bottom nav
document.getElementById('categoriesLink').addEventListener('click', (e) => {
    e.preventDefault();
    showCategoryPage();
});
document.addEventListener('DOMContentLoaded', function() {
    const contributeBookLink = document.getElementById('contributeBookLink');
    const contributeBookForm = document.getElementById('contributeBookForm');
    const bookContributionForm = document.getElementById('bookContributionForm');
    const thankYouMessage = document.getElementById('thankYouMessage');

    contributeBookLink.addEventListener('click', function() {
        contributeBookForm.style.display = contributeBookForm.style.display === 'none' ? 'block' : 'none';
    });

    bookContributionForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send the form data to your server or Google Drive API
        // For this example, we'll just show the thank you message
        bookContributionForm.style.display = 'none';
        thankYouMessage.style.display = 'block';

        // Reset form after 3 seconds
        setTimeout(() => {
            bookContributionForm.reset();
            bookContributionForm.style.display = 'block';
            thankYouMessage.style.display = 'none';
        }, 3000);
    });
});
// Initialize the page
document.addEventListener('DOMContentLoaded', async function() {
    const mostViewedBooks = await fetchMostViewedBooks();
    displayGutenbergBooks(mostViewedBooks);
    displayBooks('#trendingBooks', books);
    displayBooks('#recommendation', books.slice(2));
    loadContinueReading();


    document.querySelectorAll('.category-item').forEach(item => {
        item.addEventListener('click', () => {
            filterBooks(item.textContent);
        });
    });

});

// Logic for the popup 
var modal = document.getElementById("modal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Show the modal when the page loads
window.onload = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


window.addEventListener('offline', function() {
    document.getElementById('offline-status').classList.add('show');
  });
  
  window.addEventListener('online', function() {
    document.getElementById('offline-status').classList.remove('show');
  });

  document.addEventListener('DOMContentLoaded', function() {
    const loader = document.getElementById('loader');
    loader.style.display = 'block';
  });
  
  window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    loader.style.display = 'none';
  });
  