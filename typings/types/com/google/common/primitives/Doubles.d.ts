import type { Converter } from '../../../../com/google/common/base/Converter.d.ts'
import type { DoublesMethodsForWeb } from '../../../../com/google/common/primitives/DoublesMethodsForWeb.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../java/lang/Number.d.ts'
export class Doubles extends DoublesMethodsForWeb {
    static BYTES: number;
    static asList(parambackingArray: number[]): number[];
    static compare(parama: number, paramb: number): number;
    static concat(paramarrays: (Object | null)[]): number[];
    static constrainToRange(paramvalue: number, parammin: number, parammax: number): number;
    static contains(paramarray: number[], paramtarget: number): boolean;
    static ensureCapacity(paramarray: number[], paramminLength: number, parampadding: number): number[];
    static hashCode(paramvalue: number): number;
    static indexOf(paramarray: number[], paramtarget: number): number;
    static indexOf(paramarray: number[], paramtarget: number[]): number;
    static isFinite(paramvalue: number): boolean;
    static join(paramseparator: string, paramarray: number[]): string;
    static lastIndexOf(paramarray: number[], paramtarget: number): number;
    static lexicographicalComparator(): (param0: Object) => boolean;
    static max(paramarray: number[]): number;
    static min(paramarray: number[]): number;
    static reverse(paramarray: number[]): void;
    static reverse(paramarray: number[], paramfromIndex: number, paramtoIndex: number): void;
    static rotate(paramarray: number[], paramdistance: number): void;
    static rotate(paramarray: number[], paramdistance: number, paramfromIndex: number, paramtoIndex: number): void;
    static sortDescending(paramarray: number[]): void;
    static sortDescending(paramarray: number[], paramfromIndex: number, paramtoIndex: number): void;
    static stringConverter(): Converter<string, number>;
    static toArray(paramcollection: Number[]): number[];
    static tryParse(paramstring: string): number;
    private constructor()
}