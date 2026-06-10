import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { DataResult } from '../../../../../com/mojang/serialization/DataResult.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { DataComponentExactPredicate } from '../../../../../net/minecraft/core/component/DataComponentExactPredicate.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ContextKeySet } from '../../../../../net/minecraft/util/context/ContextKeySet.d.ts'
import type { Item } from '../../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemCost } from '../../../../../net/minecraft/world/item/trading/ItemCost.d.ts'
import type { ItemLike } from '../../../../../net/minecraft/world/level/ItemLike.d.ts'
import type { LootContext } from '../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { Validatable } from '../../../../../net/minecraft/world/level/storage/loot/Validatable.d.ts'
import type { ValidationContext } from '../../../../../net/minecraft/world/level/storage/loot/ValidationContext.d.ts'
import type { NumberProvider } from '../../../../../net/minecraft/world/level/storage/loot/providers/number/NumberProvider.d.ts'
export class TradeCost extends Record implements Validatable {
    static CODEC: Codec<TradeCost>;
    static listValidatorForContext(paramparams: ContextKeySet): (param0: (Validatable | null)[]) => DataResult<(Validatable | null)[]>;
    static validate(paramcontext: ValidationContext, paramname: string, paramlist: Validatable[]): void;
    static validate(paramcontext: ValidationContext, paramname: string, paramoptional: Optional<Validatable>): void;
    static validate(paramcontext: ValidationContext, paramname: string, paramv: Validatable): void;
    static validate(paramcontext: ValidationContext, paramlist: Validatable[]): void;
    static validateReference(paramcontext: ValidationContext, paramid: ResourceKey<Validatable>): void;
    static validatorForContext(paramparams: ContextKeySet): (param0: Validatable | null) => DataResult<Validatable>;
    constructor(item: Holder<Item>, count: NumberProvider, components: DataComponentExactPredicate)
    constructor(item: ItemLike, count: number)
    constructor(item: ItemLike, count: NumberProvider)
    // private components: DataComponentExactPredicate;
    // private count: NumberProvider;
    // private item: Holder<Item>;
    components(): DataComponentExactPredicate;
    count(): NumberProvider;
    equals(o: Object | null): boolean;
    hashCode(): number;
    item(): Holder<Item>;
    toItemCost(lootContext: LootContext, additionalCost: number): ItemCost;
    toString(): string;
    validate(context: ValidationContext): void;
}