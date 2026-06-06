import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Node } from '../../../../../../../../../net/ccbluex/netty/http/rest/Node.d.ts'
export class InputFunctionsKt extends Object {
    static inputRoutes(routing: Node): void;
    /**
     * Keeps track if we are currently typing in a text field
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/integration/interop/protocol/rest/v1/game/InputFunctions.kt#L56 | src/main/kotlin/net/ccbluex/liquidbounce/integration/interop/protocol/rest/v1/game/InputFunctions.kt:56}
     */
    static isTyping(): boolean;
    static setTyping(paramarg0: boolean): void;
}