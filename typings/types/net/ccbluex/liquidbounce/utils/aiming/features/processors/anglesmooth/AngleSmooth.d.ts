import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Mode } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { Rotation } from '../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
import type { RotationProcessor } from '../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/features/processors/RotationProcessor.d.ts'
/**
 * An {@link AngleSmooth}'er, but as choice
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/features/processors/anglesmooth/AngleSmooth.kt#L26 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/features/processors/anglesmooth/AngleSmooth.kt:26}
 */
export abstract class AngleSmooth extends Mode implements RotationProcessor {
    static Companion: Tagged$Companion;
    constructor(name: string, parent: ModeValueGroup<Object>, aliases: string[])
    readonly parent: ModeValueGroup<Object>;
    calculateTicks(currentRotation: Rotation, targetRotation: Rotation): number;
}