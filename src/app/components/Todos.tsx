import React, { useState } from 'react'
import { useGetTodosQuery, useDeleteTodosMutation } from '@/store/slices/todosApi'
import { Button } from 'antd'

const Todos = ({ content }: any) => {
     const [deleteTodos] = useDeleteTodosMutation()
     const finishHandler = async () => {
          await deleteTodos(content.id)
          console.log('delete', content.id)
     }

     return (
          <div className="col-lg-12 mb-3" key={content.id}>
               <div className="card">
                    <div className="card-body row">
                         <div className='d-flex col'>
                              <h6 className="card-title">{content.title}</h6>
                         </div>
                         <div className='d-flex col justify-content-end'>
                              <Button style={{ backgroundColor: 'green' }} onClick={finishHandler}>Finish</Button>
                         </div>
                    </div>
               </div>
          </div>
     )
}

function TodosList() {
     const [start, setStart] = useState(0)

     const prev = () => {

     }
     const {
          data: todos,
          isLoading,
          isSuccess,
          error,
     } = useGetTodosQuery()
     let todoContent
     {
          isLoading && (
               todoContent = (
                    <div className="d-flex justify-content-center">
                         <div className="spinner-border" role="status">
                              <span className="visually-hidden">Loading...</span>
                         </div>
                    </div>
               )
          )
     }
     {
          isSuccess && (
               todoContent = todos.map((item) => {
                    return (
                         <Todos content={item} key={item.id} />
                    )
               })
          )
     }
     {
          error && (
               todoContent = (
                    <div className="alert alert-danger" role="alert">
                         <h3>Something went wrong</h3>
                    </div>
               )
          )
     }

     return (
          <div>
               {todoContent}
               <div className='row justify-content-end my-2'>
                    <div className='col-1'>
                         <Button onClick={prev}>prev</Button>
                    </div>
                    <div className='col-1'>
                         <Button>next</Button>
                    </div>
               </div>
          </div>
     )
}

export default TodosList