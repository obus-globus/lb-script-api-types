import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Node } from '../../../../../../../../../net/ccbluex/netty/http/rest/Node.d.ts'
export class InputFunctionsKt extends Object {
    static inputRoutes(routing: Node): void;
    /**
     * Keeps track if we are currently typing in a text field
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/integration/interop/protocol/rest/v1/game/InputFunctions.kt#L59 | src/main/kotlin/net/ccbluex/liquidbounce/integration/interop/protocol/rest/v1/game/InputFunctions.kt:59}
     */
    static isTyping(): boolean;
    static setTyping(paramarg0: boolean): void;
}