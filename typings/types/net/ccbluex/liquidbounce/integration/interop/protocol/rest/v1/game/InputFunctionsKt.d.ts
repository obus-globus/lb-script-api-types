import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Node } from '../../../../../../../../../net/ccbluex/netty/http/rest/Node.d.ts'
export class InputFunctionsKt extends Object {
    static inputRoutes(routing: Node): void;
    /**
     * Keeps track if we are currently typing in a text field
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/26472f4415000921e37ac654ef9e544e7d3750c9/src/main/kotlin/net/ccbluex/liquidbounce/integration/interop/protocol/rest/v1/game/InputFunctions.kt#L59 | src/main/kotlin/net/ccbluex/liquidbounce/integration/interop/protocol/rest/v1/game/InputFunctions.kt:59}
     */
    static isTyping(): boolean;
    static setTyping(paramarg0: boolean): void;
}