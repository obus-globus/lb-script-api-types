import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Proxy } from '../../../../../../net/ccbluex/liquidbounce/features/misc/proxy/Proxy.d.ts'
import type { Proxy$Credentials } from '../../../../../../net/ccbluex/liquidbounce/features/misc/proxy/Proxy$Credentials.d.ts'
export class Proxy$Companion extends Object {
    readonly NONE: Proxy;
    credentials(username: string, password: string): Proxy$Credentials | null;
    /**
     * Parse a proxy string into a {@link Proxy} object.
     *
     * Detects the proxy type based on the prefix of the string.
     * - `http://` for HTTP proxy
     * - `socks5://` or `socks5h://` for SOCKS5 proxy
     *
     * Accepts the following formats:
     * - `hostname:port:username:password`
     * - `username:password:hostname:port`
     * - `username:password@hostname:port`
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/misc/proxy/Proxy.kt#L66 | src/main/kotlin/net/ccbluex/liquidbounce/features/misc/proxy/Proxy.kt:66}
     */
    parse(text: string): Proxy;
}