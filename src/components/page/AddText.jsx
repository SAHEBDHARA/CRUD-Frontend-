import {TextField, Typography,Button, FormGroup, styled, FormControl, Input, InputLabel } from "@mui/material";
import { useState } from "react";
import {useNavigate} from "react-router-dom"
import { addText } from "../../service/api";



const Container = styled(FormGroup)`
 width: 50%;
 margin: 6% auto 0 auto
`

const Text = styled(Typography)`

 text-align: center;
font-size: 30px;
 color:  #09ada2;
 text-transform: capitalize

 }
  `

  const Ipt = styled(Input)`
  margin-top: 20px;
  
  `
  const TField = styled(TextField)`
  margin: 20px 0;
 
  `
const defaultText = {
    heading: '',
    text: ''
    // date: ''
}
const Addtext = () =>{

    const [text, setText] = useState(defaultText);
    const navigate = useNavigate();


 
 
    const addTextDetail = async()=>{

        await addText(text);
        navigate('/')
       
        
    }

 const onText = (e)=>{
    // console.log(e.target.name);
    setText({...text, [e.target.name]: e.target.value})
    
 }



    return (
        <Container>
            <Text> Add Text </Text>
            <FormControl>
            <InputLabel> Heading </InputLabel>

             <Ipt onChange={(e)=> onText(e)} name="heading"/>

                <TField  onChange={(e)=> onText(e)} label="Text" name="text" />

                <Button variant="contained" color="success" onClick={()=> addTextDetail()} >
                    Add Text
                </Button>

            </FormControl  >

        </Container>
     
    )
}

export default Addtext;