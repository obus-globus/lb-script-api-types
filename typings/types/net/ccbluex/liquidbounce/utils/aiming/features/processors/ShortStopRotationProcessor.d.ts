import type { ToggleableValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventListener } from '../../../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { RotationTarget } from '../../../../../../../net/ccbluex/liquidbounce/utils/aiming/RotationTarget.d.ts'
import type { Rotation } from '../../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
import type { RotationProcessor } from '../../../../../../../net/ccbluex/liquidbounce/utils/aiming/features/processors/RotationProcessor.d.ts'
/**
 * Short stop temporarily halts aiming at the target based on a specified rate.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/6f54ba6705b9d98f759a29be39e5aa97e877cc92/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/features/processors/ShortStopRotationProcessor.kt#L30 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/features/processors/ShortStopRotationProcessor.kt:30}
 */
export class ShortStopRotationProcessor extends ToggleableValueGroup implements RotationProcessor {
    constructor(owner?: EventListener | null)
    // private currentTransitionInDuration: number;
    // private rate: number;
    // private /*not mapped: */ getRate(): number;
    // private stopDuration: { start: number; endInclusive: number; step: number };
    // private /*not mapped: */ getStopDuration(): { start: number; endInclusive: number; step: number };
    // private ticksElapsed: number;
    process(rotationTarget: RotationTarget, currentRotation: Rotation, targetRotation: Rotation): Rotation;
}