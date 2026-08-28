import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RangedValue } from '../../../../../net/ccbluex/liquidbounce/config/types/RangedValue.d.ts'
import type { RangedValueProvider } from '../../../../../net/ccbluex/liquidbounce/utils/client/RangedValueProvider.d.ts'
import type { TargetPriority } from '../../../../../net/ccbluex/liquidbounce/utils/combat/TargetPriority.d.ts'
import type { TargetSelector } from '../../../../../net/ccbluex/liquidbounce/utils/combat/TargetSelector.d.ts'
import type { LivingEntity } from '../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
/**
 * A target tracker to choose the best enemy to attack
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/utils/combat/TargetTracker.kt#L49 | src/main/kotlin/net/ccbluex/liquidbounce/utils/combat/TargetTracker.kt:49}
 */
export class TargetTracker extends TargetSelector {
    constructor(defaultPriority: TargetPriority, range: RangedValue<Object>)
    constructor(defaultPriority: TargetPriority, rangeValue: RangedValueProvider)
    target: LivingEntity | null;
    reset(): void;
    select<R extends unknown>(evaluator: (param0: LivingEntity) => R): R | null;
    selectFirst(predicate: ((param0: LivingEntity) => boolean) | null): LivingEntity | null;
    validate(predicate: ((param0: LivingEntity) => boolean) | null): void;
    validate(entity: LivingEntity): boolean;
}