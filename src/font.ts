import { Lato, Montserrat, Poppins } from "next/font/google";


export const poppins = Poppins({
    subsets: ['latin'],
    weight: ['300', '400', '700', '900',], // specify the weights you need
});

export const lato = Lato({
    subsets: ['latin'],
    weight: ['100', '300', '400', '700'], // Lato Light weight
});

export const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['300', '400', '700'],
});