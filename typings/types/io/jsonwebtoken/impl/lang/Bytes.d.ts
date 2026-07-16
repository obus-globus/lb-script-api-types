import type { Object } from '../../../../java/lang/Object.d.ts'
export class Bytes extends Object {
    static EMPTY: number[];
    static INT_REQD_MSG: string;
    static LONG_REQD_MSG: string;
    static bitLength(paramarg0: number[]): number;
    static bitsMsg(paramarg0: number): string;
    static bytesMsg(paramarg0: number): string;
    static clear(paramarg0: number[]): void;
    static concat(...paramarg0: number[][]): number[];
    static endsWith(paramarg0: number[], paramarg1: number[]): boolean;
    static increment(paramarg0: number[]): void;
    static indexOf(paramarg0: number[], paramarg1: number[]): number;
    static indexOf(paramarg0: number[], paramarg1: number[], paramarg2: number): number;
    static isEmpty(paramarg0: number[]): boolean;
    static length(paramarg0: number[]): number;
    static length(paramarg0: number): number;
    static nullSafe(paramarg0: number[]): number[];
    static prepad(paramarg0: number[], paramarg1: number): number[];
    static random(paramarg0: number): number[];
    static randomBits(paramarg0: number): number[];
    static startsWith(paramarg0: number[], paramarg1: number[]): boolean;
    static startsWith(paramarg0: number[], paramarg1: number[], paramarg2: number): boolean;
    static toBytes(paramarg0: number): number[];
    static toInt(paramarg0: number[]): number;
    static toLong(paramarg0: number[]): number;
    private constructor()
}