import React from 'react';
import TestimonialFooter from '../testimonialFooter/TestimonialFooter';
import './Testimonial.scss';

type Props = {
    swipeDirection: string;
    testimonial: Testimonial;
};

const Testimonial: React.FC<Props> = ({ swipeDirection, testimonial }) => {
    return (
        <div className={`testimonial ${swipeDirection}`}>
            <h1>{testimonial.message}</h1>
            <p>{testimonial.lorem}</p>
            <TestimonialFooter name={testimonial.name} designation={testimonial.designation} />
        </div>
    );
};

export default Testimonial;
