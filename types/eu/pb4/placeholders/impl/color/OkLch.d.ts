import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class OkLch extends Record {
    static fromRgb(paramarg0: number): OkLch;
    static toRgb(paramarg0: number, paramarg1: number, paramarg2: number): number;
    // private c: number;
    // private h: number;
    // private l: number;
    a(): number;
    b(): number;
    c(): number;
    equals(arg0: Object | null): boolean;
    h(): number;
    hashCode(): number;
    l(): number;
    toRgb(): number;
    toString(): string;
}