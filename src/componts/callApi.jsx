import React, { useState, useEffect } from 'react';

function GetMyUsers() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetchData()
  }, []);
  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => setData(data))
    .catch(error => console.error(error));
  };
  const handleDelete = (id) => {
    console.log("DELETE");
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { method: 'DELETE' })
      .then(() => fetchData())
      .catch(error => console.error(error));
  };
  const Divstyle={
    margin:'50px 0',
  }
  return (
    <div style={Divstyle}>
        <table className="table">
            <thead>
                <tr>
                    <th>id</th>
                    <th>UserId</th>
                    <th>title</th>
                    <th>body</th>
                    
                </tr>
            </thead>

            <tbody>
            {
               
        data.map(post=>
                
                <tr key={post.id}>
            <th scope="row">{post.id}</th>

                <td>{post.userId}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
           
                <td><button className='btn btn-danger'  onClick={() =>handleDelete(post.id)}>Delete </button></td>
                <td><button className='btn btn-danger'>Update </button></td>
                
                </tr>
                
            )
         }
            
       
            </tbody>
        </table>
    </div>
  );
}

export default GetMyUsers;
