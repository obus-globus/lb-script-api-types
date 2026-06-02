import type { BaseApi } from '../../../../../net/ccbluex/liquidbounce/api/core/BaseApi.d.ts'
import type { IpInfoApi$IpData } from '../../../../../net/ccbluex/liquidbounce/api/thirdparty/IpInfoApi$IpData.d.ts'
/**
 * An implementation for the ipinfo.io API including
 * keeping track of the current IP address.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/api/thirdparty/IpInfoApi.kt#L26 | src/main/kotlin/net/ccbluex/liquidbounce/api/thirdparty/IpInfoApi.kt:26}
 */
export class IpInfoApi extends BaseApi {
    static INSTANCE: IpInfoApi;
    /**
     * Information about the current IP address of the user. This can change depending on if the
     * user is using a proxy through the Proxy Manager.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/api/thirdparty/IpInfoApi.kt#L32 | src/main/kotlin/net/ccbluex/liquidbounce/api/thirdparty/IpInfoApi.kt:32}
     */
    readonly current: IpInfoApi$IpData | null;
    /**
     * Information about the current IP address of the user. This does not change during use.
     *
     * We are only interested in the {@link IpData.country} for displaying the country in the GUI,
     * which is unlikely to change, even when changing the IP address. This could happen when using a VPN,
     * but it's not that important to keep this updated all the time.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/api/thirdparty/IpInfoApi.kt#L39 | src/main/kotlin/net/ccbluex/liquidbounce/api/thirdparty/IpInfoApi.kt:39}
     */
    readonly original: IpInfoApi$IpData | null;
    own(): IpInfoApi$IpData;
    someoneElse(ip: string): IpInfoApi$IpData;
}