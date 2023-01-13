
import { FormControl, FormGroup, InputLabel, Input, Typography, Button, styled } from "@mui/material";
import { useState, useEffect } from "react";
import { editUser, getUser } from "../service/api";
import {useNavigate, useParams} from "react-router-dom"

const Container = styled(FormGroup)`
    width: 50%;
    margin: 6% auto 0 auto;

`

const Text = styled(Typography)`

 text-align: center;
 font-width: bold;
 color:  #09ada2;
 text-transform: capitalize

 }
  `



  const Form = styled(FormControl)`
 margin-top: 20px;
  color: #09ada2;
  `

  const defaultValue = {
    name: '',
    username: '',
    email: '',
    phone: ''
  }

 

const Edituser = () =>{

    const [user, setUser] = useState(defaultValue);
    const navigate = useNavigate(); 
    const {id} = useParams();

    useEffect(() => {
      
    loadUserDetails();
      
      }, [])


    const loadUserDetails = async ()=>{
        const res = await getUser(id);
        setUser(res.data)
    }


    const onValue =(e)=>{
        
       
        setUser({...user, [e.target.name]: e.target.value})
        }

    const editUserDetail = async ()=>{
        await editUser(user, id);
        navigate('/all');

    }

    return (
        <Container>
            <Text variant='h4'>EDIT USER</Text>
            <Form>
                <InputLabel> Name </InputLabel>
                <Input onChange={(e)=> onValue(e)} name="name" value={user.name}/>
            </Form>
            <Form>
                <InputLabel> Username </InputLabel>
                <Input onChange={(e)=> onValue(e)} name="username" value={user.username}/>
            </Form>
            <Form>
                <InputLabel> Email </InputLabel>
                <Input onChange={(e)=> onValue(e)} name="email" value={user.email}/>
            </Form>
            <Form>
                <InputLabel> Phone </InputLabel>
                <Input onChange={(e)=> onValue(e)} name="phone" value={user.phone}/>
            </Form>
            <Form>
            <Button variant="contained" color="success" onClick={()=> editUserDetail()}>
                    Submit
            </Button>
            </Form>

        </Container>
    )
}

export default Edituser;