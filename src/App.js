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

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
    this.setState(currentState => ({
      books: currentState.books.concat([book])
    }))
  }

  render() {
    return (
      <div className="app">
        <Route path='/search' render={({ history }) =>
          <SearchBooks history={history} onChangeShelf={() => this.changeShelf} />
        } />
        <Route exact path='/' render={({ history }) =>
          <ListBooks history={history} />
        } />
      </div>
    )
  }
}

export default BooksApp
