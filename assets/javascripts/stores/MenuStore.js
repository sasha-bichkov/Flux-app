import { EventEmitter } from 'events';
import AppDispatcher    from '../dispatcher/AppDispatcher';
import BookConstants    from '../constants/BookConstants';
import assign           from 'object-assign';

const CHANGE_EVENT = 'change';

let _open = false;

let MenuStore = assign({}, EventEmitter.prototype, {

  getOpenState() {
    return _open;
  },


  emitChange() {
    this.emit(CHANGE_EVENT);
  },


  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },


  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

const changeState = () => _open = !_open;

MenuStore.dispatchToken = AppDispatcher.register(function(action) {
  switch(action.actionType) {
    case BookConstants.SHOW_MENU:
      changeState();
      break;

    default: break;
  }

  MenuStore.emitChange();
 
  return true; 
});

export default MenuStore;
