import type { Gson } from '../../../../../com/google/gson/Gson.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class GsonInstanceKt extends Object {
    /**
     * This GSON instance is used for serializing objects as accessible JSON which means it is READ-ONLY (!)
     * and often comes with an easier syntax to use in other programming languages like JavaScript.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/config/gson/GsonInstance.kt#L123 | src/main/kotlin/net/ccbluex/liquidbounce/config/gson/GsonInstance.kt:123}
     */
    static getAccessibleInteropGson(): Gson;
    /**
     * A GSON instance which is used for local files.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/config/gson/GsonInstance.kt#L92 | src/main/kotlin/net/ccbluex/liquidbounce/config/gson/GsonInstance.kt:92}
     */
    static getFileGson(): Gson;
    /**
     * This GSON instance is used for interop communication.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/config/gson/GsonInstance.kt#L113 | src/main/kotlin/net/ccbluex/liquidbounce/config/gson/GsonInstance.kt:113}
     */
    static getInteropGson(): Gson;
    /**
     * A GSON instance which is used for JSON that is distributed to other players.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/config/gson/GsonInstance.kt#L102 | src/main/kotlin/net/ccbluex/liquidbounce/config/gson/GsonInstance.kt:102}
     */
    static getPublicGson(): Gson;
}