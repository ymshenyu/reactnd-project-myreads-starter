import React from 'react'
import { Route } from 'react-router-dom'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {

  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then(books => {
        this.setState(currentState => ({
          books: currentState.books.concat(books)
        }))
      })
  }

  checkShelf = book => {
    const shelf = this.state.books.filter(b => b.id === book.id).map(b => b.shelf).toString()
    return shelf ? shelf : "none"
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
    book.shelf = shelf
    this.setState(currentState => ({
      books: currentState.books.filter(b => b.id !== book.id).concat([book])
    }))
  }

  render() {
    return (
      <div className="app">
        <Route path='/search' render={({ history }) =>
          <SearchBooks history={history} onChangeShelf={this.changeShelf} checkShelf={this.checkShelf} />
        } />
        <Route exact path='/' render={({ history }) =>
          <ListBooks history={history} onChangeShelf={this.changeShelf} books={this.state.books} checkShelf={this.checkShelf} />
        } />
      </div>
    )
  }
}

export default BooksApp
