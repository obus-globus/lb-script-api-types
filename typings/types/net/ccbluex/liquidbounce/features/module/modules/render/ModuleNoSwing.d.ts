import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleNoSwing$HideFor } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/ModuleNoSwing$HideFor.d.ts'
/**
 * NoSwing module
 *
 * Disables the swing effect.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleNoSwing.kt#L25 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleNoSwing.kt:25}
 */
export class ModuleNoSwing extends ClientModule {
    static INSTANCE: ModuleNoSwing;
    // private hideFor: ModuleNoSwing$HideFor[];
    // private /*not mapped: */ getHideFor(): ModuleNoSwing$HideFor[];
    shouldHideForClient(): boolean;
    shouldHideForServer(): boolean;
}