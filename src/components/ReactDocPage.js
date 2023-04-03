import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function ReactDocPage() {
  const params = useParams()
  console.log(params)

  const navigate = useNavigate()
  return (
    <>
    <h4 onClick={() => navigate("/")}>logo</h4>
    <div>ReactDocPage ##{params.docId}</div>
    </>
    
  )
}
