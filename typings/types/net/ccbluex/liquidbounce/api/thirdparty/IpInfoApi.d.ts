import type { Continuation } from '../../../../../kotlin/coroutines/Continuation.d.ts'
import type { BaseApi } from '../../../../../net/ccbluex/liquidbounce/api/core/BaseApi.d.ts'
import type { IpInfoApi$IpData } from '../../../../../net/ccbluex/liquidbounce/api/thirdparty/IpInfoApi$IpData.d.ts'
/**
 * An implementation for the ipinfo.io API including
 * keeping track of the current IP address.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a459e42039d5ec52f278233774c8880408bcf2a6/src/main/kotlin/net/ccbluex/liquidbounce/api/thirdparty/IpInfoApi.kt#L30 | src/main/kotlin/net/ccbluex/liquidbounce/api/thirdparty/IpInfoApi.kt:30}
 */
export class IpInfoApi extends BaseApi {
    static INSTANCE: IpInfoApi;
    /**
     * Information about the current IP address of the user. This can change depending on if the
     * user is using a proxy through the Proxy Manager.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a459e42039d5ec52f278233774c8880408bcf2a6/src/main/kotlin/net/ccbluex/liquidbounce/api/thirdparty/IpInfoApi.kt#L36 | src/main/kotlin/net/ccbluex/liquidbounce/api/thirdparty/IpInfoApi.kt:36}
     */
    readonly current: IpInfoApi$IpData | null;
    /**
     * Information about the current IP address of the user. This does not change during use.
     *
     * We are only interested in the {@link IpData.country} for displaying the country in the GUI,
     * which is unlikely to change, even when changing the IP address. This could happen when using a VPN,
     * but it's not that important to keep this updated all the time.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a459e42039d5ec52f278233774c8880408bcf2a6/src/main/kotlin/net/ccbluex/liquidbounce/api/thirdparty/IpInfoApi.kt#L46 | src/main/kotlin/net/ccbluex/liquidbounce/api/thirdparty/IpInfoApi.kt:46}
     */
    readonly original: IpInfoApi$IpData | null;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    own($completion: Continuation<IpInfoApi$IpData>): any;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    someoneElse(ip: string, $completion: Continuation<IpInfoApi$IpData>): any;
}