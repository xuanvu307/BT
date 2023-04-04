import { configureStore } from "@reduxjs/toolkit";
import { courseApi } from "./service/CourseService";
import counterSlice from "./slices/counterSlice";
import todoSlice from "./slices/todoSlice";

const store = configureStore({
    reducer: {
        [courseApi.reducerPath]: courseApi.reducer,
        counter: counterSlice,
        todos: todoSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(courseApi.middleware),
})


export default store