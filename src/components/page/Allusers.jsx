import { useEffect, useState } from "react"
import { Table, TableHead, TableCell, TableBody, TableRow, styled, Button} from "@mui/material"

import {allUser, deleteUser} from '../../service/api.js'
import { Link } from "react-router-dom"

const TableStyle = styled(Table)`
 width: 90%;
 margin: 50px auto 0 auto;
 @media (max-width: 768px) {
    width: 90%;
  }
`
const Thead = styled(TableHead)`
background: #0a9396;

`
const Tcell = styled(TableCell)`
    color: #fff;
    font-size: 20px;'
`
const Trow = styled(TableCell)`
    color: #003049;
    font-size: 18px;
`
const Ebtn = styled(Button)`
    background: #fca311;

`
const Dbtn = styled(Button)`
    background: #ae2012;
    
`

const Allusers = ()=>{

    const [users, setUser] = useState([]);

    useEffect(()=>{
        getAlluser();
    },[]);

    const getAlluser = async ()=>{
       let res = await allUser();
       setUser(res.data)
    }

    const deleteUserDetails = async (id)=>{
        await deleteUser(id);
        getAlluser();
    
    }

   
    return (
        <TableStyle>
            <Thead>
                <TableRow>
                    <Tcell>Id</Tcell>
                    <Tcell>Name</Tcell>
                    <Tcell>Username</Tcell>
                    <Tcell>Email</Tcell>
                    <Tcell>Phone</Tcell>
                    <Tcell></Tcell>


                </TableRow>
            </Thead>
            <TableBody>
                {
                    users.map(user =>(
                        <TableRow key={user._id}>
                            <Trow>{user._id} </Trow>
                            <Trow>{user.name}</Trow>
                            <Trow>{user.username}</Trow>
                            <Trow>{user.email}</Trow>
                            <Trow>{user.phone}</Trow>
                            <Trow>
                                <Ebtn variant="contained" style={{marginRight: 10}} component={Link} to ={`/edit/${user._id}`}>Edit</Ebtn>
                                <Dbtn variant="contained" onClick={()=> deleteUserDetails(user._id)}>Delete</Dbtn>

                            </Trow>
                            

                        </TableRow>
                    ))
                }

            </TableBody>
        </TableStyle>
    )
}


export default Allusers;