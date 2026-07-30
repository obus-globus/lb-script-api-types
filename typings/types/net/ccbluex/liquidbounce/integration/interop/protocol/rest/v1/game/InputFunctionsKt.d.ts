import type { Route } from '../../../../../../../../../io/ktor/server/routing/Route.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
export class InputFunctionsKt extends Object {
    static inputRoutes(self: Route): void;
    /**
     * Keeps track if we are currently typing in a text field
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/4ff494f7403bf0237d6e1392e6856c89deb3d311/src/main/kotlin/net/ccbluex/liquidbounce/integration/interop/protocol/rest/v1/game/InputFunctions.kt#L64 | src/main/kotlin/net/ccbluex/liquidbounce/integration/interop/protocol/rest/v1/game/InputFunctions.kt:64}
     */
    static isTyping(): boolean;
    static setTyping(paramarg0: boolean): void;
}