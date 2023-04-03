import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function ReactPage() {
  // api call -> react에 해당하는 글의 목록을 응답 받음.
  const docs = [
    {
      id: 1,
      title: "React 공부를 시작하면서",
      date: "04/04/2023"
    },
    {
      id: 2,
      title: "React 공부를 시작하면서",
      date: "04/05/2023"
    },
    {
      id: 3,
      title: "React 공부를 시작하면서",
      date: "04/06/2023"
    },
    {
      id: 4,
      title: "React 공부를 시작하면서",
      date: "04/07/2023"
    },
    {
      id: 5,
      title: "React 공부를 시작하면서",
      date: "04/08/2023"
    },
  ]

  return (
    <div>
      {docs.map(doc => (
        //to에는 스트링으로 넘겨줘야함
        <Link to={`${doc.id}`} key={doc.id} style={{display:"block", margin:"1rem 0"}}>
          {doc.title}
        </Link>
      ))}
      
    </div>
  )
}
