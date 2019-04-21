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
import { voteOnPost, commentOnPost, deleteCommentOnPost, steem_user, submitUpdate } from '../../services/SteemApi';

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
    }
};

function TabContainer({ children, dir }) {
    return (
        <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
            {children}
        </Typography>
    );
}

const timeoutDelay = 3000;

class Project extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tabValue: 1,
            comment: '',
            isActionLoading: false
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
            isActionLoading: true
        }, () => {
            voteOnPost(this.props.currentProject.permlink).then(() => {
                setTimeout(() => {
                    this.props.getCurrentProject(this.props.id)
                }, timeoutDelay)
            })
        })
    }

    comment = () => {
        if (this.state.comment) {
        this.setState({
            isActionLoading: true
        }, () => {
            commentOnPost(this.props.currentProject.permlink, '', this.state.comment).then(() => {
                setTimeout(() => {
                    this.props.getCurrentProject(this.props.id)
                }, timeoutDelay)
            })
        })
        }
    }

    commentDelete = (permlink) => {
        this.setState({
            isActionLoading: true
        }, () => {
            deleteCommentOnPost(permlink).then(() => {
                setTimeout(() => {
                    this.props.getCurrentProject(this.props.id)
                }, timeoutDelay)
            })
        })
    }

    commentSubmit = () => {
        const title = this.state.newTitle, body = this.state.newBody;
        this.setState({
            isActionLoading: true
        }, () => {
            submitUpdate(title, body).then(() => {
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
                                    <Button variant="contained" size="large" color="primary" className={classes.centeredButton} onClick={this.vote}>
                                        {!this.state.isActionLoading ? 'Vote' : 'Voting...'}
                                    </Button>
                                    <div>
                                        <TextField 
                                            variant="outlined"
                                            multiline
                                            rowsMax="4"
                                            type="textarea"
                                            label="Comment"
                                            id="noter-text-area" 
                                            value={this.state.comment} 
                                            className={`${classes.responsive}`}
                                            onChange={(e) => this.setState({ comment: e.target.value })} />
                                    <div>
                                    <Button variant="contained" size="large" color="secondary" 
                                        className={`${classes.centeredButton}`} 
                                        onClick={this.comment}
                                        disabled={!this.state.comment}
                                        >
                                        {!this.state.isActionLoading ? 'Comment' : 'Commenting...'}
                                    </Button>
                                        </div>
                                    </div>
                                </div>
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
                                    <TabContainer dir={'ltr'}>
                                        {this.props.currentProject.title}
                                    </TabContainer>

                                    <TabContainer dir={'ltr'}>
                                    <div className={classes.block}>
                                    
                                    </div>
                                        <Grid container direction="row">
                                                        {this.props.updatesProject.length > 0 &&
                                                            this.props.updatesProject.map((proj, index) => {
                                                                return <Grid item xs={12} sm={12} md={4} key={index}>
                                                                    <div className={classes.homeProject}>
                                                                        <div className={classes.link}><h3 className={classes.link}>{proj.title}</h3></div>
                                                                        <ReactMarkdown source={bodyMore(proj.body)} escapeHtml={true} className="markdown-body" />
                                                                    </div>
                                                                </Grid>
                                                            })
                                                        }
                                                    </Grid>

                                        {steem_user === this.props.currentProject.author &&
                                            <div>
                                                <h2>Add new update</h2>
                                                <p>
                                                    <TextField 
                                                        variant="outlined"
                                                        type="textarea"
                                                        label="Title"
                                                        id="noter-body-area-new-title"
                                                        value={this.state.newBody}
                                                        className={`${classes.responsive}`}
                                                        onChange={(e) => this.addNewBody(e.target.value)} />
                                                        </p>
                                                <p>
                                                    <TextField 
                                                        variant="outlined"
                                                        multiline
                                                        rowsMax="4"
                                                        type="textarea"
                                                        label="Text"
                                                        id="noter-body-area-new-body"
                                                        value={this.state.newBody}
                                                        className={`${classes.responsive}`}
                                                        onChange={(e) => this.addNewBody(e.target.value)} />
                                                </p>
                                                <Button color="primary" variant="contained" onClick={this.commentSubmit}>{!this.state.isActionLoading ? 'Send' : 'Sending...'}</Button>
                                            </div>
                                        }
                                    </TabContainer>

                                    <TabContainer dir={'ltr'}>
                                        {
                                            comments.map((cm, i, arr) => {
                                                return <b key={`${i}_${cm.author}`}>
                                                    {cm.author}{i === arr.length - 1 ? '' : ', '}<br />
                                                </b>
                                            })
                                        }
                                    </TabContainer>

                                    <TabContainer dir={'ltr'}>
                                        {
                                            voters.map((vote, i, arr) => {
                                                return <b key={`${i}_${vote.voter}`}>{vote.voter}{i === arr.length - 1 ? '' : ', '}<br /></b>
                                            })
                                        }
                                    </TabContainer>
                                </SwipeableViews>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            );
        }
    }
}

export default withStyles(styles)(Project);