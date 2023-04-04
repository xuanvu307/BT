import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const courseApi = createApi({
    reducerPath: 'courseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api/v1' }),
    endpoints: (builder) => ({
        getAllCourse: builder.query({
            query: () => 'cartItems',
        }),
        getCourseById : builder.query({
            query: (id) => `cartItems/${id}`
        }),
        getListOnlineCourse: builder.query({
            query: (id) => `cartItems/online`
        }),
        getListOfflineCourse: builder.query({
            query: (id) => `cartItems/offline`
        }),
    }),
})

export const {
    useGetAllCourseQuery,
    useGetCourseByIdQuery,
    useGetListOnlineCourseQuery,
    useGetListOfflineCourseQuery
} = courseApi 