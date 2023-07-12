import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';


const Drawercomp=({job})=> {
  const [drawerstate, setDrawerstate] = React.useState(false);
  console.log("jobfrom drawer", job.options[0])

  const toggleDrawer = (anchor, open) => (event) => {
    setDrawerstate(!drawerstate);
  };

  const list = (anchor) => (
    <Box
      sx={{ width : 500 }}
      role="presentation"
      onClick={toggleDrawer()}
      // onKeyDown={toggleDrawer()}
    >
      <Button onClick={()=>toggleDrawer()} variant='contained' color='error'>close</Button>
      <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  
    </Box>
  );

  return (
    <div>
  
        <React.Fragment>
          <Button onClick={toggleDrawer(true)}>View Offer</Button>
          <Drawer
            anchor="right"
            open={drawerstate}
            onClose={toggleDrawer}
          >
            {list("right")}
          </Drawer>
        </React.Fragment>
  
    </div>
  );
}
export default Drawercomp