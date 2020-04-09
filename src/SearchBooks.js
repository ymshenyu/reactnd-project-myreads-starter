import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import BooksGrid from './BooksGrid'

class SearchBooks extends Component {

    state = {
        results: []
    }

    searchBooks = query => {
        BooksAPI.search(query)
            .then(books => {
                this.setState({
                    results: books
                })
            })
    }

    render() {
        const { history, onChangeShelf, checkShelf } = this.props

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <button className="close-search" onClick={() => history.push('/')}>Close</button>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" onChange={(e) => this.searchBooks(e.target.value)} />

                    </div>
                </div>
                <div className="search-books-results">
                    <BooksGrid onChangeShelf={onChangeShelf} books={this.state.results} checkShelf={checkShelf} />
                </div>
            </div>
        )
    }
}

export default SearchBooks