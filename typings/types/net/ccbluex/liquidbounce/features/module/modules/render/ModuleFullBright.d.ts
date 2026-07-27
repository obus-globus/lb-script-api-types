import type { Mode } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * A full bright module
 *
 * Allows you to see in the dark.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/c86714198f6c981b97c9965ca188b8b8598816e4/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleFullBright.kt#L35 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleFullBright.kt:35}
 */
export class ModuleFullBright extends ClientModule {
    static INSTANCE: ModuleFullBright;
    // private modes: ModeValueGroup<Mode>;
}