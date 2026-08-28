import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { RotationTarget } from '../../../../../../../net/ccbluex/liquidbounce/utils/aiming/RotationTarget.d.ts'
import type { Rotation } from '../../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
/**
 * Processes the rotation from the current to the target rotation.
 * This can be used to apply additional features to the rotation calculation.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/features/processors/RotationProcessor.kt#L28 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/features/processors/RotationProcessor.kt:28}
 */
export interface RotationProcessor extends Object{
    process(rotationTarget: RotationTarget, currentRotation: Rotation, targetRotation: Rotation): Rotation;
}