import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SwipeableViews from 'react-swipeable-views';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import ReactMarkdown from "react-markdown";
import { getProjectIntro, voteOnPost, commentOnPost, deleteCommentOnPost, steem_user, submitUpdate } from '../../services/SteemApi';

const styles = {
    root: {
        flexGrow: 1,
    },
    navBtnBlock: {
        margin: '20px 5%'
    },
    block: {
        margin: '20px 5%'
    },
    title: {
        fontSize: 32
    },
    centered: {
        textAlign: 'center'
    },
    centeredButton: {
        marginTop: 30,
        marginBottom: 30
    },
    responsive: {
        width: '80%',
        texAlign: 'center'
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
    btnLink: {
        textDecoration: 'none',
        background: '#3f51b5',
        color: '#ffffff',
    },
    link: {
        textDecoration: 'none',
        color: '#3f51b5',
        textAlign: 'center'
    }
};

function TabContainer({ children, dir }) {
    return (
        <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
            {children}
        </Typography>
    );
}

const timeoutDelay = 6000;

class UpdatePost extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tabValue: 1,
            comment: '',
            isVoteActionLoading: false,
            isCommentActionLoading: false,
            isVoteDone: false,
            isCommentDone: false, 
            intro: null
        };
    }

    handleChange = (event, value) => {
        this.setState({ tabValue: value });
    };

    handleChangeIndex = index => {
        this.setState({ tabValue: index });
    };

    vote = () => {
        this.setState({
            isVoteActionLoading: true, 
            isVoteDone: false
        }, () => {
            voteOnPost(this.props.currentProject.author, this.props.currentProject.permlink).then(() => {
                setTimeout(() => {
                    this.props.getCurrentProject(this.props.id);
                    this.setState({ isVoteDone: true, isVoteActionLoading: false  });
                }, timeoutDelay)
            })
        })
    }

    comment = () => {
        if (this.state.comment) {
        this.setState({
            isCommentActionLoading: true,
            isCommentDone: false
        }, () => {
            commentOnPost(this.props.currentProject.author, this.props.currentProject.permlink, '', this.state.comment).then(() => {
                setTimeout(() => {
                    this.props.getCurrentProject(this.props.id);
                    this.setState({ isCommentDone: true });
                    this.setState({ isCommentActionLoading: false });
                }, timeoutDelay)
            })
        })
        }
    }

    commentDelete = (permlink) => {
        this.setState({
            isCommentActionLoading: true
        }, () => {
            deleteCommentOnPost(permlink).then(() => {
                setTimeout(() => {
                    this.props.getCurrentProject(this.props.id);
                    this.setState({ isCommentActionLoading: false });
                }, timeoutDelay)
            })
        })
    }

    commentSubmit = () => {
        const title = this.state.newTitle, body = this.state.newBody;
        this.setState({
            isActionLoading: true
        }, () => {
            submitUpdate('', title, body).then(() => {
                setTimeout(() => {
                    this.props.getCurrentProject(this.props.id)
                }, timeoutDelay)
            })
        })
    }

    addNewTitle = (newTitle) => {
        this.setState({ newTitle })
    }

    addNewBody = (newBody) => {
        this.setState({ newBody })
    }

    render() {
        const { classes } = this.props;
        let voters = [];

        const bodyMore = (body) => {
            return body.substring(0, 400) + '...';
        };

        if (!this.props.currentProject || (this.props.currentProject && this.props.currentProject.post_id !== +this.props.id)) {
            this.props.getCurrentProject(this.props.id);

            return <p>Loading project...</p>
        } else {
            const comments = this.props.comments;
            const allVoters = this.props.currentProject.active_votes.reverse().filter(vote => vote.voter);
            allVoters.forEach(voter => !voters.includes(voter) && voters.push(voter));

            return (
                <div className={classes.root}>
                    <Grid container direction="column">
                        <Grid item xs={12}>
                            <div className={classes.navBtnBlock}>
                                <Grid container direction="row">
                                    {/* {<Grid container item xs={3} justify="center" alignItems="center" direction="column">
                                        <Link to="/create-project" className={classes.link}>
                                            <Button variant="contained" size="large" className={classes.centeredButton}>
                                                Start new project
                                            </Button>
                                        </Link>
                                    </Grid>} */}

                                    {/* <Grid container item xs={4} justify="center" alignItems="center" direction="column">
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
                                    </Grid> */}
                                </Grid>
                            </div>
                        </Grid>

                        <Grid item xs={12}>
                            <div className={classes.block}>
                                <h3 className={classes.title}>
                                    {this.props.currentProject.title}
                                </h3>

                                <div>
                                    <ReactMarkdown source={this.props.currentProject.body} escapeHtml={true} className="markdown-body" />
                                    <Button variant="contained" size="large" color="primary" className={classes.centeredButton} onClick={() => window.history.back()}>
                                        Go Back
                                    </Button>
                                </div>
                            </div>
                        </Grid>

                       </Grid>
                </div>
            );
        }
    }
}

export default withStyles(styles)(UpdatePost);