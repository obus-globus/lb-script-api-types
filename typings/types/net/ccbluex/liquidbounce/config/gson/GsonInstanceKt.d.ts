import type { Gson } from '../../../../../com/google/gson/Gson.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class GsonInstanceKt extends Object {
    /**
     * This GSON instance is used for serializing objects as accessible JSON which means it is READ-ONLY (!)
     * and often comes with an easier syntax to use in other programming languages like JavaScript.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/6f54ba6705b9d98f759a29be39e5aa97e877cc92/src/main/kotlin/net/ccbluex/liquidbounce/config/gson/GsonInstance.kt#L127 | src/main/kotlin/net/ccbluex/liquidbounce/config/gson/GsonInstance.kt:127}
     */
    static getAccessibleInteropGson(): Gson;
    /**
     * A GSON instance which is used for local files.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/6f54ba6705b9d98f759a29be39e5aa97e877cc92/src/main/kotlin/net/ccbluex/liquidbounce/config/gson/GsonInstance.kt#L95 | src/main/kotlin/net/ccbluex/liquidbounce/config/gson/GsonInstance.kt:95}
     */
    static getFileGson(): Gson;
    /**
     * This GSON instance is used for interop communication.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/6f54ba6705b9d98f759a29be39e5aa97e877cc92/src/main/kotlin/net/ccbluex/liquidbounce/config/gson/GsonInstance.kt#L116 | src/main/kotlin/net/ccbluex/liquidbounce/config/gson/GsonInstance.kt:116}
     */
    static getInteropGson(): Gson;
    /**
     * A GSON instance which is used for JSON that is distributed to other players.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/6f54ba6705b9d98f759a29be39e5aa97e877cc92/src/main/kotlin/net/ccbluex/liquidbounce/config/gson/GsonInstance.kt#L105 | src/main/kotlin/net/ccbluex/liquidbounce/config/gson/GsonInstance.kt:105}
     */
    static getPublicGson(): Gson;
}