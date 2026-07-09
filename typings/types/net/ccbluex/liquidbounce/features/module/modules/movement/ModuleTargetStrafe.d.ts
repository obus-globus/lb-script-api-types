import type { RangedValue } from '../../../../../../../net/ccbluex/liquidbounce/config/types/RangedValue.d.ts'
import type { Value } from '../../../../../../../net/ccbluex/liquidbounce/config/types/Value.d.ts'
import type { Mode } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleTargetStrafe$Requirements } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/ModuleTargetStrafe$Requirements.d.ts'
import type { ModuleTargetStrafe$StrafePlan } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/ModuleTargetStrafe$StrafePlan.d.ts'
import type { TargetSelector } from '../../../../../../../net/ccbluex/liquidbounce/utils/combat/TargetSelector.d.ts'
import type { DirectionalInput } from '../../../../../../../net/ccbluex/liquidbounce/utils/movement/DirectionalInput.d.ts'
import type { LivingEntity } from '../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Vec3 } from '../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
/**
 * Target Strafe Module
 *
 * Handles strafing around a locked target.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a70a63864fcba3b841f36d8b1ab0c71ea03e76f8/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleTargetStrafe.kt#L69 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleTargetStrafe.kt:69}
 */
export class ModuleTargetStrafe extends ClientModule {
    static INSTANCE: ModuleTargetStrafe;
    // private direction: number;
    // private /*not mapped: */ getFollowRange(): number;
    // private followRangeValue: Value<number>;
    // private modes: ModeValueGroup<Mode>;
    // private range: RangedValue<number>;
    // private renderState: any;
    // private requirements: ModuleTargetStrafe$Requirements[];
    // private /*not mapped: */ getRequirements(): ModuleTargetStrafe$Requirements[];
    // private /*not mapped: */ getRequirementsMet(): boolean;
    // private targetSelector: TargetSelector;
    // private computeDirectionVec(strafeYaw: number, distance: number, speed: number, range: number, direction: number): Vec3;
    // private computeStrafePlan(speed: number, controlInput: DirectionalInput): ModuleTargetStrafe$StrafePlan | null;
    // private firstTarget(): LivingEntity | null;
}