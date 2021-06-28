import React from 'react';

type Props = {
    currentPersonId: number;
    testimonials: Testimonial[];
    changePerson: ChangePersonFunctionType;
};

const Buttons: React.FC<Props> = ({ currentPersonId, testimonials, changePerson }) => {
    return (
        <div className="buttons">
            <div className="buttons__each" onClick={() => currentPersonId > 1 && changePerson(currentPersonId - 1)}>
                Left Arrow Icon
            </div>
            <div
                className="buttons__each"
                onClick={() => currentPersonId < testimonials.length && changePerson(currentPersonId + 1)}
            >
                Right Arrow Icon
            </div>
        </div>
    );
};

export default Buttons;
