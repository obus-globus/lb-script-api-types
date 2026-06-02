import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Block } from '../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { Fluid } from '../../../../../net/minecraft/world/level/material/Fluid.d.ts'
import type { SavedTick } from '../../../../../net/minecraft/world/ticks/SavedTick.d.ts'
export class ChunkAccess$PackedTicks extends Record {
    constructor(blocks: SavedTick<Block>[], fluids: SavedTick<Fluid>[])
    // private blocks: SavedTick<Block>[];
    // private fluids: SavedTick<Fluid>[];
    blocks(): SavedTick<Block>[];
    equals(o: Object | null): boolean;
    fluids(): SavedTick<Fluid>[];
    hashCode(): number;
    toString(): string;
}