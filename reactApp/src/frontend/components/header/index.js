import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import {compose} from 'redux'
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import classNames from "classnames";
import {toggleNavMenu} from "../../actions";
import {withStyles} from "material-ui/styles/index";


const drawerWidth = 180;
const styles = theme => ({
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        position: 'absolute',
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    root: {
        width: '100%',
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    appBarShift: {
        width: `100% `,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }
});


class Header extends  Component {
    constructor (props) {
        super(props);
        this.state = {
            anchor: 'left',
        };
    }

    handleChange = (event, checked) => {
        // this.props.isUserLogin(checked);
    };

    handleDrawerOpen = () => {
        this.props.toggleNavMenu(true);
    };

    render() {
        const { classes } = this.props;
        const isMenuOpen = this.props.navMenu.isOpen;
        return (
            <div className={classes.appFrame}>

                <AppBar
                    style={{background:'#3e3e40'}}
                    className={(isMenuOpen ? classes.appBar : classes.appBarShift )}
                >
                    <Toolbar >
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={this.handleDrawerOpen}
                            className={classNames(classes.menuButton, isMenuOpen && classes.hide)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography type="title" color="inherit" noWrap>
                            <img alt="logo" className={'header-logo'} style={{height:50}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"/>
                        </Typography>
                    </Toolbar>

                </AppBar>




            </div>

        );
    }
};

const mapStateToProps = (store) => {
    return {
        navMenu: store.navMenu
    }
};

const mapDispatchToProps = {
    toggleNavMenu
};
export default compose(
    withRouter,
    withStyles(styles, { withTheme: true }),
    connect(mapStateToProps, mapDispatchToProps)
)(Header)