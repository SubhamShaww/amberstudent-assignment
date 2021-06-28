import React, { useState, useEffect } from 'react';
import Testimonial from './components/Testimonial';
import Avatars from './components/Avatars';
import Buttons from './components/Buttons';
import './App.scss';

const App: React.FC = () => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [currentPersonId, setCurrentPersonId] = useState<number>(1);
    const TestimonialsPerPage: number = 1;
    const useMockTestimonialData: boolean = false;

    useEffect(() => {
        let isMounted: boolean = true;
        const abortController: AbortController = new AbortController();
        const signal: AbortSignal = abortController.signal;

        const fetchPosts = async (): Promise<void> => {
            const url: string = useMockTestimonialData
                ? '../mockTestimonial.json'
                : 'https://testimonialapi.toolcarton.com/api';

            const res = await fetch(url, {
                signal: signal,
            });
            const resData = await res.json();

            // console.log(resData);
            isMounted && setTestimonials(resData);
            isMounted && setIsLoaded(true);
        };

        fetchPosts();

        return () => {
            // cleanup;
            isMounted = false;
            abortController.abort();
        };
    }, []);

    // get current testimonial
    const indexOfLastTestimonial = currentPersonId * TestimonialsPerPage;
    const indexOfFirstTestimonial = indexOfLastTestimonial - TestimonialsPerPage;
    const currentTestimonial = testimonials.slice(indexOfFirstTestimonial, indexOfLastTestimonial);

    const changePerson: ChangePersonFunctionType = (personId: number) => {
        setCurrentPersonId(personId);
    };

    return (
        <div className="app">
            <div className="app__body">
                <h5>TESTIMONIALS</h5>
                <Testimonial isLoaded={isLoaded} currentTestimonial={currentTestimonial} />
                <div>
                    <Avatars isLoaded={isLoaded} testimonials={testimonials} changePerson={changePerson} />
                    <Buttons
                        currentPersonId={currentPersonId}
                        testimonials={testimonials}
                        changePerson={changePerson}
                    />
                </div>
            </div>
        </div>
    );
};

export default App;
