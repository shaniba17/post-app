import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewPost = () => {
  const [data, changedata] = useState([])
  const fetchData=() =>
    {
     axios.get("https://jsonplaceholder.typicode.com/posts")
     .then(
      response => {
        console.log(response.data)
        changedata(response.data)

      })
      .catch().finally()
    }
    useEffect(()=>{fetchData()},[])
  return (
    <div>
      <NavBar/>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <table className="table">
                <thead>
                  <tr>
                    <th scope="col">User Id</th>
                    <th scope="col">Id</th>
                    <th scope="col">Title</th>
                    <th scope="col">Body</th>
                  </tr>
                </thead>
                <tbody>
                {data.map(
                (value,index) => {

                  return <tr>
                    <td>{value.userId}</td>
                    <td>{value.id}</td>
                    <td>{value.title}</td>
                    <td>{value.body}</td>
                  </tr>
                }
              )}
                </tbody>
              </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewPost