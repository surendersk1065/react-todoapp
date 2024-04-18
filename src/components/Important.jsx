import React from 'react'
import Button from './Button'
import { MdDelete } from "react-icons/md";

function Important({ impitems, setImpitems, name, setName, date, currWeek, currmonth }) {

  const handleSubmit = (e) => {
    e.preventDefault()
    const id = impitems.length ? impitems[impitems.length - 1].id + 1 : 1
    const newobj = { id, Name: name, checked: false }
    const newarr = [...impitems, newobj]
    setImpitems(newarr)
    setName('')
  }

  const handleCheck = (id) => {
    const list = impitems.map((val) => val.id === id ? { ...val, checked: !val.checked } : val)
    setImpitems(list)
  }

  const handleDelete = (id) => {
    const list = impitems.filter((val) => val.id !== id)
    setImpitems(list)
  }

  return (
    <>
      <div className='taskimg text-center'>
        <h1>Important Task</h1>
        {
          (impitems.length) ?
            (
              <div className='todaybtn'>
                <Button>Add Task</Button>
                <div className='py-5 taskli px-1 px-md-2   mx-auto'>
                  <ul className='list-unstyled'>
                    {
                      impitems.map((val) => (
                        <li className='mb-3 rounded' key={val.id}>
                          <input
                            type='checkbox'
                            onChange={() => handleCheck(val.id)}
                            checked={val.checked}
                            className='me-2 me-md-5'
                          />
                          <label className='me-2 me-md-5'>{(val.Name).length <= 16 ? val.Name : `${(val.Name).slice(0, 16)}....`}</label>
                          <MdDelete
                            role='button'
                            tabIndex='0'
                            className='fs-4 mb-1 text-primary'
                            onClick={() => handleDelete(val.id)}
                          />
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            ) :
            (
              <div>
                <img src='img-2.jpeg' alt='taskimg' />
                <p>No Task Added</p>
                <p>{currWeek}, {currmonth} {date.getDate()}</p>
                <Button>Add Task</Button>
              </div>
            )
        }
      </div>

      <div className="modal fade px-5" id="task" role="dialog">
        <div className="modal-dialog modal-dialog-centere" role="document">
          <div className="modal-content px-3 py-3">
            <div className="">
              <h3 className="modal-title text-center py-2 text-light " id="task">Add task</h3>
            </div>
            <div className="modal-body">
              <form className='my-2'>
                <input
                  required
                  placeholder='Add a Task'
                  className='p-2 form-control mb-3'
                  type='text'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  required
                  placeholder='Due Date'
                  className='p-2 form-control mb-3'
                  type='date'
                />

                <div className="text-end py-3">
                  <button type="button" className="btn btn-light me-2" data-bs-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-light" data-bs-dismiss="modal" onClick={handleSubmit}>Save</button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Important
