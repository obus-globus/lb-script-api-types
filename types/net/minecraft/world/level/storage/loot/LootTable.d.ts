import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { BiFunction } from '../../../../../../java/util/function/BiFunction.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FabricLootTable } from '../../../../../../net/fabricmc/fabric/impl/loot/FabricLootTable.d.ts'
import type { LootTableAccessor } from '../../../../../../net/fabricmc/fabric/mixin/loot/LootTableAccessor.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { ContextKeySet } from '../../../../../../net/minecraft/util/context/ContextKeySet.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { LootContext } from '../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { LootParams } from '../../../../../../net/minecraft/world/level/storage/loot/LootParams.d.ts'
import type { LootPool } from '../../../../../../net/minecraft/world/level/storage/loot/LootPool.d.ts'
import type { LootTable$Builder } from '../../../../../../net/minecraft/world/level/storage/loot/LootTable$Builder.d.ts'
import type { Validatable } from '../../../../../../net/minecraft/world/level/storage/loot/Validatable.d.ts'
import type { ValidationContext } from '../../../../../../net/minecraft/world/level/storage/loot/ValidationContext.d.ts'
import type { LootItemFunction } from '../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemFunction.d.ts'
export class LootTable extends Object implements FabricLootTable, LootTableAccessor, Validatable {
    static CODEC: Codec<Object>;
    static DEFAULT_PARAM_SET: ContextKeySet;
    static DIRECT_CODEC: Codec<LootTable>;
    static EMPTY: LootTable;
    static KEY_CODEC: Codec<Object>;
    static RANDOMIZE_SEED: number;
    static createStackSplitter(paramlevel: ServerLevel, paramoutput: (param0: ItemStack) => void): (param0: ItemStack) => void;
    static listValidatorForContext(paramparams: ContextKeySet): (param0: Object | null) => Object | null;
    static lootTable(): LootTable$Builder;
    static validate(paramcontext: ValidationContext, paramname: string, paramlist: (Object | null)[]): void;
    static validate(paramcontext: ValidationContext, paramname: string, paramoptional: Optional<Object>): void;
    static validate(paramcontext: ValidationContext, paramname: string, paramv: Validatable): void;
    static validate(paramcontext: ValidationContext, paramlist: (Object | null)[]): void;
    static validateReference(paramcontext: ValidationContext, paramid: ResourceKey<Object>): void;
    static validatorForContext(paramparams: ContextKeySet): (param0: Object | null) => Object | null;
    private constructor(paramSet: ContextKeySet, randomSequence: Optional<Identifier>, pools: LootPool[], functions: LootItemFunction[])
    // private compositeFunction: (param0: ItemStack, param1: LootContext) => ItemStack;
    // private functions: LootItemFunction[];
    // private holder: Holder<Object>;
    readonly paramSet: ContextKeySet;
    // private pools: LootPool[];
    // private randomSequence: Optional<Identifier>;
    fabric$setHolder(arg0: Holder<Object>): void;
    fill(container: ItemStack[], params: LootParams, optionalRandomSeed: number): void;
    // private getAvailableSlots(container: ItemStack[], random: RandomSource): number[];
    getParamSet(): ContextKeySet;
    // private getRandomItems(context: LootContext): ItemStack[];
    getRandomItems(context: LootContext, output: (param0: ItemStack) => void): void;
    getRandomItems(params: LootParams): ItemStack[];
    getRandomItems(params: LootParams, output: (param0: ItemStack) => void): void;
    getRandomItems(params: LootParams, optionalLootTableSeed: number): ItemStack[];
    getRandomItems(params: LootParams, optionalLootTableSeed: number, output: (param0: ItemStack) => void): void;
    getRandomItems(params: LootParams, randomSource: RandomSource): ItemStack[];
    getRandomItemsRaw(context: LootContext, output: (param0: ItemStack) => void): void;
    getRandomItemsRaw(params: LootParams, output: (param0: ItemStack) => void): void;
    // private getRandomItemsRaw$mixinextras$wrapped$30(arg0: LootContext, arg1: (param0: Object) => void): void;
    // private shuffleAndSplitItems(result: ItemStack[], availableSlots: number, random: RandomSource): void;
    validate(context: ValidationContext): void;
}