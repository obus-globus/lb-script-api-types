import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class HSV extends Record {
    static fromRgb(paramarg0: number): HSV;
    static toRgb(paramarg0: number, paramarg1: number, paramarg2: number): number;
    // private h: number;
    // private s: number;
    // private v: number;
    equals(arg0: Object | null): boolean;
    h(): number;
    hashCode(): number;
    s(): number;
    toRgb(): number;
    toString(): string;
    v(): number;
}