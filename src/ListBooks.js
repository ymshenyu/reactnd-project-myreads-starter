import React from 'react'
import BooksGrid from './BooksGrid'

const ListBooks = props => {
    const { history, books, onChangeShelf } = props
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Currently Reading</h2>
                        <div className="bookshelf-books">
                            <BooksGrid onChangeShelf={onChangeShelf} books={books.filter(book => book.shelf === 'currentlyReading')} />
                        </div>
                    </div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Want to Read</h2>
                        <div className="bookshelf-books">
                            <BooksGrid onChangeShelf={onChangeShelf} books={books.filter(book => book.shelf === 'wantToRead')} />
                        </div>
                    </div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Read</h2>
                        <div className="bookshelf-books">
                            <BooksGrid onChangeShelf={onChangeShelf} books={books.filter(book => book.shelf === 'read')} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="open-search">
                <button onClick={() => history.push('/search')}>Add a book</button>
            </div>
        </div>
    )
}

export default ListBooks