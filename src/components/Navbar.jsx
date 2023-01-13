
import {AppBar, Toolbar, styled} from '@mui/material';
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
    background: #005f73;
    
`
const Tabs = styled(NavLink)`
    font-size: 20px;
    margin-right: 40px;
    color: Inherit;
    text-decoration: none;

`


const Navbar = ()=>{
    return(
        <Header position='static'>
            <Toolbar>
               <Tabs to='/'>All Text</Tabs>
                <Tabs to='/all'>All Users</Tabs>
                <Tabs to='/add'>Add Users</Tabs>
                <Tabs to='/text'>Add Text</Tabs>
             </Toolbar>

        </Header>
    )
}

export default Navbar;
