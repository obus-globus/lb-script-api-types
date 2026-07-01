import type { ModeValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { RotationTarget } from '../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/RotationTarget.d.ts'
import type { Rotation } from '../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
import type { AngleSmooth } from '../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/features/processors/anglesmooth/AngleSmooth.d.ts'
import type { Vec2 } from '../../../../../../../../net/minecraft/world/phys/Vec2.d.ts'
export abstract class FactorAngleSmooth extends AngleSmooth {
    static Companion: Tagged$Companion;
    constructor(name: string, parent: ModeValueGroup<any>)
    /**
     * Calculate the factors for the rotation towards the target rotation.
     *
     * @param currentRotation The current rotation
     * @param targetRotation The target rotation
     * @returns horizontal speed, vertical speed
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/707b7339b27ee1da75cb769c96b0d9d292d0a8ad/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/features/processors/anglesmooth/FactorAngleSmooth.kt#L38 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/features/processors/anglesmooth/FactorAngleSmooth.kt:38}
     */
    calculateFactors(rotationTarget: RotationTarget | null, currentRotation: Rotation, targetRotation: Rotation): Vec2;
    calculateTicks(currentRotation: Rotation, targetRotation: Rotation): number;
    process(rotationTarget: RotationTarget, currentRotation: Rotation, targetRotation: Rotation): Rotation;
}