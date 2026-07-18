import type { Mode } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * Timer module
 *
 * Changes the speed of the entire game.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleTimer.kt#L44 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleTimer.kt:44}
 */
export class ModuleTimer extends ClientModule {
    static INSTANCE: ModuleTimer;
    readonly modes: ModeValueGroup<Mode>;
    onDisabled(): void;
}