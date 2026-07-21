import type { EventListener } from '../../../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { PointInsideBox } from '../../../../../../../net/ccbluex/liquidbounce/utils/aiming/point/PointInsideBox.d.ts'
import type { PointProcessor } from '../../../../../../../net/ccbluex/liquidbounce/utils/aiming/point/features/PointProcessor.d.ts'
/**
 * Lazy Point allows you to set a threshold when the point is going to be updated.
 * If the new point is below this threshold, we return the current point instead
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e56f181853dc858654c9fc909afec417d274473d/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/point/features/PointProcessorDelay.kt#L30 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/point/features/PointProcessorDelay.kt:30}
 */
export class PointProcessorDelay extends PointProcessor {
    constructor(parent: EventListener)
    // private currentDelay: number;
    // private currentPoint: PointInsideBox | null;
    // private delay: { start: number; endInclusive: number; step: number };
    // private /*not mapped: */ getDelay(): { start: number; endInclusive: number; step: number };
    process(point: PointInsideBox): PointInsideBox;
}