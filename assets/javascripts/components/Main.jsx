import React, { Component } from 'react';

import Card from 'material-ui/lib/card/card';
import CardTitle from 'material-ui/lib/card/card-title';


export default class Main extends Component {
  render() {
    return (
      <main id="main">
        <Card>
          <CardTitle title="Hello, world!" />
        </Card>
      </main>
    );
  }
}
