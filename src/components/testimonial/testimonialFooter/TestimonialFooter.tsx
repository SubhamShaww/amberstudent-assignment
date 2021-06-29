import React from 'react';
import './TestimonialFooter.scss';

type Props = {
    name: string;
    designation: string;
};

const TestimonialFooter: React.FC<Props> = ({ name, designation }) => {
    return (
        <div className="testimonial__footer">
            <div className="person">
                <p>{name},</p>
                <p>{designation}</p>
            </div>
            <div className="read">READ FULL STORY</div>
        </div>
    );
};

export default TestimonialFooter;
