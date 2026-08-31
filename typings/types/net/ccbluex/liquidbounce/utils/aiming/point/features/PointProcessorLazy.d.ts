import type { ClosedFloatingPointRange } from '../../../../../../../kotlin/ranges/ClosedFloatingPointRange.d.ts'
import type { EventListener } from '../../../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { PointInsideBox } from '../../../../../../../net/ccbluex/liquidbounce/utils/aiming/point/PointInsideBox.d.ts'
import type { PointProcessor } from '../../../../../../../net/ccbluex/liquidbounce/utils/aiming/point/features/PointProcessor.d.ts'
/**
 * Lazy Point allows you to set a threshold when the point is going to be updated.
 * If the new point is below this threshold, we return the current point instead
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e67fdf9b70131f478c5894cf9de1f2d4aa7a95ce/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/point/features/PointProcessorLazy.kt#L32 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/point/features/PointProcessorLazy.kt:32}
 */
export class PointProcessorLazy extends PointProcessor {
    constructor(parent: EventListener)
    // private currentPoint: PointInsideBox | null;
    // private currentThreshold: number;
    // private threshold: ClosedFloatingPointRange<number>;
    // private /*not mapped: */ getThreshold(): ClosedFloatingPointRange<number>;
    process(point: PointInsideBox): PointInsideBox;
}