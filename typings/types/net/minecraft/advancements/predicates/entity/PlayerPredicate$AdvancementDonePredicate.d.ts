import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AdvancementProgress } from '../../../../../net/minecraft/advancements/AdvancementProgress.d.ts'
import type { PlayerPredicate$AdvancementPredicate } from '../../../../../net/minecraft/advancements/predicates/entity/PlayerPredicate$AdvancementPredicate.d.ts'
export class PlayerPredicate$AdvancementDonePredicate extends Record implements PlayerPredicate$AdvancementPredicate {
    static CODEC: Codec<PlayerPredicate$AdvancementDonePredicate>;
    static CODEC: Codec<PlayerPredicate$AdvancementPredicate>;
    private constructor(state: boolean)
    // private state: boolean;
    equals(o: Object | null): boolean;
    hashCode(): number;
    state(): boolean;
    test(progress: AdvancementProgress): boolean;
    toString(): string;
}