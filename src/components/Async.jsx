// import React, { Component } from 'react'
// import PropTypes from 'prop-types'

// class Async extends Component {
//   state = {
//     // short for "module" but that's a keyword in js, so "mod"
//     mod: null
//   }

//   componentWillMount() {
//     this.load(this.props)
//   }

//   componentWillReceiveProps(nextProps) {
//     if (nextProps.load !== this.props.load) {
//       this.load(nextProps)
//     }
//   }

//   load(props) {
//     this.setState({
//       mod: null
//     })
//     props.load((mod) => {
//       this.setState({
//         // handle both es imports and cjs
//         mod: mod.default ? mod.default : mod
//       })
//     })
//   }

//   render() {
//     return this.props.children(this.state.mod)
//   }
// }

// Async.propTypes = {
//   load: PropTypes.node.isRequired
// }

// export default Async


// import React from 'react'
// import PropTypes from 'prop-types'

// export default class Async extends React.Component {
//   componentWillMount() {
//     this.cancelUpdate = false
//     this.props.load.then((c) => {
//       this.C = c
//       if (!this.cancelUpdate) {
//         this.forceUpdate()
//       }
//     })
//   }

//   componentWillUnmount() {
//     this.cancelUpdate = true
//   }

//   render() {
//     const {componentProps} = this.props
//     return this.C
//       ? this.C.default
//         ? <this.C.default {...componentProps} />
//         : <this.C {...componentProps} />
//       : null
//   }
// }

// Async.propTypes = {
//   load: PropTypes.instanceOf(Promise).isRequired,
// }

// function asyncComponent(getComponent) {
//   class AsyncComponent extends PureComponent {
//     static Component = null;
//     state = { Component: AsyncComponent.Component };

//     componentWillMount() {
//       if (!this.state.Component) {
//         getComponent().then((Component) => {
//           AsyncComponent.Component = Component;
//           this.setState({ Component });
//         });
//       }
//     }
//     render() {
//       const { Component } = this.state;
//       if (Component) {
//         return <Component {...this.props} />;
//       }
//       return null;
//     }
//   }
//   return AsyncComponent;
// }


// export default asyncComponent;