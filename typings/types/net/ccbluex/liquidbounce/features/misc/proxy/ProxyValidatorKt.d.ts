import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Result } from '../../../../../../kotlin/Result.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
import type { Proxy } from '../../../../../../net/ccbluex/liquidbounce/features/misc/proxy/Proxy.d.ts'
export class ProxyValidatorKt extends Object {
    /**
     * Checks if a proxy is valid and can be used for Minecraft. This will use network resources to check the proxy,
     * as well as update the ip information of the proxy.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a847f7e000c4d4be9b75e414d34b2481d6f08e17/src/main/kotlin/net/ccbluex/liquidbounce/features/misc/proxy/ProxyValidator.kt#L83 | src/main/kotlin/net/ccbluex/liquidbounce/features/misc/proxy/ProxyValidator.kt:83}
     */
    static check(self: Proxy, success: (param0: Proxy) => void, failure: (param0: Throwable) => void): Result<void>;
}