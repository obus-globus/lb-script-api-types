import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Priority } from '../../../../../net/ccbluex/liquidbounce/utils/kotlin/Priority.d.ts'
/**
 * Returns the value of the set operation with the highest priority
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e1d0801ab2d0c9362f03f42cbfac7b36a2a05b6a/src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/PriorityField.kt#L25 | src/main/kotlin/net/ccbluex/liquidbounce/utils/kotlin/PriorityField.kt:25}
 */
export class PriorityField<T extends unknown> extends Object {
    constructor(value: T, currentPriority: Priority)
    // private currentPriority: Priority;
    readonly value: T;
    trySet(value: T, priority: Priority): void;
}