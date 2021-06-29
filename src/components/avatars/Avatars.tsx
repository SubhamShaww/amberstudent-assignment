import React from 'react';
import './Avatars.scss';

type Props = {
    isLoaded: boolean;
    testimonials: Testimonial[];
    changePerson: ChangePersonFunctionType;
};

const Avatars: React.FC<Props> = ({ isLoaded, testimonials, changePerson }) => {
    return (
        <div className="avatars">
            {isLoaded &&
                testimonials.map((person) => {
                    return (
                        <img
                            key={person.id}
                            className="personimage"
                            src={person.avatar}
                            onClick={() => changePerson(person.id)}
                        />
                    );
                })}
        </div>
    );
};

export default Avatars;
