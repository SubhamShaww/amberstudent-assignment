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
                onClick={() => changePerson(currentPersonId > 1 ? currentPersonId - 1 : testimonials.length)}
            />

            <ArrowRightIcon
                className="arrowicons"
                onClick={() => changePerson(currentPersonId < testimonials.length ? currentPersonId + 1 : 1)}
            />
        </div>
    );
};

export default ArrowButtons;
