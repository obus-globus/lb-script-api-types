import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleNoSwing$HideFor } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/ModuleNoSwing$HideFor.d.ts'
/**
 * NoSwing module
 *
 * Disables the swing effect.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a0e57b28307a88c68b5bf7b52a54201b8a15cec8/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleNoSwing.kt#L30 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleNoSwing.kt:30}
 */
export class ModuleNoSwing extends ClientModule {
    static INSTANCE: ModuleNoSwing;
    // private hideFor: ModuleNoSwing$HideFor[];
    // private /*not mapped: */ getHideFor(): ModuleNoSwing$HideFor[];
    shouldHideForClient(): boolean;
    shouldHideForServer(): boolean;
}