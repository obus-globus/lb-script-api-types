import type { Object } from '../../../../../java/lang/Object.d.ts'
/**
 * A circular buffer that maintains double the cycle length and regenerates the second half
 * when reaching the midpoint
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/44f9e1b21249da9b34607f109f31011678e0f7ca/src/main/kotlin/net/ccbluex/liquidbounce/utils/clicking/RollingClickArray.kt#L26 | src/main/kotlin/net/ccbluex/liquidbounce/utils/clicking/RollingClickArray.kt:26}
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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/44f9e1b21249da9b34607f109f31011678e0f7ca/src/main/kotlin/net/ccbluex/liquidbounce/utils/clicking/RollingClickArray.kt#L55 | src/main/kotlin/net/ccbluex/liquidbounce/utils/clicking/RollingClickArray.kt:55}
     */
    advance(amount: number): boolean;
    /**
     * Clears the array
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/44f9e1b21249da9b34607f109f31011678e0f7ca/src/main/kotlin/net/ccbluex/liquidbounce/utils/clicking/RollingClickArray.kt#L63 | src/main/kotlin/net/ccbluex/liquidbounce/utils/clicking/RollingClickArray.kt:63}
     */
    clear(): void;
    /**
     * Gets value at relative index from current head
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/44f9e1b21249da9b34607f109f31011678e0f7ca/src/main/kotlin/net/ccbluex/liquidbounce/utils/clicking/RollingClickArray.kt#L39 | src/main/kotlin/net/ccbluex/liquidbounce/utils/clicking/RollingClickArray.kt:39}
     */
    get(relativeIndex: number): number;
    push(cycleArray: number[]): void;
    /**
     * Sets value at relative index from current head
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/44f9e1b21249da9b34607f109f31011678e0f7ca/src/main/kotlin/net/ccbluex/liquidbounce/utils/clicking/RollingClickArray.kt#L47 | src/main/kotlin/net/ccbluex/liquidbounce/utils/clicking/RollingClickArray.kt:47}
     */
    set(relativeIndex: number, value: number): void;
}