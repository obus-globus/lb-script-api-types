import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MinMaxBounds$Ints } from '../../../../net/minecraft/advancements/predicates/MinMaxBounds$Ints.d.ts'
import type { MobEffectInstance } from '../../../../net/minecraft/world/effect/MobEffectInstance.d.ts'
export class MobEffectsPredicate$MobEffectInstancePredicate extends Record {
    static CODEC: Codec<MobEffectsPredicate$MobEffectInstancePredicate>;
    constructor()
    constructor(amplifier: MinMaxBounds$Ints, duration: MinMaxBounds$Ints, ambient: Optional<boolean>, visible: Optional<boolean>)
    // private ambient: Optional<boolean>;
    // private amplifier: MinMaxBounds$Ints;
    // private duration: MinMaxBounds$Ints;
    // private visible: Optional<boolean>;
    ambient(): Optional<boolean>;
    amplifier(): MinMaxBounds$Ints;
    duration(): MinMaxBounds$Ints;
    equals(o: Object | null): boolean;
    hashCode(): number;
    matches(instance: MobEffectInstance): boolean;
    toString(): string;
    visible(): Optional<boolean>;
}