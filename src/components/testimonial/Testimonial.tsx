import React from 'react';
import TestimonialFooter from './testimonialFooter/TestimonialFooter';
import './Testimonial.scss';

type Props = {
    isLoaded: boolean;
    currentTestimonial: Testimonial[];
};

const Testimonial: React.FC<Props> = ({ isLoaded, currentTestimonial }) => {
    return isLoaded ? (
        <div className="testimonial">
            <h1>{currentTestimonial[0].message}</h1>
            <p>{currentTestimonial[0].lorem}</p>
            <TestimonialFooter name={currentTestimonial[0].name} designation={currentTestimonial[0].designation} />
        </div>
    ) : (
        <div>
            <h2>Loading...</h2>
        </div>
    );
};

export default Testimonial;
