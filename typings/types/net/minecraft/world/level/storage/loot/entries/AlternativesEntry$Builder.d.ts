import type { ImmutableList$Builder } from '../../../../../../../com/google/common/collect/ImmutableList$Builder.d.ts'
import type { LootPoolEntryContainer } from '../../../../../../../net/minecraft/world/level/storage/loot/entries/LootPoolEntryContainer.d.ts'
import type { LootPoolEntryContainer$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/entries/LootPoolEntryContainer$Builder.d.ts'
export class AlternativesEntry$Builder extends LootPoolEntryContainer$Builder<AlternativesEntry$Builder> {
    constructor(entries: LootPoolEntryContainer$Builder<any>[])
    // private entries: ImmutableList$Builder<LootPoolEntryContainer>;
    build(): LootPoolEntryContainer;
    getThis(): AlternativesEntry$Builder;
    otherwise(other: LootPoolEntryContainer$Builder<any>): AlternativesEntry$Builder;
}