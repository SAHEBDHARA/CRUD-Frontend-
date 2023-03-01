import { FormControl, FormGroup, InputLabel, Input, Typography, Button, styled } from "@mui/material";
import { useState } from "react";
import { addUser } from "../../service/api";
import {useNavigate} from "react-router-dom"

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

 

const Adduser = () =>{

    const [user, setUser] = useState(defaultValue);
    const navigate = useNavigate(); 


    const onValue =(e)=>{
        
       
        setUser({...user, [e.target.name]: e.target.value})
        }

    const addUserDetail = async ()=>{
        await addUser(user);
        navigate('/all');

    }

    return (
        <Container>
            <Text variant='h4'>ADD USER</Text>
            <Form>
                <InputLabel> Name </InputLabel>
                <Input onChange={(e)=> onValue(e)} name="name"/>
            </Form>
            <Form>
                <InputLabel> Username </InputLabel>
                <Input onChange={(e)=> onValue(e)} name="username"/>
            </Form>
            <Form>
                <InputLabel> Email </InputLabel>
                <Input onChange={(e)=> onValue(e)} name="email"/>
            </Form>
            <Form>
                <InputLabel> Phone </InputLabel>
                <Input onChange={(e)=> onValue(e)} name="phone"/>
            </Form>
            <Form>
            <Button variant="contained" color="success" onClick={()=> addUserDetail()}>
                    Submit
            </Button>
            </Form>

        </Container>
    )
}

export default Adduser;