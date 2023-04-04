import axios from 'axios';
import { useState } from 'react';
// import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useSWR from 'swr'
// import useFetch from '../hooks/useFetch_hook';


export default function ReactPage() {
  // api call -> react에 해당하는 글의 목록을 응답 받음.
  // const [docs, setDocs] = useState([])
  const [number, setNumber] = useState(0)
  
  async function fetcher() {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    
    console.log(res.data);
    return res.data
  };

  const {data: docs, error} = useSWR('posts', fetcher)

  /*   const docs = [
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
  ]; */

/*   useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      console.log(res);
      const result = await res.json();
      console.log(result); //상태값
      setDocs(result);
    }
    fetchData();
  }, []); */

/* <내부 처리가 아니라 return 해줘야하는 상황 일 때>
  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      console.log(res);
      const result = await res.json();
      console.log(result); //상태값
      return result
    }
    fetchData().then(res => {
      setDocs(res)
    })
  }, []);  */

 /*  // axios 사용
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      console.log(res);
      console.log(res.data);
      return res.data;
    }
    fetchData().then(res => {
      setDocs(res)
    })
  }, []); */

 /*  //useFetch (custom-hook) 사용한걸로 한번 해보기
  const {data: docs, error} = useFetch('https://jsonplaceholder.typicode.com/posts') 
  왜 작동을 안할까?????
  */

  //swr 사용
  if (error) return <div>failed to load</div>
  if (!docs) return <div>loading...</div>

  return (
    <div>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      {docs.map(doc => (
        //to에는 스트링으로 넘겨줘야함
        <Link to={`${doc.id}`} key={doc.id} style={{display:"block", margin:"1rem 0"}}>
          {doc.title}
        </Link>
      ))}
      
    </div>
  )
}
