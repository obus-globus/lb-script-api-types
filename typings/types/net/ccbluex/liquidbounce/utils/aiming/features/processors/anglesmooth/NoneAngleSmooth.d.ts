import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ModeValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { RotationTarget } from '../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/RotationTarget.d.ts'
import type { Rotation } from '../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
import type { AngleSmooth } from '../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/features/processors/anglesmooth/AngleSmooth.d.ts'
/**
 * This is used by {@link net.ccbluex.liquidbounce.utils.aiming.features.processors.anglesmooth.impl.AiAngleSmooth}
 * to define an angle smooth mode that does not affect the current rotation.
 *
 * It essentially does nothing.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/features/processors/anglesmooth/NoneAngleSmooth.kt#L25 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/features/processors/anglesmooth/NoneAngleSmooth.kt:25}
 */
export class NoneAngleSmooth extends AngleSmooth {
    static Companion: Tagged$Companion;
    constructor(parent: ModeValueGroup<Object>)
    calculateTicks(currentRotation: Rotation, targetRotation: Rotation): number;
    process(rotationTarget: RotationTarget, currentRotation: Rotation, targetRotation: Rotation): Rotation;
}