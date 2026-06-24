import type { BlendEquation } from '../../../../com/mojang/blaze3d/pipeline/BlendEquation.d.ts'
import type { BlendFactor } from '../../../../com/mojang/blaze3d/platform/BlendFactor.d.ts'
import type { BlendOp } from '../../../../com/mojang/blaze3d/platform/BlendOp.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class BlendFunction extends Record {
    static ADDITIVE: BlendFunction;
    static ENTITY_OUTLINE_BLIT: BlendFunction;
    static GLINT: BlendFunction;
    static INVERT: BlendFunction;
    static LIGHTNING: BlendFunction;
    static OVERLAY: BlendFunction;
    static TRANSLUCENT: BlendFunction;
    static TRANSLUCENT_PREMULTIPLIED_ALPHA: BlendFunction;
    constructor(equation: BlendEquation)
    constructor(color: BlendEquation, alpha: BlendEquation)
    constructor(srcFactor: BlendFactor, dstFactor: BlendFactor)
    constructor(srcColorFactor: BlendFactor, dstColorFactor: BlendFactor, srcAlphaFactor: BlendFactor, dstAlphaFactor: BlendFactor)
    constructor(srcFactor: BlendFactor, dstFactor: BlendFactor, op: BlendOp)
    constructor(srcColorFactor: BlendFactor, dstColorFactor: BlendFactor, colorOp: BlendOp, srcAlphaFactor: BlendFactor, dstAlphaFactor: BlendFactor, alphaOp: BlendOp)
    // private alpha: BlendEquation;
    // private color: BlendEquation;
    alpha(): BlendEquation;
    color(): BlendEquation;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}