import type { CompareOp } from '../../../../com/mojang/blaze3d/platform/CompareOp.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DepthStencilState extends Record {
    static DEFAULT: DepthStencilState;
    constructor(depthTest: CompareOp, depthWrite: boolean)
    constructor(depthTest: CompareOp, writeDepth: boolean, depthBiasScaleFactor: number, depthBiasConstant: number)
    // private depthBiasConstant: number;
    // private depthBiasScaleFactor: number;
    // private depthTest: CompareOp;
    // private writeDepth: boolean;
    depthBiasConstant(): number;
    depthBiasScaleFactor(): number;
    depthTest(): CompareOp;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    writeDepth(): boolean;
}