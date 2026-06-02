import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Vec3i } from '../../../../../../net/minecraft/core/Vec3i.d.ts'
export class BoundingBoxRenderable$RenderableBox extends Record {
    static fromCorners(paramx1: number, paramy1: number, paramz1: number, paramx2: number, paramy2: number, paramz2: number): BoundingBoxRenderable$RenderableBox;
    constructor(localPos: BlockPos, size: Vec3i)
    // private localPos: BlockPos;
    // private size: Vec3i;
    equals(o: Object | null): boolean;
    hashCode(): number;
    localPos(): BlockPos;
    size(): Vec3i;
    toString(): string;
}