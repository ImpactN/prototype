import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Carousel from '../../common/Carousel';

const styles = {
    root: {
        flexGrow: 1,
    },
    claim: {
        padding: '60px 22%'
    },
    claimHeader: {
        fontSize: 40,
        marginBottom: -20
    },
    claimSub: {
        fontSize: 25,
        marginBottom: 50
    },
    claimText: {
        fontSize: 18
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
    homeCircle: {
        borderRadius: '50%',
        border: '1px solid #000000',
        width: 100,
        height: 100,
        marginTop: 75
    },
    homeCircleText: {
        padding: '0 10%'
    },
    homeProject: {
        border: '1px solid #000000',
        width: '80%',
        margin: '75px 25px 0 25px',
        padding: 25,
        paddingTop: 5,
        boxSizing: 'border-box',
    },
    centeredButton: {
        marginTop: 50
    },
};

class Home extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {

        };
    }

    render() {
        const { classes } = this.props;
        const carouselElements = [
            { title: '#1', text: 'Some' },
            { title: '#2', text: 'Some2' },
            { title: '#3', text: 'Some3' },
            { title: '#4', text: 'Some4' },
            { title: '#5', text: 'Some5' },
            { title: '#6', text: 'Some6' },
        ];

        return (
            <div className={classes.root}>
                <Grid container direction="column">
                    <Grid item xs={12}>
                        <div className={classes.claim}>
                            <h1 className={classes.claimHeader}>Claim</h1>
                            <h3 className={classes.claimSub}>Subtitle</h3>
                            <Button variant="contained" className={classes.claimText}>
                                Default
                            </Button>
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
                            <h3 className={classes.title}>
                                How Does It Work
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

                            <Grid container direction="row">
                                <Grid container item xs={3} justify="center" alignItems="center" direction="column">
                                    <div className={classes.homeCircle} />
                                    <h3>Create project</h3>
                                    <p className={classes.homeCircleText}>
                                        Some explanation
                                    </p>
                                </Grid>

                                <Grid container item xs={3} justify="center" alignItems="center" direction="column">
                                    <div className={classes.homeCircle} />
                                    <h3>Find co-creators</h3>
                                    <p className={classes.homeCircleText}>
                                        Some explanation
                                    </p>
                                </Grid>

                                <Grid container item xs={3} justify="center" alignItems="center" direction="column">
                                    <div className={classes.homeCircle} />
                                    <h3>Reward social impact</h3>
                                    <p className={classes.homeCircleText}>
                                        Some explanation
                                    </p>
                                </Grid>

                                <Grid container item xs={3} justify="center" alignItems="center" direction="column">
                                    <div className={classes.homeCircle} />
                                    <h3>Fund/Invest projects</h3>
                                    <p className={classes.homeCircleText}>
                                        Some explanation
                                    </p>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>

                    <Grid item xs={12}>
                        <div className={classes.block}>
                            <h3 className={classes.title}>
                                For Whom?
                            </h3>

                            <Grid container direction="row">
                                <Grid container item xs={3} justify="center" alignItems="center" direction="column">
                                    <div className={classes.homeCircle} />
                                    <h3>Donors/philanthropists</h3>
                                    <p className={classes.homeCircleText}>
                                        Some explanation
                                    </p>
                                </Grid>

                                <Grid container item xs={3} justify="center" alignItems="center" direction="column">
                                    <div className={classes.homeCircle} />
                                    <h3>Change-influencers</h3>
                                    <p className={classes.homeCircleText}>
                                        Some explanation
                                    </p>
                                </Grid>

                                <Grid container item xs={3} justify="center" alignItems="center" direction="column">
                                    <div className={classes.homeCircle} />
                                    <h3>Investors</h3>
                                    <p className={classes.homeCircleText}>
                                        Some explanation
                                    </p>
                                </Grid>

                                <Grid container item xs={3} justify="center" alignItems="center" direction="column">
                                    <div className={classes.homeCircle} />
                                    <h3>Companies</h3>
                                    <p className={classes.homeCircleText}>
                                        Some explanation
                                    </p>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>

                    <Grid item xs={12}>
                        <div className={classes.block}>
                            <h3 className={classes.title}>
                                Projects
                            </h3>

                            <Grid container direction="row">
                                <Grid container item xs={4} justify="center" alignItems="center" direction="column">
                                    <div className={classes.homeProject}>
                                        <h3>Project 1</h3>
                                        {/* <img src="1" alt="image" /> */}
                                        <p>
                                            Some explanation
                                        </p>
                                    </div>
                                </Grid>

                                <Grid container item xs={4} justify="center" alignItems="center" direction="column">
                                    <div className={classes.homeProject}>
                                        <h3>Project 2</h3>
                                        {/* <img src="1" alt="image" /> */}
                                        <p>
                                            Some explanation
                                        </p>
                                    </div>
                                </Grid>

                                <Grid container item xs={4} justify="center" alignItems="center" direction="column">
                                    <div className={classes.homeProject}>
                                        <h3>Project 3</h3>
                                        {/* <img src="1" alt="image" /> */}
                                        <p>
                                            Some explanation
                                        </p>
                                    </div>
                                </Grid>
                            </Grid>

                            <Grid container item xs={12} justify="center" alignItems="center" direction="column">
                                <Button variant="contained" size="large" className={classes.centeredButton}>
                                    Create next project
                                </Button>
                            </Grid>
                        </div>
                    </Grid>

                    <Grid item xs={12}>
                        <div className={classes.block}>
                            <h3 className={classes.title}>
                                Blockchain for sustainable development
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
                            <h3 className={classes.title}>
                                News
                            </h3>

                            <Carousel elements={carouselElements} perPage={4} />

                            <Grid container item xs={12} justify="center" alignItems="center" direction="column">
                                <Button variant="contained" size="large" className={classes.centeredButton}>
                                    Stay updated
                                </Button>
                            </Grid>
                        </div>
                    </Grid>

                    <Grid item xs={12}>
                        <div className={classes.block}>
                            <h3 className={classes.title}>
                                Engage
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

                            <Grid container item xs={12} justify="center" alignItems="center" direction="column">
                                <Button variant="contained" size="large" className={classes.centeredButton}>
                                    Become a volunteer
                                </Button>
                            </Grid>
                        </div>
                    </Grid>


                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(Home);