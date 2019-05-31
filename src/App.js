import React from 'react'
import { hot } from 'react-hot-loader'

// Load this async only when needed
const Warning = React.lazy(() => import('./Warning'))

class App extends React.Component {
  state = {
    count: 0
  }

  render() {
    const { count } = this.state
    return (
      <div>
        <h1>Hello World!!</h1>
        <h3 className={count > 10 ? 'warning' : ''}>
          Count: {this.state.count}
        </h3>
        <div className="arrange">
          <button
            onClick={() => this.setState(state => ({ count: state.count + 1 }))}
          >
            +
          </button>
          <button
            onClick={() => this.setState(state => ({ count: state.count - 1 }))}
          >
            -
          </button>
        </div>

        {count > 10 ? (
          <React.Suspense fallback={null}>
            <Warning />
          </React.Suspense>
        ) : null}
      </div>
    )
  }
}

export default hot(module)(App)
