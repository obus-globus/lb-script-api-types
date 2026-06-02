import type { Converter } from '../../../../com/google/common/base/Converter.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Longs extends Object {
    static BYTES: number;
    static MAX_POWER_OF_TWO: number;
    static asList(parambackingArray: number[]): number[];
    static compare(parama: number, paramb: number): number;
    static concat(paramarrays: (Object | null)[]): number[];
    static constrainToRange(paramvalue: number, parammin: number, parammax: number): number;
    static contains(paramarray: number[], paramtarget: number): boolean;
    static ensureCapacity(paramarray: number[], paramminLength: number, parampadding: number): number[];
    static fromByteArray(parambytes: number[]): number;
    static fromBytes(paramb1: number, paramb2: number, paramb3: number, paramb4: number, paramb5: number, paramb6: number, paramb7: number, paramb8: number): number;
    static hashCode(paramvalue: number): number;
    static indexOf(paramarray: number[], paramtarget: number): number;
    static indexOf(paramarray: number[], paramtarget: number[]): number;
    static join(paramseparator: string, paramarray: number[]): string;
    static lastIndexOf(paramarray: number[], paramtarget: number): number;
    static lexicographicalComparator(): (param0: number[]) => kotlin.Boolean;
    static max(paramarray: number[]): number;
    static min(paramarray: number[]): number;
    static reverse(paramarray: number[]): void;
    static reverse(paramarray: number[], paramfromIndex: number, paramtoIndex: number): void;
    static rotate(paramarray: number[], paramdistance: number): void;
    static rotate(paramarray: number[], paramdistance: number, paramfromIndex: number, paramtoIndex: number): void;
    static sortDescending(paramarray: number[]): void;
    static sortDescending(paramarray: number[], paramfromIndex: number, paramtoIndex: number): void;
    static stringConverter(): Converter<string, number>;
    static toArray(paramcollection: E[]): number[];
    static toByteArray(paramvalue: number): number[];
    static tryParse(paramstring: string): number;
    static tryParse(paramstring: string, paramradix: number): number;
    private constructor()
}