import { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { useStyles } from '../core/Style';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { off } from 'process';
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
function Task3(props) {
    const classes = useStyles();
    const [name, changeName] = useState("");
    const [address, changeAddress] = useState("");
    const [showSuccess, changeShowSuccess] = useState(false);
    const handleAddress = (event) => { changeAddress(event.target.value) }
    const handleName = (event) => { changeName(event.target.value) }
    const handleSubmit = (event) => { console.log('submit form'); changeShowSuccess(true); changeName(""); changeAddress(""); event.preventDefault(); }
    const handleCloseSuccess = () => { changeShowSuccess(false); }

    useEffect(() => {
        if (showSuccess) {
            setInterval(() => {
                changeShowSuccess(false);
            }, 2000)
        }
    }, [showSuccess])

    return (
        <Card className={classes.root}>
            <CardActions>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2} className={classes.textCenter}>
                        <Grid item xs={12}><h1>Form</h1></Grid>
                        <Grid item xs={12}>
                            <TextField className={classes.textStyle} id="outlined-basic" label="Name" variant="outlined" value={name} onChange={handleName} autoComplete="off" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="outlined-multiline-static"
                                label="Address"
                                multiline
                                rows={4}
                                variant="outlined"
                                className={classes.textStyle}
                                value={address}
                                autoComplete="off"
                                onChange={handleAddress}
                            />
                        </Grid>
                        <Grid item xs={12} className={classes.buttonStyle}>
                            <Button type="submit" variant="contained" color="primary" disabled={name === "" || address === ""}>Submit</Button>
                        </Grid>
                    </Grid>
                </form>
            </CardActions>
            <Snackbar open={showSuccess} autoHideDuration={2000} onClose={handleCloseSuccess}>
                <Alert onClose={handleCloseSuccess} severity="success">
                    Form Saved Successfully.
                </Alert>
            </Snackbar>
        </Card>
    );
}

export default Task3;