import type { Object } from '../../../../java/lang/Object.d.ts'
export class ArrayUtils extends Object {
    static indexOf(paramarray: number[], paramfromIndex: number, parammaxIndex: number, paramvalues: number[]): number;
    static indexOf(paramarray: string[], paramfromIndex: number, parammaxIndex: number, paramvalues: string[]): number;
    static indexOf(paramstring: string, paramfromIndex: number, parammaxIndex: number, paramvalues: string[]): number;
    static indexOfWithOrMask(paramhaystack: number[], paramfromIndex: number, paramlength: number, paramneedle: number[], parammask: number[]): number;
    static indexOfWithOrMask(paramhaystack: string[], paramfromIndex: number, paramlength: number, paramneedle: string[], parammask: string[]): number;
    static indexOfWithOrMask(paramhaystack: string, paramfromIndex: number, paramlength: number, paramneedle: string, parammask: string): number;
    static regionEqualsWithOrMask(parama: number[], paramoffsetA: number, paramb: number[], paramoffsetB: number, paramlength: number, parammask: number[]): boolean;
    static regionEqualsWithOrMask(parama: string[], paramoffsetA: number, paramb: string[], paramoffsetB: number, paramlength: number, parammask: string[]): boolean;
    static regionEqualsWithOrMask(parama: string, paramoffsetA: number, paramb: string, paramoffsetB: number, paramlength: number, parammask: string): boolean;
    private constructor()
}