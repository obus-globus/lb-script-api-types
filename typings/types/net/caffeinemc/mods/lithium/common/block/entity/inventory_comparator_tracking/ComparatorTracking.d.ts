import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Level } from '../../../../../../../../net/minecraft/world/level/Level.d.ts'
export class ComparatorTracking extends Object {
    static findNearbyComparators(paramarg0: Level, paramarg1: BlockPos): boolean;
    static notifyNearbyBlockEntitiesAboutNewComparator(paramarg0: Level, paramarg1: BlockPos): void;
    constructor()
}