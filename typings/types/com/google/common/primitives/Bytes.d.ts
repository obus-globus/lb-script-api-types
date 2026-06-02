import type { Object } from '../../../../java/lang/Object.d.ts'
export class Bytes extends Object {
    static asList(parambackingArray: number[]): number[];
    static concat(paramarrays: (Object | null)[]): number[];
    static contains(paramarray: number[], paramtarget: number): boolean;
    static ensureCapacity(paramarray: number[], paramminLength: number, parampadding: number): number[];
    static hashCode(paramvalue: number): number;
    static indexOf(paramarray: number[], paramtarget: number): number;
    static indexOf(paramarray: number[], paramtarget: number[]): number;
    static lastIndexOf(paramarray: number[], paramtarget: number): number;
    static reverse(paramarray: number[]): void;
    static reverse(paramarray: number[], paramfromIndex: number, paramtoIndex: number): void;
    static rotate(paramarray: number[], paramdistance: number): void;
    static rotate(paramarray: number[], paramdistance: number, paramfromIndex: number, paramtoIndex: number): void;
    static toArray(paramcollection: E[]): number[];
    private constructor()
}