interface Testimonial {
    id: number;
    name: string;
    location: string;
    designation: string;
    avatar: string;
    message: string;
    lorem: string;
    rating: number;
    audio: string;
}

type ChangePersonFunctionType = (args: number) => void;
