import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./table.css"

function Table() {
    const [data, setData] = useState([])
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [uname, usetName] = useState('')
    const [uemail, usetEmail] = useState('')
    const [editId, setEditId] = useState(-1)


    useEffect(() => {
        axios.get('http://localhost:3000/users')
        .then(res => setData(res.data))
        .catch(er => console.log(er));
    }, [])


    const handleSubmit = (event) => {
        event.preventDefault();
        const id = data.length + 1;
        axios.post('http://localhost:3000/users', {id: id, name: name, email: email})
        .then(res => {
            window.location.reload(true);
        })
        .catch(er => console.log(er));
    }

    const handleEdit = (id) => {
        axios.get('http://localhost:3000/users/'+id)
        .then(res => {
            console.log(res.data)
            usetName(res.data.name)
            usetEmail(res.data.email)
        })
        .catch(er => console.log(er));
        setEditId(id)
    }

    const handleUpdate = () => {
        axios.put('http://localhost:3000/users/'+editId, {id: editId, name: uname, email: uemail})
        .then(res =>{
            console.log(res);
            window.location.reload();
            setEditId(-1);
        }) .catch(err => console.log(err));
    }

    const handleDelete = (id) => {
        axios.delete('http://localhost:3000/users/'+id)
        .then(res => {
            window.location.reload();
        })
        .catch(er => console.log(er));
    }

  return (
    <div className= 'container'>
        <div className='form-div'>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Enter Name' onChange={e => setName(e.target.value)}/>
                <input type='text' placeholder='Enter Email' onChange={e => setEmail(e.target.value)}/>
                <button>Add</button>
            </form>
        </div>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((user, index) => (
                        user.id === editId ?
                        <tr>
                            <td>{user.id}</td>
                            <td><input type="text" value={uname} onChange={e => usetName(e.target.value)}/></td>
                            <td><input type="text" value={uemail} onChange={e => usetEmail(e.target.value)}/></td>
                            <td><button onClick={handleUpdate}>Update</button></td>
                        </tr>
                        :
                        <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <button onClick={() => handleEdit(user.id)}>Edit</button>
                                <button onClick={() => handleDelete(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default Table