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
        const { history, onChangeShelf } = this.props

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <button className="close-search" onClick={() => history.push('/')}>Close</button>
                    <div className="search-books-input-wrapper">
                        {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                        <input type="text" placeholder="Search by title or author" onChange={(e) => this.searchBooks(e.target.value)} />

                    </div>
                </div>
                <div className="search-books-results">
                    <BooksGrid onChangeShelf={onChangeShelf} books={this.state.results} />
                </div>
            </div>
        )
    }
}

export default SearchBooks