import React, {Component} from 'react'
import {render} from 'react-dom'

import { Button } from '../../src/Button';

class Demo extends Component {
  render() {
    return <div>
      <h1>loading-button Demo</h1>
      <Button value="Hello" onClick={() => console.log('hello')} />
      <Button value="Good-bye" onClick={() => console.log('hello')} />
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
