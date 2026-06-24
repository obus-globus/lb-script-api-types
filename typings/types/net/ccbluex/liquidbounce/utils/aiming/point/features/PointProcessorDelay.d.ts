import type { EventListener } from '../../../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { PointInsideBox } from '../../../../../../../net/ccbluex/liquidbounce/utils/aiming/point/PointInsideBox.d.ts'
import type { PointProcessor } from '../../../../../../../net/ccbluex/liquidbounce/utils/aiming/point/features/PointProcessor.d.ts'
/**
 * Lazy Point allows you to set a threshold when the point is going to be updated.
 * If the new point is below this threshold, we return the current point instead
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/point/features/PointProcessorDelay.kt#L26 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/point/features/PointProcessorDelay.kt:26}
 */
export class PointProcessorDelay extends PointProcessor {
    constructor(parent: EventListener)
    // private currentDelay: number;
    // private currentPoint: PointInsideBox | null;
    // private delay: { start: number; endInclusive: number; step: number };
    // private /*not mapped: */ getDelay(): { start: number; endInclusive: number; step: number };
    process(point: PointInsideBox): PointInsideBox;
}