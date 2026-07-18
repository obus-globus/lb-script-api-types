import type { Config } from '../../../../../net/ccbluex/liquidbounce/config/types/Config.d.ts'
/**
 * Global Manager
 *
 * Holds settings that apply across the whole client.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/features/global/GlobalManager.kt#L32 | src/main/kotlin/net/ccbluex/liquidbounce/features/global/GlobalManager.kt:32}
 */
export class GlobalManager extends Config {
    static INSTANCE: GlobalManager;
}