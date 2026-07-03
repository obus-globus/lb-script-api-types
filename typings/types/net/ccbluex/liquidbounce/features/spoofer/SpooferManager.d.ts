import type { Config } from '../../../../../net/ccbluex/liquidbounce/config/types/Config.d.ts'
/**
 * Spoofer Manager
 *
 * Includes all spoofer features shown in the Multiplayer GUI.
 * Spoofers will usually allow fixes or spoof data sent to the server
 * to e.g., trick the server into thinking you are connecting from
 * another client brand.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/0a21163cac7d7e3736ae038e79bf85f09f24d875/src/main/kotlin/net/ccbluex/liquidbounce/features/spoofer/SpooferManager.kt#L32 | src/main/kotlin/net/ccbluex/liquidbounce/features/spoofer/SpooferManager.kt:32}
 */
export class SpooferManager extends Config {
    static INSTANCE: SpooferManager;
    readonly usesExploitPreventer: boolean;
    // private registerExpModules(): void;
}