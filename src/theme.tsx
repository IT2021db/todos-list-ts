import {IndexSignature}from './features/tasks/types';
export interface Theme {
    color: IndexSignature;
    breakpoint: string;
}

export const theme = {
    color: {
        black: "#000",
        silver: "#ccc",
        alto: "#ddd",
        gallery: "#eee",
        white: "#fff",
        teal: "#008080",
        cardinal: "#c41e3a",
        forestGreen: "#228c22",
    },
    breakpoint: {
        mobileMax: 767,
    },
};