import React, { Component }from 'react'
import { connect } from 'react-redux'


class BookList extends Component {

    renderList() {
        return this.props.books.map((book) => {
            return (
                <li
                key={book.title}
                className="list-group-item">
                    {book.title}
                </li>
            )
        })
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

// if our application state ever changes,
// the container will re-render
function mapStateToProps(state) {
    // Whatever is returned will show up as props inside of BookList
    return {
        books: state.books
    }
}

// connect takes a function and a component and makes a container
export default connect(mapStateToProps)(BookList)