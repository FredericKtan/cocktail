import React, {Component} from 'react'
import {render} from 'react-dom'

import {
  Button,
  HorizontalLayout,
  VerticalLayout,
} from '../../src';

class Demo extends Component {
  render() {
    return <div>
      <h1>loading-button Demo</h1>
      <VerticalLayout>
        <HorizontalLayout>
          <Button style={{ flex: '1' }} value="Hello" onClick={() => console.log('hello')} />
          <Button value="Good-bye" onClick={() => console.log('hello')} />
          <Button value="Hello" onClick={() => console.log('hello')} />
          <Button value="Good-bye" onClick={() => console.log('hello')} />
        </HorizontalLayout>
        <Button value="Hello" onClick={() => console.log('hello')} />
        <Button value="Good-bye" onClick={() => console.log('hello')} />
      </VerticalLayout>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
