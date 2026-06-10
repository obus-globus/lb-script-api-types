import type { Comparator } from '../../../../../../../java/util/Comparator.d.ts'
import type { CompletableFuture } from '../../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { BiConsumer } from '../../../../../../../java/util/function/BiConsumer.d.ts'
import type { ToIntFunction } from '../../../../../../../java/util/function/ToIntFunction.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FabricPackOutput } from '../../../../../../../net/fabricmc/fabric/api/datagen/v1/FabricPackOutput.d.ts'
import type { FabricLootTableSubProvider } from '../../../../../../../net/fabricmc/fabric/api/datagen/v1/provider/FabricLootTableSubProvider.d.ts'
import type { ResourceCondition } from '../../../../../../../net/fabricmc/fabric/api/resource/conditions/v1/ResourceCondition.d.ts'
import type { HolderLookup$Provider } from '../../../../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { CachedOutput } from '../../../../../../../net/minecraft/data/CachedOutput.d.ts'
import type { BlockLootSubProvider } from '../../../../../../../net/minecraft/data/loot/BlockLootSubProvider.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Block } from '../../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { LootTable } from '../../../../../../../net/minecraft/world/level/storage/loot/LootTable.d.ts'
import type { LootTable$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/LootTable$Builder.d.ts'
import type { LootPoolEntryContainer$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/entries/LootPoolEntryContainer$Builder.d.ts'
import type { LootItemCondition } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
import type { LootItemCondition$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition$Builder.d.ts'
import type { Logger } from '../../../../../../../org/slf4j/Logger.d.ts'
export abstract class FabricBlockLootSubProvider extends BlockLootSubProvider implements FabricLootTableSubProvider {
    static FIXED_ORDER_FIELDS: (param0: string) => number;
    static KEY_COMPARATOR: (param0: Object) => boolean;
    static LOGGER: Logger;
    static createCandleCakeDrops(paramcandle: Block): LootTable$Builder;
    static createSelfDropDispatchTable(paramoriginal: Block, paramcondition: () => LootItemCondition, paramentry: LootPoolEntryContainer$Builder<Object>): LootTable$Builder;
    static noDrop(): LootTable$Builder;
    constructor(arg0: FabricPackOutput, arg1: CompletableFuture<HolderLookup$Provider>)
    // private excludedFromStrictValidation: Identifier[];
    // private output: FabricPackOutput;
    // private registriesFuture: CompletableFuture<HolderLookup$Provider>;
    excludeFromStrictValidation(arg0: Block): void;
    generate(): void;
    generate(arg0: (param0: ResourceKey<LootTable>, param1: LootTable$Builder) => void): void;
    getName(): string;
    run(arg0: CachedOutput): CompletableFuture<Object>;
    withConditions(arg0: (param0: ResourceKey<LootTable>, param1: LootTable$Builder) => void, arg1: ResourceCondition[]): (param0: ResourceKey<LootTable>, param1: LootTable$Builder) => void;
}