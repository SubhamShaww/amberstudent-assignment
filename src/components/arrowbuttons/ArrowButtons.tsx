import React from 'react';
import './ArrowButtons.scss';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/solid';

type Props = {
    currentPersonId: number;
    testimonials: Testimonial[];
    changePerson: ChangePersonFunctionType;
};

const ArrowButtons: React.FC<Props> = ({ currentPersonId, testimonials, changePerson }) => {
    return (
        <div className="arrowbuttons">
            <ArrowLeftIcon
                className="arrowicons"
                onClick={() => currentPersonId > 1 && changePerson(currentPersonId - 1)}
            />

            <ArrowRightIcon
                className="arrowicons"
                onClick={() => currentPersonId < testimonials.length && changePerson(currentPersonId + 1)}
            />
        </div>
    );
};

export default ArrowButtons;
