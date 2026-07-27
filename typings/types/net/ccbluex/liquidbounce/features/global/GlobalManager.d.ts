import type { Config } from '../../../../../net/ccbluex/liquidbounce/config/types/Config.d.ts'
/**
 * Global Manager
 *
 * Holds settings that apply across the whole client.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/c86714198f6c981b97c9965ca188b8b8598816e4/src/main/kotlin/net/ccbluex/liquidbounce/features/global/GlobalManager.kt#L32 | src/main/kotlin/net/ccbluex/liquidbounce/features/global/GlobalManager.kt:32}
 */
export class GlobalManager extends Config {
    static INSTANCE: GlobalManager;
}