import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Carousel from '../../common/Carousel';
import { Link } from "react-router-dom";
import MissionImg from './images/missino.png';
import HowImg from './images/how.jpg';
import PortraitImg from './images/portrait.jpg';
import BlockChainImg from './images/block.jpg';
import EngageImg from './images/engage.jpg';

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
        padding: '60px 15%'
    },
    title: {
        fontSize: 32
    },
    centered: {
        textAlign: 'center'
    },
    circleBlock1: {
        backgroundColor: 'rgba(255, 58, 32, 0.75)'
    },
    circleBlock2: {
        backgroundColor: 'rgba(86, 192, 42, 0.75)'
    },
    circleBlock3: {
        backgroundColor: 'rgba(251, 195, 10, 0.75)'
    },
    homeCircle: {
        borderRadius: '50%',
        border: '1px dashed #3f51b5',
        width: 100,
        height: 125,
        marginTop: 75
    },
    homeCircleText: {
        padding: '0 10%'
    },
    homeProject: {
        border: '1px dashed #3f51b5',
        width: '80%',
        margin: '75px 25px 0 25px',
        padding: 25,
        paddingTop: 5,
        boxSizing: 'border-box',
        height: 400,
        overflow: 'scroll'
    },
    centeredButton: {
        marginTop: 50
    },
    btnLink: {
        textDecoration: 'none',
        background: '#3f51b5',
        color: '#ffffff',
    },
    link: {
        textDecoration: 'none',
        color: '#3f51b5',
        textAlign: 'center'
    },
    blockColor1: {

    },
    blockTextP: {
        padding: '2.5%'
    },
    blockTextImg: {
        textAlign: 'center'
    }
};

