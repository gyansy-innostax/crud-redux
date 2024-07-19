import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData: [],
    inputFormUpdate : {id:'',name:'',phone:'',email:''}
}
 
export const crudSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            const user = {
                id: Date.now(),
                name: action.payload.name,
                phone: action.payload.phone,
                email: action.payload.email
            }
            state.userData.push(user)
        },
        removeUser: (state, action) => {
            state.userData = state.userData.filter((user) =>
                user.id !== action.payload.id)
        },
        updateInitial: (state, action) => {
            state.inputFormUpdate = {
                id: action.payload.id,
                name: action.payload.name,
                phone: action.payload.phone,
                email: action.payload.email
            }
        },
        updateUser: (state, action) => {
            state.userData = state.userData.map((user) => {
                if(user.id === action.payload.id){
                    const data = {
                        id : action.payload.id,
                        name: action.payload.name,
                        phone: action.payload.phone,
                        email: action.payload.email
                    }
                    return data;
                }
                else return user
            })
        }
    }
})

export const { addUser, removeUser, updateInitial, updateUser } = crudSlice.actions
export default crudSlice.reducer