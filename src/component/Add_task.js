import * as React from 'react';
import { Grid, CardActions, Typography, Card, Button, CardContent, Drawer, Box, FormControl, Checkbox, OutlinedInput, InputAdornment, TextField, Select, MenuItem, InputLabel, Modal } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import LastPageIcon from '@mui/icons-material/LastPage';
import { useStyles } from './Style'
function Add_task() {
    const classes = useStyles();
    const [state, setState] = React.useState({ right: false });
    const [change, setChange] = React.useState({ right: false });
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    }
    const task_toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setChange({ ...change, [anchor]: open });
    }
    const list = (anchor) => (
        <Box
            role="presentation"
            minWidth={600}
            maxWidth={600}>

            <Grid className={classes.modal_toolbar}>
                <Typography className={classes.title}>SHOPPING LIST<LastPageIcon style={{ float: "right" }} /></Typography>
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
                    <Button size="small" variant="contained">Add Task</Button>
                </CardActions>
            </Card>
        </Box >

    );
    const add_list = (states) => (
        <Box
            role="presentation"
            minWidth={600}
            maxWidth={600}>

            <Grid className={classes.modal_toolbar}>
                <Typography className={classes.title}>SHOPPING LIST<LastPageIcon style={{ float: "right" }} /></Typography>
            </Grid>
            <Card >
                <CardContent className={classes.modal_cardcontent}>
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <Typography className={classes.modal_container_title}>Edit an item</Typography>
                        <Typography className={classes.modal_container_text}>Edit your new item below</Typography>
                    </FormControl>
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <OutlinedInput
                            startAdornment={<InputAdornment position="start"></InputAdornment>}
                            disabled
                            placeholder='Buy potatoes'
                        />
                    </FormControl>
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <TextField
                            label="Description"
                            multiline
                            rows={4}
                            placeholder='Get them from Walmart'
                        />
                    </FormControl>
                    <FormControl fullWidth sx={{ m: 1 }}>
                        <InputLabel id="demo-multiple-chip-label">5</InputLabel>
                        <Select
                            labelId="demo-customized-select-label"
                            id="demo-customized-select"
                        >
                            <MenuItem >1</MenuItem>
                            <MenuItem >2</MenuItem>
                            <MenuItem>3</MenuItem>
                        </Select>
                    </FormControl>
                    <Checkbox defaultChecked />Purchased
                </CardContent>
                <CardActions className={classes.action_buttons}>
                    <Button size="small" onClick={task_toggleDrawer("right", false)} > Cancle</Button>
                    <Button size="small" variant="contained">Add Task</Button>
                </CardActions>
            </Card>
        </Box >

    );
    return (
        <div className={classes.root}>
            <Grid className={classes.toolbar}>
                <Typography className={classes.title}>SHOPPING LIST</Typography>
            </Grid>
            <Card className={classes.group_card}>
                <Button size="small" variant="contained" onClick={toggleDrawer("right", true)} style={{ left: "84%" }}>Add item</Button>
                <Card className={classes.task_card}>
                    <Grid container item xs={12}>
                        <Grid item className={classes.task_input}>
                            <Checkbox defaultChecked />
                        </Grid>
                        <Grid item xs={9}>
                            <p className={classes.task_title}>Tomatoes</p>
                            <Typography className={classes.task_text}>Green cherry totatoes</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <EditIcon className={classes.edit_icon} onClick={task_toggleDrawer("right", true)} />
                            <DeleteOutlineIcon className={classes.del_icon} onClick={handleOpen} />
                        </Grid>
                    </Grid>
                </Card>
                <Card className={classes.task_card}>
                    <Grid container xs={12} item>
                        <Grid item className={classes.task_input}>
                            <Checkbox defaultChecked />
                        </Grid>
                        <Grid item xs={9}>
                            <p className={classes.task_title} style={{ color: '#4d81b7' }}><strike>Tomatoes</strike></p>
                            <Typography className={classes.task_text}><strike>Green cherry totatoes</strike></Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <EditIcon className={classes.edit_icon} onClick={task_toggleDrawer("right", true)} />
                            <DeleteOutlineIcon className={classes.del_icon} onClick={handleOpen} />
                        </Grid>
                    </Grid>
                </Card>
                <Card className={classes.task_card}>
                    <Grid container xs={12} item >
                        <Grid item className={classes.task_input}>
                            <Checkbox defaultChecked />
                        </Grid>
                        <Grid item xs={9}>
                            <p className={classes.task_title}>Tomatoes</p>
                            <Typography className={classes.task_text}>Green cherry totatoes</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <EditIcon className={classes.edit_icon} onClick={task_toggleDrawer("right", true)} />
                            <DeleteOutlineIcon className={classes.del_icon} onClick={handleOpen} />
                        </Grid>
                    </Grid>
                </Card>
                <Card className={classes.task_card}>
                    <Grid container xs={12} item>
                        <Grid item className={classes.task_input}>
                            <Checkbox defaultChecked />
                        </Grid>
                        <Grid item xs={9}>
                            <p className={classes.task_title}>Tomatoes</p>
                            <Typography className={classes.task_text}>Green cherry totatoes</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <EditIcon className={classes.edit_icon} onClick={task_toggleDrawer("right", true)} />
                            <DeleteOutlineIcon className={classes.del_icon} onClick={handleOpen} />
                        </Grid>
                    </Grid>
                </Card>
                <Card className={classes.task_card}>
                    <Grid container xs={12} item>
                        <Grid item className={classes.task_input}>
                            <Checkbox defaultChecked />
                        </Grid>
                        <Grid item xs={9}>
                            <p className={classes.task_title}>Tomatoes</p>
                            <Typography className={classes.task_text}>Green cherry totatoes</Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <EditIcon className={classes.edit_icon} onClick={task_toggleDrawer("right", true)} />
                            <DeleteOutlineIcon className={classes.del_icon} onClick={handleOpen} />
                        </Grid>
                    </Grid>
                </Card>
            </Card>
            <Drawer
                anchor="right"
                open={state["right"]}
                onClose={toggleDrawer("right", false)}
            >
                {list("right")}
            </Drawer>
            <Drawer
                anchor="right"
                open={change["right"]}
                onClose={task_toggleDrawer("right", false)}
            >
                {add_list("right")}
            </Drawer>
            <Modal
                hideBackdrop
                open={open}
                onClose={handleClose}
            >
                <Card sx={{ width: 400 }} className={classes.modal_box}>
                    <Grid style={{ margin: "3%" }}>
                        <h2 id="child-modal-title">Delete Item?</h2>
                        <br />
                        <p id="child-modal-description">
                            Are you show you want to delete item? This can not be undone.
                        </p>
                    </Grid>
                    <Grid style={{ float: "right", marginTop: '95px' }}>
                        <Button onClick={handleClose} size="small">Cancel</Button>
                        <Button onClick={handleClose} size="small" variant="contained">Delete</Button>
                    </Grid>
                </Card>
            </Modal>
        </div >
    );
}
export default Add_task;
