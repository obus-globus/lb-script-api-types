import type { Object } from '../../../../../../java/lang/Object.d.ts'
/**
 * Functional interface to determine if a browser should accept input
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/input/InputAcceptor.kt#L21 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/input/InputAcceptor.kt:21}
 */
export interface InputAcceptor extends Object{
    /**
     * Returns true if the browser should accept input events
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/input/InputAcceptor.kt#L25 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/input/InputAcceptor.kt:25}
     */
    acceptsInput(): boolean;
}