import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RangedValue } from '../../../../../net/ccbluex/liquidbounce/config/types/RangedValue.d.ts'
import type { ValueGroup } from '../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
import type { RangedValueProvider } from '../../../../../net/ccbluex/liquidbounce/utils/client/RangedValueProvider.d.ts'
import type { TargetPriority } from '../../../../../net/ccbluex/liquidbounce/utils/combat/TargetPriority.d.ts'
import type { LivingEntity } from '../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
export class TargetSelector extends ValueGroup {
    constructor(defaultPriority: TargetPriority, range: RangedValue<Object>)
    constructor(defaultPriority: TargetPriority, rangeValue: RangedValueProvider)
    readonly closestSquaredEnemyDistance: number;
    // private comparator: (param0: LivingEntity, param1: LivingEntity) => number;
    // private fov: number;
    // private /*not mapped: */ getFov(): number;
    // private hurtTime: number;
    // private /*not mapped: */ getHurtTime(): number;
    readonly maxRange: number;
    // private priority: TargetPriority[];
    // private /*not mapped: */ getPriority(): TargetPriority[];
    // private range: RangedValue<Object> | null;
    /**
     * Counts available targets.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/6f54ba6705b9d98f759a29be39e5aa97e877cc92/src/main/kotlin/net/ccbluex/liquidbounce/utils/combat/TargetTracker.kt#L120 | src/main/kotlin/net/ccbluex/liquidbounce/utils/combat/TargetTracker.kt:120}
     */
    countTargets(): number;
    /**
     * Update should be called to always pick the best target out of the current world context
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/6f54ba6705b9d98f759a29be39e5aa97e877cc92/src/main/kotlin/net/ccbluex/liquidbounce/utils/combat/TargetTracker.kt#L127 | src/main/kotlin/net/ccbluex/liquidbounce/utils/combat/TargetTracker.kt:127}
     */
    targets(): LivingEntity[];
    validate(entity: LivingEntity): boolean;
    // private validateRange(entity: LivingEntity): boolean;
}