import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Priority } from '../../../../../net/ccbluex/liquidbounce/utils/kotlin/Priority.d.ts'
/**
 * Returns the value of the set operation with the highest priority
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/707b7339b27ee1da75cb769c96b0d9d292d0a8ad/src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/PriorityField.kt#L25 | src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/PriorityField.kt:25}
 */
export class PriorityField<T extends unknown> extends Object {
    constructor(value: T, currentPriority: Priority)
    // private currentPriority: Priority;
    readonly value: T;
    trySet(value: T, priority: Priority): void;
}