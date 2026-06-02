import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { ClosedFloatingPointRange } from '../../../../../../../../../kotlin/ranges/ClosedFloatingPointRange.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { RotationTarget } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/RotationTarget.d.ts'
import type { Rotation } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
import type { FactorAngleSmooth } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/features/processors/anglesmooth/FactorAngleSmooth.d.ts'
import type { Vec2 } from '../../../../../../../../../net/minecraft/world/phys/Vec2.d.ts'
export class SigmoidAngleSmooth extends FactorAngleSmooth {
    static Companion: Tagged$Companion;
    constructor(parent: ModeValueGroup<Object>)
    // private horizontalTurnSpeed: ClosedFloatingPointRange<number>;
    // private /*not mapped: */ getHorizontalTurnSpeed(): ClosedFloatingPointRange<number>;
    // private midpoint: number;
    // private /*not mapped: */ getMidpoint(): number;
    // private steepness: number;
    // private /*not mapped: */ getSteepness(): number;
    // private verticalTurnSpeed: ClosedFloatingPointRange<number>;
    // private /*not mapped: */ getVerticalTurnSpeed(): ClosedFloatingPointRange<number>;
    /**
     * Calculate the factors for the rotation towards the target rotation.
     *
     * @param currentRotation The current rotation
     * @param targetRotation The target rotation
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/features/processors/anglesmooth/impl/SigmoidAngleSmooth.kt#L41 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/features/processors/anglesmooth/impl/SigmoidAngleSmooth.kt:41}
     */
    calculateFactors(rotationTarget: RotationTarget | null, currentRotation: Rotation, targetRotation: Rotation): Vec2;
    // private computeFactor(rotationDifference: number, turnSpeed: number): number;
}