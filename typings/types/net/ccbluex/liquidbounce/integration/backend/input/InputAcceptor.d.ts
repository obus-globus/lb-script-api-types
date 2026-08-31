import type { Object } from '../../../../../../java/lang/Object.d.ts'
/**
 * Functional interface to determine if a browser should accept input
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e67fdf9b70131f478c5894cf9de1f2d4aa7a95ce/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/input/InputAcceptor.kt#L24 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/input/InputAcceptor.kt:24}
 */
export interface InputAcceptor extends Object{
    /**
     * Returns true if the browser should accept input events
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e67fdf9b70131f478c5894cf9de1f2d4aa7a95ce/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/input/InputAcceptor.kt#L28 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/input/InputAcceptor.kt:28}
     */
    acceptsInput(): boolean;
}