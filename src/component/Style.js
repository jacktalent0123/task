import { makeStyles } from '@mui/styles';
export const useStyles = makeStyles({
    toolbar: {
        backgroundColor: '#4d81b7',
        height: '70px',
        color: 'white'
    },
    title: {
        paddingLeft: "2.8%",
        paddingTop: "1.8%"
    },
    container: {
        maxWidth: 700,
        minHeight: 300,
        margin: "7.5%",
        marginLeft: "auto",
        marginRight: 'auto'
    },
    container_text: {
        paddingLeft: "30%",
        paddingTop: "10%",
        opacity: "45%"
    },
    container_button: {
        left: "33%",
        top: "15px"
    },
    modal_toolbar: {
        backgroundColor: '#fafafa',
        height: '70px',
        color: 'black'
    },
    modal_title: {
        paddingLeft: "2.8%",
        marginTop: "20px"
    },
    modal_cardcontent: {
        margin: "2%"
    },
    task_card: {
        margin: '1%',
        height: '90px',
        maxWidth: '1100px',
        marginLeft: "auto",
        marginRight: "auto"
    },
    task_input: {
        top: '25px',
        position: 'relative'
    },
    task_title: {
        fontFamily: 'Dosis',
        top: '22px',
        position: 'relative',
        fontWeight: '600',
        fontSize: '20px'
    },
    task_text: {
        top: '25px',
        position: 'relative',
        opacity: '45%'
    },
    del_icon: {
        float: 'right',
        position: 'relative',
        top: '70%',
        cursor: "pointer"
    },
    edit_icon: {
        float: 'right',
        position: 'relative',
        right: '40%',
        top: '70%',
        cursor: "pointer"
    },
    group_card: {
        marginTop: '40px'
    },
    action_button: {
        marginTop: '22%',
        position: 'relative',
        float: "right"
    },
    action_buttons: {
        marginTop: '15%',
        position: 'relative',
        float: "right"
    },
    modal_box: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        height: 250,
        padding: '10px',
        borderColor: 'white',
    }
});