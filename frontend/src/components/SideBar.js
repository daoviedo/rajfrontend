import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText, IconButton} from "@material-ui/core";

import MenuIcon from '@material-ui/icons/Menu';

function SideBar(props){
    const [open, setOpen] = React.useState(false);
    
    return (
        <React.Fragment>
            <IconButton edge="start" onClick={() => setOpen(true)} aria-label="menu">
                <MenuIcon />
            </IconButton>
            <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
            <div style={{minWidth: 200}} onClick={()=> setOpen(false)}>
                <List>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <ListItem button>
                            <ListItemText primary='This is Link 1' />
                        </ListItem>
                    </Link>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <ListItem button>
                            <ListItemText primary='This is Link 2' />
                        </ListItem>
                    </Link>
                </List>
            </div>
            </Drawer>
        </React.Fragment>
    );
}

export default SideBar;