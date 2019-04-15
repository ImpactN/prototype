import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import SwipeableViews from 'react-swipeable-views';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

const styles = {
    root: {
        flexGrow: 1,
    },
    navBtnBlock: {
        margin: '20px 22%'
    },
    block: {
        margin: '60px 22%'
    },
    title: {
        fontSize: 32
    },
    centered: {
        textAlign: 'center'
    },
    centeredButton: {
        marginTop: 50
    },
};

function TabContainer({ children, dir }) {
    return (
        <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
            {children}
        </Typography>
    );
}

class Project extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);

        this.state = {
            tabValue: 0
        };
    }

    handleChange = (event, value) => {
        console.log(value);
        this.setState({ tabValue: value });
    };

    handleChangeIndex = index => {
        console.log(index);
        this.setState({ tabValue: index });
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Grid container direction="column">
                    <Grid item xs={12}>
                        <div className={classes.navBtnBlock}>
                            <Grid container direction="row">
                                <Grid container item xs={4} justify="center" alignItems="center" direction="column">
                                    <Link to="/discover" className={classes.link}>
                                        <Button variant="contained" size="large" className={classes.centeredButton}>
                                            Discover
                                        </Button>
                                    </Link>
                                </Grid>

                                <Grid container item xs={4} justify="center" alignItems="center" direction="column">
                                    <Link to="/discover" className={classes.link}>
                                        <Button variant="contained" size="large" className={classes.centeredButton}>
                                            Start a project
                                        </Button>
                                    </Link>
                                </Grid>

                                <Grid container item xs={4} justify="center" alignItems="center" direction="column">
                                    <Button disabled variant="contained" size="large" className={classes.centeredButton}>
                                        Search
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>

                    <Grid item xs={12}>
                        <div className={classes.block}>
                            <h3 className={classes.title}>
                                Mission & Vision
                            </h3>

                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                                sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                                Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                    </Grid>

                    <Grid item xs={12}>
                        <div className={classes.block}>
                            <Tabs
                                value={this.state.tabValue}
                                onChange={this.handleChange}
                                indicatorColor="primary"
                                textColor="primary"
                                variant="fullWidth"
                            >
                                <Tab label="Story" />
                                <Tab label="Updates" />
                                <Tab label="Co-creators" />
                                <Tab label="Backers" />
                            </Tabs>

                            <SwipeableViews
                                axis={'x'}
                                index={this.state.tabValue}
                                onChangeIndex={this.handleChangeIndex}
                            >
                                <TabContainer dir={'ltr'}>Story</TabContainer>
                                <TabContainer dir={'ltr'}>Updates</TabContainer>
                                <TabContainer dir={'ltr'}>Co-creators</TabContainer>
                                <TabContainer dir={'ltr'}>Backers</TabContainer>
                            </SwipeableViews>
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(Project);