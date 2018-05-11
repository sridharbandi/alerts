import React from 'react';
import Button from 'material-ui/Button';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    withMobileDialog,
} from 'material-ui/Dialog';

const modal = (props) => (
    <Dialog
        fullScreen={false}
        open={props.isopen}
        onClose={props.close}
        aria-labelledby="dialog-title">
        <DialogTitle id="dialog-title">{"Dialog Title"}</DialogTitle>
        <DialogContent>
            <DialogContentText>
                This is demo application to play with Selenium.
                        </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button
                onClick={props.close}
                variant="raised"
                color="secondary">
                Cancel
            </Button>
            <Button
                onClick={props.close}
                variant="raised"
                color="primary">
                OK
            </Button>
        </DialogActions>
    </Dialog>
);

export default withMobileDialog()(modal);