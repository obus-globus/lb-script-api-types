import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EnchantmentTarget } from '../../../../../net/minecraft/world/item/enchantment/EnchantmentTarget.d.ts'
import type { LootContext } from '../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { Validatable } from '../../../../../net/minecraft/world/level/storage/loot/Validatable.d.ts'
import type { ValidationContext } from '../../../../../net/minecraft/world/level/storage/loot/ValidationContext.d.ts'
import type { LootItemCondition } from '../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
export class TargetedConditionalEffect<T extends unknown> extends Record implements Validatable {
    static codec<S extends unknown>(parameffectCodec: Codec<S>): Codec<TargetedConditionalEffect<S>>;
    static equipmentDropsCodec<S extends unknown>(parameffectCodec: Codec<S>): Codec<TargetedConditionalEffect<S>>;
    constructor(enchanted: EnchantmentTarget, affected: EnchantmentTarget, effect: T, requirements: Optional<LootItemCondition>)
    // private affected: EnchantmentTarget;
    // private effect: T;
    // private enchanted: EnchantmentTarget;
    // private requirements: Optional<LootItemCondition>;
    affected(): EnchantmentTarget;
    effect(): T;
    enchanted(): EnchantmentTarget;
    equals(o: Object | null): boolean;
    hashCode(): number;
    matches(context: LootContext): boolean;
    requirements(): Optional<LootItemCondition>;
    toString(): string;
    validate(context: ValidationContext): void;
}