import type { Mode } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { DirectionalInput } from '../../../../../../../net/ccbluex/liquidbounce/utils/movement/DirectionalInput.d.ts'
/**
 * Sneak module
 *
 * Automatically sneaks all the time.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/553a3caf47807e98e69ea3ce0e17bcd9e52eeb71/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleSneak.kt#L50 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleSneak.kt:50}
 */
export class ModuleSneak extends ClientModule {
    static INSTANCE: ModuleSneak;
    // private modes: ModeValueGroup<Mode>;
    // private notDuringMove: boolean;
    // private /*not mapped: */ getNotDuringMove(): boolean;
    // private isOnMagmaBlock(directionalInput: DirectionalInput): boolean;
}