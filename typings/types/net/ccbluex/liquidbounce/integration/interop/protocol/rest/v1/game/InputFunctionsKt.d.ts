import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Node } from '../../../../../../../../../net/ccbluex/netty/http/rest/Node.d.ts'
export class InputFunctionsKt extends Object {
    static inputRoutes(routing: Node): void;
    /**
     * Keeps track if we are currently typing in a text field
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/integration/interop/protocol/rest/v1/game/InputFunctions.kt#L56 | src/main/kotlin/net/ccbluex/liquidbounce/integration/interop/protocol/rest/v1/game/InputFunctions.kt:56}
     */
    static isTyping(): boolean;
    static setTyping(paramarg0: boolean): void;
}