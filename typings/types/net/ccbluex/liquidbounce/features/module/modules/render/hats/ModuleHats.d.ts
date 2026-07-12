import type { ModeValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ClientModule } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { HatsMode } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/hats/HatsMode.d.ts'
/**
 * @author minecrrrr
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cd6fab2c64d4683279fb8734248e80c1cfb2b0f2/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/hats/ModuleHats.kt#L36 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/hats/ModuleHats.kt:36}
 */
export class ModuleHats extends ClientModule {
    static INSTANCE: ModuleHats;
    readonly modes: ModeValueGroup<HatsMode>;
}