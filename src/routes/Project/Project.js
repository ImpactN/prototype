import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import SwipeableViews from 'react-swipeable-views';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import ReactMarkdown from "react-markdown";
import { voteOnPost, commentOnPost, deleteCommentOnPost, steem_user } from '../../services/SteemApi';

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
    homeProject: {
        border: '1px solid #000000',
        width: '80%',
        margin: '75px 25px 0 25px',
        padding: 25,
        paddingTop: 5,
        boxSizing: 'border-box',
        height: 400,
        overflow: 'hidden'
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

        this.state = {
            tabValue: 0,
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
                }, 10000)
            })
        })
    }

    comment = (text) => {
        this.setState({
            isActionLoading: true
        }, () => {
            commentOnPost(this.props.currentProject.permlink, '', this.state.comment).then(() => {
                setTimeout(() => {
                    this.props.getCurrentProject(this.props.id)
                }, 10000)
            })
        })
    }

    commentDelete = (permlink) => {
        this.setState({
            isActionLoading: true
        }, () => {
            deleteCommentOnPost(permlink).then(() => {
                setTimeout(() => {
                    this.props.getCurrentProject(this.props.id)
                }, 10000)
            })
        })
    }

    render() {
        const { classes } = this.props;
        let voters = [];

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
                                    {/* <Grid container item xs={4} justify="center" alignItems="center" direction="column">
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
                                    <ReactMarkdown source={this.props.currentProject.body} escapeHtml={true} />
                                    <span onClick={this.vote}>
                                        {!this.state.isActionLoading ? 'Vote' : 'Voting...'}
                                    </span>
                                    <span>
                                        <p>Comment</p>
                                        <textarea id="noter-text-area" name="textarea" value={this.state.comment} onChange={(e) => this.setState({ comment: e.target.value })} />
                                        <input type="submit" value={!this.state.isActionLoading ? 'Comment' : 'Commenting...'} onClick={this.comment} disabled={this.state.isActionLoading} />
                                    </span>
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
                                        {
                                            comments.map((cm, i) => {
                                                return <div key={`${i}_${cm.author}`}>
                                                    <h4>Author: {cm.author}
                                                        {/* {steem_user === cm.author &&
                                                            <span onClick={() => this.commentDelete(cm.permlink)}>{!this.state.isActionLoading ? 'Delete' : 'Deleting...'}</span>
                                                        } */}
                                                    </h4>
                                                    <div id={'markdown'}>
                                                        <ReactMarkdown source={cm.body} escapeHtml={true} />
                                                    </div>
                                                    <hr />
                                                </div>
                                            })
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