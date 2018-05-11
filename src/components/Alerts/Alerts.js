import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Header from '../Header/Header';
import Modal from './Modal/Modal';
import Aux from '../../hoc/Aux';


const styles = theme => ({
    root: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 3,
    }),
    button: theme.mixins.gutters({
        marginTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 2,
    }),

});

class Alerts extends Component {
    state = {
        list: [
            { name: "Basic Alert", text: "#" },
            { name: "Confirm Alert", text: "#" },
            { name: "Prompt Alert", text: "#" },
            { name: "Dialog", text: "#" }
        ],
        open: false,
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        let currentState = this.state.list;
        currentState[3].text = 'You handled Dialog!';
        this.setState({ open: false });
    };

    clickHanlder = (index) => {
        let currentState = this.state.list;
        switch (index) {
            case 0:
                alert('This is alert message');
                currentState[index].text = 'Basic Alert Worked!';
                break;
            case 1:
                if (window.confirm("Do you want to proceed?")) {
                    currentState[index].text = "You pressed OK!";
                } else {
                    currentState[index].text = "You pressed Cancel!";
                }
                break;
            case 2:
                var person = prompt("Please enter your name:", "");
                if (person === null || person === "") {
                    currentState[index].text = "You cancelled the prompt.";
                } else {
                    currentState[index].text = "Hello " + person + "!";
                }
                break;
            case 3:
                this.setState({ open: true });
                break;
            default:
                break;
        }
        this.setState({ list: currentState });
    }

    render() {
        const { classes } = this.props;
        const alerts = this.state.list.map((obj, index) => {
            return (
                <Paper key={index} className={classes.root} elevation={4}>
                    <Typography variant="headline" component="h3">
                        {obj.name}
                    </Typography>
                    <Button
                        id={obj.name.toString().toLowerCase().replace(/\s/g, '')}
                        className={classes.button}
                        onClick={() => this.clickHanlder(index)}
                        variant="raised"
                        fullWidth
                        color="secondary">
                        Click Me
                        </Button>
                    <Typography component="p">
                        {obj.text}
                    </Typography>
                </Paper>);
        });

        return (
            <Aux>
                <Header />
                <Grid container justify='center' spacing={0}>
                    <Grid item xs={10} sm={4} >
                        {alerts}
                    </Grid>
                </Grid>
                <Modal isopen={this.state.open} close={this.handleClose} />
                <br/>
                <br/>
            </Aux>
        );
    }
}

export default withStyles(styles)(Alerts);