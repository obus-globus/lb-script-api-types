import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Proxy } from '../../../../../../net/ccbluex/liquidbounce/features/misc/proxy/Proxy.d.ts'
export class ProxyValidatorKt extends Object {
    /**
     * Checks if a proxy is valid and can be used for Minecraft. This will use network resources to check the proxy,
     * as well as update the ip information of the proxy.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/misc/proxy/ProxyValidator.kt#L79 | src/main/kotlin/net/ccbluex/liquidbounce/features/misc/proxy/ProxyValidator.kt:79}
     */
    static check(proxy: Proxy, success: (param0: Object | null) => void, failure: (param0: Object | null) => void): Object;
}