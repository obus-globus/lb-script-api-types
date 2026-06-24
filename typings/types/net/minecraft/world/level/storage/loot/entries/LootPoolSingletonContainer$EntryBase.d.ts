import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { LootPoolEntry } from '../../../../../../../net/minecraft/world/level/storage/loot/entries/LootPoolEntry.d.ts'
import type { LootPoolSingletonContainer } from '../../../../../../../net/minecraft/world/level/storage/loot/entries/LootPoolSingletonContainer.d.ts'
export abstract class LootPoolSingletonContainer$EntryBase extends Object implements LootPoolEntry {
    constructor(null_: LootPoolSingletonContainer)
    getWeight(luck: number): number;
}