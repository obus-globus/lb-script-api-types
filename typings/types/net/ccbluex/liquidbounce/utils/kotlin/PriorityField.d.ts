import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Priority } from '../../../../../net/ccbluex/liquidbounce/utils/kotlin/Priority.d.ts'
/**
 * Returns the value of the set operation with the highest priority
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e73028e2d505b1129c66eaed525374f04a646764/src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/PriorityField.kt#L25 | src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/PriorityField.kt:25}
 */
export class PriorityField<T extends unknown> extends Object {
    constructor(value: T, currentPriority: Priority)
    // private currentPriority: Priority;
    readonly value: T;
    trySet(value: T, priority: Priority): void;
}