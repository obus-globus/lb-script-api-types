import type { Object } from '../../../../../../java/lang/Object.d.ts'
/**
 * Functional interface to determine if a browser should accept input
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2727616ee96ec8c4ceda97bebdd601f050a6856e/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/input/InputAcceptor.kt#L24 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/input/InputAcceptor.kt:24}
 */
export interface InputAcceptor extends Object{
    /**
     * Returns true if the browser should accept input events
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2727616ee96ec8c4ceda97bebdd601f050a6856e/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/input/InputAcceptor.kt#L28 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/input/InputAcceptor.kt:28}
     */
    acceptsInput(): boolean;
}