import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { MinecraftServicesApi } from '../../../../../../net/ccbluex/liquidbounce/api/thirdparty/mojang/service/MinecraftServicesApi.d.ts'
import type { MojangApi } from '../../../../../../net/ccbluex/liquidbounce/api/thirdparty/mojang/service/MojangApi.d.ts'
import type { SessionServerApi } from '../../../../../../net/ccbluex/liquidbounce/api/thirdparty/mojang/service/SessionServerApi.d.ts'
/**
 * The Microsoft/Xbox Live/XSTS token chain is not part of this client - MinecraftAuth implements it,
 * see {@link net.ccbluex.liquidbounce.features.account.MicrosoftAccount}.
 *
 * ```kotlin
 * val client = MojangApiClient.Builder().httpClient(HttpClient.defaultClient).build()
 * ```
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/6442c02e147c8fd9657f94f1554f63e786c2a3c0/src/main/kotlin/net/ccbluex/liquidbounce/api/thirdparty/mojang/MojangApiClient.kt#L42 | src/main/kotlin/net/ccbluex/liquidbounce/api/thirdparty/mojang/MojangApiClient.kt:42}
 */
export class MojangApiClient extends Object {
    constructor(mojangApi: MojangApi, mcServicesApi: MinecraftServicesApi, sessionServerApi: SessionServerApi)
    readonly mcServicesApi: MinecraftServicesApi;
    readonly mojangApi: MojangApi;
    readonly sessionServerApi: SessionServerApi;
}