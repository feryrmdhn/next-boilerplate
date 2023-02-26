import { Data, GlobalTypes, UrlParams } from "@/types"
import apiInstance from "./instance"
import { ResponseAPI } from "./types"

//Fisrt endpoint
export const getAllTodo = (params: UrlParams) => apiInstance.get<ResponseAPI<Array<Data>>>('/todolist', { params })
export const createTodo = (payload: GlobalTypes) => apiInstance.post<ResponseAPI<boolean>>('/todolist', payload)
export const getDetailTodo = (id: number) => apiInstance.get<ResponseAPI<Data>>(`/todolist/${id}`)
export const updateTodo = (id: number, payload: GlobalTypes) => apiInstance.put<ResponseAPI<boolean>>(`/todolist/${id}`, payload)
export const updateStatusTodo = (id: number, payload: Data) => apiInstance.patch<ResponseAPI<boolean>>(`/todolist/${id}`, payload)
export const deleteTodo = (id: number) => apiInstance.delete<ResponseAPI<boolean>>(`/todolist/${id}`)

//Second endpoint
export const getAllTodos = (params: UrlParams) => apiInstance.get<ResponseAPI<Array<Data>>>('/todolist', { params })
export const createTodos = (payload: GlobalTypes) => apiInstance.post<ResponseAPI<boolean>>('/todolist', payload)
export const getDetailTodos = (id: number) => apiInstance.get<ResponseAPI<Data>>(`/todolist/${id}`)
export const updateTodos = (id: number, payload: GlobalTypes) => apiInstance.put<ResponseAPI<boolean>>(`/todolist/${id}`, payload)
export const updateStatusTodos = (id: number, payload: Data) => apiInstance.patch<ResponseAPI<boolean>>(`/todolist/${id}`, payload)
export const deleteTodos = (id: number) => apiInstance.delete<ResponseAPI<boolean>>(`/todolist/${id}`)

/*Third endpoint
...... etc*/