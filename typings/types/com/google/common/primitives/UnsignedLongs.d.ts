import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class UnsignedLongs extends Object {
    static MAX_VALUE: number;
    static compare(parama: number, paramb: number): number;
    static decode(paramstringValue: string): number;
    static divide(paramdividend: number, paramdivisor: number): number;
    static join(paramseparator: string, paramarray: number[]): string;
    static lexicographicalComparator(): (param0: Object) => boolean;
    static max(paramarray: number[]): number;
    static min(paramarray: number[]): number;
    static parseUnsignedLong(paramstring: string): number;
    static parseUnsignedLong(paramstring: string, paramradix: number): number;
    static remainder(paramdividend: number, paramdivisor: number): number;
    static sort(paramarray: number[]): void;
    static sort(paramarray: number[], paramfromIndex: number, paramtoIndex: number): void;
    static sortDescending(paramarray: number[]): void;
    static sortDescending(paramarray: number[], paramfromIndex: number, paramtoIndex: number): void;
    static toString(paramx: number): string;
    static toString(paramx: number, paramradix: number): string;
    private constructor()
}