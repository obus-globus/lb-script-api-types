import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { ContextKey } from '../../../../../../../net/minecraft/util/context/ContextKey.d.ts'
import type { MobEffect } from '../../../../../../../net/minecraft/world/effect/MobEffect.d.ts'
import type { LootContextUser } from '../../../../../../../net/minecraft/world/level/storage/loot/LootContextUser.d.ts'
import type { ValidationContext } from '../../../../../../../net/minecraft/world/level/storage/loot/ValidationContext.d.ts'
import type { NumberProvider } from '../../../../../../../net/minecraft/world/level/storage/loot/providers/number/NumberProvider.d.ts'
export class SetStewEffectFunction$EffectEntry extends Record implements LootContextUser {
    static CODEC: Codec<SetStewEffectFunction$EffectEntry>;
    private constructor(effect: Holder<MobEffect>, duration: NumberProvider)
    // private duration: NumberProvider;
    // private effect: Holder<MobEffect>;
    duration(): NumberProvider;
    effect(): Holder<MobEffect>;
    equals(o: Object | null): boolean;
    getReferencedContextParams(): ContextKey<Object>[];
    hashCode(): number;
    toString(): string;
    validate(context: ValidationContext): void;
    validate(context: ValidationContext): void;
}