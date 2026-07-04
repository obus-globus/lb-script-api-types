import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleNoSwing$HideFor } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/ModuleNoSwing$HideFor.d.ts'
/**
 * NoSwing module
 *
 * Disables the swing effect.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e73028e2d505b1129c66eaed525374f04a646764/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleNoSwing.kt#L30 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleNoSwing.kt:30}
 */
export class ModuleNoSwing extends ClientModule {
    static INSTANCE: ModuleNoSwing;
    // private hideFor: ModuleNoSwing$HideFor[];
    // private /*not mapped: */ getHideFor(): ModuleNoSwing$HideFor[];
    shouldHideForClient(): boolean;
    shouldHideForServer(): boolean;
}