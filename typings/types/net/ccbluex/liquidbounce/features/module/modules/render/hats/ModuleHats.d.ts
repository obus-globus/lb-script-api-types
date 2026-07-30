import type { ModeValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ClientModule } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { HatsMode } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/hats/HatsMode.d.ts'
/**
 * @author minecrrrr
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/4ff494f7403bf0237d6e1392e6856c89deb3d311/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/hats/ModuleHats.kt#L36 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/hats/ModuleHats.kt:36}
 */
export class ModuleHats extends ClientModule {
    static INSTANCE: ModuleHats;
    readonly modes: ModeValueGroup<HatsMode>;
    getModes(): ModeValueGroup<HatsMode>;
}