import axios from 'axios';

// const URL = 'https://crud-backend-e0aw.onrender.com';
const URL = 'http://localhost:8000/api'

export const addUser =async (data)=>{
    try {
       return await axios.post(`${URL}/add`, data);

    } catch (error) {
        console.log("The error is ", error);
    }
} 
 

export const allUser = async ()=>{
    try {
       return await axios.get(`${URL}/all`)
    } catch (error) {
        console.log('error while calling API:', error)
    }
}

export const getUser = async (id)=>{
    try {
        return await axios.get(`${URL}/${id}`)
    } catch (error) {
        console.log(`error while getting userdetails`, error)
        
    }
}


export const editUser = async (user, id)=>{
    try {
        return await axios.post(`${URL}/${id}`, user);
        
    } catch (error) {
        console.log(`error while calling edituser api`, error)
        
    }
}


export const deleteUser = async (id)=>{
    try {
        return await axios.delete(`${URL}/${id}`)
      
    } catch (error) {
        console.log(`error while calling delete api`, error)
        
    }
}


// adding text api to 

export const addText =async (data)=>{

    console.log(data)
    try {
       return await axios.put(`${URL}/text`, data);

    } catch (error) {
        console.log("The error is ", error);
    }
 } 


 export const userResister = async(user)=>{
    try {
        return await axios.post(`${URL}/user/resister`, user)
    } catch (error) {
        console.log(error)
    }
 }

