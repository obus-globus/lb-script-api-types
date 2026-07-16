import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Booleans extends Object {
    static asList(...parambackingArray: boolean[]): boolean[];
    static compare(parama: boolean, paramb: boolean): number;
    static concat(...paramarrays: boolean[][]): boolean[];
    static contains(paramarray: boolean[], paramtarget: boolean): boolean;
    static countTrue(...paramvalues: boolean[]): number;
    static ensureCapacity(paramarray: boolean[], paramminLength: number, parampadding: number): boolean[];
    static falseFirst(): (param0: boolean, param1: boolean) => number;
    static hashCode(paramvalue: boolean): number;
    static indexOf(paramarray: boolean[], paramtarget: boolean): number;
    static indexOf(paramarray: boolean[], paramtarget: boolean[]): number;
    static join(paramseparator: string, ...paramarray: boolean[]): string;
    static lastIndexOf(paramarray: boolean[], paramtarget: boolean): number;
    static lexicographicalComparator(): (param0: boolean[], param1: boolean[]) => number;
    static reverse(paramarray: boolean[]): void;
    static reverse(paramarray: boolean[], paramfromIndex: number, paramtoIndex: number): void;
    static rotate(paramarray: boolean[], paramdistance: number): void;
    static rotate(paramarray: boolean[], paramdistance: number, paramfromIndex: number, paramtoIndex: number): void;
    static toArray(paramcollection: boolean[]): boolean[];
    static trueFirst(): (param0: boolean, param1: boolean) => number;
    private constructor()
}