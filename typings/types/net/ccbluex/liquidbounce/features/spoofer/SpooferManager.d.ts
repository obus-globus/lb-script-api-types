import type { Config } from '../../../../../net/ccbluex/liquidbounce/config/types/Config.d.ts'
/**
 * Spoofer Manager
 *
 * Includes all spoofer features shown in the Multiplayer GUI.
 * Spoofers will usually allow fixes or spoof data sent to the server
 * to e.g., trick the server into thinking you are connecting from
 * another client brand.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/features/spoofer/SpooferManager.kt#L32 | src/main/kotlin/net/ccbluex/liquidbounce/features/spoofer/SpooferManager.kt:32}
 */
export class SpooferManager extends Config {
    static INSTANCE: SpooferManager;
    readonly usesExploitPreventer: boolean;
    // private registerExpModules(): void;
}