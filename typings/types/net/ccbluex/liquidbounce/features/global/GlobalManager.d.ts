import type { Config } from '../../../../../net/ccbluex/liquidbounce/config/types/Config.d.ts'
/**
 * Global Manager
 *
 * Holds settings that apply across the whole client.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/global/GlobalManager.kt#L27 | src/main/kotlin/net/ccbluex/liquidbounce/features/global/GlobalManager.kt:27}
 */
export class GlobalManager extends Config {
    static INSTANCE: GlobalManager;
}