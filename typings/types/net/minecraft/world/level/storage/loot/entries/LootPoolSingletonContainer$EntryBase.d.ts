import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { LootPoolEntry } from '../../../../../../../net/minecraft/world/level/storage/loot/entries/LootPoolEntry.d.ts'
export abstract class LootPoolSingletonContainer$EntryBase extends Object implements LootPoolEntry {
    constructor(null_: LootPoolSingletonContainer$EntryBase)
    getWeight(luck: number): number;
}