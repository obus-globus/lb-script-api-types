import type { Mode } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { DirectionalInput } from '../../../../../../../net/ccbluex/liquidbounce/utils/movement/DirectionalInput.d.ts'
/**
 * Sneak module
 *
 * Automatically sneaks all the time.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleSneak.kt#L45 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleSneak.kt:45}
 */
export class ModuleSneak extends ClientModule {
    static INSTANCE: ModuleSneak;
    // private modes: ModeValueGroup<Mode>;
    // private notDuringMove: boolean;
    // private /*not mapped: */ getNotDuringMove(): boolean;
    // private isOnMagmaBlock(directionalInput: DirectionalInput): boolean;
}