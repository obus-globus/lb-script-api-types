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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/api/thirdparty/mojang/MojangApiClient.kt#L42 | src/main/kotlin/net/ccbluex/liquidbounce/api/thirdparty/mojang/MojangApiClient.kt:42}
 */
export class MojangApiClient extends Object {
    constructor(mojangApi: MojangApi, mcServicesApi: MinecraftServicesApi, sessionServerApi: SessionServerApi)
    readonly mcServicesApi: MinecraftServicesApi;
    readonly mojangApi: MojangApi;
    readonly sessionServerApi: SessionServerApi;
}