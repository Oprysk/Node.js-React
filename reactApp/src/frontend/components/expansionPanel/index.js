import React from 'react';

import { withStyles } from 'material-ui/styles';
import ExpansionPanel, {
    ExpansionPanelSummary,
    ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';

const styles = theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
});

function SimpleExpansionPanel(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading} style={{fontSize:'16px'}}>{ props.title}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    { props.component }
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    );
}



export default withStyles(styles)(SimpleExpansionPanel);