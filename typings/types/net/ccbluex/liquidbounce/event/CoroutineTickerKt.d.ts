import type { BooleanSupplier } from '../../../../java/util/function/BooleanSupplier.d.ts'
import type { IntPredicate } from '../../../../java/util/function/IntPredicate.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
export class CoroutineTickerKt extends Object {
    /**
     * Ticks until the fixed amount of ticks ran out or the {@link breakLoop} says to continue.
     *
     * @returns if we passed the time of {@link ticks} without breaking the loop.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/event/CoroutineTicker.kt#L139 | src/main/kotlin/net/ccbluex/liquidbounce/event/CoroutineTicker.kt:139}
     */
    static tickConditional(paramarg0: number, paramarg1: () => boolean, paramarg2: Continuation<Object>): Object;
    /**
     * Ticks with {@link stopAt} until it returns true.
     * The elapsed ticks (starting from 1) will be passed to {@link stopAt}.
     *
     * Resumes on Render thread.
     *
     * Example:
     * - `tickUntil { true }` --> `1`
     * - `tickUntil { it >= 2 }` --> `2`
     *
     * @param stopAt the callback of elapsed ticks. Will be called on game tick.
     * @returns the times of {@link stopAt} to be executed (equals to elapsed ticks)
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/event/CoroutineTicker.kt#L107 | src/main/kotlin/net/ccbluex/liquidbounce/event/CoroutineTicker.kt:107}
     */
    static tickUntil(paramarg0: (param0: number) => boolean, paramarg1: Continuation<Object>): Object;
    /**
     * Waits a fixed amount of seconds on tick level before continuing.
     * Re-entry at the game tick.
     *
     * Note: When TPS is not 20, this won't be actual `seconds`.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/event/CoroutineTicker.kt#L167 | src/main/kotlin/net/ccbluex/liquidbounce/event/CoroutineTicker.kt:167}
     */
    static waitSeconds(paramarg0: number, paramarg1: Continuation<Object>): Object;
    /**
     * Waits a fixed amount of ticks before continuing.
     * Re-entry at the game tick.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/event/CoroutineTicker.kt#L152 | src/main/kotlin/net/ccbluex/liquidbounce/event/CoroutineTicker.kt:152}
     */
    static waitTicks(paramarg0: number, paramarg1: Continuation<Object>): Object;
}