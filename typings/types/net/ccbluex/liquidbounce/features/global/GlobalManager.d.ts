import type { Config } from '../../../../../net/ccbluex/liquidbounce/config/types/Config.d.ts'
/**
 * Global Manager
 *
 * Holds settings that apply across the whole client.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cf742eb17a33041e582f6f30822aab3e8450edf8/src/main/kotlin/net/ccbluex/liquidbounce/features/global/GlobalManager.kt#L32 | src/main/kotlin/net/ccbluex/liquidbounce/features/global/GlobalManager.kt:32}
 */
export class GlobalManager extends Config {
    static INSTANCE: GlobalManager;
}