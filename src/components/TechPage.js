import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function TechPage() {
  return (
    <div>
      <h1>TechPage</h1>
      <Link to="/tech/javascript">JavaScript</Link> | <Link to="/tech/react">React</Link>
      <Outlet/>
    </div>
  )
}
