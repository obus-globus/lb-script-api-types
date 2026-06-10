import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SignedBytes extends Object {
    static MAX_POWER_OF_TWO: number;
    static checkedCast(paramvalue: number): number;
    static compare(parama: number, paramb: number): number;
    static join(paramseparator: string, paramarray: number[]): string;
    static lexicographicalComparator(): (param0: Object) => boolean;
    static max(paramarray: number[]): number;
    static min(paramarray: number[]): number;
    static saturatedCast(paramvalue: number): number;
    static sortDescending(paramarray: number[]): void;
    static sortDescending(paramarray: number[], paramfromIndex: number, paramtoIndex: number): void;
    private constructor()
}