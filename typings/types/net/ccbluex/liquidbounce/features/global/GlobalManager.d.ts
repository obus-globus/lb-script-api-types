import type { Config } from '../../../../../net/ccbluex/liquidbounce/config/types/Config.d.ts'
/**
 * Global Manager
 *
 * Holds settings that apply across the whole client.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/global/GlobalManager.kt#L27 | src/main/kotlin/net/ccbluex/liquidbounce/features/global/GlobalManager.kt:27}
 */
export class GlobalManager extends Config {
    static INSTANCE: GlobalManager;
}