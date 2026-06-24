import type { BlendFactor } from '../../../../com/mojang/blaze3d/platform/BlendFactor.d.ts'
import type { BlendOp } from '../../../../com/mojang/blaze3d/platform/BlendOp.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class BlendEquation extends Record {
    constructor(sourceFactor: BlendFactor, destFactor: BlendFactor, op: BlendOp)
    // private destFactor: BlendFactor;
    // private op: BlendOp;
    // private sourceFactor: BlendFactor;
    destFactor(): BlendFactor;
    equals(o: Object | null): boolean;
    hashCode(): number;
    op(): BlendOp;
    sourceFactor(): BlendFactor;
    toString(): string;
}