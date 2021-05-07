import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import { Form ,Button} from 'react-bootstrap';

const useStyles = makeStyles((theme) => ({
  paper: {
    border: '0px solid',
    padding: theme.spacing(5),
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimplePopper() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <div style={{marginLeft:"66%",marginTop:"-7%"}}>
      <button aria-describedby={id} type="button" onClick={handleClick}
       class="btn btn-light "><svg xmlns="http://www.w3.org/2000/svg" width="26" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg><text style={{color:"gray"}}>Hello, Log In</text><br/><b>My Account</b></button>
      
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <div className={classes.paper}>
             <Form><b style={{marginLeft:"18%"}}>Log In to Your Account</b><br/><br/>
                    <Form.Group controlId="formGroupPassword">
    
    <Form.Control type="password" placeholder="customer@example.com"style={{backgroundColor:"rgb(221, 218, 218)",  border:"white"}} />
  </Form.Group><br/>
  <Form.Group controlId="formGroupEmail">
  


  <div class="input-group">
   
    <Form.Control type="email" placeholder="Secret word" style={{backgroundColor:"rgb(221, 218, 218)",   border:"white"}} />
    <button type="button" class="btn btn-outline-secondary" style={{backgroundColor:"rgb(221, 218, 218)", border:"white"}}>forgot?</button></div>
 
  </Form.Group><br/>
  <Button variant="primary"style={{backgroundColor:"rgb(156, 9, 82)",width:"40%",border:"white",marginLeft:"29%"}} type="submit">
   Login
  </Button>
  <button type="button"style={{marginLeft:"24%",color:"gray"}} class="btn btn-light">Create An Account</button>

 
</Form>   

        </div>
      </Popper>
    </div>
  );
}
