import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Level } from '../../../../../../../net/minecraft/world/level/Level.d.ts'
import type { AABB } from '../../../../../../../net/minecraft/world/phys/AABB.d.ts'
export class WorldSectionBox extends Record {
    static entityAccessBox(paramarg0: Level, paramarg1: AABB): WorldSectionBox;
    static relevantExpandedBlocksBox(paramarg0: Level, paramarg1: AABB): WorldSectionBox;
    static relevantFluidBox(paramarg0: Level, paramarg1: AABB): WorldSectionBox;
    constructor(world: Level, chunkX1: number, chunkY1: number, chunkZ1: number, chunkX2: number, chunkY2: number, chunkZ2: number)
    // private chunkX1: number;
    // private chunkX2: number;
    // private chunkY1: number;
    // private chunkY2: number;
    // private chunkZ1: number;
    // private chunkZ2: number;
    // private world: Level;
    chunkX1(): number;
    chunkX2(): number;
    chunkY1(): number;
    chunkY2(): number;
    chunkZ1(): number;
    chunkZ2(): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    matchesRelevantBlocksBox(arg0: AABB): boolean;
    numSections(): number;
    toString(): string;
    world(): Level;
}