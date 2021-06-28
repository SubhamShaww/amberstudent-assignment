import React from 'react';

type Props = {
    isLoaded: boolean;
    currentTestimonial: Testimonial[];
};

const Testimonial: React.FC<Props> = ({ isLoaded, currentTestimonial }) => {
    return isLoaded ? (
        <div className="testimonial">
            <h2>{currentTestimonial[0].message}</h2>
            <p>{currentTestimonial[0].lorem}</p>
            <div className="testimonial__footer">
                <div className="person">{(currentTestimonial[0].name, currentTestimonial[0].designation)}</div>
                <div className="read">READ FULL STORY</div>
            </div>
        </div>
    ) : (
        <div>
            <h2>Loading...</h2>
        </div>
    );
};

export default Testimonial;
