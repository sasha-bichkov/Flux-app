import AppDispatcher from '../dispatcher/AppDispatcher';
import BookConstants from '../constants/BookConstants';


const MenuActions = {
  toggleMenu() {
    AppDispatcher.dispatch({
      actionType: BookConstants.SHOW_MENU
    });
  }
};

export default MenuActions;
