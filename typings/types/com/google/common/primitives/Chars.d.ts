import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Chars extends Object {
    static BYTES: number;
    static asList(...parambackingArray: string[]): string[];
    static checkedCast(paramvalue: number): string;
    static compare(parama: string, paramb: string): number;
    static concat(...paramarrays: string[][]): string[];
    static constrainToRange(paramvalue: string, parammin: string, parammax: string): string;
    static contains(paramarray: string[], paramtarget: string): boolean;
    static ensureCapacity(paramarray: string[], paramminLength: number, parampadding: number): string[];
    static fromByteArray(parambytes: number[]): string;
    static fromBytes(paramb1: number, paramb2: number): string;
    static hashCode(paramvalue: string): number;
    static indexOf(paramarray: string[], paramtarget: string): number;
    static indexOf(paramarray: string[], paramtarget: string[]): number;
    static join(paramseparator: string, ...paramarray: string[]): string;
    static lastIndexOf(paramarray: string[], paramtarget: string): number;
    static lexicographicalComparator(): (param0: string[], param1: string[]) => number;
    static max(...paramarray: string[]): string;
    static min(...paramarray: string[]): string;
    static reverse(paramarray: string[]): void;
    static reverse(paramarray: string[], paramfromIndex: number, paramtoIndex: number): void;
    static rotate(paramarray: string[], paramdistance: number): void;
    static rotate(paramarray: string[], paramdistance: number, paramfromIndex: number, paramtoIndex: number): void;
    static saturatedCast(paramvalue: number): string;
    static sortDescending(paramarray: string[]): void;
    static sortDescending(paramarray: string[], paramfromIndex: number, paramtoIndex: number): void;
    static toArray(paramcollection: string[]): string[];
    static toByteArray(paramvalue: string): number[];
    private constructor()
}