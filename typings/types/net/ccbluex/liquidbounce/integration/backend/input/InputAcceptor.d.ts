import type { Object } from '../../../../../../java/lang/Object.d.ts'
/**
 * Functional interface to determine if a browser should accept input
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/553a3caf47807e98e69ea3ce0e17bcd9e52eeb71/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/input/InputAcceptor.kt#L24 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/input/InputAcceptor.kt:24}
 */
export interface InputAcceptor extends Object{
    /**
     * Returns true if the browser should accept input events
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/553a3caf47807e98e69ea3ce0e17bcd9e52eeb71/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/input/InputAcceptor.kt#L28 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/input/InputAcceptor.kt:28}
     */
    acceptsInput(): boolean;
}