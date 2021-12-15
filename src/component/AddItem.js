import * as React from 'react';
import { Link } from 'react-router-dom';

import { Grid, CardActions, Typography, Card, Button, CardContent, Drawer, Box, FormControl, OutlinedInput, InputAdornment, TextField, Select, MenuItem, InputLabel } from '@mui/material';
import { useStyles } from './Style'
function AddItem() {
    const classes = useStyles();
    const [state, setState] = React.useState({ right: false });
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    }
    const list = (anchor) => (
        <Box
            role="presentation"
            minWidth={600}
            maxWidth={600}>

            <Grid className={classes.modal_toolbar}>
                <Typography className={classes.title}>SHOPPING LIST</Typography>
            </Grid>
            <Card >
                <CardContent className={classes.modal_cardcontent}>
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <Typography className={classes.modal_container_title}>Add and item</Typography>
                        <Typography className={classes.modal_container_text}>Add your new item below</Typography>
                    </FormControl>
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <OutlinedInput
                            startAdornment={<InputAdornment position="start"></InputAdornment>}
                            disabled
                            placeholder='Item Name'
                        />
                    </FormControl>
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <TextField
                            label="Description"
                            multiline
                            rows={4}
                            placeholder='Description'
                        />
                    </FormControl>
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <InputLabel id="demo-multiple-chip-label">How many?</InputLabel>
                        <Select
                            labelId="demo-customized-select-label"
                            id="demo-customized-select"
                        >
                            <MenuItem >1</MenuItem>
                            <MenuItem >2</MenuItem>
                            <MenuItem>3</MenuItem>
                        </Select>
                    </FormControl>
                </CardContent>
                <CardActions className={classes.action_button}>
                    <Button size="small" onClick={toggleDrawer("right", false)} > Cancle</Button>
                    <Link to="/Add_task" style={{ display: "-webkit - inline - box" }}><Button size="small" variant="contained" >Add Task</Button></Link>
                </CardActions>
            </Card>
        </Box >

    );
    return (
        <div className={classes.root}>
            <Grid className={classes.toolbar}>
                <Typography className={classes.title}>SHOPPING LIST</Typography>
            </Grid>
            <Card className={classes.container} >
                <CardContent>
                    <Typography className={classes.container_text}>Your shopping list is empty :(</Typography>
                    <Button size="small" className={classes.container_button} variant="contained" onClick={toggleDrawer("right", true)}>Add your first item</Button>
                </CardContent>
            </Card>
            <Drawer
                anchor="right"
                open={state["right"]}
                onClose={toggleDrawer("right", false)}
            >
                {list("right")}
            </Drawer>
        </div >
    );
}
export default AddItem;
