import type { ClosedFloatingPointRange } from '../../../../../../../../../kotlin/ranges/ClosedFloatingPointRange.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { RotationTarget } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/RotationTarget.d.ts'
import type { Rotation } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
import type { FactorAngleSmooth } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/features/processors/anglesmooth/FactorAngleSmooth.d.ts'
import type { Vec2 } from '../../../../../../../../../net/minecraft/world/phys/Vec2.d.ts'
/**
 * @deprecated Interpolation mode combines Sigmoid and Bezier interpolation Use `InterpolationAngleSmooth`.
 */
export class SigmoidAngleSmooth extends FactorAngleSmooth {
    static Companion: Tagged$Companion;
    constructor(parent: ModeValueGroup<any>)
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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/features/processors/anglesmooth/impl/SigmoidAngleSmooth.kt#L47 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/features/processors/anglesmooth/impl/SigmoidAngleSmooth.kt:47}
     */
    calculateFactors(rotationTarget: RotationTarget | null, currentRotation: Rotation, targetRotation: Rotation): Vec2;
    // private computeFactor(rotationDifference: number, turnSpeed: number): number;
}