import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { todosApi } from './slices/todosApi'

export const store = configureStore({
     reducer: {
          [todosApi.reducerPath]: todosApi.reducer,
     },
     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todosApi.middleware)
})

setupListeners(store.dispatch)

export default store