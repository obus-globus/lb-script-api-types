import type { Mode } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ClientModule } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * Step module
 *
 * Allows you to step up blocks.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/step/ModuleStep.kt#L48 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/step/ModuleStep.kt:48}
 */
export class ModuleStep extends ClientModule {
    static INSTANCE: ModuleStep;
    modes: ModeValueGroup<Mode>;
}