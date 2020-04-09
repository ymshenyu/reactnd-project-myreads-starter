import React from 'react'

const BooksGrid = props => {

    const { books, onChangeShelf } = props
    

    return (
        <ol className="books-grid">
            {Array.isArray(books) && books.map(book => (
                <li key={book.id}>
                    <div className="book">
                        <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: (book.imageLinks && `url(${book.imageLinks.thumbnail})`) }}></div>
                            <div className="book-shelf-changer">
                                <select onChange={(e) => onChangeShelf(book, e.target.value)}>
                                    <option value="move" disabled>Move to...</option>
                                    <option value="currentlyReading">Currently Reading</option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option value="read">Read</option>
                                    <option value="none">None</option>
                                </select>
                            </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">Harper Lee</div>
                    </div>
                </li>
            ))}
        </ol>
    )
}

export default BooksGrid