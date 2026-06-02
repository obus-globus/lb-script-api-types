import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ContextKeySet } from '../../../../../net/minecraft/util/context/ContextKeySet.d.ts'
import type { LootContext } from '../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { Validatable } from '../../../../../net/minecraft/world/level/storage/loot/Validatable.d.ts'
import type { ValidationContext } from '../../../../../net/minecraft/world/level/storage/loot/ValidationContext.d.ts'
import type { LootItemCondition } from '../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
export class ConditionalEffect<T extends Object | number | string | boolean> extends Record implements Validatable {
    static codec(parameffectCodec: Codec<Object>): Codec<Object>;
    static listValidatorForContext(paramparams: ContextKeySet): (param0: Object | null) => Object | null;
    static validate(paramcontext: ValidationContext, paramname: string, paramlist: (Object | null)[]): void;
    static validate(paramcontext: ValidationContext, paramname: string, paramoptional: Optional<Object>): void;
    static validate(paramcontext: ValidationContext, paramname: string, paramv: Validatable): void;
    static validate(paramcontext: ValidationContext, paramlist: (Object | null)[]): void;
    static validateReference(paramcontext: ValidationContext, paramid: ResourceKey<Object>): void;
    static validatorForContext(paramparams: ContextKeySet): (param0: Object | null) => Object | null;
    constructor(effect: T, requirements: Optional<LootItemCondition>)
    // private effect: T;
    // private requirements: Optional<LootItemCondition>;
    effect(): T;
    equals(o: Object | null): boolean;
    hashCode(): number;
    matches(context: LootContext): boolean;
    requirements(): Optional<LootItemCondition>;
    toString(): string;
    validate(context: ValidationContext): void;
}