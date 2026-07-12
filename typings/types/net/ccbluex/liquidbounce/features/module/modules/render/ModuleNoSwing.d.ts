import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleNoSwing$HideFor } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/ModuleNoSwing$HideFor.d.ts'
/**
 * NoSwing module
 *
 * Disables the swing effect.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cd6fab2c64d4683279fb8734248e80c1cfb2b0f2/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleNoSwing.kt#L30 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleNoSwing.kt:30}
 */
export class ModuleNoSwing extends ClientModule {
    static INSTANCE: ModuleNoSwing;
    // private hideFor: ModuleNoSwing$HideFor[];
    // private /*not mapped: */ getHideFor(): ModuleNoSwing$HideFor[];
    shouldHideForClient(): boolean;
    shouldHideForServer(): boolean;
}