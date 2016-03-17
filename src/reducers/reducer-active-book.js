import {BOOK_SELECTED} from '../constants/book-actions';


// State argument is not application state, only state that this reducer
// is responsible for
export default function(state = null, action) {

  switch(action.type) {
    case BOOK_SELECTED: return action.payload;
  }

  return state;

}
