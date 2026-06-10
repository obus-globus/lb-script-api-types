import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AdvancementProgress } from '../../../../net/minecraft/advancements/AdvancementProgress.d.ts'
export interface PlayerPredicate$AdvancementPredicate extends Predicate<AdvancementProgress>, Object {
    and(arg0: (param0: AdvancementProgress) => boolean): (param0: AdvancementProgress) => boolean;
    negate(): (param0: AdvancementProgress) => boolean;
    or(arg0: (param0: AdvancementProgress) => boolean): (param0: AdvancementProgress) => boolean;
}