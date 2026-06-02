import type { Config } from '../../../../../net/ccbluex/liquidbounce/config/types/Config.d.ts'
/**
 * Global Manager
 *
 * Holds settings that apply across the whole client.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/global/GlobalManager.kt#L27 | src/main/kotlin/net/ccbluex/liquidbounce/features/global/GlobalManager.kt:27}
 */
export class GlobalManager extends Config {
    static INSTANCE: GlobalManager;
}