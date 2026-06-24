import type { ToggleableValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventListener } from '../../../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { RotationTarget } from '../../../../../../../net/ccbluex/liquidbounce/utils/aiming/RotationTarget.d.ts'
import type { Rotation } from '../../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
import type { RotationProcessor } from '../../../../../../../net/ccbluex/liquidbounce/utils/aiming/features/processors/RotationProcessor.d.ts'
/**
 * Short stop temporarily halts aiming at the target based on a specified rate.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/features/processors/ShortStopRotationProcessor.kt#L27 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/features/processors/ShortStopRotationProcessor.kt:27}
 */
export class ShortStopRotationProcessor extends ToggleableValueGroup implements RotationProcessor {
    constructor(owner: EventListener | null)
    // private currentTransitionInDuration: number;
    // private rate: number;
    // private /*not mapped: */ getRate(): number;
    // private stopDuration: { start: number; endInclusive: number; step: number };
    // private /*not mapped: */ getStopDuration(): { start: number; endInclusive: number; step: number };
    // private ticksElapsed: number;
    process(rotationTarget: RotationTarget, currentRotation: Rotation, targetRotation: Rotation): Rotation;
}