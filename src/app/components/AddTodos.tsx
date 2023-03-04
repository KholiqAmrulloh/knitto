import { useAddTodosMutation } from '@/store/slices/todosApi'
import { Button } from 'antd'
import React from 'react'
import TodosList from './Todos'

const AddTodos = () => {
     const [addTodos] = useAddTodosMutation()

     const todo = {
          userId: 4,
          id: 1,
          title: 'halohalo',
          completed: false
     }

     const addHandler = async () => {
          await addTodos(todo)
     }
     return (
          <div className="container">
               <div className="d-flex border-bottom pt-2 pb-2 mb-5">
                    <div className="p-2 flex-grow-1 text-center">
                         <strong>Todo List</strong>
                    </div>
               </div>
               <div className='d-flex justify-content-center'>
                    <div className="card mb-5 col-md-5">
                         <div className="card-header text-center">
                              Add new list
                         </div>
                         <div className="card-body">
                              <form>
                                   <div>
                                        <label className='form-label'>User ID</label>
                                   </div>
                                   <input type="text" className='form-control' placeholder='user id' />
                                   <div>
                                        <label className='form-label'>ID</label>
                                   </div>
                                   <input type="text" className='form-control' placeholder='ID' />
                                   <div>
                                        <label className='form-label'>Todo</label>
                                   </div>
                                   <textarea className='form-control' rows={3} />
                                   <div>
                                        <label className='form-label'>Completed</label>
                                   </div>
                                   <select className="form-select" aria-label="Default select example">
                                        <option value={1}>True</option>
                                        <option selected value={0}>False</option>
                                   </select>
                                   <Button style={{ marginTop: 10, backgroundColor: 'blue', color: 'white' }} onClick={addHandler}>Add todos</Button>
                              </form>
                         </div>
                    </div>
               </div>
               <div className="row">
                    <TodosList />
               </div>
          </div>
     )
}

export default AddTodos