import type { Config } from '../../../../../net/ccbluex/liquidbounce/config/types/Config.d.ts'
/**
 * Global Manager
 *
 * Holds settings that apply across the whole client.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/44f9e1b21249da9b34607f109f31011678e0f7ca/src/main/kotlin/net/ccbluex/liquidbounce/features/global/GlobalManager.kt#L32 | src/main/kotlin/net/ccbluex/liquidbounce/features/global/GlobalManager.kt:32}
 */
export class GlobalManager extends Config {
    static INSTANCE: GlobalManager;
}