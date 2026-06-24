import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { VoxelShape } from '../../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
export class EntityRenderState$ShadowPiece extends Record {
    constructor(relativeX: number, relativeY: number, relativeZ: number, shapeBelow: VoxelShape, alpha: number)
    // private alpha: number;
    // private relativeX: number;
    // private relativeY: number;
    // private relativeZ: number;
    // private shapeBelow: VoxelShape;
    alpha(): number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    relativeX(): number;
    relativeY(): number;
    relativeZ(): number;
    shapeBelow(): VoxelShape;
    toString(): string;
}