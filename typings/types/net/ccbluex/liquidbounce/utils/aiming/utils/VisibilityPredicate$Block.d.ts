import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { VisibilityPredicate } from '../../../../../../net/ccbluex/liquidbounce/utils/aiming/utils/VisibilityPredicate.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../../net/minecraft/core/Direction.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class VisibilityPredicate$Block extends Record implements VisibilityPredicate {
    constructor(blockPos: BlockPos, side: Direction | null)
    // private blockPos: BlockPos;
    /*not mapped: */ blockPos(): BlockPos;
    // private side: Direction | null;
    /*not mapped: */ side(): Direction | null;
    component1(): BlockPos;
    component2(): Direction | null;
    copy(blockPos: BlockPos, side: Direction | null): VisibilityPredicate$Block;
    equals(other: Object | null): boolean;
    hashCode(): number;
    isVisible(eyesPos: Vec3, targetSpot: Vec3): boolean;
    toString(): string;
}