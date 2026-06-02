import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { BiFunction } from '../../../../../../java/util/function/BiFunction.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { LootPoolAccessor } from '../../../../../../net/fabricmc/fabric/mixin/loot/LootPoolAccessor.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ContextKeySet } from '../../../../../../net/minecraft/util/context/ContextKeySet.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { LootContext } from '../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { LootPool$Builder } from '../../../../../../net/minecraft/world/level/storage/loot/LootPool$Builder.d.ts'
import type { Validatable } from '../../../../../../net/minecraft/world/level/storage/loot/Validatable.d.ts'
import type { ValidationContext } from '../../../../../../net/minecraft/world/level/storage/loot/ValidationContext.d.ts'
import type { LootPoolEntryContainer } from '../../../../../../net/minecraft/world/level/storage/loot/entries/LootPoolEntryContainer.d.ts'
import type { LootItemFunction } from '../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemFunction.d.ts'
import type { LootItemCondition } from '../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
import type { NumberProvider } from '../../../../../../net/minecraft/world/level/storage/loot/providers/number/NumberProvider.d.ts'
export class LootPool extends Object implements LootPoolAccessor, Validatable {
    static CODEC: Codec<LootPool>;
    static listValidatorForContext(paramparams: ContextKeySet): (param0: Object | null) => Object | null;
    static lootPool(): LootPool$Builder;
    static validate(paramcontext: ValidationContext, paramname: string, paramlist: (Object | null)[]): void;
    static validate(paramcontext: ValidationContext, paramname: string, paramoptional: Optional<Object>): void;
    static validate(paramcontext: ValidationContext, paramname: string, paramv: Validatable): void;
    static validate(paramcontext: ValidationContext, paramlist: (Object | null)[]): void;
    static validateReference(paramcontext: ValidationContext, paramid: ResourceKey<Object>): void;
    static validatorForContext(paramparams: ContextKeySet): (param0: Object | null) => Object | null;
    private constructor(entries: LootPoolEntryContainer[], conditions: LootItemCondition[], functions: LootItemFunction[], rolls: NumberProvider, bonusRolls: NumberProvider)
    bonusRolls: NumberProvider;
    // private compositeCondition: (param0: LootContext) => kotlin.Boolean;
    // private compositeFunction: (param0: ItemStack, param1: LootContext) => ItemStack;
    conditions: LootItemCondition[];
    entries: LootPoolEntryContainer[];
    functions: LootItemFunction[];
    rolls: NumberProvider;
    // private addRandomItem(result: (param0: ItemStack) => void, context: LootContext): void;
    addRandomItems(result: (param0: ItemStack) => void, context: LootContext): void;
    validate(output: ValidationContext): void;
}