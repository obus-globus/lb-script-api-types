import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MinecraftServicesApi } from '../../../../../net/ccbluex/liquidbounce/authlib/mojangapi/service/MinecraftServicesApi.d.ts'
import type { MojangApi } from '../../../../../net/ccbluex/liquidbounce/authlib/mojangapi/service/MojangApi.d.ts'
import type { SessionServerApi } from '../../../../../net/ccbluex/liquidbounce/authlib/mojangapi/service/SessionServerApi.d.ts'
import type { XboxLiveApi } from '../../../../../net/ccbluex/liquidbounce/authlib/mojangapi/service/XboxLiveApi.d.ts'
import type { XstsApi } from '../../../../../net/ccbluex/liquidbounce/authlib/mojangapi/service/XstsApi.d.ts'
export class MojangApiClient extends Object {
    constructor(mojangApi: MojangApi, mcServicesApi: MinecraftServicesApi, sessionServerApi: SessionServerApi, xboxLiveApi: XboxLiveApi, xstsApi: XstsApi)
    readonly mcServicesApi: MinecraftServicesApi;
    readonly mojangApi: MojangApi;
    readonly sessionServerApi: SessionServerApi;
    readonly xboxLiveApi: XboxLiveApi;
    readonly xstsApi: XstsApi;
}