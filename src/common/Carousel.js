import React from 'react';

import InfiniteCarousel from 'react-leaf-carousel';

class Carousel extends React.Component {
    render() {
        const { elements, perPage } = this.props;
        console.log(this.props);

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
                elements.map((el, idx) => {
                    return <div key={idx}>
                        <img src="https://via.placeholder.com/150" alt={idx} />
                        <h4>{el.title}</h4>
                        <p>{el.text}</p>
                    </div>
                })
            }
        </InfiniteCarousel>;
    }
}

export default Carousel;