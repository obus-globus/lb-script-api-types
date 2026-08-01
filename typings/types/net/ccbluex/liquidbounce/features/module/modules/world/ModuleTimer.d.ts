import type { Mode } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * Timer module
 *
 * Changes the speed of the entire game.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a459e42039d5ec52f278233774c8880408bcf2a6/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleTimer.kt#L44 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleTimer.kt:44}
 */
export class ModuleTimer extends ClientModule {
    static INSTANCE: ModuleTimer;
    readonly modes: ModeValueGroup<Mode>;
    getModes(): ModeValueGroup<Mode>;
    onDisabled(): void;
}