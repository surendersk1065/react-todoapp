import React, { useRef, useState } from 'react'
import Tabs from './Tabs'

function Sidebar({items, impitems, workitems, peritems,hitems, search, setSearch}) {
   
    const [username, setUsername] = useState(null)
    const [mail, setMail] = useState(null)
    const name = useRef()
    const email = useRef()
    const handleClick = () => {
        setUsername(name.current.value)
        setMail(email.current.value)
    }
    
  return (
    <>
        <div className='sidebar text-light py-3'>
            <div className='px-2'>
                <div className='d-flex justify-content-between mb-2 flex-wrap'>
                    <img src='img-1.jpg' style={{width:'40px' , borderRadius:'100%'}} className='shadow'/>
                    <button className='signinbtn' data-bs-toggle="modal" data-bs-target="#exampleModal">Sign in</button>
                </div>
                    <div className=''>
                        <p className='text-uppercase pt-2 fw-bold fs-md-5 m-0'>{username ?? 'Guest User'}</p>
                        <p className=''>{mail}</p>
                    </div>
                <form onSubmit={(e) => (e.preventDefault())}>
                <input 
                    placeholder='Search'
                    className=' p-md-2 form-control shadow-lg search'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                </form>
            </div>

            <div>
                <Tabs items = {items} impitems={impitems} workitems={workitems} peritems = {peritems} hitems = {hitems}/>
            </div>

            <div className='ps-2 '>
                
            </div>


                <div className="modal fade" id="exampleModal"  role="dialog">
                    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div className="modal-content px-3 py-5">
                        <div className="">
                            <h3 className="modal-title text-center py-2 fw-bold" id="exampleModalLabel">Sign in or Register</h3>
                        </div>
                        <div className="modal-body">
                            <form className='my-2' >
                                    <input 
                                        placeholder='Name'
                                        className='p-2 form-control mb-3'
                                        type='text'
                                        ref={name}
                                    />
                                    <input 
                                        placeholder='Mobile Number'
                                        className='p-2 form-control mb-3'
                                        type='text'
                                    />
                                    <input 
                                        placeholder='Email'
                                        className='p-2 form-control mb-3'
                                        type='text'
                                        ref={email}
                                    />     
                                    <div className="text-end py-3">
                                        <button type="button" className="btn btn-light me-2" data-bs-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-light" onClick={handleClick} data-bs-dismiss="modal" >Save</button>
                                    </div>                          
                            </form>
                        </div>
                        
                        </div>
                    </div>
                </div>
        
        </div>
        
    </>
  )
}

export default Sidebar
