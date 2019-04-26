import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import InfiniteCarousel from 'react-leaf-carousel';
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";


const styles = {
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
    link: {
        textDecoration: 'none',
        color: '#3f51b5',
        textAlign: 'center'
    }
};
class Carousel extends React.Component {
    render() {
        const { elements, perPage, classes } = this.props;
        const bodyMore = (body) => {
            return body.substring(0, 400) + '...';
        };

        return <InfiniteCarousel
            breakpoints={[
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    },
                },
            ]}

            dots={false}
            showSides={false}
            sidesOpacity={10}
            sideSize={500}
            slidesToScroll={1}
            slidesToShow={perPage}
            scrollOnDevice={true}>

            {
                elements.map((proj, idx) => {
                    return <div className={classes.homeProject} id={'markdown'} key={idx}>
                        <Link to={`/projects/${proj.post_id}`} className={classes.link}><h3 className={classes.link}>{proj.title}</h3></Link>
                        <ReactMarkdown className="markdown-body" source={bodyMore(proj.body)} escapeHtml={true} />
                    </div>;
                })
            }
        </InfiniteCarousel>;
    }
}

export default withStyles(styles)(Carousel);