import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AdvancementProgress } from '../../../../net/minecraft/advancements/AdvancementProgress.d.ts'
export interface PlayerPredicate$AdvancementPredicate extends Predicate<AdvancementProgress>, Object{
    and(arg0: (param0: T) => kotlin.Boolean): (param0: T) => kotlin.Boolean;
    negate(): (param0: T) => kotlin.Boolean;
    or(arg0: (param0: T) => kotlin.Boolean): (param0: T) => kotlin.Boolean;
}