import React, { useState, useEffect } from 'react';
import Testimonials from './components/testimonials/Testimonials';
import Avatars from './components/avatars/Avatars';
import ArrowButtons from './components/arrowbuttons/ArrowButtons';
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
                ? 'mockTestimonial.json'
                : 'https://testimonialapi.toolcarton.com/api';

            const res = await fetch(url, {
                signal: signal,
            });
            const resData = await res.json();

            // console.log(resData);
            if (!Array.isArray(resData) || resData.length <= 0) {
                alert('Please reload again. Got Invalid data from server.');
            } else {
                isMounted && setTestimonials(resData.slice(0, 7));
                isMounted && setIsLoaded(true);
            }
        };

        fetchPosts();

        return () => {
            // cleanup;
            isMounted = false;
            abortController.abort();
        };
    }, []);

    // get current testimonial
    const indexOfLastTestimonial: number = currentPersonId * TestimonialsPerPage;
    const indexOfFirstTestimonial: number = indexOfLastTestimonial - TestimonialsPerPage;
    const currentTestimonial: Testimonial = testimonials.slice(indexOfFirstTestimonial, indexOfLastTestimonial)[0];

    const changePerson: ChangePersonFunctionType = (personId: number) => {
        setCurrentPersonId(personId);
    };

    return (
        <div className="app">
            <div className="app__body">
                <div className="body__testimonials">
                    <h5>TESTIMONIALS</h5>
                    <Testimonials
                        isLoaded={isLoaded}
                        currentTestimonial={currentTestimonial}
                        testimonials={testimonials}
                    />
                </div>
                <div className="body__buttons">
                    <Avatars
                        isLoaded={isLoaded}
                        currentTestimonial={currentTestimonial}
                        testimonials={testimonials}
                        changePerson={changePerson}
                    />
                    <ArrowButtons
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
