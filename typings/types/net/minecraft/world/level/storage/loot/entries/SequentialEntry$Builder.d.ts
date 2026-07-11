import type { ImmutableList$Builder } from '../../../../../../../com/google/common/collect/ImmutableList$Builder.d.ts'
import type { LootPoolEntryContainer } from '../../../../../../../net/minecraft/world/level/storage/loot/entries/LootPoolEntryContainer.d.ts'
import type { LootPoolEntryContainer$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/entries/LootPoolEntryContainer$Builder.d.ts'
export class SequentialEntry$Builder extends LootPoolEntryContainer$Builder<SequentialEntry$Builder> {
    constructor(...entries: LootPoolEntryContainer$Builder<any>[])
    // private entries: ImmutableList$Builder<LootPoolEntryContainer>;
    build(): LootPoolEntryContainer;
    getThis(): SequentialEntry$Builder;
    then(other: LootPoolEntryContainer$Builder<any>): SequentialEntry$Builder;
}