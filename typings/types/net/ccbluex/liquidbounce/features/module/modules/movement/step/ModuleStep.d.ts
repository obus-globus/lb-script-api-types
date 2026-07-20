import type { Mode } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ClientModule } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * Step module
 *
 * Allows you to step up blocks.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/44f9e1b21249da9b34607f109f31011678e0f7ca/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/step/ModuleStep.kt#L54 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/step/ModuleStep.kt:54}
 */
export class ModuleStep extends ClientModule {
    static INSTANCE: ModuleStep;
    // private modes: ModeValueGroup<Mode>;
}