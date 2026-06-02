import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Hole } from '../../../../../../../net/ccbluex/liquidbounce/utils/block/hole/Hole.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BoundingBox } from '../../../../../../../net/minecraft/world/level/levelgen/structure/BoundingBox.d.ts'
export class ModuleHoleFiller$HoleContext extends Record {
    constructor(holes: Hole[], selfInHole: boolean, selfRegion: BoundingBox, blocks: BlockPos[])
    // private blocks: BlockPos[];
    /*not mapped: */ blocks(): BlockPos[];
    // private holes: Hole[];
    /*not mapped: */ holes(): Hole[];
    // private selfInHole: boolean;
    /*not mapped: */ selfInHole(): boolean;
    // private selfRegion: BoundingBox;
    /*not mapped: */ selfRegion(): BoundingBox;
    component1(): Hole[];
    component2(): boolean;
    component3(): BoundingBox;
    component4(): BlockPos[];
    copy(holes: Hole[], selfInHole: boolean, selfRegion: BoundingBox, blocks: BlockPos[]): ModuleHoleFiller$HoleContext;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}