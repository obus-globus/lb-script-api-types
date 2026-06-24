import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BlendMode extends Record {
    constructor(srcRgb: number, dstRgb: number, srcAlpha: number, dstAlpha: number)
    // private dstAlpha: number;
    // private dstRgb: number;
    // private srcAlpha: number;
    // private srcRgb: number;
    dstAlpha(): number;
    dstRgb(): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    srcAlpha(): number;
    srcRgb(): number;
    toString(): string;
}