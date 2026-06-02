import type { ImmutableList$Builder } from '../../../../../../../com/google/common/collect/ImmutableList$Builder.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { LootPoolEntryContainer } from '../../../../../../../net/minecraft/world/level/storage/loot/entries/LootPoolEntryContainer.d.ts'
import type { LootPoolEntryContainer$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/entries/LootPoolEntryContainer$Builder.d.ts'
export class EntryGroup$Builder extends LootPoolEntryContainer$Builder<EntryGroup$Builder> {
    constructor(entries: LootPoolEntryContainer$Builder<Object>[])
    // private entries: ImmutableList$Builder<LootPoolEntryContainer>;
    append(other: LootPoolEntryContainer$Builder<Object>): EntryGroup$Builder;
    build(): LootPoolEntryContainer;
    getThis(): EntryGroup$Builder;
}