import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Carousel from '../../common/Carousel';
import { Link } from "react-router-dom";
import MissionImg from './images/missino.png';
import HowImg from './images/how.jpg';
import BlockChainImg from './images/block.jpg';
import EngageImg from './images/engage.jpg';
import PortraitImg from './images/portrait.jpg';
import BrushImg from './images/baseline-brush-24px.svg';
import EuroImg from './images/baseline-euro_symbol-24px.svg';
import FavoriteImg from './images/baseline-favorite-24px.svg';
import GroupImg from './images/baseline-group_add-24px.svg';
import GlobeImg from './images/globe.png';

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
        width: 50,
        height: 50,
        position: 'relative',
        float: 'left',
        backgroundPosition: '50% 50%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
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
    },
    imgBlock: {
        width: '100%',
        height: 500,
        backgroundPosition: '50% 50%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    }
};

class Home extends React.Component {
    render() {
        const { classes } = this.props;
        const carouselElements = this.props.projects;

        return (
            <div className={classes.root}>
                 <div className={classes.imgBlock} style={{ backgroundImage: `url(${GlobeImg})` }}></div>

                <Grid container direction="column">
                    <Grid item xs={12}>
                        <div className={`${classes.block} ${classes.blockColor1}`}>
                            <Grid container direction="row" alignItems="center" justify="center">
                                <Grid item xs={12} className={classes.blockTextP}>
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
                            <Grid container item xs={12} sm={12} md={3} alignItems="center" direction="column">
                                <div className={classes.homeCircle} style={{ backgroundImage: `url(${BrushImg})` }}></div>
                                <h3>Create project</h3>
                                <p className={classes.homeCircleText}>
                                    You have a project idea and look for talents or funds? Please <Link to={`/register`}>register</Link> a project account. Describe your project story by 
                                    answering some questions, that help you tell your project story. Publish it and ask the community to engage in your project.
                                </p>
                            </Grid>

                            <Grid container item xs={12} sm={12} md={3} alignItems="center" direction="column">
                                <div className={classes.homeCircle} style={{ backgroundImage: `url(${GroupImg})` }}></div>
                                <h3>Find co-creators</h3>
                                <p className={classes.homeCircleText}>
                                    You’d like to invite people to co-create your project or idea? What fields of knowledge are you looking for? 
                                    Do you need volunteers for specific tasks? Write an <Link to={`/register`}>update</Link> on your project story and describe your needs. 
                                </p>
                            </Grid>

                            <Grid container item xs={12} sm={12} md={3} alignItems="center" direction="column">
                                <div className={classes.homeCircle} style={{ backgroundImage: `url(${EuroImg})` }}></div>
                                <h3>Reward social impact</h3>
                                <p className={classes.homeCircleText}>
                                    You want impactful projects to be visible? You want them to receive a little extra funding? Look through the project database and “like” 
                                    those  you think are really good. They’ll be ranked higher and receive more visibility and some extra funding.
                                </p>
                            </Grid>

                            <Grid container item xs={12} sm={12} md={3} alignItems="center" direction="column">
                                <div className={classes.homeCircle} style={{ backgroundImage: `url(${FavoriteImg})` }}></div>
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
                                    <h3>Donors/philanthropists</h3>
                                    <p className={classes.homeCircleText}>
                                    You are looking for impactful projects? Community evaluation will guide you to the right ones. 
                                    When you’ve made your choice, please follow the steps described in "fund projects"
                                    </p>
                                </Grid>

                                <Grid container item xs={12} sm={12} md={3} justify="center" alignItems="center" direction="column">
                                    <h3>Change-influencers</h3>
                                    <p className={classes.homeCircleText}>
                                    You want to engage for United Nations’ Global Goals? You want to be inspired? 
                                    Search our project database and get in touch with your favorite project. Or start your own project.
                                    </p>
                                </Grid>

                                <Grid container item xs={12} sm={12} md={3} justify="center" alignItems="center" direction="column">
                                    <h3>Investors</h3>
                                    <p className={classes.homeCircleText}>
                                    You are looking for crowd investing in social impact? We plan to realise this together with 
                                    experienced impact investors after successful implementation of funding and evaluation tools.
                                    </p>
                                </Grid>

                                <Grid container item xs={12} sm={12} md={3} justify="center" alignItems="center" direction="column">
                                    <h3>Companies</h3>
                                    <p className={classes.homeCircleText}>
                                    You want to engage for United Nations’ Global Goals? Setting up a contest, boosting rewards for social impact, advertising … there are plenty of possibilities.
                                    Please get in touch, so we can find the right solution together with you.
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

                            <h4>By clicking on a project post you will be able to learn more about the project: its initial story, updates and names of co-creators and backers.</h4>

                            {this.props.projects.length > 0
                                ? <Carousel elements={carouselElements} perPage={3} />
                                : <div>No projects yet, but you can be first!</div>
                            }

                            <Grid container item xs={12} justify="center" alignItems="center" direction="column" className={classes.centeredButton}>
                                <Link to={`/register`} className={classes.link}>
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
                                    Why do we use blockchain? Blockchain is a great tool for seamless, fast and cheap transfer of funds. 
                                    Furthermore, a blockchain provides a transparent and unforgeable database, enabling trust between distant parties not knowing each other. 
                                    Additionally we apply a blockchain-based reward mechanism as motivational tool. 
                                    Finally, the chosen blockchain is eco-friendly and uses very little energy.
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
                                        Engage
                                    </h3>

                                    <p>
                                    ImpactN is a community-based enterprise. This refers to co-creating and evaluating projects as well 
                                    as to setting up the platform itself. We are permanently looking for partners and volunteers to spread 
                                    the word, to approach projects or to engage in the open source development of the platform.
                                    If you are interested please get in contact.
                                    </p>

                                    <Grid container item xs={12} justify="center" alignItems="center" direction="column" className={classes.centeredButton}>
                                        <a href="mailto:contact@impactn.global" className={classes.link}>
                                            <Button variant="contained" size="large" color="secondary" className={classes.btnLink}>
                                                Become volunteer
                                            </Button>
                                        </a>
                                    </Grid>
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