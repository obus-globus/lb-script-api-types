import type { Object } from '../../../java/lang/Object.d.ts'
import type { Intervalable } from '../../../org/ahocorasick/interval/Intervalable.d.ts'
export class Interval extends Object implements Intervalable {
    constructor(arg0: number, arg1: number)
    readonly end: number;
    readonly start: number;
    compareTo(arg0: Object | null): number;
    equals(arg0: Object | null): boolean;
    getEnd(): number;
    getStart(): number;
    hashCode(): number;
    overlapsWith(arg0: number): boolean;
    overlapsWith(arg0: Interval): boolean;
    size(): number;
    toString(): string;
}