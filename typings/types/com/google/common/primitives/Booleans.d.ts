import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Booleans extends Object {
    static asList(...parambackingArray: (Object | null)[]): boolean[];
    static compare(parama: boolean, paramb: boolean): number;
    static concat(...paramarrays: (Object | null)[]): (Object | null)[];
    static contains(paramarray: (Object | null)[], paramtarget: boolean): boolean;
    static countTrue(...paramvalues: (Object | null)[]): number;
    static ensureCapacity(paramarray: (Object | null)[], paramminLength: number, parampadding: number): (Object | null)[];
    static falseFirst(): (param0: Object) => boolean;
    static hashCode(paramvalue: boolean): number;
    static indexOf(paramarray: (Object | null)[], paramtarget: boolean): number;
    static indexOf(paramarray: (Object | null)[], paramtarget: (Object | null)[]): number;
    static join(paramseparator: string, ...paramarray: (Object | null)[]): string;
    static lastIndexOf(paramarray: (Object | null)[], paramtarget: boolean): number;
    static lexicographicalComparator(): (param0: Object) => boolean;
    static reverse(paramarray: (Object | null)[]): void;
    static reverse(paramarray: (Object | null)[], paramfromIndex: number, paramtoIndex: number): void;
    static rotate(paramarray: (Object | null)[], paramdistance: number): void;
    static rotate(paramarray: (Object | null)[], paramdistance: number, paramfromIndex: number, paramtoIndex: number): void;
    static toArray(paramcollection: boolean[]): (Object | null)[];
    static trueFirst(): (param0: Object) => boolean;
    private constructor()
}