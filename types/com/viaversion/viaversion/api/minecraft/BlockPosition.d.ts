import type { BlockFace } from '../../../../../com/viaversion/viaversion/api/minecraft/BlockFace.d.ts'
import type { GlobalBlockPosition } from '../../../../../com/viaversion/viaversion/api/minecraft/GlobalBlockPosition.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BlockPosition extends Object {
    constructor(arg0: number, arg1: number, arg2: number)
    // private x: number;
    // private y: number;
    // private z: number;
    distanceFromCenterSquared(arg0: number, arg1: number, arg2: number): number;
    equals(arg0: Object | null): boolean;
    getRelative(arg0: BlockFace): BlockPosition;
    hashCode(): number;
    toString(): string;
    withDimension(arg0: string): GlobalBlockPosition;
    x(): number;
    y(): number;
    z(): number;
}