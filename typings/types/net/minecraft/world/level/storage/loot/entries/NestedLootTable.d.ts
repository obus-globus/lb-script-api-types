import type { Either } from '../../../../../../../com/mojang/datafixers/util/Either.d.ts'
import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Consumer } from '../../../../../../../java/util/function/Consumer.d.ts'
import type { ResourceKey } from '../../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ProblemReporter$PathElement } from '../../../../../../../net/minecraft/util/ProblemReporter$PathElement.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { LootContext } from '../../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { LootTable } from '../../../../../../../net/minecraft/world/level/storage/loot/LootTable.d.ts'
import type { ValidationContext } from '../../../../../../../net/minecraft/world/level/storage/loot/ValidationContext.d.ts'
import type { ComposableEntryContainer } from '../../../../../../../net/minecraft/world/level/storage/loot/entries/ComposableEntryContainer.d.ts'
import type { LootPoolEntry } from '../../../../../../../net/minecraft/world/level/storage/loot/entries/LootPoolEntry.d.ts'
import type { LootPoolSingletonContainer } from '../../../../../../../net/minecraft/world/level/storage/loot/entries/LootPoolSingletonContainer.d.ts'
import type { LootPoolSingletonContainer$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/entries/LootPoolSingletonContainer$Builder.d.ts'
import type { LootPoolSingletonContainer$EntryConstructor } from '../../../../../../../net/minecraft/world/level/storage/loot/entries/LootPoolSingletonContainer$EntryConstructor.d.ts'
import type { LootItemFunction } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemFunction.d.ts'
import type { LootItemCondition } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
export class NestedLootTable extends LootPoolSingletonContainer {
    static ALWAYS_FALSE: (param0: LootContext, param1: (param0: LootPoolEntry) => void) => boolean;
    static ALWAYS_TRUE: (param0: LootContext, param1: (param0: LootPoolEntry) => void) => boolean;
    static DEFAULT_QUALITY: number;
    static DEFAULT_WEIGHT: number;
    static INLINE_LOOT_TABLE_PATH_ELEMENT: () => string;
    static MAP_CODEC: MapCodec<NestedLootTable>;
    static inlineLootTable(paramtable: LootTable): LootPoolSingletonContainer$Builder<any>;
    static lootTableReference(paramname: ResourceKey<LootTable>): LootPoolSingletonContainer$Builder<any>;
    static simpleBuilder(paramconstructor: (param0: number, param1: number, param2: LootItemCondition[], param3: LootItemFunction[]) => LootPoolSingletonContainer): LootPoolSingletonContainer$Builder<any>;
    private constructor(contents: Either<ResourceKey<LootTable>, LootTable>, weight: number, quality: number, conditions: LootItemCondition[], functions: LootItemFunction[])
    // private contents: Either<ResourceKey<LootTable>, LootTable>;
    codec(): MapCodec<NestedLootTable>;
    createItemStack(output: (param0: ItemStack) => void, context: LootContext): void;
    validate(context: ValidationContext): void;
}