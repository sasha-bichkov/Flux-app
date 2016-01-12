import { EventEmitter } from 'events';
import AppDispatcher    from 'dispatcher/AppDispatcher';
import BookConstants    from 'dispatcher/BoolConstants';
import assign           from 'object-assign';


let BookStore = assign({}, EventEmitter.prototype, {});

BookStore.dispatchToken = AppDispatcher.register(function(action) {
  switch(action.type) {
    default: break;
  }
});

export default BookStore;
