import React from 'react';
import Testimonial from './testimonial/Testimonial';
import './Testimonials.scss';

type Props = {
    isLoaded: boolean;
    swipeDirection: string;
    currentTestimonial: Testimonial;
    testimonials: Testimonial[];
};

const Testimonials: React.FC<Props> = ({ isLoaded, swipeDirection, currentTestimonial, testimonials }) => {
    const testimonialPropForSwipeLeft = (index: number, position: number): Testimonial => {
        // position should have value either 0 or 1
        // i.e 0 for first and 1 for second.

        if (index === 0) {
            if (position === 0) {
                return testimonials[testimonials.length - 1];
            } else {
                return testimonials[index];
            }
        }

        return testimonials[index + position - 1];
    };

    const testimonialPropForSwipeRight = (index: number, position: number): Testimonial => {
        // position will be either 0 or 1
        // i.e 0 for first and 1 for second.

        if (index === testimonials.length - 1) {
            if (position === 0) {
                return testimonials[index];
            } else {
                return testimonials[0];
            }
        }

        return testimonials[index + position];
    };

    return isLoaded ? (
        <div className="testimonials">
            {testimonials.map((testimonial, index) => {
                return (
                    currentTestimonial.id === testimonial.id && (
                        <div key={testimonial.id} className="testimonials__matched">
                            <Testimonial
                                swipeDirection={swipeDirection}
                                testimonial={
                                    swipeDirection === 'swipeleft'
                                        ? testimonialPropForSwipeLeft(index, 0)
                                        : testimonialPropForSwipeRight(index, 0)
                                }
                            />
                            <Testimonial
                                swipeDirection={swipeDirection}
                                testimonial={
                                    swipeDirection === 'swipeleft'
                                        ? testimonialPropForSwipeLeft(index, 1)
                                        : testimonialPropForSwipeRight(index, 1)
                                }
                            />
                        </div>
                    )
                );
            })}
        </div>
    ) : (
        <div>
            <h2>Loading...</h2>
        </div>
    );
};

export default Testimonials;
