import type { BlockPos } from '../../../net/minecraft/core/BlockPos.d.ts'
import type { ResourceKey } from '../../../net/minecraft/resources/ResourceKey.d.ts'
import type { RandomSource } from '../../../net/minecraft/util/RandomSource.d.ts'
import type { BlockGetter } from '../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { LootTable } from '../../../net/minecraft/world/level/storage/loot/LootTable.d.ts'
export class RandomizableContainer {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static DEFAULT_DISTANCE_BUFFER: number;
    static LOOT_TABLE_SEED_TAG: string;
    static LOOT_TABLE_TAG: string;
    static setBlockEntityLootTable(paramlevel: BlockGetter, paramrandom: RandomSource, paramblockEntityPos: BlockPos, paramlootTable: ResourceKey<LootTable>): void;
}