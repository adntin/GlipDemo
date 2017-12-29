import React from 'react'

// export default () => {
//   return <div>not found, 404</div>
// }

export default ({ location }) => (
  <div>
    <h3>not found, 404, <code>{location.pathname}</code></h3>
  </div>
)