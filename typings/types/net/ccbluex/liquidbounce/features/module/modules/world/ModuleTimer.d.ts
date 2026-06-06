import type { Mode } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * Timer module
 *
 * Changes the speed of the entire game.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleTimer.kt#L39 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleTimer.kt:39}
 */
export class ModuleTimer extends ClientModule {
    static INSTANCE: ModuleTimer;
    readonly modes: ModeValueGroup<Mode>;
    onDisabled(): void;
}