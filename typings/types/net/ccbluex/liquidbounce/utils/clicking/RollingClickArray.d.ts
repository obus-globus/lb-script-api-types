import type { Object } from '../../../../../java/lang/Object.d.ts'
/**
 * A circular buffer that maintains double the cycle length and regenerates the second half
 * when reaching the midpoint
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/utils/clicking/RollingClickArray.kt#L22 | src/main/kotlin/net/ccbluex/liquidbounce/utils/clicking/RollingClickArray.kt:22}
 */
export class RollingClickArray extends Object {
    constructor(cycleLength: number, iterations: number)
    // private array: number[];
    /*not mapped: */ getArray$net_ccbluex_liquidbounce(): number[];
    // private cycleLength: number;
    readonly head: number;
    readonly iterations: number;
    // private /*not mapped: */ getSize(): number;
    /**
     * Advances the head position and returns true if halfway point reached
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/utils/clicking/RollingClickArray.kt#L52 | src/main/kotlin/net/ccbluex/liquidbounce/utils/clicking/RollingClickArray.kt:52}
     */
    advance(amount: number): boolean;
    /**
     * Clears the array
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/utils/clicking/RollingClickArray.kt#L60 | src/main/kotlin/net/ccbluex/liquidbounce/utils/clicking/RollingClickArray.kt:60}
     */
    clear(): void;
    /**
     * Gets value at relative index from current head
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/utils/clicking/RollingClickArray.kt#L36 | src/main/kotlin/net/ccbluex/liquidbounce/utils/clicking/RollingClickArray.kt:36}
     */
    get(relativeIndex: number): number;
    push(cycleArray: number[]): void;
    /**
     * Sets value at relative index from current head
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/utils/clicking/RollingClickArray.kt#L44 | src/main/kotlin/net/ccbluex/liquidbounce/utils/clicking/RollingClickArray.kt:44}
     */
    set(relativeIndex: number, value: number): void;
}