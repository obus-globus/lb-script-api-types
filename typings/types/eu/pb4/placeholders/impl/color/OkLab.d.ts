import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class OkLab extends Record {
    static fromRgb(paramarg0: number): OkLab;
    static toRgb(paramarg0: number, paramarg1: number, paramarg2: number): number;
    // private a: number;
    // private b: number;
    // private l: number;
    a(): number;
    b(): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    l(): number;
    toRgb(): number;
    toString(): string;
}