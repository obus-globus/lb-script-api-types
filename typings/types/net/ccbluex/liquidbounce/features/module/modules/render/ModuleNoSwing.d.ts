import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleNoSwing$HideFor } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/ModuleNoSwing$HideFor.d.ts'
/**
 * NoSwing module
 *
 * Disables the swing effect.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a847f7e000c4d4be9b75e414d34b2481d6f08e17/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleNoSwing.kt#L30 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleNoSwing.kt:30}
 */
export class ModuleNoSwing extends ClientModule {
    static INSTANCE: ModuleNoSwing;
    // private hideFor: ModuleNoSwing$HideFor[];
    // private /*not mapped: */ getHideFor(): ModuleNoSwing$HideFor[];
    shouldHideForClient(): boolean;
    shouldHideForServer(): boolean;
}