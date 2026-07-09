import type { Config } from '../../../../../net/ccbluex/liquidbounce/config/types/Config.d.ts'
/**
 * Global Manager
 *
 * Holds settings that apply across the whole client.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a70a63864fcba3b841f36d8b1ab0c71ea03e76f8/src/main/kotlin/net/ccbluex/liquidbounce/features/global/GlobalManager.kt#L32 | src/main/kotlin/net/ccbluex/liquidbounce/features/global/GlobalManager.kt:32}
 */
export class GlobalManager extends Config {
    static INSTANCE: GlobalManager;
}