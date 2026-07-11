import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../../../../java/lang/Number.d.ts'
export class Ints extends Object {
    static compare(paramarg0: number, paramarg1: number): number;
    static concat(...paramarg0: (Object | null)[]): number[];
    static contains(paramarg0: number[], paramarg1: number): boolean;
    static hashCode(paramarg0: number): number;
    static indexOf(paramarg0: number[], paramarg1: number): number;
    static toArray(paramarg0: Number[]): number[];
    static tryParse(paramarg0: string): number;
    static tryParse(paramarg0: string, paramarg1: number): number;
}