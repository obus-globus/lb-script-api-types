import type { Config } from '../../../../../net/ccbluex/liquidbounce/config/types/Config.d.ts'
/**
 * Spoofer Manager
 *
 * Includes all spoofer features shown in the Multiplayer GUI.
 * Spoofers will usually allow fixes or spoof data sent to the server
 * to e.g., trick the server into thinking you are connecting from
 * another client brand.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/features/spoofer/SpooferManager.kt#L32 | src/main/kotlin/net/ccbluex/liquidbounce/features/spoofer/SpooferManager.kt:32}
 */
export class SpooferManager extends Config {
    static INSTANCE: SpooferManager;
    readonly usesExploitPreventer: boolean;
    // private registerExpModules(): void;
}