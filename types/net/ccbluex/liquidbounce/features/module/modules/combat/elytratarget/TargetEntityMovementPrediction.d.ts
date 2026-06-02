import type { ClosedFloatingPointRange } from '../../../../../../../../kotlin/ranges/ClosedFloatingPointRange.d.ts'
import type { ToggleableValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { PredictMode } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/elytratarget/PredictMode.d.ts'
import type { LivingEntity } from '../../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Vec3 } from '../../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class TargetEntityMovementPrediction extends ToggleableValueGroup {
    static INSTANCE: TargetEntityMovementPrediction;
    // private glidingOnly: boolean;
    // private /*not mapped: */ getGlidingOnly(): boolean;
    // private mode: PredictMode;
    // private /*not mapped: */ getMode(): PredictMode;
    // private multiplier: ClosedFloatingPointRange<number>;
    // private /*not mapped: */ getMultiplier(): ClosedFloatingPointRange<number>;
    predictPosition(target: LivingEntity, targetPosition: Vec3): Vec3;
}