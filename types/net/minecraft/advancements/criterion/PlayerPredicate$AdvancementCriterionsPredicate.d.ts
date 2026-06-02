import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AdvancementProgress } from '../../../../net/minecraft/advancements/AdvancementProgress.d.ts'
import type { PlayerPredicate$AdvancementPredicate } from '../../../../net/minecraft/advancements/criterion/PlayerPredicate$AdvancementPredicate.d.ts'
export class PlayerPredicate$AdvancementCriterionsPredicate extends Record implements PlayerPredicate$AdvancementPredicate {
    static CODEC: Codec<PlayerPredicate$AdvancementCriterionsPredicate>;
    static CODEC: Codec<PlayerPredicate$AdvancementPredicate>;
    private constructor(criterions: Object2BooleanMap<string>)
    // private criterions: Object2BooleanMap<string>;
    criterions(): Object2BooleanMap<string>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    test(progress: AdvancementProgress): boolean;
    toString(): string;
}