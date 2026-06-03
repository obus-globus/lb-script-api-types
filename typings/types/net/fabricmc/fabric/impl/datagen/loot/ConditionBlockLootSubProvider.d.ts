import type { BiConsumer } from '../../../../../../java/util/function/BiConsumer.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ResourceCondition } from '../../../../../../net/fabricmc/fabric/api/resource/conditions/v1/ResourceCondition.d.ts'
import type { BlockLootSubProvider } from '../../../../../../net/minecraft/data/loot/BlockLootSubProvider.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Block } from '../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { LootTable } from '../../../../../../net/minecraft/world/level/storage/loot/LootTable.d.ts'
import type { LootTable$Builder } from '../../../../../../net/minecraft/world/level/storage/loot/LootTable$Builder.d.ts'
import type { LootPoolEntryContainer$Builder } from '../../../../../../net/minecraft/world/level/storage/loot/entries/LootPoolEntryContainer$Builder.d.ts'
import type { LootItemCondition$Builder } from '../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition$Builder.d.ts'
export class ConditionBlockLootSubProvider extends BlockLootSubProvider {
    static createCandleCakeDrops(paramcandle: Block): LootTable$Builder;
    static createSelfDropDispatchTable(paramoriginal: Block, paramcondition: () => net.minecraft.world.level.storage.loot.predicates.LootItemCondition, paramentry: LootPoolEntryContainer$Builder<Object>): LootTable$Builder;
    static noDrop(): LootTable$Builder;
    constructor(arg0: BlockLootSubProvider, arg1: ResourceCondition[])
    // private conditions: ResourceCondition[];
    // private parent: BlockLootSubProvider;
    add(block: Block, builder: (param0: Block) => LootTable$Builder): void;
    add(arg0: Block, arg1: LootTable$Builder): void;
    generate(): void;
    generate(output: (param0: ResourceKey<LootTable>, param1: LootTable$Builder) => void): void;
}