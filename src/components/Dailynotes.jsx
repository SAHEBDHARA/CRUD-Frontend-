import {styled} from "@mui/material"

const Container = styled("div")`
display: inline-grid;
 margin: 20px;
 background: #94d2bd;
 width: 450px;
 height:200px;
 border: solid black 1px;
 border-radius: 5px;
 @media (max-width: 768px) {
    width: 90%;
  }
`

const Htext = styled("h1")`
  text-align: center;
  background: #e9d8a6;
  border-radius: 5px;
  color: #005f73;
 margin-top: -0.01em;
 padding-top: 10px;
 font-size: 27px;
`

const Ptext = styled("p")`
text-align: center;
margin: 7px;
overflow-y: scroll;
color: #001219;
`


const Dailynotes = ()=>{
    return (
        <div>
        <Container >
        <Htext>
            This is the daily notes.
        </Htext>
       
        <Ptext>this is the new and common man in the world Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique inventore sapiente, qui aut porro repellat culpa voluptas unde fuga, excepturi alias modi omnis dolores accusamus eius delectus? Repellendus, quo sed. </Ptext>
        </Container>
        <Container >
        <Htext>
            This is the daily notes.
        </Htext>
       
        <Ptext>this is the new and common man in the world Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique inventore sapiente, qui aut porro repellat culpa voluptas unde fuga, excepturi alias modi omnis dolores accusamus eius delectus? Repellendus, quo sed. </Ptext>
        </Container>
        <Container >
        <Htext>
            This is the daily notes.
        </Htext>
       
        <Ptext>this is the new and common man in the world Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique inventore sapiente, qui aut porro repellat culpa voluptas unde fuga, excepturi alias modi omnis dolores accusamus eius delectus? Repellendus, quo sed. </Ptext>
        </Container>
        <Container >
        <Htext>
            This is the daily notes.
        </Htext>
       
        <Ptext>this is the new and common man in the world Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique inventore sapiente, qui aut porro repellat culpa voluptas unde fuga, excepturi alias modi omnis dolores accusamus eius delectus? Repellendus, quo sed. </Ptext>
        </Container>
        <Container >
        <Htext>
            This is the daily notes.
        </Htext>
       
        <Ptext>this is the new and common man in the world Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique inventore sapiente, qui aut porro repellat culpa voluptas unde fuga, excepturi alias modi omnis dolores accusamus eius delectus? Repellendus, quo sed. </Ptext>
        </Container>

        </div>
    )
}

export default Dailynotes;