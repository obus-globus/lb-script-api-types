import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { RotationTarget } from '../../../../../../../net/ccbluex/liquidbounce/utils/aiming/RotationTarget.d.ts'
import type { Rotation } from '../../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
/**
 * Processes the rotation from the current to the target rotation.
 * This can be used to apply additional features to the rotation calculation.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e73028e2d505b1129c66eaed525374f04a646764/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/features/processors/RotationProcessor.kt#L28 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/features/processors/RotationProcessor.kt:28}
 */
export interface RotationProcessor extends Object{
    process(rotationTarget: RotationTarget, currentRotation: Rotation, targetRotation: Rotation): Rotation;
}