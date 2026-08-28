import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { HttpClient } from '../../../../../net/lenni0451/commons/httpclient/HttpClient.d.ts'
export class MinecraftAuthClientKt extends Object {
    /**
     * MinecraftAuth builds its requests on its own HTTP stack rather than OkHttp, so it cannot share
     * {@link HttpClient.defaultClient}. It does take the user agent, which is passed through here so that
     * account requests are identifiable the same way the rest of the client's traffic is.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/account/MinecraftAuthClient.kt#L31 | src/main/kotlin/net/ccbluex/liquidbounce/features/account/MinecraftAuthClient.kt:31}
     */
    static getMinecraftAuthHttpClient(): HttpClient;
}