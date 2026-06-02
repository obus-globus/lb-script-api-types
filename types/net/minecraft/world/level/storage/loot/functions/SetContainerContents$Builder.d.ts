import type { ImmutableList$Builder } from '../../../../../../../com/google/common/collect/ImmutableList$Builder.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ContainerComponentManipulator } from '../../../../../../../net/minecraft/world/level/storage/loot/ContainerComponentManipulator.d.ts'
import type { LootPoolEntryContainer } from '../../../../../../../net/minecraft/world/level/storage/loot/entries/LootPoolEntryContainer.d.ts'
import type { LootPoolEntryContainer$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/entries/LootPoolEntryContainer$Builder.d.ts'
import type { LootItemConditionalFunction$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemConditionalFunction$Builder.d.ts'
import type { LootItemFunction } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemFunction.d.ts'
export class SetContainerContents$Builder extends LootItemConditionalFunction$Builder<SetContainerContents$Builder> {
    constructor(component: ContainerComponentManipulator<Object>)
    // private component: ContainerComponentManipulator<Object>;
    // private entries: ImmutableList$Builder<LootPoolEntryContainer>;
    build(): LootItemFunction;
    getThis(): SetContainerContents$Builder;
    withEntry(entry: LootPoolEntryContainer$Builder<Object>): SetContainerContents$Builder;
}