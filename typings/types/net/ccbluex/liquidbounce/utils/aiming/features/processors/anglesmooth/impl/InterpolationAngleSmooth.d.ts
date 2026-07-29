import type { ModeValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { RotationTarget } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/RotationTarget.d.ts'
import type { Rotation } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
import type { FactorAngleSmooth } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/features/processors/anglesmooth/FactorAngleSmooth.d.ts'
import type { Vec2 } from '../../../../../../../../../net/minecraft/world/phys/Vec2.d.ts'
export class InterpolationAngleSmooth extends FactorAngleSmooth {
    static Companion: Tagged$Companion;
    constructor(parent: ModeValueGroup<any>, horizontalSpeed: { start: number; endInclusive: number; step: number }, verticalSpeed: { start: number; endInclusive: number; step: number }, directionChangeFactor: { start: number; endInclusive: number; step: number })
    // private directionChangeFactor: { start: number; endInclusive: number; step: number };
    // private /*not mapped: */ getDirectionChangeFactor(): { start: number; endInclusive: number; step: number };
    // private horizontalSpeed: { start: number; endInclusive: number; step: number };
    // private /*not mapped: */ getHorizontalSpeed(): { start: number; endInclusive: number; step: number };
    // private midpoint: number;
    // private /*not mapped: */ getMidpoint(): number;
    // private verticalSpeed: { start: number; endInclusive: number; step: number };
    // private /*not mapped: */ getVerticalSpeed(): { start: number; endInclusive: number; step: number };
    // private bezier(start: number, end: number, t: number): number;
    // private calculateFactor(name: string, rotationDifference: number, turnSpeed: number, directionChange: number): number;
    /**
     * Calculate the factors for the rotation towards the target rotation.
     *
     * @param currentRotation The current rotation
     * @param targetRotation The target rotation
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f48456b711a70c664e76abb64e3e2ccc9cc2c34/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/features/processors/anglesmooth/impl/InterpolationAngleSmooth.kt#L60 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/features/processors/anglesmooth/impl/InterpolationAngleSmooth.kt:60}
     */
    calculateFactors(rotationTarget: RotationTarget | null, currentRotation: Rotation, targetRotation: Rotation): Vec2;
    // private sigmoid(t: number): number;
}