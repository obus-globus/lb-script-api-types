import type { Mode } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ClientModule } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * Step module
 *
 * Allows you to step up blocks.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/707b7339b27ee1da75cb769c96b0d9d292d0a8ad/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/step/ModuleStep.kt#L54 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/step/ModuleStep.kt:54}
 */
export class ModuleStep extends ClientModule {
    static INSTANCE: ModuleStep;
    // private modes: ModeValueGroup<Mode>;
}