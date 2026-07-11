import type { ClosedFloatingPointRange } from '../../../../../../../kotlin/ranges/ClosedFloatingPointRange.d.ts'
import type { ToggleableValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventListener } from '../../../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { GameTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { RotationTarget } from '../../../../../../../net/ccbluex/liquidbounce/utils/aiming/RotationTarget.d.ts'
import type { Rotation } from '../../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
import type { RotationProcessor } from '../../../../../../../net/ccbluex/liquidbounce/utils/aiming/features/processors/RotationProcessor.d.ts'
/**
 * The fail focus acts as fail rate, it will purposely miss the target on a certain rate.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/features/processors/FailRotationProcessor.kt#L36 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/features/processors/FailRotationProcessor.kt:36}
 */
export class FailRotationProcessor extends ToggleableValueGroup implements RotationProcessor {
    constructor(owner: EventListener | null)
    // private currentTransitionInDuration: number;
    readonly failFactor: number;
    // private failRate: number;
    // private /*not mapped: */ getFailRate(): number;
    // private gameTick: EventHook<GameTickEvent>;
    /*not mapped: */ isInFailState(): boolean;
    // private shiftRotation: Rotation;
    // private strengthHorizontal: ClosedFloatingPointRange<number>;
    // private /*not mapped: */ getStrengthHorizontal(): ClosedFloatingPointRange<number>;
    // private strengthVertical: ClosedFloatingPointRange<number>;
    // private /*not mapped: */ getStrengthVertical(): ClosedFloatingPointRange<number>;
    // private ticksElapsed: number;
    // private transitionInDuration: { start: number; endInclusive: number; step: number };
    // private /*not mapped: */ getTransitionInDuration(): { start: number; endInclusive: number; step: number };
    process(rotationTarget: RotationTarget, currentRotation: Rotation, targetRotation: Rotation): Rotation;
}