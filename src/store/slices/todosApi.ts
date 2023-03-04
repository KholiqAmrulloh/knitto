import { Todo } from '@/type/todo.type';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todosApi = createApi({
     reducerPath: 'todosApi',
     baseQuery: fetchBaseQuery({
          baseUrl: 'https://jsonplaceholder.typicode.com'
     }),
     tagTypes: ['Todo'],
     endpoints: (builder) => ({
          getTodos: builder.query<Todo[], number | void>({
               query: (start = 0) => `/todos?_start=${start}&_limit=10`,
               providesTags: ['Todo']
          }),
          addTodos: builder.mutation<void, Todo>({
               query: todo => ({
                    url: '/todos',
                    method: 'POST',
                    body: todo
               }),
               invalidatesTags: ['Todo']
          }),
          deleteTodos: builder.mutation<void, number>({
               query: (id) => ({
                    url: `/todos/${id}`,
                    method: 'DELETE'
               }),
               invalidatesTags: ['Todo']
          })
     }),
})

export const { useGetTodosQuery, useAddTodosMutation, useDeleteTodosMutation } = todosApi