import type { Object } from '../../../../../../java/lang/Object.d.ts'
/**
 * Functional interface to determine if a browser should accept input
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/input/InputAcceptor.kt#L21 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/input/InputAcceptor.kt:21}
 */
export interface InputAcceptor extends Object{
    /**
     * Returns true if the browser should accept input events
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/input/InputAcceptor.kt#L25 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/input/InputAcceptor.kt:25}
     */
    acceptsInput(): boolean;
}