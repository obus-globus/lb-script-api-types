import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { BiFunction } from '../../../../../../../java/util/function/BiFunction.d.ts'
import type { Consumer } from '../../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { LootContext } from '../../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { ValidationContext } from '../../../../../../../net/minecraft/world/level/storage/loot/ValidationContext.d.ts'
import type { ComposableEntryContainer } from '../../../../../../../net/minecraft/world/level/storage/loot/entries/ComposableEntryContainer.d.ts'
import type { LootPoolEntry } from '../../../../../../../net/minecraft/world/level/storage/loot/entries/LootPoolEntry.d.ts'
import type { LootPoolEntryContainer } from '../../../../../../../net/minecraft/world/level/storage/loot/entries/LootPoolEntryContainer.d.ts'
import type { LootPoolSingletonContainer$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/entries/LootPoolSingletonContainer$Builder.d.ts'
import type { LootPoolSingletonContainer$EntryConstructor } from '../../../../../../../net/minecraft/world/level/storage/loot/entries/LootPoolSingletonContainer$EntryConstructor.d.ts'
import type { LootItemFunction } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemFunction.d.ts'
import type { LootItemCondition } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
export abstract class LootPoolSingletonContainer extends LootPoolEntryContainer {
    static ALWAYS_FALSE: (param0: LootContext, param1: (param0: LootPoolEntry) => void) => boolean;
    static ALWAYS_TRUE: (param0: LootContext, param1: (param0: LootPoolEntry) => void) => boolean;
    static DEFAULT_QUALITY: number;
    static DEFAULT_WEIGHT: number;
    static simpleBuilder(paramconstructor: (param0: number, param1: number, param2: LootItemCondition[], param3: LootItemFunction[]) => LootPoolSingletonContainer): LootPoolSingletonContainer$Builder<Object>;
    constructor(weight: number, quality: number, conditions: LootItemCondition[], functions: LootItemFunction[])
    // private compositeFunction: (param0: ItemStack, param1: LootContext) => ItemStack;
    // private entry: LootPoolEntry;
    // private functions: LootItemFunction[];
    // private quality: number;
    // private weight: number;
    codec(): MapCodec<LootPoolSingletonContainer>;
    createItemStack(output: (param0: ItemStack) => void, context: LootContext): void;
    expand(context: LootContext, output: (param0: LootPoolEntry) => void): boolean;
    validate(context: ValidationContext): void;
}