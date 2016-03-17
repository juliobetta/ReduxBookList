import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators} from 'redux';


class BookList extends Component {

  renderItems() {
    return this.props.books.map((book) => {
      return (
        <li onClick={() => this.props.selectBook(book)}
            className="list-group-item"
            key={book.title}>
            {book.title}
        </li>
      );
    });
  }


  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderItems()}
      </ul>
    );
  }
}



// #############################################################################
// MAPPERS #####################################################################
// #############################################################################

/**
 * Whatever is returned will show up as props inside of BookList
 */
function mapStateToProps(state) {
  return {
    books: state.books
  };
}


/**
 * Anything returned from this function will end up as props on the
 * BookList container
 */
function mapDispatchToProps(dispatch) {
  // Whenever selectedBook is called, it should be passed to all of our reducers
  return bindActionCreators({ selectBook }, dispatch);
}

// #############################################################################
// #############################################################################



export default connect(mapStateToProps, mapDispatchToProps)(BookList);
