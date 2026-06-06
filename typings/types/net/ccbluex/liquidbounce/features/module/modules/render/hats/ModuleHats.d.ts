import type { ModeValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ClientModule } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { HatsMode } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/hats/HatsMode.d.ts'
/**
 * @author minecrrrr
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/hats/ModuleHats.kt#L33 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/hats/ModuleHats.kt:33}
 */
export class ModuleHats extends ClientModule {
    static INSTANCE: ModuleHats;
    readonly modes: ModeValueGroup<HatsMode>;
}