class Home extends React.Component {
    render() {
        const { classes } = this.props;
        const carouselElements = this.props.projects;

        return (
            <div className={classes.root}>
                <Grid container direction="column">
                    <Grid item xs={12}>
                        <div className={`${classes.block} ${classes.blockColor1}`}>
                            <Grid container direction="row" alignItems="center" justify="center">
                                <Grid item xs={6} className={classes.blockTextImg}>
                                    <img style={{ width: '65%' }} src={MissionImg} alt="Mission" />
                                </Grid>

                                <Grid item xs={6} className={classes.blockTextP}>
                                    <h3 className={classes.title}>
                                        Mission & Vision
                                    </h3>

                                    <p>
                                        Our vision is it to ease the individual achievement of social impact for planet and people.
                                        We want to support the socially active with an infrastructure that lowers hurdles of the
                                        project creation process and lets them focus solely on the challenge they chose to solve.
                                        <br />
                                        <br />
                                        To achieve this, we help them to raise funds for their social projects and connect with the right
                                        people within a purpose-driven community. All on one platform.
                                    </p>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>

                    <Grid item xs={12}>
                        <div className={`${classes.block} ${classes.blockColor1}`}>
                            <Grid container direction="row" alignItems="center" justify="center">
                                <Grid item xs={6} className={classes.blockTextP}>
                                    <h3 className={classes.title}>How Does It Work</h3>

                                    <h4>Getting in touch</h4>
                                    <p>Existing projects and people with ideas can post their state of development and demand for talent or funds. 
                                    Users scan the projects’ database and get in touch directly with projects to become co-creators. 
                                    In future matchmaking processes will support this getting together.</p>

                                    <h4>Sharing talent</h4>
                                    <p>Development of global project teams is supported through the platform. 
                                    These teams can draw on best-practice, which is identified through community evaluation. Tools, e.g. 
                                    for effective networking, project management and communication will be provided in future.</p>

                                    <h4>Direct funding</h4>
                                    <p>Direct project funding is enabled by transfer via blockchain. This makes funding a fast, 
                                    cheap and personal experience. Using public blockchain ensures transparency of flow of 
                                    funds and provides protection against fraudulos behaviour. this supports building trust between distant partners.</p>
                                    <br/>
                                    <p>Good projects will receive an extra-funding in form of rewards with project assessment based on community evaluation.</p>
                                </Grid>

                                <Grid item xs={6} className={classes.blockTextImg}>
                                    <img style={{ width: '60%' }} src={HowImg} alt="How" />
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>

                    <div className={`${classes.block} ${classes.circleBlock1}`}>
                        <Grid container direction="row">
                            <Grid container item xs={12} sm={12} md={3} justify="center" alignItems="center" direction="column">
                                <img className={classes.homeCircle} src={PortraitImg} alt="Portrait" />
                                <h3>Create project</h3>
                                <p className={classes.homeCircleText}>
                                    You have a project idea and look for talents or funds? Please <Link to={`/create-project`}>register</Link> a project account. Describe your project story by 
                                    answering some questions, that help you tell your project story. Publish it and ask the community to engage in your project.
                                </p>
                            </Grid>

                            <Grid container item xs={12} sm={12} md={3} justify="center" alignItems="center" direction="column">
                                <img className={classes.homeCircle} src={PortraitImg} alt="Portrait" />
                                <h3>Find co-creators</h3>
                                <p className={classes.homeCircleText}>
                                    You’d like to invite people to co-create your project or idea? What fields of knowledge are you looking for? 
                                    Do you need volunteers for specific tasks? Write an <Link to={`/create-project`}>update</Link> on your project story and describe your needs. 
                                </p>
                            </Grid>

                            <Grid container item xs={12} sm={12} md={3} justify="center" alignItems="center" direction="column">
                                <img className={classes.homeCircle} src={PortraitImg} alt="Portrait" />
                                <h3>Reward social impact</h3>
                                <p className={classes.homeCircleText}>
                                    You want impactful projects to be visible? You want them to receive a little extra funding? Look through the project database and “like” 
                                    those  you think are really good. They’ll be ranked higher and receive more visibility and some extra funding.
                                </p>
                            </Grid>

                            <Grid container item xs={12} sm={12} md={3} justify="center" alignItems="center" direction="column">
                                <img className={classes.homeCircle} src={PortraitImg} alt="Portrait" />
                                <h3>Fund/Invest projects</h3>
                                <p className={classes.homeCircleText}>
                                    You are looking for a cheap and fast means of globally funding projects? Find your favorite project in our database. 
                                    Register or login to your blockchain-account. Transfer blockchain currency within seconds.
                                </p>
                            </Grid>
                        </Grid>
                    </div>

                    <Grid item xs={12}>
                        <div className={`${classes.block} ${classes.circleBlock2}`}>
                            <h3 className={classes.title}>
                                For Whom?
                            </h3>

                            <Grid container direction="row">
                                <Grid container item xs={12} sm={12} md={3} justify="center" alignItems="center" direction="column">
                                    <img className={classes.homeCircle} src={PortraitImg} alt="Portrait" />
                                    <h3>Donors/philanthropists</h3>
                                    <p className={classes.homeCircleText}>
                                        Some explanation
                                    </p>
                                </Grid>

                                <Grid container item xs={12} sm={12} md={3} justify="center" alignItems="center" direction="column">
                                    <img className={classes.homeCircle} src={PortraitImg} alt="Portrait" />
                                    <h3>Change-influencers</h3>
                                    <p className={classes.homeCircleText}>
                                        Some explanation
                                    </p>
                                </Grid>

                                <Grid container item xs={12} sm={12} md={3} justify="center" alignItems="center" direction="column">
                                    <img className={classes.homeCircle} src={PortraitImg} alt="Portrait" />
                                    <h3>Investors</h3>
                                    <p className={classes.homeCircleText}>
                                        Some explanation
                                    </p>
                                </Grid>

                                <Grid container item xs={12} sm={12} md={3} justify="center" alignItems="center" direction="column">
                                    <img className={classes.homeCircle} src={PortraitImg} alt="Portrait" />
                                    <h3>Companies</h3>
                                    <p className={classes.homeCircleText}>
                                        Some explanation
                                    </p>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>

                    <Grid item xs={12} sm={12}>
                        <div className={`${classes.block} ${classes.blockColor1}`}>
                            <h3 className={classes.title}>
                                Projects feed
                            </h3>

                            {this.props.projects.length > 0
                                ? <Carousel elements={carouselElements} perPage={3} />
                                : <div>No projects yet, but you can be first!</div>
                            }

                            <Grid container item xs={12} justify="center" alignItems="center" direction="column" className={classes.centeredButton}>
                                <Link to={`/create-project`} className={classes.link}>
                                    <Button variant="contained" size="large" color="primary" className={classes.btnLink}>
                                        Create next project
                                    </Button>
                                </Link>
                            </Grid>

                            <Grid container item xs={12} justify="center" alignItems="center" direction="column" className={classes.centeredButton}>
                                <a href="mailto:contact@impactn.global" className={classes.link}>
                                    <Button variant="contained" size="large" color="secondary" className={classes.btnLink}>
                                        Become volunteer
                                    </Button>
                                </a>
                            </Grid>

                        </div>
                    </Grid>

                    <Grid item xs={12}>
                        <div className={`${classes.block} ${classes.circleBlock3}`}>
                            <Grid container direction="row" alignItems="center" justify="center">
                                <Grid item xs={6} className={classes.blockTextImg}>
                                    <img style={{ width: '65%' }} src={BlockChainImg} alt="Blockchain" />
                                </Grid>

                                <Grid item xs={6} className={classes.blockTextP}>
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
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>

                    <Grid item xs={12}>
                        <div className={`${classes.block} ${classes.blockColor1}`}>
                            <Grid container direction="row" alignItems="center" justify="center">
                                <Grid item xs={6} className={classes.blockTextP}>
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
                                </Grid>

                                <Grid item xs={6} className={classes.blockTextImg}>
                                    <img style={{ width: '75%' }} src={EngageImg} alt="Engage" />
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(Home);