import React, { Component } from 'react';
import { connect } from 'react-redux';


class BookDetail extends Component {

  render() {
    if(!this.props.book) {
      return (<div>Select a book</div>);
    }

    return (
      <div>
        <h3>{this.props.book.title}</h3>
        <div>Pages: {this.props.book.pages}</div>
      </div>
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
    book: state.activeBook
  };
}

// #############################################################################
// #############################################################################



export default connect(mapStateToProps)(BookDetail);
