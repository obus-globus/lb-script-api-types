import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Result } from '../../../../../../kotlin/Result.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
import type { Proxy } from '../../../../../../net/ccbluex/liquidbounce/features/misc/proxy/Proxy.d.ts'
export class ProxyValidatorKt extends Object {
    /**
     * Checks if a proxy is valid and can be used for Minecraft. This will use network resources to check the proxy,
     * as well as update the ip information of the proxy.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/6442c02e147c8fd9657f94f1554f63e786c2a3c0/src/main/kotlin/net/ccbluex/liquidbounce/features/misc/proxy/ProxyValidator.kt#L83 | src/main/kotlin/net/ccbluex/liquidbounce/features/misc/proxy/ProxyValidator.kt:83}
     */
    static check(self: Proxy, success: (param0: Proxy) => void, failure: (param0: Throwable) => void): Result<void>;
}