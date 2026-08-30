import { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="flex min-h-svh flex-col items-center justify-center px-6 text-center">
          <p className="text-xs tracking-[0.22em] text-accent">SOMETHING WENT WRONG</p>
          <h1 className="mt-4 font-display text-5xl tracking-wide">RELOAD TO CONTINUE</h1>
          <button
            type="button"
            className="mt-8 bg-accent px-6 py-3 text-sm font-semibold tracking-[0.16em] text-bg"
            onClick={() => window.location.reload()}
          >
            RELOAD PAGE
          </button>
        </main>
      )
    }

    return this.props.children
  }
}
