import React, { Component } from 'react';

import AppBar from 'material-ui/lib/app-bar';
import MenuActions from '../actions/MenuActions';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import MenuStore from '../stores/MenuStore';


export default class Header extends Component {

  constructor() {
    super();

    this.state = this.getMenuState();
    this._onChange = this._onChange.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }


  componentDidMount() {
    MenuStore.addChangeListener(this._onChange);
  }


  componentWillUnmount() {
    MenuStore.removeChangeListener(this._onChange);
  }


  getMenuState() {
    return {
      open: MenuStore.getOpenState()
    };
  }


  _onChange() {
    const open = MenuStore.getOpenState();
    this.setState({ open });
  }


  toggleMenu() {
    MenuActions.toggleMenu();
  }


  render() {
    return (
      <div>
        <AppBar
          title="Books" onLeftIconButtonTouchTap={ this.toggleMenu }
        />
        <LeftNav ref="leftNav" open={ this.state.open } >
          <MenuItem onTouchTap={ this.toggleMenu }>Menu Item</MenuItem>
          <MenuItem onTouchTap={ this.toggleMenu }>Menu Item 2</MenuItem>
        </LeftNav>
      </div>
    );
  }
}
