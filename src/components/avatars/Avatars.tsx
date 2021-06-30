import React from 'react';
import './Avatars.scss';

type Props = {
    isLoaded: boolean;
    currentTestimonial: Testimonial;
    testimonials: Testimonial[];
    changePerson: ChangePersonFunctionType;
};

const Avatars: React.FC<Props> = ({ isLoaded, currentTestimonial, testimonials, changePerson }) => {
    return (
        <div className="avatars">
            {isLoaded &&
                testimonials.map((person) => {
                    return (
                        <img
                            key={person.id}
                            className={`avatar__image ${currentTestimonial.id === person.id && 'avatar__active'}`}
                            src={person.avatar}
                            onClick={() => changePerson(person.id)}
                        />
                    );
                })}
        </div>
    );
};

export default Avatars;
