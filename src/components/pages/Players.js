import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../css/pages.css'

function Players() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [deleteId, setDeleteId] = useState('');

    const [limitData] = useState(10);

    const fetchData = async() => {
        setLoading(true)
        await axios.get('api/players')
        .then((res) => {
            setData(res.data.players)
        }).catch((err) => {
            console.log(err)
        });

        setLoading(false);
    }

    useEffect(() => {
        fetchData()
    }, [])

    const lastIndex = currentPage * limitData;
    const firstIndex = lastIndex - limitData;
    const newData = data.slice(firstIndex, lastIndex);

    const paginate = (num) => {
        setCurrentPage(num);
    }
    const leftPaginate = (num) => {
        if (num < 0)
            return 0;
        setCurrentPage(currentPage + num)
    }

    const rightPaginate = (num) => {
        if ( num > Math.ceil(data.length / limitData) - 1 )
            return 0;
        setCurrentPage(currentPage + num)
    }

    const pageNumbers = [];

    for (let index = 1; index <= Math.ceil(data.length / limitData); index++) {
        pageNumbers.push(index);
    }

    const deleteSubmit = async (e) => {
        e.preventDefault();
        await axios.delete(`api/delete/${deleteId}`)
        .then(() => {
            fetchData()
        }).catch((err) => {
            console.log(err)
        });
    }

    if(loading)
        return(
            <div className="pages">
                <h2 className="header-text">GET PLAYER</h2>
                <div className="loading">
                    <h1>LOADING ...</h1>
                </div>
            </div>
        )
     
    return (
       <div className="pages">
           <h2 className="header-text">GET PLAYER</h2>
               <table>
                  <thead>
                  <tr>
                       <th>N</th>
                       <th>Name</th>
                       <th>Club</th>
                       <th>Age</th>
                       <th>ACTION</th>
                   </tr>
                  </thead>

                <tbody>
                    { newData.map((item, index) => (
                        <tr key={item._id}>
                        <td>{ index + 1 }</td>
                        <td>{ item.full_name }</td>
                        <td>{ item.club }</td>
                        <td>{ item.age }</td>
                        <td className='btn-table'> 
                         <form onSubmit={deleteSubmit}>
                         <button onClick={() => setDeleteId(item._id)} className='delete-btn'>
                           <i className="fas fa-trash-alt"></i>
                         </button>
                         </form>
                         <Link className='edit-btn' to={`/${item._id}`}>
                           <i className="fas fa-edit"></i>
                         </Link>
                        </td>
                    </tr>
                    )) }
                </tbody>
 
                <tfoot>
                    <tr>
                        <td colSpan={5}>
                        <div className="pagination">
                            <button onClick={() => leftPaginate(-1)} className="paginate-btn">{"<<"}</button>
                            { pageNumbers.map(item => (
                                <button key={item} onClick={() => paginate(item) } className="paginate-btn">{ item }</button>
                            )) }
                            <button onClick={() => rightPaginate(1)}  className="paginate-btn">{">>"}</button>
                        </div>
                        </td>
                    </tr>
                </tfoot>
                   
               </table>
       </div>
    )
}

export default Players
