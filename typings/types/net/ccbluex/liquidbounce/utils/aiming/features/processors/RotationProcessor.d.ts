import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { RotationTarget } from '../../../../../../../net/ccbluex/liquidbounce/utils/aiming/RotationTarget.d.ts'
import type { Rotation } from '../../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
/**
 * Processes the rotation from the current to the target rotation.
 * This can be used to apply additional features to the rotation calculation.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/f52f78665697bbb9fc5260ebedd8725061837d27/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/features/processors/RotationProcessor.kt#L28 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/features/processors/RotationProcessor.kt:28}
 */
export interface RotationProcessor extends Object{
    process(rotationTarget: RotationTarget, currentRotation: Rotation, targetRotation: Rotation): Rotation;
}